import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  imports: [],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CounterComponent {
  counter: number = 0;
  increaseByOne() {
    this.counter++;
  }
  decreaseByOne() {
    this.counter--;
  }
  resetCounter() {
    this.counter = 0;
  }

 }
