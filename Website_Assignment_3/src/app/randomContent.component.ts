import { Component } from '@angular/core';

@Component({
  selector: 'random-block',
  template: `
    <h1>Currently NOT IN USE!!!!!!!</h1>
    <h1>Header FILE</h1>
    <p>Header file 2</p>
    <p>{{title}}</p>
  `,
})
export class randomContentComponent {
  title = 'Random TESTING';
}
