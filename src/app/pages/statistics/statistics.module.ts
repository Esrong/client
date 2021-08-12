import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MarriageStatisticsComponent } from './marriage-statistics/marriage-statistics.component';
import { DivorceStatisticsComponent } from './divorce-statistics/divorce-statistics.component';
import { BirthStatisticsComponent } from './birth-statistics/birth-statistics.component';
import { DeathStatisticsComponent } from './death-statistics/death-statistics.component';
import { StatisticsRoutingModule } from './statistics-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NgApexchartsModule } from 'ng-apexcharts';
import { UiModule } from 'src/app/shared/ui/ui.module';
import { CivilStatisticsComponent } from './civil-statistics/civil-statistics.component';




@NgModule({
  declarations: [MarriageStatisticsComponent, DivorceStatisticsComponent, BirthStatisticsComponent, DeathStatisticsComponent, CivilStatisticsComponent],
  imports: [
    CommonModule,
    StatisticsRoutingModule,
    HttpClientModule,
    FormsModule,
    UiModule,
    NgApexchartsModule,


    

  ]
})
export class StatisticsModule { }
