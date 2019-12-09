import { Component, OnInit } from '@angular/core';

import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-welcome-page',
  templateUrl: './welcome-page.component.html',
  styleUrls: ['./welcome-page.component.css']
})
export class WelcomePageComponent implements OnInit {


  constructor(public authService: AuthService) { }

  ngOnInit() {
  }

}
