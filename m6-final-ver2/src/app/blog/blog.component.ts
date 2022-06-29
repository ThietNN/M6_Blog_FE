import { Component, OnInit } from '@angular/core';
import {Blog} from '../model/blog';
import {BlogService} from '../service/blog.service';
import {UserService} from '../service/user.service';
import {User} from '../model/user';
import Swal from 'sweetalert2';
import {Router} from '@angular/router';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  blogList: Blog[] = [];
  blogCount: number;
  userList: User[] = [];
  constructor(private blogService: BlogService, private userService: UserService, private router: Router,) { }

  ngOnInit() {
    this.getAllBlog();
    this.getAllUser();
  }

  getAllBlog() {
    this.blogService.getAllBlog().subscribe((data) => {
      this.blogList = data;
      this.blogCount = data.length;
    }, error => {
      console.log(error);
    });
  }

  removeAll() {
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
        this.blogService.removeAll() .subscribe(() => {
          this.router.navigate(['/']);
        });
        Swal.fire(
          'Deleted!',
          'Your blog has been deleted.',
          'success'
        );

      } else {
        this.router.navigate(['/']);
      }
    });
    this.getAllBlog();
  }
  getAllUser() {
    this.userService.getAllUser().subscribe((data) => {
      this.userList = data;
    }, error => {
      console.log(error);
    });
  }
}
