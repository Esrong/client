import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BirthStatisticsComponent } from './birth-statistics/birth-statistics.component';
import { CivilStatisticsComponent } from './civil-statistics/civil-statistics.component';
import { DeathStatisticsComponent } from './death-statistics/death-statistics.component';
import { DivorceStatisticsComponent } from './divorce-statistics/divorce-statistics.component';
import { MarriageStatisticsComponent } from './marriage-statistics/marriage-statistics.component';

const routes: Routes = [
    {
        path: 'births',
        component: BirthStatisticsComponent
    },
    {
        path: 'deaths',
        component: DeathStatisticsComponent
    },
    {
        path: 'marriages',
        component: MarriageStatisticsComponent
    },
    {
        path: 'divorces',
        component: DivorceStatisticsComponent
    },
    {
        path: 'civils',
        component: CivilStatisticsComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class StatisticsRoutingModule { }
