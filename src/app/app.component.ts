  import { Component } from '@angular/core';
  import { RouterOutlet } from '@angular/router';
  import { HeaderComponent } from './components/header/header.component';

  @Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    standalone: true,
    imports: [RouterOutlet, HeaderComponent]
  })
  export class AppComponent {
    title = 'E-Shop';
  }