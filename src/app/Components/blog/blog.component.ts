import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  img : string;
  constructor() { 
    this.img = "../../../assets/img/photos/b4.jpg";
  }

  ngOnInit(): void {
    
  }

}
