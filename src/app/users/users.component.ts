import { Component, OnInit } from '@angular/core';
import { UserService } from './services/user.service';
import { User } from './models/user.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users$: User[] = [];

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.getUsers().subscribe((data) => {
      this.users$ = <User[]>data;
      console.log(this.users$);
    });;
  }

  delete(id: string) {
    // if (!confirm('Are you sure you want to delete this user?')) return;
    this.userService.deleteUserById(id).subscribe((data) => {
      this.users$ = this.users$.filter(x => x._id != id);
    }, (error) => {
      console.log(error);
    });
  }

}
