import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CiviRegistredComponent } from './civi-registred/civi-registred.component';
import { BirthRegistredComponent } from './birth-registred/birth-registred.component';
import { DeathRegistredComponent } from './death-registred/death-registred.component';
import { MarriageRegistredComponent } from './marriage-registred/marriage-registred.component';
import { DivorceRegistredComponent } from './divorce-registred/divorce-registred.component';
import { RegistredRoutingModule } from './registred-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { UiModule } from 'src/app/shared/ui/ui.module';

import { NgbPaginationModule,NgbAccordionModule, NgbNavModule, NgbTypeaheadModule, NgbTooltipModule, NgbCollapseModule, NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { NgSelectModule } from '@ng-select/ng-select';
import { ArchwizardModule } from 'angular-archwizard';
import { DropzoneModule } from 'ngx-dropzone-wrapper';



@NgModule({
  declarations: [CiviRegistredComponent, BirthRegistredComponent, DeathRegistredComponent, MarriageRegistredComponent, DivorceRegistredComponent],
  imports: [
    CommonModule,
    RegistredRoutingModule,
    ReactiveFormsModule,
    UiModule,
    NgbPaginationModule,
    NgbAccordionModule,
    NgbNavModule,
    NgbTypeaheadModule,
    NgbTooltipModule,
    NgbCollapseModule,
    NgSelectModule,
    NgbModalModule,
    DropzoneModule,
    ArchwizardModule,
   
 
    
  ]
})
export class RegistredModule { }
