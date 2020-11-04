import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import {goal} from '../goal';


@Component({
  selector: 'app-goal-detail',
  templateUrl: './goal-detail.component.html',
  styleUrls: ['./goal-detail.component.css']
})
export class GoalDetailComponent implements OnInit {

  @Input() goal: goal;
  @Output() isComplete = new EventEmitter<boolean>();

  goalDelete(complete:boolean){
    this.isComplete.emit(complete);
  }
  constructor() { }

  ngOnInit() {
  }

}


  
  //   goalDelete(complete:boolean){
  //     this.isComplete.emit(complete);
  //   }
  // ...
  // }







