import { Injectable } from '@angular/core';
import {Person} from "../interface/task"
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  Persons: Person ={
    name: '',
    username: '',
    email: '',
  }

  constructor(private http: HttpClient) { }

  personas: Person[]=[];

  getAllPersons(){
    const path = 'https://jsonplaceholder.typicode.com/users';
    return this.http.get<Person[]>(path);
  
  }
  
}

