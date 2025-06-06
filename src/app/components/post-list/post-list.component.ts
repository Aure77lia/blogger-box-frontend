import {Component, OnInit} from '@angular/core';
import {PostService } from '../../services/post.service';
import {Post} from '../../data/post';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css'],
  standalone: false,
})
export class PostListComponent implements OnInit{
    userId!: string | null;
    posts: Post[] = [];
  constructor(private postService: PostService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.userId = this.route.snapshot.paramMap.get('id');
    this.loadPosts();
  }
  loadPosts(): void {
    this.postService.getPosts().subscribe(posts => {
      this.posts = posts;
    });
  }
}
