import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  password = "";
  length = 10;
  includeUseLetters = false;
  includeUseNumbers = false;
  includeUseSymbols = false;

  onChangeLength(target: any) {
    this.length = parseInt(target.value);
  }

  onChangeUseLetters() {
    this.includeUseLetters = !this.includeUseLetters;
  }

  onChangeUseNumbers() {
    this.includeUseNumbers = !this.includeUseNumbers;

  }

  onChangeUseSymbols() {
    this.includeUseSymbols = !this.includeUseSymbols;
  }

  isDisabled(){
    return !(this.length && (this.includeUseLetters || this.includeUseSymbols||this.includeUseNumbers))
  }
  onButtonClick() {
    const numbers = '1234567899';
    const letters = 'abcdefghijkpa';
    const symbols = '!@$=?';

    let validChars = '';

    if (this.includeUseLetters) {
      validChars += letters;
    }
    if (this.includeUseNumbers) {
      validChars += numbers;
    }
    if (this.includeUseSymbols) {
      validChars += symbols;
    }
    let generatedPassword = '';
    for (let i = 0; i < this.length; i++) {
      const index = Math.floor(Math.random() * validChars.length);
      generatedPassword += validChars[index];
    }

    this.password = generatedPassword;
  }

  getPassword() {
    return this.password;
  }
}
