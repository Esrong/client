import { Component, NgZone, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { first } from 'rxjs/operators';
import { Civil } from 'src/app/core/models/civil.model';
import { CivilService } from 'src/app/core/services/civil.service';
import { DivorceService } from 'src/app/core/services/divorce.service';
import { MarriageService } from 'src/app/core/services/marriage';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-divorce-registration',
  templateUrl: './divorce-registration.component.html',
  styleUrls: ['./divorce-registration.component.scss']
})
export class DivorceRegistrationComponent implements OnInit {
  breadCrumbItems: Array<{}>;

  createDivorceForm: FormGroup;
  searchForm: FormGroup;
  getId: any;
  error = '';
  successmsg = false;
  onsubmit: boolean;
  success = '';
  loading:boolean;
  constructor(
    public formBuilder: FormBuilder,
    private ngZone: NgZone,
    private router: Router,
    public marriageService:MarriageService,
    private activatedRoute: ActivatedRoute,
    private divorceService: DivorceService) { 
      this.searchForm=this.formBuilder.group({
        marriageId:[,[Validators.required]]
      })
      this.createDivorceForm=this.formBuilder.group({
        // id:[''],
        reason:[''],
        place:[''],
        religion:[''],
        divorceInfo:[''],
        divorceDate:[''],
        region:['']
        // malePartner:[''],
        // femalePartner:[''],
        // countDivorce:[''],
        // registrationDate:[''],
        // registrationDate:['']

      })

    }

  ngOnInit(): void { 
    // this.getId = this.activatedRoute.snapshot.paramMap.get('marriageId');
    // const marriageId:string=this.searchForm.value.marriageId;
    // this.divorceService
    //   .gDivorce(marriageId)
    //   .subscribe((res) => {
    //     this.createDivorceForm.patchValue({ ...res.data });
    //   });
   }

  get type() {
    return this.searchForm.controls;
  }
  onSubmit(){
    const query:string =this.searchForm.value.query;
    this.success='';
    this.onsubmit=true;
    if(this.searchForm.invalid){
      return;
    }
    else{
     // this.successmsg = true;
      this.loading=true;
      this.marriageService.gMarriage(query)
      .pipe(first())
     //  .pipe(finalize(()=)
      .subscribe(
       civils => {
         this.successmsg = true;
        //  this.civils=civils;
         if (this.successmsg) {
           // this.router.navigate([`/birth/`+`${query}`]);
           this.successmsg = true;
          //  this.civils=civils;
           this.loading=false;
       

         }
         // this.router.navigate([`/birth/`+`${query}`]);
       },
       error => {
         this.error = error ? error : '';
         this.loading=true;
       }); 

    }  
         // this.successmsg=true
         // this.router.navigate([`/birth/`+`${query}`]);
   }
  onPush():any{
    const marriageId:string=this.searchForm.value.marriageId;
    this.divorceService.cDivorce(marriageId,this.createDivorceForm.value)
    .subscribe(()=>{
      Swal.fire({
        title: 'Registration Updated Success full!',
        text: 'You can see under registred table!',
        icon: 'success',
        showCancelButton: false,
        confirmButtonColor: '#5438dc',
  
      });
      // console.log('Death is registred successfully')
      this.ngZone.run(()=>this.router.navigateByUrl('/registred/divorce-registred'))
    },   error => {
      this.error = error ? error : '';
      this.loading=true;
    })
  }

}
