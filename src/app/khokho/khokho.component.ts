import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-khokho',
  templateUrl: './khokho.component.html',
  styleUrls: ['./khokho.component.scss']
})
export class KhokhoComponent implements OnInit {
  imageObject: Array<object> = [
  {
        image: '../../assets/khokho/1.jpg',
        thumbImage: '../../assets/khokho/1.jpg',
        alt: 'alt of image',
        title: 'title of image'
    },
      {
        image: '../../assets/khokho/2.jpg',
        thumbImage: '../../assets/khokho/2.jpg',
        alt: 'alt of image',
        title: 'title of image'
    },
      {
        image: '../../assets/khokho/3.jpg',
        thumbImage: '../../assets/khokho/3.jpg',
        alt: 'alt of image',
        title: 'title of image'
    },
      {
        image: '../../assets/khokho/4.jpg',
        thumbImage: '../../assets/khokho/4.jpg',
        alt: 'alt of image',
        title: 'title of image'
    },
      {
        image: '../../assets/khokho/5.jpg',
        thumbImage: '../../assets/khokho/5.jpg',
        alt: 'alt of image',
        title: 'title of image'
    },
      {
        image: '../../assets/khokho/6.jpg',
        thumbImage: '../../assets/khokho/6.jpg',
        alt: 'alt of image',
        title: 'title of image'
    },
      {
        image: '../../assets/khokho/7.jpg',
        thumbImage: '../../assets/khokho/7.jpg',
        alt: 'alt of image',
        title: 'title of image'
    },

];

  constructor() { }

  ngOnInit(): void {
  }

}
