//Importation des composants pour l'affichage et la gestion de l'ecran

import { Component } from '@angular/core';

//Decorateur
//permet d'indiquer le role de l'element aui suit
//et de le parametre
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage {

  public name = 'Rick!';

  public preferedColor = 'warning';

  public isListHidden = true;

  public countryList = [
    {name: 'France', mainCity: 'paris', flag: 'French Flag.jpg', population: 67},
    {name: 'England', mainCity: 'London', flag: 'English Flag.jpg', population: 55},
    {name: 'Germany', mainCity: 'Berlin', flag: null, population: 85}
  ];



  constructor() {}

  
  
  public showHideList(){
    
   /* 
    if(this.isListHidden){
    this.isListHidden = false;
  }else{
    this.isListHidden = true;
  }
  
  */

  //duexieme method
  this.isListHidden = !this.isListHidden;
}

}
