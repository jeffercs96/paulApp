import { Component, OnInit } from '@angular/core';
import { Person } from 'src/app/interface/task';
import { TaskService } from 'src/app/services/task.service';



@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.css']
})
export class PersonaComponent implements OnInit {

  

  constructor(public taskService: TaskService) { 
  }

 
  getAllPersons(){
    this.taskService.getAllPersons().subscribe(todos => {console.log(todos)});
  }

  ngOnInit(): void {
    this.getPersonas();
  }
  getPersonas(){
    this.taskService.getAllPersons().subscribe(
      res=>{
        this.taskService.personas=res;
      },
      err =>console.log(err)
    )
  }


}
