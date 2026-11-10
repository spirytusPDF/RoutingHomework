import { Component, signal } from '@angular/core';
import { ReactiveForm } from './reactive-form/reactive-form';
import { HeaderBar } from './header-bar/header-bar';
import { RouterOutlet } from '@angular/router';

@Component({
  imports: [ReactiveForm, HeaderBar, RouterOutlet],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  
}
