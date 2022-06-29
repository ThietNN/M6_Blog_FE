import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {BlogService} from '../service/blog.service';
import {UserService} from '../service/user.service';
import {User} from '../model/user';

@Component({
  selector: 'app-blog-create',
  templateUrl: './blog-create.component.html',
  styleUrls: ['./blog-create.component.css']
})
export class BlogCreateComponent implements OnInit {
  blogCreateForm: FormGroup = new FormGroup({
    title: new FormControl(),
    // user: new FormControl(),
    content: new FormControl()
  });
  userList: User[] = [];

  constructor(private blogService: BlogService, private userService: UserService) { }

  ngOnInit() {
    // this.getAllUser();
  }

  // getAllUser() {
  //   this.userService.getAllUser().subscribe((data) => {
  //     this.userList = data;
  //   }, error => {
  //     console.log(error);
  //   });
  // }
  addBlog() {
    const blog = this.blogCreateForm.value;
    this.blogService.addNewBlog(blog).subscribe(() => {
      alert('new blog created successfully');
    });
    this.blogCreateForm.reset();
  }
}
