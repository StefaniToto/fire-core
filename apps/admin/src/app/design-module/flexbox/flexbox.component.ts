import { AfterViewInit, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  standalone: true,
  selector: 'app-code-from-root-flexbox',
  templateUrl: './flexbox.component.html',
  styleUrls: ['./flexbox.component.scss'],
  imports: [FormsModule],
})
export class FlexboxComponent implements AfterViewInit {
  direction: any = 1;
  element = document.querySelector('.flex-list');
  rowDir: any;

  ngAfterViewInit(): void {
    this.rowDir = document.querySelector('.row-dir');
    console.log(this.rowDir);
    this.rowDir?.classList.add('.active');
  }
}
