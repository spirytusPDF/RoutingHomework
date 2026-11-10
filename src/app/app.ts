import { Component, signal } from '@angular/core';
import { ReactiveForm } from './reactive-form/reactive-form';

@Component({
  imports: [ReactiveForm],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  
}
