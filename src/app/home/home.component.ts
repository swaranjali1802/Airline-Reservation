import { Component } from '@angular/core';
import { SignComponent } from '../sign/sign.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [SignComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
