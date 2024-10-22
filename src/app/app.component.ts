import {
  Component,
  OnInit,
  ChangeDetectorRef,
  AfterViewInit,
} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { WishItem } from '../shared/models/wishItem';
import { WishListComponent } from './wish/wish-list/wish-list.component';
import { AddWishFormComponent } from './wish/add-wish-form/add-wish-form.component';
import { WishFilterComponent } from './wish/wish-filter/wish-filter.component';
import events from '../shared/services/EventService';
import { WishService } from './wish/wish.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    CommonModule,
    FormsModule,
    WishListComponent,
    AddWishFormComponent,
    WishFilterComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit, AfterViewInit {
  items: WishItem[] = [];
  filter: any;

  constructor(
    private wishService: WishService,
    private cdr: ChangeDetectorRef
  ) {
    events.listen('removeWish', (wish: any) => {
      // todo: remove wish from items

      let index = this.items.indexOf(wish);
      this.items.splice(index, 1);
    });
  }

  ngOnInit(): void {
    this.wishService.getWishes().subscribe(
      (data: any) => {
        this.items = data;
      },
      (error: any) => {
        alert(error.message);
      }
    );
  }

  ngAfterViewInit(): void {
    // Any binding or filter-related logic that could cause issues
    this.filter = (item: WishItem) => item;
    this.cdr.detectChanges();
  }
}
