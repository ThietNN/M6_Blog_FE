import { Component, OnInit } from '@angular/core';
import {Blog} from '../model/blog';
import {BlogService} from '../service/blog.service';
import {ActivatedRoute, Router} from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-blog-detail',
  templateUrl: './blog-detail.component.html',
  styleUrls: ['./blog-detail.component.css']
})
export class BlogDetailComponent implements OnInit {
  id: number;
  blog: Blog;
  constructor(private blogService: BlogService,
              private activatedRoute: ActivatedRoute,
              private router: Router) {
    this.activatedRoute.paramMap.subscribe((data) => {
      this.id = +data.get('id');
      this.showBlog(this.id);
    });
  }

  ngOnInit() {
  }
  showBlog(id) {
    this.blogService.getBlogById(id).subscribe((data) => {
      this.blog = data;
    }, error => {
      console.log(error);
    });
  }
  remove() {
    Swal.fire({
      title: 'Are you sure?',
      text: 'You won\'t be able to revert this!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.blogService.removeBlog(this.id) .subscribe(() => {
          this.router.navigate(['/']);
        });
        Swal.fire(
          'Deleted!',
          'Your blog has been deleted.',
          'success'
        );

      } else {
        this.router.navigate(['/', this.id]);
      }
    });
  }

}
