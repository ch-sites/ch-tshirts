import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';

import { Observable } from 'rxjs/Observable';
import { switchMap } from "rxjs/operators";

import { User, UserImpl, UserService } from '../../../core';
import { Role } from '../../../core/model/role';
import { RoleService } from '../../../core/service/role';

@Component({
    selector: 'edit-user',
    templateUrl: './edit-user.html',
    styleUrls: ['./edit-user.scss']
})
export class EditUserComponent implements OnInit {
    private user$: Observable<User>;
    private editedUser: User;
    private roles$: Observable<Role[]>;
    private userForm: FormGroup;
    private buttonAction = 'Create';

    constructor(
        private formBuilder: FormBuilder,
        private userService: UserService,
        private roleService: RoleService,
        private activatedRoute: ActivatedRoute,
        private router: Router
    ) {}

    ngOnInit() {
        this.userForm = this.formBuilder.group(
            {
                lastName: ['', Validators.required],
                firstName: ['', Validators.required],
                displayName: ['', Validators.required],
                email: ['', Validators.required],
                photoURL: ['', Validators.required],
                roles: ['', Validators.required],
                id: ['']
            }
        );

        this.user$ = this.activatedRoute.paramMap
        .pipe(
            switchMap((params: ParamMap) => {
                let id = params.get('id');

                if (id != '0') {
                    return this.userService.get(id);
                } else {
                    return Observable.create();
                }
            })
        );

        this.user$.subscribe(user => {
            if (user) {
                this.userForm.patchValue({
                    lastName: user.lastName,
                    firstName: user.firstName,
                    displayName: user.displayName,
                    email: user.email,
                    photoURL: user.photoURL,
                    roles: user.roles,
                    id: user._id
                });
    
                this.editedUser = user;
                this.buttonAction = 'Update';
            }
        });

        this.roles$ = this.roleService.list();
    }

    private createUser(userModel: any) {
        this.roleService.get(userModel.roles).subscribe((role) => {
            let user = new UserImpl({...userModel, role: role});

            this.userService.create(user);
        });
    }

    private updateUser(userModel: any) {
        this.roleService.get(userModel.roles).subscribe((role) => {
            let user = new UserImpl({_id: userModel.id, ...userModel, roles: [role]});

            this.userService.update(user);
        });
    }

    private onSubmit() {
        let userModel = this.userForm.value;

        if (this.editedUser) {
            this.updateUser(userModel);
        } else {
            this.createUser(userModel);
        }

        this.router.navigate(['../']);
    }
}
