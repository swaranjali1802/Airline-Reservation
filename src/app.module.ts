import { NgModule } from '@angular/core';
import { HeaderComponent } from './app/header/header.component';
import { CancelComponent } from './app/cancel/cancel.component';
import { SignComponent } from './app/sign/sign.component';
import { AppComponent } from './app/app.component';
import { ReservationComponent } from './app/reservation/reservation.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { FooterComponent } from './app/footer/footer.component';
import { HomeComponent } from './app/home/home.component';




@NgModule({
    declarations:[
      AppComponent,
      HeaderComponent,
      ReservationComponent,
      CancelComponent,
      SignComponent,FooterComponent,HomeComponent
    ],
    imports:[
      BrowserModule,
      
      FormsModule,
      ReactiveFormsModule
    ]
    
    })
    export class AppModule{

    }