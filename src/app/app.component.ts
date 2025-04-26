import { Component } from '@angular/core';
import {ContentComponent, FooterComponent, HeaderComponent} from './components';

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, ContentComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'a11y-accessibility-demo';
}
