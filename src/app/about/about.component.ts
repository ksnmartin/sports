import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {


  constructor(private titleService: Title, private metaService: Meta,private scroll : ViewportScroller) {
    this.titleService.setTitle('IIT (BHU) GnSC');
    this.metaService.addTags([
      { name: 'keywords', content: 'Games and Sports Council (GnSC) | IIT (BHU), Varanasi ' },
      { name: 'description', content: 'GAMES AND SPORTS COUNCIL (GnSC) | IIT (BHU), VARANASI' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' }
    ]);
  }
  ngOnInit(): void {
  }

  public scrolling(ID : string):void {
    this.scroll.scrollToAnchor(ID);
  }


}


