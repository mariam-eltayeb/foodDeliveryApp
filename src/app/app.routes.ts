import { FavouratesComponent } from './Pages/favourates/favourates.component';
import { Routes } from '@angular/router';
import { LandingPageComponent } from './Pages/landing-page/landing-page.component';
import { DishesPageComponent } from './Pages/dishes-page/dishes-page.component';
import { AboutPageComponent } from './Pages/about-page/about-page.component';
import { ContactPageComponent } from './Pages/contact-page/contact-page.component';
import { SigninPageComponent } from './Pages/signin-page/signin-page.component';
import { PaymentPageComponent } from './Pages/payment-page/payment-page.component';
import { CheckoutPageComponent } from './Pages/checkout-page/checkout-page.component';
import { CartComponent } from './Pages/cart/cart.component';
import { DetailsComponent } from './Pages/details/details.component';
import { authGuard } from './Services/auth.guard';
import { BlogPageComponent } from './Pages/blog-page/blog-page/blog-page.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  { path: 'home', component: LandingPageComponent },
  { path: 'about', component: AboutPageComponent },
  { path: 'menu', component: DishesPageComponent},
  { path: 'details/:id', component: DetailsComponent },
  { path: 'fav', component: FavouratesComponent },
  { path: 'contact', component: ContactPageComponent },
  { path: 'sign', component: SigninPageComponent },
  { path: 'profile', component: PaymentPageComponent },
  {
    path: 'checkout',
    component: CheckoutPageComponent,
    canActivate: [authGuard],
  },
  { path: 'cart', component: CartComponent },
  { path: 'blog', component: BlogPageComponent },
];
