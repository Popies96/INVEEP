import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
   sticky = false;
  pathUrl: string = '';

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.pathUrl = this.router.url;
  }

  @HostListener('window:scroll', [])
  handleStickyNavbar() {
    this.sticky = window.scrollY >= 80;
}}
