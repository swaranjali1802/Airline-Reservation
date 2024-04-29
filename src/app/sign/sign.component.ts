import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-sign',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './sign.component.html',
  styleUrl: './sign.component.css'
})
export class SignComponent implements OnInit{
  ngOnInit(): void {
    
  }
  signUp(data:object):void{
    console.warn(data)
  }

}
