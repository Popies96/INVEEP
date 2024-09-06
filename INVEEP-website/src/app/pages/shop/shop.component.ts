import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user.model';
import { UserService } from 'src/app/user.service';
@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css'],
})
export class ShopComponent implements OnInit{
  users: User[] = [];
  searchTerm: string = '';
  filteredUsers: User[] = [];
  constructor(private router: Router, private userService: UserService) {}

  ngOnInit(): void {
    this.loadUsers();
  }
  loadUsers(): void {
    this.userService.getUsers().subscribe(
      (data: User[]) => {
        this.users = data;
        this.filteredUsers = data; // Initialize with all users
      },
      (error) => {
        console.error('Error fetching users:', error);
      }
    );
  }
  onSearch(): void {
    const searchTermLower = this.searchTerm.trim().toLowerCase();
console.log(searchTermLower)
    if (searchTermLower) {
      this.filteredUsers = this.users.filter((user) =>
        user.username.toLowerCase().includes(searchTermLower)
      );
      console.log(this.filteredUsers)
    } else {
      this.filteredUsers = this.users; // Reset to all users if search term is empty
    }
  }

  onSelect(user: any): void {
    this.router.navigate(['/profile', user.id]);
  }
}
