import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { StudentLoginComponent } from './student-login/student-login.component';
import { InstructorLoginComponent } from './instructor-login/instructor-login.component';
import { StudentRegisterComponent } from './student-register/student-register.component';
import { InstructorRegisterComponent } from './instructor-register/instructor-register.component';
import { RegisterComponent } from './register/register.component';
import { AdminComponent } from './admin/admin.component';
import { StudentComponent } from './student/student.component';
import { InstructorComponent } from './instructor/instructor.component';

const routes: Routes = [
  {path: '', redirectTo: '/login ', pathMatch:'full'},
{path:'Admin', component:AdminComponent},


{path:'student', component:StudentComponent},
{path:'instructor', component:InstructorComponent},


  {path: '', redirectTo: 'home', pathMatch:'full'},
  {path:'home', component: HomeComponent},
  {path:'about', component: AboutComponent},
  
  {
    path:'login',component: LoginComponent, 
    children: [
      {path:'admin-login', component:AdminLoginComponent },
      {path:'student-login', component:StudentLoginComponent},
      {path:'instructor-login', component:InstructorLoginComponent}
     
    ]
  },
  {
    path:'register', component:RegisterComponent,
    children:[
      {path:'student-register', component:StudentRegisterComponent},
      {path:'instructor-register', component:InstructorRegisterComponent}
    ]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }