import { Routes } from '@angular/router';
import { ReservationComponent } from './reservation/reservation.component';
import { CancelComponent } from './cancel/cancel.component';
import { SignComponent } from './sign/sign.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';


export const routes: Routes = [
    {
        path:'',
        component:HomeComponent
    },
    {
        path:'sign',
        component:SignComponent
    },
    {
        path:'reservation',
        component:ReservationComponent
    },
    {
        path:'cancel',
        component:CancelComponent
    },
    {
        path:'footer',
        component:FooterComponent
    }
];
