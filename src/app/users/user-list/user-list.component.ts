import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators'
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { UserService } from '../user.service';
import { User } from '../user';


@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  users$: Observable<User[]>;
  selectedId: number;

  constructor(
    private service: UserService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.users$ = this.route.paramMap.pipe(
     switchMap(params => {
       this.selectedId = +params.get('id');
       return this.service.getUsers();
     })
   );
  }
}
