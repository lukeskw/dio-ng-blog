import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { mockData } from '../../data/mock';

@Component({
  selector: 'app-content',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css', './content.responsive.component.css']
})
export class ContentComponent implements OnInit{
  photoCover: string = ""
  contentTitle: string = ""
  contentDescription: string = ""
  private id:string | null = "0"
  constructor(
    private route: ActivatedRoute,
    private router: Router
  ){}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      console.log(params.get("id"))
      this.id = params.get("id")
    })
    this.setValuesToComponent(this.id)
  }

  setValuesToComponent(id:string | null){
    const result = mockData.filter(article => article.id === this.id)[0]
    if(!result){
      this.router.navigateByUrl('/');
    }
    this.contentTitle = result.title
    this.photoCover = result.photoCover
    this.contentDescription = result.description
  }
}
