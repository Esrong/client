import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MarriageService } from 'src/app/core/services/marriage';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-marriage-registred',
  templateUrl: './marriage-registred.component.html',
  styleUrls: ['./marriage-registred.component.scss']
})
export class MarriageRegistredComponent implements OnInit {
  breadCrumbItems: Array<{}>;

  marriages:any =[];
  isDeleting :boolean;
  // id: string;
  constructor(
    private route: ActivatedRoute,
    private router: Router,

    private marriageService: MarriageService
   ) { }

  ngOnInit(): void { 
    
    // this.id = this.route.snapshot.paramMap.get('civilId');
    this.marriageService.gAllMarriage().subscribe(res=>{
      console.log(res)
      this.marriages=res;
    })

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
        // const civil = this.civils.find(x => x.id === id);
        this.marriageService.dMarriage(id).subscribe((res)=>{
          this.marriages=this.marriages.filter(x=>x.id !==id);
          this.marriages.splice(i,1);
        })
  
        Swal.fire('Deleted!', 'Your registration has been deleted.', 'success');
      }
    });
  }
}
