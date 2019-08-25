import { Component} from '@angular/core';
import {MediaMatcher} from '@angular/cdk/layout';
import { Angulartics2GoogleAnalytics } from 'angulartics2/ga';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {

  screenWidth: number;

constructor(angulartics2GoogleAnalytics: Angulartics2GoogleAnalytics) {
  
      angulartics2GoogleAnalytics.startTracking();
  // set screenWidth on page load
  this.screenWidth = window.innerWidth;
  window.onresize = () => {
    // set screenWidth on screen size change
    this.screenWidth = window.innerWidth;
  };
}
}
