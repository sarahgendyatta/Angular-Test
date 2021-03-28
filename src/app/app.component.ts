import { Component } from '@angular/core';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {ValidationManager} from 'ng2-validation-manager';
import * as icons from '@fortawesome/free-solid-svg-icons';
import {SizeProp as size} from '@fortawesome/fontawesome-svg-core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app1';
  faIcons = icons;
  // sizeProp = size;
}
