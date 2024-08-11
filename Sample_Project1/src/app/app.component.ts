import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Sample_Project1';
  show = true;
  UserName: string = "";
  Mark: number = 0;
  names: string[] = ["Akash", "Mariya", "Fathima", "Ajin", "Hani", "Sakthi"];
  marks: number[] = [24, 44, 30, 50, 44, 33];
  average: number = 0;

  constructor() {
    this.calculateAverageMark();
  }


  calculateAverageMark() {
    let Sums = 0;
    this.marks.forEach(mark => {
      Sums = Sums + mark;

    });
    console.log("Sum=", Sums);
    this.average = Sums / this.marks.length;
    console.log("Average=", this.average);

  }



  tabshow() {
    this.show = true;
  }
  tabshow2() {
    this.show = false;
  }
  storeUserNameAndMark() {
    console.log('User Name= ', this.UserName);
    console.log('Mark = ', this.Mark);
    if (this.Mark >= 0 && this.Mark <= 50) {
      
      if (this.UserName.length >= 3) {
        //Check For Duplicates
        let Found = false;
        this.names.forEach(name => {
          if (this.UserName == name) {
            Found = true;
          }
        });
        if (Found) {
          alert("User Name already exists")
          return;
        }
        else {
          this.names.push(this.UserName);
          this.marks.push(this.Mark);
          this.calculateAverageMark()
          this.clearValues();
        }
      }
      else {
        alert("In valid User Name")
        return;
      }
    }
    else {
      alert("In valid Mark")
    }
    console.log(this.names);
    console.log(this.marks);
  }

  // Clear all
  clearValues() {
    this.UserName = "";
    this.Mark = 0;
  }

  deleteUser(index: number) {
    this.calculateAverageMark()
    this.marks.splice(index, 1);
    this.names.splice(index, 1);
  }




}
