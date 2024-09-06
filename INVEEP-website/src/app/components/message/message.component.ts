import { Component, OnInit, ElementRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/models/user.model';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {
  user!: User;

  constructor(
    private route: ActivatedRoute,
    private userService: UserService,
    private elementRef: ElementRef
  ) {}

  ngOnInit(): void {
    const userId = this.route.snapshot.paramMap.get('id');
    if (userId) {
      this.userService.getUser(+userId).subscribe((user) => {
        if (!user.profile_image || user.profile_image.trim() === '') {
          user.profile_image = 'none.png';
        }
        this.user = user;
        console.log(user);
      });
    }
  }
}
