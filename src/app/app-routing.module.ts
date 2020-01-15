import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ExerciseComponent} from './exercise/exercise.component'
import {ExerciseListComponent} from './exercise-list/exercise-list.component'


const routes: Routes = [
  {path: 'exercise', component: ExerciseListComponent},
  {path: 'exercise/:id', component: ExerciseComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
