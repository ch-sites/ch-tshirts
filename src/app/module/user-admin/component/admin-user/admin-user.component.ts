import { Component, OnInit } from '@angular/core';
import { User, UserService } from 'zs-core';

@Component({
    selector: 'admin-user',
    templateUrl: './admin-user.html',
    styleUrls: ['./admin-user.scss']
})
export class AdminUserComponent implements OnInit {

  private selectedUser: User = null;

  constructor(private userService: UserService) { }

  ngOnInit() { }

  private deleteUser(): void {
    this.userService.delete(this.selectedUser).subscribe(user => {
      this.selectedUser = null;
    });
  }

  private onSelectUser(user: User) {
    this.selectedUser = user;
  }

}
