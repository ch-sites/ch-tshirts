import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { User, UserService } from 'zs-core';

@Component({
  selector: 'list-user',
  templateUrl: './list-user.html',
  styleUrls: ['./list-user.scss']
})
export class ListUserComponent implements OnInit {

  private users: Observable<User[]>;
    private selected = [];
    private columns = [
        { name: 'First Name' },
        { name: 'LastName ' },
        { name: 'Display' },
        { name: 'Email' }
    ];

    @Output() onSelect = new EventEmitter<User>();

    constructor(private userService: UserService) {
        this.users = this.userService.list();
    }

    ngOnInit() {
    }

    private onSelectUser({ selected }) {
        this.onSelect.emit(selected[0]);
    }

}
