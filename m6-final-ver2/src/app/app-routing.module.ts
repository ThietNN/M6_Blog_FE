import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {BlogComponent} from './blog/blog.component';
import {BlogDetailComponent} from './blog-detail/blog-detail.component';
import {BlogUpdateComponent} from './blog-update/blog-update.component';
import {BlogCreateComponent} from './blog-create/blog-create.component';


const routes: Routes = [
  {
    path: '',
    component: BlogComponent
  },
  {
    path: 'detail/:id',
    component: BlogDetailComponent
  },
  {
    path: 'update/:id',
    component: BlogUpdateComponent
  },
  {
    path: 'create',
    component: BlogCreateComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
