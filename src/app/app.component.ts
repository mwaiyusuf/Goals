import { Component } from '@angular/core';
import {Goal} from './goal'

@Component({
 selector: 'app-root',
 templateUrl: './app.component.html'
})
export class AppComponent {
   goals = [
       new Goal(1,'Watch Finding Nemo',  `,`,  new Date(2018,3,14)),
       new Goal(2,'Buy Cookies', ',',  new Date(2018,3,14)),
       new Goal(3, 'Get new Phone', ',',  new Date(2018,3,14)),
       new Goal(4, 'Get Dog Food', ',',  new Date(2018,3,14) ),
       new Goal(5, 'Solve math homework', ',',  new Date(2018,3,14)),
       new Goal(6, 'Plot my world domination plan', ',',  new Date(2018,3,14)),

   ]
}
