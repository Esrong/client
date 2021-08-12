import { Component, NgZone, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { first, finalize } from 'rxjs/operators';
import { AlertService } from 'src/app/core/services/alert.service';
import { BirthService } from 'src/app/core/services/birth.service';
import { CivilService } from 'src/app/core/services/civil.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-adoption-registration',
  templateUrl: './adoption-registration.component.html',
  styleUrls: ['./adoption-registration.component.scss']
})
export class AdoptionRegistrationComponent implements OnInit {
  breadCrumbItems: Array<{}>;

  createBirthForm: FormGroup;
  searchForm: FormGroup;
  loading:boolean;
  enable:boolean;
  civils:any  =[];
  error = '';
  successmsg = false;
  onsubmit: boolean;
  success = '';


  constructor(
    public formBuilder: FormBuilder,
    private ngZone: NgZone,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private civilService:CivilService,
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
    // this.civilService.gMarriage(query)
    // .subscribe(res=>{
    //   this.civils=res;
    // })

   }

  get type() {
    return this.searchForm.controls;
  }
  // onTry(){
  //   const query:string=this.searchForm.value;
  //   this.civilService.gMarriage(query)
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
       this.civilService.gCivil(query)
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
      this.birthService.Adoption(query,this.createBirthForm.value)
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