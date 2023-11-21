import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {


  photoCover: string = "https://www.unfe.org/wp-content/uploads/2019/04/SM-placeholder.png"
  contentTitle: string = "MINHA NOTÍCIA"
  contentDescription: string = "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur,veritatis? Hic eum reiciendis accusantium aperiam dolor placeat nobis enimnesciunt dolorem nihil quam odio laudantium nemo dolorum, a, assumendaveritatis."

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(value =>
      console.log(value.get("id"))
    )
  }

}
