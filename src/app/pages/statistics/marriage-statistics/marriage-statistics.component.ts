import { Component, OnInit } from '@angular/core';
import { CivilService } from 'src/app/core/services/civil.service';


@Component({
  selector: 'app-marriage-statistics',
  templateUrl: './marriage-statistics.component.html',
  styleUrls: ['./marriage-statistics.component.scss']
})
export class MarriageStatisticsComponent implements OnInit {

  constructor(civilService:CivilService) { }

  ngOnInit(): void {
  }
  
}
