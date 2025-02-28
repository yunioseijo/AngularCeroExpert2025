import { ChangeDetectionStrategy, Component, signal } from '@angular/core';

@Component({
  selector: 'app-counter',
  imports: [],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CounterComponent {
  counter: number = 0;
  counterSignal = signal(0);
  increaseByOne() {
    this.counter++;
    this.counterSignal.update((current) => current + 1);
  }
  decreaseByOne() {
    this.counter--;
    this.counterSignal.update((current) => current - 1);
  }
  resetCounter() {
    this.counter = 0;
    this.counterSignal.set(0);
  }

 }
