import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CivilComponent } from './civil/civil.component';
import { BirthComponent } from './birth/birth.component';
import { DeathComponent } from './death/death.component';
import { DivorceComponent } from './divorce/divorce.component';
import { MarriageComponent } from './marriage/marriage.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgbAlertModule, NgbDropdownModule, NgbProgressbarModule } from '@ng-bootstrap/ng-bootstrap';
import { ArchwizardModule } from 'angular-archwizard';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { UiModule } from 'src/app/shared/ui/ui.module';
import { UpdateRoutingModule } from './update-routing.module';



@NgModule({
  declarations: [CivilComponent, BirthComponent, DeathComponent, DivorceComponent, MarriageComponent],
  imports: [
    CommonModule,
    UpdateRoutingModule,
    ReactiveFormsModule,
    ArchwizardModule,
    UiModule,
    FormsModule,
    NgbAlertModule,
    NgbDropdownModule,
    PerfectScrollbarModule,
    NgbProgressbarModule,
  ]
})
export class UpdateModule { }
