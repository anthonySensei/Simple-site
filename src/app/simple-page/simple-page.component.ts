import { Component, OnInit } from '@angular/core';

import { faStar, faMoon, faSun, faAngleRight,
        faAngleDoubleDown, faAngleDoubleUp
       } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-simple-page',
  templateUrl: './simple-page.component.html',
  styleUrls: ['./simple-page.component.css']
})
export class SimplePageComponent implements OnInit {

  faStar=faStar;
  faMoon=faMoon;
  faSun=faSun;
  faAngleDoubleIcon=faAngleDoubleDown;
  faAngleRight=faAngleRight;
  redIcon = false;


  constructor() { }



//Image methods

  showCardOptions(domElement:any){
      let img = domElement;
      let contactButton = img.nextSibling;
      let moreInfo = contactButton.nextSibling;
      img.style.filter = "blur(5px) grayscale(100%)";
      img.style.WebkitFilter = "blur(5px) grayscale(100%)";
      contactButton.style.display = "block";
      moreInfo.style.display = "block";
  }
  hideCardOptions(domElement:any){
      let img = domElement;
      let contactButton = img.nextSibling;
      let moreInfo = contactButton.nextSibling;
      img.style.filter = "blur(0) grayscale(0)";
      img.style.WebkitFilter = "blur(0) grayscale(0)";
      contactButton.style.display = "none";
      moreInfo.style.display = "none";
  }


  keepCardOptionsForBtn(domElement:any){
      let img = domElement.previousSibling;
      this.showCardOptions(img);
  }
  keepCardOptionsForSpn(domElement:any){
      let img = domElement.previousSibling.previousSibling;
      this.showCardOptions(img);
  }
  hideCardOptionsForSpn(img:any){
      this.hideCardOptions(img);
  }

  displayContent(domElement:any){
    let cardContentClassList = domElement.parentNode.nextSibling.classList;
        cardContentClassList.toggle("show");
        let str:string = cardContentClassList.toString();
        let classList = str.split(' ');
          if(classList.includes("show")){
            this.faAngleDoubleIcon = faAngleDoubleUp;
          }else{
            this.faAngleDoubleIcon = faAngleDoubleDown;
          }
  }



  ngOnInit() {
  }

}
