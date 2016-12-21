import { Component, OnInit } from '@angular/core';
import { PostsService } from '../services/posts.service';


@Component({
  selector: 'user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
  providers: [PostsService]
})
export class UserComponent implements OnInit {
  
  name: string;
  email: string;
  address: address;
  hobbies: string[];
  showHobbies: boolean;
  posts: Post[];
  

  constructor(private postsService: PostsService) { 
    this.name = 'John Travolta!';
    this.email = 'john@gmail.com';
    this.address = {
      street: '12 main street',
      city: 'Umer',
      state: 'Kielce'
    }
    this.hobbies = ['music', 'movies', 'sport'];

    this.showHobbies = false;

    this.postsService.getPosts().subscribe(posts => {
      this.posts = posts;
    });

  }

  toggleHobbies(){
    if(this.showHobbies == false){
      this.showHobbies = true;
    }
    else{
      this.showHobbies = false;
    }
  }

  addHobby(hobby){
      this.hobbies.push(hobby);
  }

  deleteHobby(index){
    this.hobbies.splice(index, 1);
  }

  ngOnInit() {
  }

}

export interface address{
  street: string,
  city: string,
  state: string
}

export interface Post{
  id: number,
  title: string;
  body: string;
}


