import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {BlogService} from '../service/blog.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-blog-update',
  templateUrl: './blog-update.component.html',
  styleUrls: ['./blog-update.component.css']
})
export class BlogUpdateComponent implements OnInit {
  id: number;
  blogUpdateForm: FormGroup = new FormGroup({
    title: new FormControl(),
    content: new FormControl()
  });

  constructor(private blogService: BlogService, private router: Router, private activatedRouter: ActivatedRoute) {
    this.activatedRouter.paramMap.subscribe((data) => {
      this.id = +data.get('id');
      this.getBlog(this.id);
    });
  }

  ngOnInit() {
  }
  getBlog(id: number) {
    return this.blogService.getBlogById(id).subscribe((blog) => {
      this.blogUpdateForm = new FormGroup({
        id: new FormControl(id),
        title: new FormControl(blog.title),
        image: new FormControl(blog.image),
        user: new FormControl(blog.user),
        content: new FormControl(blog.content)
      });
    });
  }
  updateBlog(id: number) {
    const blog = this.blogUpdateForm.value;
    this.blogService.updateBlog(id, blog).subscribe(() => {
      alert('blog updated successfully');
      this.router.navigate([`/detail/${id}`]);
    });
  }

}
