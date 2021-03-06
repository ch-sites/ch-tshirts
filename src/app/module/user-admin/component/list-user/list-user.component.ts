import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';
import { User, UserService } from '../../../core';

@Component({
  selector: 'list-user',
  templateUrl: './list-user.html',
  styleUrls: ['./list-user.scss']
})
export class ListUserComponent implements OnInit {
    private users$: Observable<User[]>;
    private selected = [];
    private columns = [
        { name: 'First Name' },
        { name: 'LastName ' },
        { name: 'DisplayName' },
        { name: 'Email' }
    ];

    @Output() onSelect = new EventEmitter<User>();

    constructor(private userService: UserService) {
        this.users$ = this.userService.list();
    }

    ngOnInit() {
    }

    private onSelectUser({ selected }) {
        this.onSelect.emit(selected[0]);
    }

}
