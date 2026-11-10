import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  imports: [RouterLink, RouterOutlet],
  selector: 'app-famous-monument',
  styleUrl: './famous-monument.css',
  templateUrl: './famous-monument.html',
})
export class FamousMonument {}
