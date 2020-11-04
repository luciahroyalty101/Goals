import { Component } from '@angular/core';
import { goal } from './goal';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  goals: goal[] = [
    new goal(1, 'Watch finding Nemo', 'Find an online version and watch merlin find his son',new Date(2020,3,14)),
    new goal(2,'Buy Cookies','I have to buy cookies for the parrot',new Date(2019,6,9)),
    new goal(3,'Get new Phone Case','Diana has her birthday coming up soon',new Date(2022,1,12)),
    new goal(4,'Get Dog Food','Pupper likes expensive snacks',new Date(2019,0,18)),
    new goal(5,'Solve math homework','Damn Math',new Date(2019,2,14)),
    new goal(6,'Plot my world domination plan','Cause I am an evil overlord',new Date(2030,3,14)),
  ];
}

// export class Goals {
//   id: number;
//    name: string;
//  description: string;
//  }


  // title = 'Goals';
  // goal ='Watch Finding Nemo'
  // goals:string[];


  // constructor(){
  //   this.goals=['WAtch Finding Nemo','Buy cookies','Get new phone case']




