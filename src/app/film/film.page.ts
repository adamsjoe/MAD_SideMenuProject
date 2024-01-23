import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-film',
  templateUrl: './film.page.html',
  styleUrls: ['./film.page.scss'],
})
export class FilmPage implements OnInit {
  public id!: string;
  public title!: string;
  public dir!: string;
  public rating!: string;
  public img!: string;

  constructor(private route: ActivatedRoute) {
    this.route.queryParams.subscribe((data) => {
      this.id = data['film'].id;
      this.title = data['film'].title;
      this.dir = data['film'].dir;
      this.rating = data['film'].rating;
      this.img = data['film'].img;
    });
  }

  ngOnInit() {}
}
