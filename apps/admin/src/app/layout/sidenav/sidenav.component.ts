import { Component } from '@angular/core';

@Component({
    selector: 'app-sidenav',
    templateUrl: './sidenav.component.html',
    styleUrls: ['./sidenav.component.scss'],
    standalone: false
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
      description: 'RXJS',
      path: '/rxjs',
      icon: 'fa fa-paint-brush',
      subItems: [
        {
          description: 'rxjs',
          path: '/angular/rxjs',
        },
      ],
    },
    {
      description: 'Reactive Forms',
      path: '/reactive-forms',
      icon: 'fa fa-paint-brush',
    },
    {
      description: 'Angular',
      path: '/angular',
      icon: 'fa fa-paint-brush',
      subItems: [
        {
          description: 'routing',
          path: '/angular/routing',
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
