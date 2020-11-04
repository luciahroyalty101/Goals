import { Component, OnInit, Output, EventEmitter } from'@angular/core';
import {goal } from '../goal';

@Component({
  selector: 'app-goal-form',
  templateUrl: './goal-form.component.html',
  styleUrls: ['./goal-form.component.css']
})
export class GoalFormComponent implements OnInit {

  newGoal = new goal(0,"","",new Date());
  constructor() { }

  ngOnInit() {
  }

}