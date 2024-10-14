import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { WishItem } from '../shared/models/wishItem';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  items: WishItem[] = [
    new WishItem('To learn Angular'),
    new WishItem('Get Coffe', true),
    new WishItem('Find Grass'),
  ];

  listFilter: string = '0';

  newWishText = '';

  title = 'wishlist';

  addNewWish() {
    this.items.push(new WishItem(this.newWishText)); // add new wish to items array
    this.newWishText = ''; // clear textbox
  }

  filterChanged(value: any) {
    console.log(value);
  }

  toggleItem(item: WishItem) {
    item.isComplete = !item.isComplete;
    console.log(item);
  }
}
