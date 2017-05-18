import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `<h1> <router-outlet></router-outlet>
</h1>`,
})
export class AppComponent  { name = 'Angular'; }
