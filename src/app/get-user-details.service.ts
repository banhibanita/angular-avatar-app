import { Injectable } from '@angular/core';
import {HttpClient}from '@angular/common/http';

@Injectable()
export class GetUserDetailsService {

  constructor(private http : HttpClient) { }

  getUserDetails(){
  const url = 'https://reqres.in/api/users/';
    return this.http.get(url)

  }

}