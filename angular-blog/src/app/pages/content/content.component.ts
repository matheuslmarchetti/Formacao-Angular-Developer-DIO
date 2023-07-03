import { Component } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent {
  photoCover:string = 'https://source.unsplash.com/random/?technology';
  contentTitle:string = 'Lorem ipsum dolor sit amet consectetur adipisicing elit.';
  contentDescription:string = 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repudiandae nobis nisi sint accusamus autem eaque voluptatem iste ratione distinctio veniam quisquam, quam, dolorum esse facilis iure commodi cupiditate nesciunt dolores!';
}
