import { Component, NgZone, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup, FormControl, AbstractControl } from '@angular/forms';
import { AccountService } from 'src/app/core/services/account.service';
import { finalize, first } from 'rxjs/operators';
import { ActivatedRoute, Router } from '@angular/router';
import { mustMatchValidator } from 'src/app/core/helpers/must-match.validator';
import { Account } from 'src/app/core/models/account';
import { Role } from 'src/app/core/models/role';
import { AlertService } from 'src/app/core/services/alert.service';
import { error } from 'protractor';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.scss']
})
export class CreateAccountComponent implements OnInit {
  form: FormGroup;
  resetForm: FormGroup;
  breadCrumbItems: Array<{}>;
  onsubmit: boolean;
  error = '';
  success = '';
  loading : boolean;
  successmsg = false;
  submitted: boolean;


  constructor(  
    private ngZone: NgZone,
    private formBuilder: FormBuilder,
    private alertService: AlertService,
    private router: Router,
    private accountService: AccountService,
   ) { }

  ngOnInit(): void {
    document.body.removeAttribute('data-layout');
    document.body.classList.add('auth-body-bg');
    this.resetForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
    });
    this.resetForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
     });
        this.form=this.formBuilder.group({
          firstName:['',[Validators.required]],
          lastName:['',[Validators.required]],
          region:['',[Validators.required]],
          zone:['',[Validators.required]],
          wereda:['',[Validators.required]],
          kebele:['',[Validators.required]],
          gender:['',],
          citizenship:['',],
          age:['',],
          role:[''],
          email:['',[Validators.required]],
          phone:['',[Validators.required]],
          password: ['', [Validators.required],[Validators.minLength(6)]],
          confirmPassword: ['']
      }, {
          validator: mustMatchValidator
      });
        this.onsubmit = false;
        this.submitted=false;
  }
  get type() {
    return this.form.controls;
  }
  onSubmit(){
    this.success='';
    this.onsubmit=true;
    if(this.form.invalid){
      return;
    }
    else{
      this.loading=true;

      this.accountService.create(this.form.value)
      .pipe(first())
      .pipe(finalize(()=>this.loading=false))
      .subscribe({
        next:()=>this.alertService.success('registration sucssfull please cheack ander registred'),
        error: error=>this.alertService.error(error), })

    }   
    if(this.successmsg=true){
      // this.ngZone.run(()=>this.router.navigateByUrl('/registred/civil-registred'))
    }
  }
  get f() { return this.resetForm.controls; }

  onSend(){
    this.success='';
    this.submitted=true;
   
    if (this.resetForm.invalid) {
      return;
    } 
    else {
      this.loading=true; 
      Swal.fire({
        title: 'Account Created Successfully!',
        text: 'You can see here!',
        icon: 'success',
        showCancelButton: false,
        confirmButtonColor: '#5438dc',
  
      });
      
      this.accountService.forgotPassword(this.f.email.value)
      .pipe(first())
      .pipe(finalize(()=>this.loading=false))
      .subscribe({
        next: () => this.alertService.success('Please check your email for password reset instructions'),
        
        error: error => this.alertService.error(error)  });

    }
    if(this.successmsg=true){
      this.ngZone.run(()=>this.router.navigateByUrl('/list-account'))
    }
    

  }
    
}

      // this.form = new FormGroup({
      //   'firstName': new FormControl('', [
      //     Validators.required
      //   ]),
      //   'lastName': new FormControl('', [
      //     Validators.required
      //   ]),
      //   'date': new FormControl('', [
      //     Validators.required
      //   ]),
      //   'role': new FormControl('', [
      //     Validators.required
      //   ]),
      //   'wereda': new FormControl('', [
      //     Validators.required,
      //     Validators.minLength(10)
      //   ]),
      //   'zone': new FormControl('', [
      //     Validators.required,
      //     Validators.minLength(10)
      //   ]),
      //   'region': new FormControl('', [
      //     Validators.required,
      //   ]),
      //   'kebele': new FormControl('', [
      //     Validators.required,

      //   ]),
      //   'email': new FormControl('', [
      //     Validators.required,

      //   ]),
      //   'phone': new FormControl('', [
 

      //   ]),
      //  'acceptTerms': new FormControl( '', [Validators.requiredTrue]),
      //   'password': new FormControl('', [
      //     Validators.required,
      //     Validators.minLength(3),
      //     Validators.maxLength(16)
      //   ]),
      //   'confirmPassword': new FormControl(''),
      // },{ validators: mustMatchValidator });
  // }

  // get f() { 
  //   return this.form.controls; }
    
  
  // onSubmit() {
  //   this.success = '';
  //   this.submitted = true;
   
  //   if(this.form.invalid){
  //     return;
  //   }else{
  //     this.loading=true;
  //     this.accountService.create(this.form.value)
  //     .pipe(first())
  //     .pipe(finalize(()=>this.loading=false))
  //     .subscribe({
  //       next:()=>this.alertService.success('move to next spet u have aleady finesh hear'),
  //       error:error=>this.alertService.error(error),
  //     })
      // .create(this.form.value)
      // .subscribe((res) => {
      //   this.router.navigate(['/edit-account']);
      // });

  //   }

 


  // }
  // onSend(){
  //   this.success = '';
  //   this.submitted = true;
  //   this.loading=true;
  //   // this.accountService.forgotPassword(this.f.email.value)  
  //   this.accountService.forgotPassword(this.f.email.value)
  //   .pipe(first())
  //   .pipe(finalize(()=>this.loading=false))
  //   .subscribe({
  //     next: () => this.alertService.success('Please check your email for password reset instructions'),
      
  //     error: error => this.alertService.error(error)
     
  // });
  // }
  // get firstName(): AbstractControl {
  //   return this.form.get('fistName');
  // }

  // get lastName(): AbstractControl {
  //   return this.form.get('lastName');
  // }

  // get date(): AbstractControl {
  //   return this.form.get('date');
  // }
  // get role(): AbstractControl{
  //   return this.form.get('role');
  // }

  // get region(): AbstractControl {
  //   return this.form.get('region');
  // }

  // get zone(): AbstractControl {
  //   return this.form.get('zone');
  // }

  // get wereda(): AbstractControl {
  //   return this.form.get('wereda');
  // }

  // get kebele(): AbstractControl {
  //   return this.form.get('kebele');
  // }

  // get email(): AbstractControl {
  //   return this.form.get('email');
  // }

  // get phone(): AbstractControl {
  //   return this.form.get('phone');
  // }

  // get password(): AbstractControl {
  //   return this.form.get('password');
  // }

  // get confirmPassword(): AbstractControl {
  //   return this.form.get('confirmPassword');
  // }
  // get acceptTerms(): AbstractControl{
  //   return this.form.get('acceptTerms');
  // }

// }
