import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { RegComponent } from './reg/reg.component';
import { LoginComponent } from './login/login.component';
import { ViewComponent } from './view/view.component';
import { SavedComponent } from './saved/saved.component';
import { RecipeComponent } from './recipe/recipe.component';


export const routes: Routes = [
    {path:'',component:HomeComponent },
    {path:'abt',component:AboutComponent },
    {path:'contact',component:ContactComponent },
    {path:'login',component:LoginComponent },
    {path:'reg',component:RegComponent },
    {path:'view',component:ViewComponent },
    {path:'saved',component:SavedComponent },
    {path:'recipe',component:RecipeComponent },
    {path:'**',redirectTo:''}
];
