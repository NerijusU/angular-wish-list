import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { WishListComponent } from './wish/wish-list/wish-list.component';
import { AddWishFormComponent } from './wish/add-wish-form/add-wish-form.component';
import { WishFilterComponent } from './wish/wish-filter/wish-filter.component';
import { WishComponent } from './wish/wish.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    WishComponent,
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
export class AppComponent {}
