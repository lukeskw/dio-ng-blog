import { Component } from '@angular/core';
import { MainTitleComponent } from '../../components/main-title/main-title.component';
import { ArticlesComponent } from '../../components/articles/articles.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MainTitleComponent, ArticlesComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css',  './home.responsive.component.css']
})
export class HomeComponent {

}
