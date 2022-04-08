import { Component, OnInit } from '@angular/core';
import { Project } from '../project';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {


  projects: Project[] = [
    new Project('First','The first project','Designer','01/22/2013'),
    new Project('Second','The first project','Designer','01/22/2013'),
    new Project('Third','The first project','Designer','01/22/2013')
  ]

  deleteThisProject(deleteProject: any, index: any){
    if(deleteProject){
      this.projects.splice(index, 1);
    }
  }

  showDetails(index:any){
    this.projects[index].showProjectDetails = !this.projects[index].showProjectDetails;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
