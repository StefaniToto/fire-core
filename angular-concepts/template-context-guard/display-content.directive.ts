import {
  Directive,
  TemplateRef,
  ViewContainerRef,
  OnInit,
  input,
} from '@angular/core';

export interface DemoUrl {
  url: string;
  video: boolean;
}

export interface DemoContext {
  $implicit: number;
  demo: string;
  url: DemoUrl;
}

@Directive({
  selector: 'ng-template[displayTemplateContext]',
  standalone: true,
})
export class DisplayContentDirective implements OnInit {
  displayTemplateContext = input.required<string>();
  displayTemplateContextUrl = input.required<DemoUrl>();

  constructor(
    private template: TemplateRef<DemoContext>,
    private viewContainer: ViewContainerRef,
  ) {}

  static ngTemplateContextGuard(
    directive: DisplayContentDirective,
    context: unknown,
  ): context is DemoContext {
    return true;
  }

  ngOnInit() {
    const context: DemoContext = {
      $implicit: 1,
      demo: this.displayTemplateContext(),
      url: this.displayTemplateContextUrl(),
    };

    this.viewContainer.createEmbeddedView(this.template, context);
  }
}
