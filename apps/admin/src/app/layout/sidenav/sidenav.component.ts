import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
  standalone: true,
  imports: [RouterModule, NgIf, NgFor],
})
export class SidenavComponent {
  public collapsed = false;
  public dummyObjectExpandedIndex = 0;

  public navObjectArray: any = [
    {
      description: 'Design',
      path: '/design',
      icon: 'fa fa-paint-brush',
      subItems: [
        {
          description: 'Flex Box',
          path: '/design/flexbox',
        },
        {
          description: 'Inputs',
          path: '/design/inputs',
        },
      ],
    },
    {
      description: 'Web elements',
      path: '/custom-web-elements',
      icon: 'fa fa-paint-brush',
      subItems: [
        {
          description: 'Dropdown',
          path: '/custom-web-elements/dropdown',
        },
        {
          description: 'View-Ref',
          path: '/custom-web-elements/view-ref',
        },
      ],
    },
    {
      description: 'Firebase Connection',
      path: '/firebase',
      icon: 'fa fa-paint-brush',
    },
    {
      description: 'Angular Basics',
      path: '/angular-basics',
      icon: 'fa fa-paint-brush',
      subItems: [
        {
          description: 'Introduction',
          path: '/angular-basics/intro',
        },
        {
          description: 'View-Ref',
          path: '/custom-web-elements/view-ref',
        },
      ],
    },
  ];

  expandOrCollapseRow(listIndex: number, expanded: any): void {
    if (!expanded) {
      const dummyObj = this.navObjectArray[listIndex];

      // reset (collapses all objects in the array)
      this.navObjectArray = this.navObjectArray.map((dummyObject: any) => ({
        ...dummyObject,
        expanded: false,
      }));

      // expands only the dummyObject clicked
      this.navObjectArray[listIndex] = {
        ...dummyObj,
        expanded: !dummyObj.expanded,
      };
    }
  }
}
