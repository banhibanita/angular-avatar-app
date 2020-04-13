import { Component, OnInit ,Input,Output,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-user-name',
  templateUrl: './user-name.component.html',
  styleUrls: ['./user-name.component.css']
})
export class UserNameComponent implements OnInit {

  url;

  @Input() userDetails;
  @Output() imageUrl = new EventEmitter()

  constructor() { }

  ngOnInit() {
  }
  showImage(loginName){
    console.log(loginName);
 this.url= loginName.avatar;
    this.imageUrl.emit(this.url);
  }

}