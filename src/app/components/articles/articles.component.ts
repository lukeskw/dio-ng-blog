import { Component } from '@angular/core';
import { HighlightedCardComponent } from './highlighted-card/highlighted-card.component';
import { CardComponent } from './card/card.component';

@Component({
  selector: 'app-articles',
  standalone: true,
  imports: [HighlightedCardComponent, CardComponent],
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css', './articles.responsive.component.css']
})
export class ArticlesComponent {

}
