import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {
  array = [1, 2, 3, 4];

  constructor() {
  }

  ngOnInit() {
  }

}
