import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { CivilService } from 'src/app/core/services/civil.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-civi-registred',
  templateUrl: './civi-registred.component.html',
  styleUrls: ['./civi-registred.component.scss']
})
export class CiviRegistredComponent implements OnInit {
  breadCrumbItems: Array<{}>;

  civils:any =[];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private civilService:CivilService,
   ) { }

  ngOnInit(): void { 
    
    // this.id = this.route.snapshot.paramMap.get('civilId');
    this.civilService.getAll()
    .pipe(first())
    .subscribe(civils=>{
      this.civils=civils;
    })

  }

  confirm(id:string,i:any) {
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
        // civil.isDeleting=true;
        this.civilService.dCivil(id).subscribe((res)=>{
          this.civils=this.civils.filter( x => x.id !== id);
          this.civils.splice(i,1);
          Swal.fire('Deleted!', 'Your registration has been deleted.', 'success');

        })
        
      }
    });
  }
}
