import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './identification/login/login.component';
import { RegisterComponent } from './identification/register/register.component';
import { ForgetloginComponent } from './identification/forgetlogin/forgetlogin.component';
import { FormulaireComponent } from './identification/formulaire/formulaire.component';
import { CarouselComponent } from './carousel/carousel.component';
import { NavbarComponent } from './dashboard/navbar/navbar.component';
import { FormcardComponent } from './formcard/formcard.component';
import { NewFolderDialogComponent } from './dashboard/new-folder-dialog/new-folder-dialog.component';
import { MainComponent } from './dashboard/main/main.component';
import { SidebarComponent } from './dashboard/sidebar/sidebar.component';
import { MesformsComponent } from './pages/mesforms/mesforms.component';
import { FormarchiveComponent } from './pages/formarchive/formarchive.component';
import { FormtrashComponent } from './pages/formtrash/formtrash.component';
import { MysubmissionsComponent } from './pages/mysubmissions/mysubmissions.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' }, // Redirection vers LoginComponent par défaut
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  {path:"forgetlogin",component:ForgetloginComponent},
  {path:"formulaire",component:FormulaireComponent},
  {path: "carousel",component:CarouselComponent},
  {path:"navbar", component:NavbarComponent},
  {path:"formcard",component:FormcardComponent},
  {path:"sidebar",component:SidebarComponent},
  {path:"new-folder-dialog", component:NewFolderDialogComponent},
  {path:"main", component:MainComponent},

  // PAGES
  {path:"mesforms",component:MesformsComponent},
  {path:"formarchive", component:FormarchiveComponent},
  {path:"formtrash", component:FormtrashComponent},
  {path:"mysubmissions", component:MysubmissionsComponent}
  


  // Ajoutez d'autres routes ici si nécessaire
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
