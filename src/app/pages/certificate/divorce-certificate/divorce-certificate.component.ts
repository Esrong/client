import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-divorce-certificate',
  templateUrl: './divorce-certificate.component.html',
  styleUrls: ['./divorce-certificate.component.scss']
})
export class DivorceCertificateComponent implements OnInit {
	image_src: string = "assets/images/Flag_of_Ethiopia.jpg";
  constructor() { }

  ngOnInit(): void {
  }
  // playground requires you to assign document definition to a variable called dd

 dd = {
	content: [
		'pdfmake (since it\'s based on pdfkit) supports JPEG and PNG format',
		'If no width/height/fit is provided, image original size will be used',
		{
			image: 'sampleImage.jpg',
		},
		'If you specify width, image will scale proportionally',
		{
			image: 'sampleImage.jpg',
			width: 150
		},
		'If you specify both width and height - image will be stretched',
		{
			image: 'sampleImage.jpg',
			width: 150,
			height: 150,
		},
		'You can also fit the image inside a rectangle',
		{
			image: 'sampleImage.jpg',
			fit: [100, 100],
			pageBreak: 'after'
		},
	
		// Warning! Make sure to copy this definition and paste it to an
		// external text editor, as the online AceEditor has some troubles
		// with long dataUrl lines and the following image values look like
		// they're empty.
		'Images can be also provided in dataURL format...',
		{
	        image: 'data:image/jpeg;base64,EngMarriagefinal.jpg',
	        width: 200
		},
		'or be declared in an "images" dictionary and referenced by name',
		{
			image: 'building',
			width: 200
		},
		'and opacity is supported:',
		{
			image: 'sampleImage.jpg',
			width: 150,
			opacity: 0.5
		},
	],
	images: {
		building: 'data:image/jpeg;base64,EngMarriagefinal.jpg'
	}
	
}

}
