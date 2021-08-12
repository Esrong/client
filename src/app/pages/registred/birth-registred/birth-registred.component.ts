// import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BirthService } from 'src/app/core/services/birth.service';
import Swal from 'sweetalert2';

import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-birth-registred',
  templateUrl: './birth-registred.component.html',
  styleUrls: ['./birth-registred.component.scss']
})
export class BirthRegistredComponent implements OnInit {
  breadCrumbItems: Array<{}>;

  civils:any =[];
  isDeleting :boolean;
  // id: string;
  constructor(
    private route: ActivatedRoute,
    private router: Router,

    private birthService:BirthService,
   ) { }

  ngOnInit(): void { 
    
    // this.id = this.route.snapshot.paramMap.get('civilId');
    this.birthService.gAllBirth().subscribe(res=>{
      console.log(res)
      this.civils=res;
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
        this.birthService.dBirth(id).subscribe((res)=>{
          this.civils=this.civils.filter(x=>x.id !==id);
          this.civils.splice(i,1);
          Swal.fire('Deleted!', 'Your registration has been deleted.', 'success');
        })
  
       
      }
    });
  }
  public openPDF():void {
    let DATA = document.getElementById('htmlData');
      
    html2canvas(DATA).then(canvas => {
        
        let fileWidth = 208;
        let fileHeight = canvas.height * fileWidth / canvas.width;
        
        const FILEURI = canvas.toDataURL('image/png')
        let PDF = new jsPDF('p', 'mm', 'a4');
        let position = 0;
        PDF.addImage(FILEURI, 'PNG', 0, position, fileWidth, fileHeight)
        
        PDF.save('crvs.pdf');
    });     
  }
}
