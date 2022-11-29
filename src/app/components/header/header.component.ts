import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  ViewChild } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['../../../styles.css']
})
export class HeaderComponent implements AfterViewInit {
  @ViewChild("textElement") textElement!: ElementRef;

  @Input() wordArray: string[] = [
    "Book  ",
    "Manuscript  ",
    "Cover Letter  ",
    "Resume  "
  ];
  @Input() typingSpeedMilliseconds = 300;
  @Input() deleteSpeedMilliseconds = 150;

  private i = 0;

  ngAfterViewInit(): void {
    this.typingEffect();
  }

  private typingEffect(): void {
    const word = this.wordArray[this.i].split("");
    const loopTyping = () => {
      if (word.length > 0) {
        this.textElement.nativeElement.innerHTML += word.shift();
      } else {
        this.deletingEffect();
        return;
      }
      setTimeout(loopTyping, this.typingSpeedMilliseconds);
    };
    loopTyping();
  }

  private deletingEffect(): void {
    const word = this.wordArray[this.i].split("");
    const loopDeleting = () => {
      if (word.length > 0) {
        word.pop();
        this.textElement.nativeElement.innerHTML = word.join("");
      } else {
        if (this.wordArray.length > this.i + 1) {
          this.i++;
        } else {
          this.i = 0;
        }
        this.typingEffect();
        return;
      }
      setTimeout(loopDeleting, this.deleteSpeedMilliseconds);
    };
    loopDeleting();
  }

}
