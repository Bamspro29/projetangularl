import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './identification/login/login.component';
import { RegisterComponent } from './identification/register/register.component';
import { ForgetloginComponent } from './identification/forgetlogin/forgetlogin.component';
import { FormulaireComponent } from './identification/formulaire/formulaire.component';
import { CarouselComponent } from './carousel/carousel.component';
import { NavbarComponent } from './dashboard/navbar/navbar.component';
import { FormcardComponent } from './formcard/formcard.component';
import { SidebarComponent } from './dashboard/sidebar/sidebar.component';
import { NewFolderDialogComponent } from './dashboard/new-folder-dialog/new-folder-dialog.component';
import { MainComponent } from './dashboard/main/main.component';

// Importation des modules Angular Material nécessaires
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatExpansionModule } from '@angular/material/expansion';
import { MesformsComponent } from './pages/mesforms/mesforms.component';
import { FormarchiveComponent } from './pages/formarchive/formarchive.component';
import { FormtrashComponent } from './pages/formtrash/formtrash.component';
import { MysubmissionsComponent } from './pages/mysubmissions/mysubmissions.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ForgetloginComponent,
    FormulaireComponent,
    CarouselComponent,
    NavbarComponent,
    FormcardComponent,
    SidebarComponent,
    NewFolderDialogComponent,
    MainComponent,
    MesformsComponent,
    FormarchiveComponent,
    FormtrashComponent,
    MysubmissionsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    AppRoutingModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatExpansionModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
