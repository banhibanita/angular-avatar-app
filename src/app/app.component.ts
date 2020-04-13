import { Component, OnInit } from '@angular/core';
import { GetUserDetailsService } from './get-user-details.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  name = 'Angular';
  response;
  url;
  userDetails;

  constructor(private userDetailsService: GetUserDetailsService) { }

  ngOnInit() {
    this.getUserInfo();
  }

  getUserInfo() {

    this.userDetailsService.getUserDetails().subscribe(data => {
      console.log(data);
      this.response = data;
      this.userDetails = this.response.data;
    })
  }

  avatar(data) {
    this.url = data;

  }

}
