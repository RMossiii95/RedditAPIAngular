import { Component, OnInit } from '@angular/core';
import { Welcome } from './reddit';
import { RedditService } from './reddit.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  redditInfo: any = null
  posts: any
  constructor(private redditService: RedditService){
    
  }

  ngOnInit(): void {
      this.redditService.GetReddit().subscribe(
        res => {
          this.redditInfo = res
          console.log(this.redditInfo)
          this.posts = this.redditInfo.data.children
          console.log(this.posts)
        }
      )
  }
}

