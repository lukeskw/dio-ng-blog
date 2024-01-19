import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-highlighted-card',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './highlighted-card.component.html',
  styleUrls: ['./highlighted-card.component.css', './highlighted-card.responsive.component.css']
})
export class HighlightedCardComponent {
  @Input()
  photoCover: string = ""
  @Input()
  cardTitle: string = ""
  @Input()
  cardDescription: string = ""
  @Input()
  id:string="0"

  constructor(){}
}
