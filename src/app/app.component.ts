import { Component } from '@angular/core';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'lab8';
  maker = '';
  model = '';
  year = '';
  bodyType = '';
  address = '';
  state = '';
  postcode = '';
  db = [];

  addCar() {
    this.db.push({id: uuidv4(), maker: this.maker, model: this.model, year: parseInt(this.year), bodyType: this.bodyType, 
    address: this.address, state: this.state, postcode: parseInt(this.postcode)});
  }

  deleteOldCars() {
    for (let i = 0; i < this.db.length; i++) {
      if (this.db[i].year < 2000)
      this.db.splice(i, 1);
    }
  }

  getOldCars() {
    let count = 0;
    for (let i = 0; i < this.db.length; i++) {
      if (this.db[i].year < 2000)
      count++;
    }
    return count;
  }

  deleteCar(id) {
    for (let i = 0; i < this.db.length; i++) {
      if (this.db[i].id === id)
      this.db.splice(i, 1);
    }
  }
}
