import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CivilService } from 'src/app/core/services/civil.service';
import { DeathService } from 'src/app/core/services/death.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-death-registred',
  templateUrl: './death-registred.component.html',
  styleUrls: ['./death-registred.component.scss']
})
export class DeathRegistredComponent implements OnInit {
  breadCrumbItems: Array<{}>;

  deaths:any =[];
  civils:any=[];
  isDeleting :boolean;
  // id: string;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private civilService:CivilService,

    private deathService:DeathService,
   ) { }

  ngOnInit(): void { 
    
    // this.id = this.route.snapshot.paramMap.get('civilId');
    this.deathService.gAllDeath().subscribe(res=>{
      console.log(res)
      this.deaths=res
      // const query:string =this.deaths.details.value.query;
      // this.civilService.gCivil(query).subscribe((res)=>{
      //   console.log(res);
      //   this.civils=res;
  
      // })
    })

    

  //     this.deathService.gAllDeath()
  //     .subscribe({
  //      // console.log(res);
  //      // this.civils=res;
  //      // this.successmsg=true
  //       next:()=> {

  //       },

  // }


}

  confirm(id:any, i:any) {
    Swal.fire({
      title: 'Are you sure?',
      text: 'You won\'t be able to revert this!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#34c38f',
      cancelButtonColor: '#ff3d60',
      confirmButtonText: 'Yes, delete it!',
      
    }).then(result => {
      if (result.value) {
        // const civil = this.deaths.find(x => x.id === id);
        this.deathService.dDeath(id).subscribe((res)=>{
          this.deaths=this.deaths.filter(x=>x.id !==id);
          this.deaths.splice(i,1);
        })
  
        Swal.fire('Deleted!', 'Your registration has been deleted.', 'success');
      }
    });
  }
}
