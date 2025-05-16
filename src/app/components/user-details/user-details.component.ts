import {Component, OnInit} from '@angular/core';
import {PostService } from '../../services/post.service';
import {Post} from '../../data/post';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css'],
  standalone: false,
})
export class UserDetailsComponent implements OnInit{
//   posts: Post[] = [];
  userId!: string | null;
  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
//     this.loadPosts();
    this.userId = this.route.snapshot.paramMap.get('id');
  }

//   loadPosts(): void {
//     this.postService.getPosts().subscribe(posts => {
//       this.posts = posts;
//     });
//   }
}
