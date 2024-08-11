import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { BoxcomponentComponent } from '../boxcomponent/boxcomponent.component';

@Component({
  selector: 'app-style-binding',
  standalone: true,
  imports: [CommonModule,BoxcomponentComponent],
  templateUrl: './style-binding.component.html',
  styleUrl: './style-binding.component.css'
})
export class StyleBindingComponent {
name = 'Akash'

}
