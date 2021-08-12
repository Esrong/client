import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DivorceService } from 'src/app/core/services/divorce.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-divorce-registred',
  templateUrl: './divorce-registred.component.html',
  styleUrls: ['./divorce-registred.component.scss']
})
export class DivorceRegistredComponent implements OnInit {
  breadCrumbItems: Array<{}>;

  divorces:any =[];
  civils:any=[];
  isDeleting :boolean;
  // id: string;
  constructor(
    private route: ActivatedRoute,
    private router: Router,


    private divorceService:DivorceService,
   ) { }

  ngOnInit(): void { 
    
    // this.id = this.route.snapshot.paramMap.get('civilId');
    this.divorceService.gAllDivorce().subscribe(res=>{
      console.log(res)
      this.divorces=res
      // const query:string =this.divorces.details.value.query;
      // this.civilService.gCivil(query).subscribe((res)=>{
      //   console.log(res);
      //   this.civils=res;
  
      // })
    })

    

  //     this.divorceService.gAllDeath()
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
        // const civil = this.divorces.find(x => x.id === id);
        this.divorceService.dDivorce(id).subscribe((res)=>{
          this.divorces=this.divorces.filter(x=>x.id !==id);
          this.divorces.splice(i,1);
        })
  
        Swal.fire('Deleted!', 'Your registration has been deleted.', 'success');
      }
    });
  }
}
