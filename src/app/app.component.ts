import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  dataAry: string[] = []; //Declared for to do list items store
  inputString: string = ""; //Declared for two way data binding [user input data]
  checkStatusDataAry: boolean[] = []; //Declared for user checked or not

  addItem(value: string) {
    if (value.length != 0) { //Check user input string is not blank
      this.inputString = ""; //Reset user input
      this.dataAry.push(value); //Add item to array
      this.checkStatusDataAry.push(false); //Add status for item to checked array
    }
  }

  removeItem(index: number) {
    this.dataAry.splice(index, 1); //Remove item from array
    this.checkStatusDataAry.splice(index, 1); //Remove status for specific item from checked array
  }

  checkToogle(index: number) {
    this.checkStatusDataAry[index] = !this.checkStatusDataAry[index]; // Change toogle flag for check or unchecked
  }
}
