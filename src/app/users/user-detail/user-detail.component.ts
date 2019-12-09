import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators'
import { Observable } from 'rxjs';

import { UserService } from 'src/app/user.service';
import { User } from 'src/app/user';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {
  user$: Observable<User>;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: UserService
  ) { }

  ngOnInit() {
    this.user$ = this.route.paramMap.pipe(
        switchMap((params: ParamMap) =>
          this.service.getUser(params.get('id')))
    );
  }

  gotoUsers(user: User) {
    let userId = user ? user.id : null;
    this.router.navigate(['/users', { id: userId, foo: 'foo' }]);
  }

}
