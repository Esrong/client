import { Component, NgZone, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators, AbstractControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AccountService } from 'src/app/core/services/account.service';
import { AlertService } from 'src/app/core/services/alert.service';
import { environment } from 'src/environments/environment';
import { finalize, first } from 'rxjs/operators';
import { AuthenticationService } from 'src/app/core/services/auth.service';
import { mustMatchValidator } from 'src/app/core/helpers';
import { database } from 'firebase';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-edit-account',
  templateUrl: './edit-account.component.html',
  styleUrls: ['./edit-account.component.scss']
})
export class EditAccountComponent implements OnInit {
  account = this.accountService.accountValue;
  form: FormGroup;
  breadCrumbItems: Array<{}>;
  onsubmit: boolean;
  error = '';
  success = '';
  loading : boolean;
  successmsg = false;
  id:string;
  


  constructor(  
    private ngZone: NgZone,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private alertService: AlertService,
    private router: Router,
    private accountService: AccountService,
   ) { }

  ngOnInit(): void {
    document.body.removeAttribute('data-layout');
    document.body.classList.add('auth-body-bg');
    this.id = this.route.snapshot.params['id'];
    
        this.form=this.formBuilder.group({
          firstName:[this.account.firstName,[Validators.required]],
          lastName:[this.account.lastName,[Validators.required]],
          region:[this.account.region,[Validators.required]],
          zone:[this.account.zone,[Validators.required]],
          wereda:[this.account.wereda,[Validators.required]],
          kebele:[this.account.kebele,[Validators.required]],
          gender:[this.account.gender,],
          citizenship:[this.account.citizenship,],
          age:[this.account.age,],
          role:[this.account.role],
          email:[this.account.email,[Validators.required]],
          phone:[this.account.phone,[Validators.required]],
          password: ['', [Validators.minLength(6)]],
          confirmPassword: ['']
      }, {
          validator: mustMatchValidator
      });
        this.onsubmit = false;

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

      this.accountService.update(this.id, this.form.value)
          .pipe(first())
          .subscribe({
              next: () => {
                Swal.fire({
                  title: 'Account UPdated successfully!',
                  text: 'You can see under profile!',
                  icon: 'success',
                  showCancelButton: false,
                  confirmButtonColor: '#5438dc',
            
                });
                    if(this.successmsg=true){
               this.ngZone.run(()=>this.router.navigateByUrl('/registred/civil-registred'))
    }
                  this.alertService.success('Update successful', { keepAfterRouteChange: true });
                  this.router.navigate(['/profile-detail'], { relativeTo: this.route });
              },
              error: error => {
                  this.alertService.error(error);
                  this.loading = false;
              }
              
          });
    }   

  }
}
