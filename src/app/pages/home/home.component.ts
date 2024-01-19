import { Component } from '@angular/core';
import { MainTitleComponent } from '../../components/main-title/main-title.component';
import { ArticlesComponent } from '../../components/articles/articles.component';
import { MenuBarComponent } from '../../components/menu-bar/menu-bar.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MainTitleComponent, ArticlesComponent, MenuBarComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
