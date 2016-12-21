import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from "rxjs/Observable";

@Injectable()

export class PostsService{
    constructor(private http: Http){
        console.log('PostService Initialized');
    }

    getPosts(){
        return this.http.get('https://jsonplaceholder.typicode.com/posts')
        .map(res => {
            return res.json()
        });
    }
}
