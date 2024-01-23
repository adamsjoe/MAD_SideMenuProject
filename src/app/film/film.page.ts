import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-film',
  templateUrl: './film.page.html',
  styleUrls: ['./film.page.scss'],
})
export class FilmPage implements OnInit {
  private id!: string;
  public title!: string;
  private dir!: string;
  private rating!: string;

  constructor(private route: ActivatedRoute) {
    this.route.queryParams.subscribe((data) => {
      this.id = data['film'].id;
      this.title = data['film'].title;
      this.dir = data['film'].dir;
      this.rating = data['film'].rating;
    });
  }

  ngOnInit() {}
}
