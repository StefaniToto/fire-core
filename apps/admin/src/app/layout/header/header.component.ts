import { Component } from '@angular/core';
import { NgIf } from '@angular/common';
import { ROUTER_TOKENS } from '../../app-route.constants';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  standalone: true,
  imports: [NgIf, RouterLink],
})
export class HeaderComponent {
  readonly ROUTER_TOKENS = ROUTER_TOKENS;
  public isCollapsed = true;
}
