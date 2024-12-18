import { Component, Input } from '@angular/core';
import { Post } from '../shared/post.model';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.css']
})
export class PostListItemComponent {
  @Input() post!: Post; // Input to receive a single post

  constructor(private postService: PostService) {}

  onLoveIt(): void {
    // Increment the "loveIts" count using the PostService
    this.postService.incrementLoveIt(this.post.id);
  }

}
