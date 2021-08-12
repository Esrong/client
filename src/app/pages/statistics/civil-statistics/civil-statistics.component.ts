import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';
import { CivilService } from 'src/app/core/services/civil.service';

@Component({
  selector: 'app-civil-statistics',
  templateUrl: './civil-statistics.component.html',
  styleUrls: ['./civil-statistics.component.scss']
})
export class CivilStatisticsComponent implements OnInit {
  civils:any =[];
  constructor(private civilService:CivilService) { }

  ngOnInit(): void {
    this.civilService.getImage()
    .pipe(first())
    .subscribe(civils=>{
      this.civils=civils;
    })
  }

}
