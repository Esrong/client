import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-marriage-certificate',
  templateUrl: './marriage-certificate.component.html',
  styleUrls: ['./marriage-certificate.component.scss']
})
export class MarriageCertificateComponent implements OnInit {
  image_src: string = "assets/images/Flag_of_Ethiopia.jpg";
  constructor() { }

  ngOnInit(): void {
  }

}
