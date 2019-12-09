import { Component } from '@angular/core';

import { faHome } from '@fortawesome/free-solid-svg-icons';
import { faDoorOpen } from '@fortawesome/free-solid-svg-icons';
import { faDoorClosed } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'simple-site';
  faHome=faHome;
  faDoorOpen=faDoorOpen;
  faDoorClosed=faDoorClosed;
  login = true;



}
