import { Component, NgZone, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { error } from 'protractor';
import { finalize, first } from 'rxjs/operators';
import { AlertService } from 'src/app/core/services/alert.service';
import { CivilService } from 'src/app/core/services/civil.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-civil-registration',
  templateUrl: './civil-registration.component.html',
  styleUrls: ['./civil-registration.component.scss']
})
export class CivilRegistrationComponent implements OnInit {
  breadCrumbItems: Array<{}>;
  onsubmit: boolean;
  error = '';
  success = '';
  loading : boolean;
  successmsg = false;

  createCivilForm: FormGroup;

  constructor(
    private alertService: AlertService,
    public formBuilder: FormBuilder,
    private ngZone: NgZone,
    private router: Router,
    private civilService: CivilService) { }
    

  ngOnInit() { 

    this.createCivilForm=this.formBuilder.group({
      name:['',[Validators.required]],
      fname:['',[Validators.required]],
      gname:[''],
      gender:[''],
      image:[''],
      birthDate:['',[Validators.required]],
      age:['',[Validators.required]],
      birthPlace:['',[Validators.required]],
      citizenship:['',[Validators.required]],
      ethnicOrigin:['',[Validators.required]],
      religion:['',[Validators.required]],
      region:['',[Validators.required]],
      zone:['',[Validators.required]],
      wereda:['',[Validators.required]],
      kebele:['',[Validators.required]],
      marriage:[''],
      divorce:[''],

    })
    this.onsubmit = false;

   }
  get type() {
    return this.createCivilForm.controls;
  }

  onSubmit(){
    this.success='';
    this.onsubmit=true;
    if(this.createCivilForm.invalid){
      return;
    }
    else{
      this.loading=true;


      this.civilService.createCivil(this.createCivilForm.value)
      .pipe(first())
      .pipe(finalize(()=>this.loading=false))
      .subscribe({
        
        next:()=> Swal.fire({
          title: 'Registration Success full!',
          text: 'You can see under registred table!',
          icon: 'success',
          showCancelButton: false,
          confirmButtonColor: '#5438dc',
    
        }),
        error: error=>{
          this.error = error ? error : '';
          this.loading=true;
        }, })
        if(this.successmsg=true){
          this.ngZone.run(()=>this.router.navigateByUrl('/registred/civil-registred'))
        }

    }   

  }


}
