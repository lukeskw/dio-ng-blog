import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css', './card.responsive.component.css']
})
export class CardComponent {
  @Input()
  photoCover:string =""
  @Input()
  cardTitle:string =""
  @Input()
  id:string = "0"

  constructor(){}
}
