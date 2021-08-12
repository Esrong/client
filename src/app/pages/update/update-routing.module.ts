import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BirthComponent } from './birth/birth.component';
import { CivilComponent } from './civil/civil.component';
import { DeathComponent } from './death/death.component';
import { DivorceComponent } from './divorce/divorce.component';
import { MarriageComponent } from './marriage/marriage.component';




const routes: Routes = [
    {path:'civil-update',component:CivilComponent},
    {
        path:'civil-update/:civilId',
        component:CivilComponent
    },
    {path:'death-update',component:DeathComponent},
    {
        path:'death-update/:deathId',
        component:DeathComponent
    },
    {path:'birth-update',component:BirthComponent },
    { path:'birth-update/:civilId', component:BirthComponent},
    {path:'divorce-update',component:DivorceComponent },
    {
        path:'divorce-update/:divorceId',
        component:DivorceComponent
    },
    { path:'marriage-update',component:MarriageComponent },
    { path:'marriage-update/:marriageId',component:MarriageComponent }
   
  
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class UpdateRoutingModule { }
