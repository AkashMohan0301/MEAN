import { Component,ViewEncapsulation  } from '@angular/core';
import { StyleBindingComponent } from '../style-binding/style-binding.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-boxcomponent',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './boxcomponent.component.html',
  styleUrl: './boxcomponent.component.css',
  encapsulation: ViewEncapsulation.None // or encapsulation: None

})
export class BoxcomponentComponent {

}
