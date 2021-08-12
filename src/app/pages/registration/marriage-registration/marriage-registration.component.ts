import { Component, NgZone, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { first, finalize } from 'rxjs/operators';
import { Marriage } from 'src/app/core/models/marriage';
import { AlertService } from 'src/app/core/services/alert.service';
import { CivilService } from 'src/app/core/services/civil.service';
import { MarriageService } from 'src/app/core/services/marriage';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-marriage-registration',
  templateUrl: './marriage-registration.component.html',
  styleUrls: ['./marriage-registration.component.scss']
})
export class MarriageRegistrationComponent implements OnInit {
  breadCrumbItems: Array<{}>;
  marriages:Marriage[]=[];

  createMarriageForm: FormGroup;
  searchForm: FormGroup;
  loading:boolean;
  enable:boolean;
  // query:any;
  civils:any  =[];
  error = '';
  error1 = '';
  successmsg = false;
  successmsg1 = false;
  onsubmit: boolean;
  success = '';
  closed = false;


  constructor(
    public formBuilder: FormBuilder,
    private ngZone: NgZone,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private marriageService:MarriageService,
    private civilService:CivilService,
    private alertService: AlertService,
     ) { 
      this.searchForm=this.formBuilder.group({
        groom:['',[Validators.required]],
        bride:['',[Validators.required]]
      })

      this.createMarriageForm=this.formBuilder.group({
        place:[''],
        marriageDate:[''],
        marriageForm:[''],
        // groom:[''],
        // bride:[''],
        child:[''],
        region:[''],
        brideWitnessOne:[],
        brideWitnessTwo:[''],
        groomWitnessOne:[''],
        groomWitnessTwo:[''],
        // countMarriage:[]
      })

    }

  ngOnInit(): void { }

  get type() {
    return this.searchForm.controls;
  }

   onSubmit(){
    this.success='';
    this.onsubmit=true;
     const civil:string =this.searchForm.value.groom;
     const civil2:string =this.searchForm.value.bride;
    //  this.router.navigate([`/marriage/`+`${civil}/`+`${civil2}`]);
         
    if(this.searchForm.invalid){
      return;
    }
    if(civil){
      this.loading=true;
      this.civilService.gCivil(civil)
      .pipe(first())
      .pipe(finalize(()=>this.loading=false))
      .subscribe(
        civils => {
          this.successmsg = true;
          this.civils=civils;
          if (this.successmsg) {
            // this.successmsg = true;
            this.civils=civils;
            this.loading=false;  

          }
      
        },
        error => {
          this.error = error ? error : '';
          this.loading=true;
        });    
    }
    if(civil2){
      this.loading=true;
      this.civilService.gCivil(civil2)
      .pipe(first())
      .pipe(finalize(()=>this.loading=false))
      .subscribe(
        civils => {
          this.successmsg = true;
          this.civils=civils;
          if (this.successmsg) {
            this.successmsg1 = true;
            this.civils=civils;
            this.loading=false;
          }

        },
        error => {
          this.error1 = error ? error : '';
          this.loading=true;
        });   
      
    }

    }

  onPush(){
    this.loading=true;
    
    const civil:string =this.searchForm.value.groom;
    const civil2:string =this.searchForm.value.bride;

      
      this.marriageService.cMarriage(civil,civil2,this.createMarriageForm.value)
      // .pipe(first())
      // .pipe(finalize(()=>this.loading=false))
      .subscribe({
        next:()=> Swal.fire({
          title: 'Registration Success full!',
          text: 'You can see under registred table!',
          icon: 'success',
          showCancelButton: false,
          confirmButtonColor: '#5438dc',
          
    
        })
        
        ,
        error: error=>this.alertService.error(error), })
        if(this.successmsg=true){
          this.ngZone.run(()=>this.router.navigateByUrl('/registred/marriage-registred'))
          
        }
  
      
  }
}