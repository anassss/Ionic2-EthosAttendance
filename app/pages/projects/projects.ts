import {Component} from "@angular/core";
//import {Page} from 'ionic-angular';
import {NavController} from 'ionic-angular';
import {WebServices} from '../../providers/web-services/web-services';


@Component({
  templateUrl: 'build/pages/projects/projects.html',
  providers : [WebServices]
})
export class ProjectsPage {
    
  public projects : any; 

  constructor(private navController: NavController, public webServices : WebServices) {
      this.loadProjects();
  }

  loadProjects(){
    this.webServices.load('http://amc.ethoserp.com/smartapp/getprojectsdd/?userid=1')
    .then(data => {
      this.projects = data;
    });
  }

  goBack() {
    this.navController.pop({animate: true, direction: 'forward'})
  }

}