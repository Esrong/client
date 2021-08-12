import { Component, NgZone, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { MarriageService } from 'src/app/core/services/marriage';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-marriage',
  templateUrl: './marriage.component.html',
  styleUrls: ['./marriage.component.scss']
})
export class MarriageComponent implements OnInit {
  breadCrumbItems: Array<{}>;

  createMarriageForm: FormGroup;
  getId: any;
  constructor(
    public formBuilder: FormBuilder,
    private ngZone: NgZone,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private marriageService: MarriageService) { 
      this.createMarriageForm=this.formBuilder.group({
        place:[''],
        marriageDate:[''],
        marriageForm:[''],
        region:[''],
        groom:[''],
        bride:[''],
        child:[''],
        brideWitnessOne:[],
        brideWitnessTwo:[''],
        groomWitnessOne:[''],
        groomWitnessTwo:[''],
        // countMarriage:[]

      })
  

    }

  ngOnInit(): void { 
    this.getId = this.activatedRoute.snapshot.paramMap.get('marriageId');
    this.marriageService
      .gMarriage(this.getId)
      .subscribe((res) => {
        this.createMarriageForm.patchValue({ ...res.data });
      });
   }
  onSubmit():any{
    this.marriageService.uMarriage(this.getId,this.createMarriageForm.value)
    .subscribe(()=>{
          Swal.fire({
            title: 'Registration Updated Success full!',
            text: 'You can see under registred table!',
            icon: 'success',
            showCancelButton: false,
            confirmButtonColor: '#5438dc',
      
          });
      this.ngZone.run(()=>this.router.navigateByUrl('/registred/marriage-registred'))
    }, (err)=>{
      console.log(err);
    })
  }

}
