import { Component, OnInit } from '@angular/core';
import { User, UserImpl, UserService } from 'zs-core';
import { Observable } from 'rxjs/Observable';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { switchMap } from "rxjs/operators";

@Component({
    selector: 'edit-user',
    templateUrl: './edit-user.html',
    styleUrls: ['./edit-user.scss']
})
export class EditUserComponent implements OnInit {
    private user$: Observable<User>;
    private editedUser: User;
    private id = 400;

    private userForm: FormGroup;

    private buttonAction = 'Create';

    constructor(
        private formBuilder: FormBuilder,
        private userService: UserService,
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
            }
        );

        this.user$ = this.activatedRoute.paramMap
        .pipe(
            switchMap((params: ParamMap) => {
                let id = params.get('id');

                return this.userService.get(id);
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
                    roles: user.roles
                });
    
                this.editedUser = user;
                this.buttonAction = 'Update';
            }
        });
    }

    private createUser(userModel: any) {
        this.id += 10;
        let user = new UserImpl({
            lastName: userModel.lastName,
            firstName: userModel.firstName,
            displayName: userModel.displayName,
            email: userModel.email,
            photoURL: userModel.photoURL,
            roles: userModel.roles,
            _id: this.id.toString()
        });

        this.userService.create(user);
    }

    private updateUser(userModel: any) {
        let user = new UserImpl({
            lastName: userModel.lastName,
            firstName: userModel.firstName,
            displayName: userModel.displayName,
            email: userModel.email,
            photoURL: userModel.photoURL,
            roles: userModel.roles,
            _id: userModel._id
        });

        this.userService.update(user);
    }

    private onSubmit() {
        let userModel = this.userForm.value;

        if (this.editedUser) {
            this.updateUser(userModel);
        } else {
            this.createUser(userModel);
        }

        this.router.navigate(['/admin-users']);
    }
}
