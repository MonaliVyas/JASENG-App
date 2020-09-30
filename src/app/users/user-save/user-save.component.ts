import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { ActivatedRoute, Router } from '@angular/router';
import 'rxjs/add/operator/take';
import { User } from '../models/user.model';
import { IndexSignature } from "../../common/indexsignature.interface";
import { Observable } from 'rxjs';

@Component({
  selector: 'app-user-save',
  templateUrl: './user-save.component.html',
  styleUrls: ['./user-save.component.css','../../../assets/css/my_style.css']
})
export class UserSaveComponent implements OnInit {
  serverError: any;
  user = new User();
  userId: any;
  submitted: boolean;

  constructor(
    private router: Router,
    private userService: UserService,
    private route: ActivatedRoute) {
    this.submitted = false;
  }

  ngOnInit(): void {
    this.userId = this.route.snapshot.paramMap.get('id');
    if (this.userId)
      this.userService.getUserById(this.userId).subscribe((data) => {
        this.user = <User>data;
      }, (error) => {
        console.log(error);
      });
    else {
      this.user.Gender = 'male';
    }
  }

  cancel() {
    this.router.navigate(['/users/'])
  }

  save(form: any) {
    this.submitted = true;
    if (form.invalid) {
      console.log(form);
      return;
    }
    const userForm = form.value;
    if (this.userId) {
      this.userService.update(this.userId, userForm).subscribe((data) => {
        this.router.navigate(['/users/'])
      }, (error) => {
        console.log(error);
      });
    } else {
      console.log('start');
      this.userService.create(userForm).subscribe((data) => {
        console.log(data)
        this.router.navigate(['/users/'])
      }, (error) => {
        const errorList = error.error.message.error.details;
        let d = {} as IndexSignature;
        for (let x of errorList) {
          d[x.context.key] = x.message;
        }
        this.serverError = d;
      });
    }
  }

}
