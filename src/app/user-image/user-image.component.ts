import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-user-image',
  templateUrl: './user-image.component.html',
  styleUrls: ['./user-image.component.css']
})
export class UserImageComponent implements OnInit {

  @Input() imageUrl;

  constructor() { }

  ngOnInit() {
  }

}