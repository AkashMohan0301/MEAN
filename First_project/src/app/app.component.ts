import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,LoginComponent,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'First_project';
  ShowDiv = true;

  ShowMyDiv(){
    if (this.ShowDiv == true)
    {
      this.ShowDiv = false;
    }
    else{
      this.ShowDiv = true;
    }
  }
 

}
