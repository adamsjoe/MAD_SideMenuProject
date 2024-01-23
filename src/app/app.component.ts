import { Component } from '@angular/core';
import { NavigationExtras } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  films = [
    {
      id: '1',
      title: 'Joker',
      dir: 'Todd Phillips',
      rating: '15',
      img: 'https://m.media-amazon.com/images/M/MV5BNGVjNWI4ZGUtNzE0MS00YTJmLWE0ZDctN2ZiYTk2YmI3NTYyXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg',
    },
    {
      id: '2',
      title: 'Wolf of Wall Street',
      dir: 'Martin Scorsese',
      rating: '18',
      img: 'https://m.media-amazon.com/images/M/MV5BMjIxMjgxNTk0MF5BMl5BanBnXkFtZTgwNjIyOTg2MDE@._V1_.jpg',
    },
    {
      id: '3',
      title: 'Ghostbusters',
      dir: 'Ivan Reitman',
      rating: 'PG',
      img: 'https://m.media-amazon.com/images/M/MV5BMTkxMjYyNzgwMl5BMl5BanBnXkFtZTgwMTE3MjYyMTE@._V1_.jpg',
    },
    {
      id: '4',
      title: 'Star Wars',
      dir: 'George Lucs',
      rating: 'PG',
      img: 'https://m.media-amazon.com/images/M/MV5BZjQwMTE4YmQtMGUyZC00NTYxLWFkMGItNTg4MmVjOGFlODYxXkEyXkFqcGdeQXVyMTEwNDU1MzEy._V1_.jpg',
    },
  ];

  constructor(private navCtrl: NavController) {}

  showFilm(film: any) {
    const navExtra: NavigationExtras = {
      queryParams: {
        film,
      },
    };
    this.navCtrl.navigateForward('film', navExtra);
  }
}
