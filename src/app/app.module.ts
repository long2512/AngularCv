import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClientLayoutComponent } from './layouts/client-layout/client-layout.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { FooterComponent } from './components/client/footer/footer.component';
import { HeaderComponent } from './components/client/header/header.component';
import { HomePageComponent } from './components/client/home-page/home-page.component';
import { BannerComponent } from './components/client/banner/banner.component';
import { BlogComponent } from './components/client/blog/blog.component';
import { NavbarAdminComponent } from './components/admin/navbar-admin/navbar-admin.component';
import { DashboardComponent } from './components/admin/dashboard/dashboard.component';
import { ListProfileComponent } from './components/admin/Profiles/list-profile/list-profile.component';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzProgressModule } from 'ng-zorro-antd/progress';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzSkeletonModule } from 'ng-zorro-antd/skeleton';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { ListProjectComponent } from './components/admin/Projects/list-project/list-project.component';
import { ProjectComponent } from './components/client/project/project.component';
import { DetalProjectComponent } from './components/client/detal-project/detal-project.component';
import { FormProjectComponent } from './components/admin/Projects/form-project/form-project.component';


// registerLocaleData(en);



@NgModule({
  declarations: [
    AppComponent,
    ClientLayoutComponent,
    AdminLayoutComponent,
    FooterComponent,
    HeaderComponent,
    HomePageComponent,
    BannerComponent,
    BlogComponent,
    NavbarAdminComponent,
    DashboardComponent,
    ListProfileComponent,
    ListProjectComponent,
    ProjectComponent,
    DetalProjectComponent,
    FormProjectComponent,

    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule,
    BrowserAnimationsModule,
    NzIconModule,
    NzLayoutModule,
    NzMenuModule,
    NzTableModule,
    NzFormModule,
    NzProgressModule,
    NzInputModule,
    NzSkeletonModule,
    NzButtonModule,
    ReactiveFormsModule
  ],
  providers: [{ provide: NZ_I18N, useValue: en_US }],
  bootstrap: [AppComponent]
})
export class AppModule { }
