import { Component } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-bannar',
  standalone: true,
  imports: [],
  templateUrl: './bannar.component.html',
  styleUrl: './bannar.component.css',
})
export class BannarComponent {
  path: string[] = [];
  length: number = 0;
  constructor(private location: Location) {}

  ngOnInit(): void {
    this.initializePath();
  }
  private initializePath(): void {
    this.path = this.location
      .path()
      .split('/')
      .filter((segment) => segment.trim() !== '');

    console.log('pathname array', this.path);
    // this.path = ['gg', 'gggg', 'rgr', 'frfrfr', 'frfrfedf', 'erfef'];
    this.length = this.path.length - 1;
  }
}
