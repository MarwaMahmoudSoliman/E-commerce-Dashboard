import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {
  baseUrl: string = 'http://localhost:3300';
  authRoute: string = '/api/v1/auth';
  usersRoute: string = '/api/v1/users';
  categoriesRoute: string = '/api/v1/categories';
  subcategoriesRoute: string = '/api/v1/subcategories';
  productsRoute: string = '/api/v1/products';
  couponsRoute: string = '/api/v1/coupons';
  orderRoute: string = '/api/v1/orders';
  reviewsRoute: string = '/api/v1/reviews';
  cartsRoute:string ='/api/v1/carts';
  wishlistRoute:string ='/api/v1/wishlist';
  productsImage: string = `${this.baseUrl}/images/products/`
  userImage: string = `${this.baseUrl}/images/users/`
  apiKey: string = 'secret123';
  constructor() { }
}