import { Component } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css'],
})
export class SidenavComponent {
  public collapsed = false;
  public dummyObjectExpandedIndex: number = 0;

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
