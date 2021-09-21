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

  @HostListener('window:beforeunload', ['$event'])
  beforeunloadHandler(event: any) {
    event.preventDefault();
    localStorage.removeItem('registeredUser');
    if(this.sharedSrv.getCartItems().length) {
      return false
    }
    return true;
 }
}
