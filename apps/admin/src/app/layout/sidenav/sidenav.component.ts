import { Component } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css'],
})
export class SidenavComponent {
  public collapsed = false;
  public dummyObjectExpandedIndex: number = 0;

  public dummyObjectArray: any = [
    {
      id: 56,
      color: 'blue',
      description: 'this is anything blue',
    },
    {
      id: 63,
      color: 'orange',
      description: 'this is not usefull',
    },
    {
      id: 72,
      color: 'green',
      description: 'this too',
    },
    {
      id: 83,
      color: 'red',
      description: 'is this helpfull?',
    },
  ];

  expandOrCollapseRow(listIndex: number): void {
    const dummyObj = this.dummyObjectArray[listIndex];

    // reset (collapses all objects in the array)
    this.dummyObjectArray = this.dummyObjectArray.map((dummyObject: any) => ({
      ...dummyObject,
      expanded: false,
    }));

    // expands only the dummyObject clicked
    this.dummyObjectArray[listIndex] = {
      ...dummyObj,
      expanded: !dummyObj.expanded,
    };
  }
}
