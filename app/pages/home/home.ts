import {Component, Inject} from "@angular/core";
import {NavController, Platform} from 'ionic-angular';
import {ProjectsPage} from '../projects/projects';

@Component({
  templateUrl: 'build/pages/home/home.html'
})
export class HomePage {

  //goToProjectsPage = ProjectsPage;
  // constructor(private navController: NavController) {
      
  // }

  navController;
  platform;
  constructor(@Inject(NavController) navController, @Inject(Platform) platform){
    this.navController = navController;
    this.platform = platform;
    
    this.platform.registerBackButtonAction(function(){
    },500);
  }

  goToProjectsPage( ) {
    this.navController.push(ProjectsPage,{},{animate: true, direction: 'back'});
  }
}
