import { AsyncPipe, JsonPipe, NgFor, NgIf } from '@angular/common';
import {
  AfterViewInit,
  Component,
  TemplateRef,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';

@Component({
  selector: 'code-from-root-view-ref',
  templateUrl: './view-ref.component.html',
  standalone: true,
  styleUrls: ['./view-ref.component.scss'],
  imports: [NgFor, JsonPipe, AsyncPipe, NgIf],
})
export class ViewRefComponent implements AfterViewInit {
  @ViewChild('template2') template: TemplateRef<{ $implicit: undefined }>;
  i = 0;

  vr: any;
  constructor(public viewContainerRef: ViewContainerRef) {}
  append(template: TemplateRef<{ $implicit: number }>) {
    this.viewContainerRef.createEmbeddedView(template, {
      $implicit: this.i++,
    });
  }
  clear() {
    this.viewContainerRef.clear();
    this.i = 0;
  }

  ngAfterViewInit() {
    setTimeout(() => {
      this.vr = this.viewContainerRef.createEmbeddedView(this.template);
      console.log('somethign added');
    });
  }
  reattach() {
    if (!this.vr) {
      return;
    }
    this.viewContainerRef.insert(this.vr);
  }
  detach() {
    this.viewContainerRef.detach();
    this.i = 0;
  }
}
