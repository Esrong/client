import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdoptionRegistrationComponent } from './adoption-registration/adoption-registration.component';
import { BirthRegistrationComponent } from './birth-registration/birth-registration.component';
import { CivilRegistrationComponent } from './civil-registration/civil-registration.component';
import { DeathRegistrationComponent } from './death-registration/death-registration.component';
import { DivorceRegistrationComponent } from './divorce-registration/divorce-registration.component';
import { MarriageRegistrationComponent } from './marriage-registration/marriage-registration.component';

const routes: Routes = [
    {
        path: 'birth',
        component: BirthRegistrationComponent
    },
    {
        path: 'birth/:query',
        component: BirthRegistrationComponent
    },
    {
        path: 'death',
        component: DeathRegistrationComponent
    },
    {
        path: 'death/:deathId',
        component: DeathRegistrationComponent
    },
    {
        path: 'marriage',
        component: MarriageRegistrationComponent
    },
    {
        path: 'marriage/:civil/:civl2',
        component: MarriageRegistrationComponent
    },
    {
        path: 'divorce',
        component: DivorceRegistrationComponent
    },
    {
        path: 'divorce/:marriageId',
        component: DivorceRegistrationComponent
    },
    {
        path:'civil',
        component:CivilRegistrationComponent
    },
    {
        path:'civil/:civilId',
        component:CivilRegistrationComponent
    },
    {
        path:'adoption',
        component:AdoptionRegistrationComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class RegistratioinRoutingModule { }
