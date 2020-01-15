import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercise-list',
  templateUrl: './exercise-list.component.html',
  styleUrls: ['./exercise-list.component.sass']
})
export class ExerciseListComponent implements OnInit {

  exercises: any[] = [
    {id:1, name:'Bench Press', group: 'Push'},
    {id:2, name:'Squats', group: 'Legs'}
  ];

  test = 'test2'

  constructor() { }

  ngOnInit() {
  }

}
