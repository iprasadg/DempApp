import { Component, HostListener, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'DemoApp';

  constructor(private sharedSrv: SharedService) {}

  /** To detect browser close for restricting user from window close if any item is present in cart */
  @HostListener('window:beforeunload', ['$event'])
  beforeunloadHandler(event: any) {
    event.preventDefault();
    if(this.sharedSrv.getCartItems().length) {
      return false
    }
    return true;
 }
}
