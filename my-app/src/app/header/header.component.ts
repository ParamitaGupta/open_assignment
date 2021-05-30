import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  @HostListener("window:scroll", ["$event"])
  onWindowScroll() {
  //In chrome and some browser scroll is given to body tag
  let pos = (document.documentElement.scrollTop || document.body.scrollTop) + document.documentElement.offsetHeight;
  let max = document.documentElement.scrollHeight;
  let pospercent = pos/max*100;
  console.log(pospercent);
   if(pospercent >= 52 )   {
     document.getElementsByTagName('header')[0].classList.add('scroll-header');
   }
   else if(pospercent < 52 ){
    document.getElementsByTagName('header')[0].classList.remove('scroll-header')
   }
  }
}
