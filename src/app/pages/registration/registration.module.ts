import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BirthRegistrationComponent } from './birth-registration/birth-registration.component';
import { DeathRegistrationComponent } from './death-registration/death-registration.component';
import { MarriageRegistrationComponent } from './marriage-registration/marriage-registration.component';
import { DivorceRegistrationComponent } from './divorce-registration/divorce-registration.component';
import { RegistratioinRoutingModule } from './registration-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ArchwizardModule } from 'angular-archwizard';
import { UiModule } from 'src/app/shared/ui/ui.module';
import { CivilRegistrationComponent } from './civil-registration/civil-registration.component';
import { NgbAlertModule, NgbDropdownModule, NgbProgressbarModule } from '@ng-bootstrap/ng-bootstrap';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { DropzoneModule } from 'ngx-dropzone-wrapper';
import { AdoptionRegistrationComponent } from './adoption-registration/adoption-registration.component';



@NgModule({
  declarations: [BirthRegistrationComponent, DeathRegistrationComponent, MarriageRegistrationComponent, DivorceRegistrationComponent, CivilRegistrationComponent, AdoptionRegistrationComponent],
  imports: [
    CommonModule,
    RegistratioinRoutingModule,
    ReactiveFormsModule,
    ArchwizardModule,
    UiModule,
    FormsModule,
    NgbAlertModule,
    NgbDropdownModule,
    PerfectScrollbarModule,
    NgbProgressbarModule,
    DropzoneModule,
  ]
})
export class RegistrationModule { }
