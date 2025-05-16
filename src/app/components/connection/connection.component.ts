import {Component, OnInit} from '@angular/core';
import {PostService } from '../../services/post.service';
import {Post} from '../../data/post';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { hasUppercase, hasLowercase, hasNumeric } from '../../validators/password.validator';


@Component({
  selector: 'app-connection',
  templateUrl: './connection.component.html',
  styleUrls: ['./connection.component.css'],
  standalone: false,
})
export class ConnectionComponent implements OnInit{
  userId!: string | null;
  form;

  constructor(private route: ActivatedRoute, private fb: FormBuilder) {
    this.form = this.fb.group({
      email: [
        '',
        {
          validators: [Validators.required, Validators.email],
          updateOn: 'blur',
        },
      ],
      password: [
        '',
        [
          Validators.required,
          Validators.minLength(8),
          hasUppercase(),
          hasLowercase(),
          hasNumeric(),
        ],
      ]
    });
  }

  ngOnInit(): void {
    this.userId = this.route.snapshot.paramMap.get('id');
  }

  getEmail(){
    return this.form.controls['email'];
  }
  getPassword(){
    return this.form.controls['password'];
  }

}
