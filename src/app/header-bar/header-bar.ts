import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  imports: [RouterLink, RouterLinkActive],
  selector: 'app-header-bar',
  styleUrl: './header-bar.css',
  templateUrl: './header-bar.html',
})
export class HeaderBar {}
