import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BirthCertificateComponent } from './birth-certificate/birth-certificate.component';
import { DeathCertificateComponent } from './death-certificate/death-certificate.component';
import { MarriageCertificateComponent } from './marriage-certificate/marriage-certificate.component';
import { DivorceCertificateComponent } from './divorce-certificate/divorce-certificate.component';
import { CertificateRoutingModule } from './certitficate-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbDropdownModule, NgbPaginationModule, NgbTypeaheadModule } from '@ng-bootstrap/ng-bootstrap';
import { UiModule } from 'src/app/shared/ui/ui.module';




@NgModule({
  declarations: [BirthCertificateComponent, DeathCertificateComponent, MarriageCertificateComponent, DivorceCertificateComponent,],
  imports: [
    CommonModule,
    CertificateRoutingModule,
    ReactiveFormsModule,
    UiModule,
    NgbDropdownModule,
    NgbPaginationModule,
    NgbTypeaheadModule,
    FormsModule
  ]
})
export class CertificateModule { }
