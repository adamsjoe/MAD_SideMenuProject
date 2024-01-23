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
    },
    {
      id: '2',
      title: 'Wolf of Wall Street',
      dir: 'Martin Scorsese',
      rating: '18',
    },
    {
      id: '3',
      title: 'Ghostbusters',
      dir: 'Ivan Reitman',
      rating: 'PG',
    },
    {
      id: '4',
      title: 'Star Wars',
      dir: 'George Lucs',
      rating: 'PG',
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
