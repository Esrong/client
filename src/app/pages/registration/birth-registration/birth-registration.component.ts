import { Component, NgZone, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { error } from 'protractor';
import { finalize, first } from 'rxjs/operators';
import { Marriage } from 'src/app/core/models/marriage';
import { AlertService } from 'src/app/core/services/alert.service';
import { BirthService } from 'src/app/core/services/birth.service';
import { MarriageService } from 'src/app/core/services/marriage';
import Swal from 'sweetalert2';
import { AlertColor } from './alerts.model';

@Component({
  selector: 'app-birth-registration',
  templateUrl: './birth-registration.component.html',
  styleUrls: ['./birth-registration.component.scss']
})
export class BirthRegistrationComponent implements OnInit {
  breadCrumbItems: Array<{}>;
  marriages:Marriage[]=[];

  createBirthForm: FormGroup;
  searchForm: FormGroup;
  loading:boolean;
  enable:boolean;
  query:any;
  civils:any  =[];
  error = '';
  successmsg = false;
  onsubmit: boolean;
  success = '';
  alertData: AlertColor[];

  /**
   * Close the alert
   * @param alert fetch the alert for close
   */
  // tslint:disable-next-line: no-shadowed-variable
  close(alert: AlertColor, alertData: AlertColor[]) {
    alertData.splice(alertData.indexOf(alert), 1);
  }

  constructor(
    public formBuilder: FormBuilder,
    private ngZone: NgZone,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private marriageService:MarriageService,
    private alertService: AlertService,
     
    private birthService: BirthService) { 
      this.searchForm=this.formBuilder.group({
        query:['',[Validators.required]]
      })

      this.createBirthForm=this.formBuilder.group({
        id:[''],
        // query:[],
        name:[''],
        fname:[''],
        gname:[''],
        gender:[''],
        birthDate:[''],

        age:[''],
        birthPlace:[''],
        birthType:[''],
        birthAid:[''],
        ethnicOrigin:[''],
        citizenship:[''],
        region:[''],
        wereda:[''],
        zone:[''],
        kebele:[''],
        marriage:[''],
        divorce:[''],
        // fatherInfo:[''],
        // motherInfo:[''],
        // otherThanParent:['']
      })

    }

  ngOnInit(): void {
    // const query:string =this.searchForm.value.query;
    // this.marriageService.gMarriage(query)
    // .subscribe(res=>{
    //   this.civils=res;
    // })

   }

  get type() {
    return this.searchForm.controls;
  }
  // onTry(){
  //   const query:string=this.searchForm.value;
  //   this.marriageService.gMarriage(query)
  //   .subscribe((res)=>{
  //        console.log(res);
  //        this.marriages;
  //       })

  // }
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
          this.civils=civils;
          if (this.successmsg) {
            // this.router.navigate([`/birth/`+`${query}`]);
            this.successmsg = true;
            this.civils=civils;
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

  onPush(){
    this.loading=true;
    
    
    const query: string = this.searchForm.value.query;
    

      
      this.birthService.cBirth(query,this.createBirthForm.value)
      .pipe(first())
      .pipe(finalize(()=>this.loading=false))
      .subscribe({
        next:()=> Swal.fire({
          title: 'Registration Success full!',
          text: 'You can see under registred table!',
          icon: 'success',
          showCancelButton: false,
          confirmButtonColor: '#5438dc',
    
        })
        ,
        error: error=>{
          this.error = error ? error : '';
          this.loading=true;
        }, })
        if(this.successmsg=true){
          this.ngZone.run(()=>this.router.navigateByUrl('/registred/birth-registred'))
        }
  
      
  }
}