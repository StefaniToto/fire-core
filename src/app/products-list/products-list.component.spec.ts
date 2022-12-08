import {
  ComponentFixture,
  fakeAsync,
  flush,
  TestBed,
  tick,
  waitForAsync,
} from '@angular/core/testing';
import { ProductsListComponent } from './products-list.component';
import { Observable, of, tap } from 'rxjs';
import { RouterTestingModule } from '@angular/router/testing';
import { ProductService } from './product.service';
import { DOMHelper } from './dom-helper';
import { Product } from './product.model';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('ProductsListComponent aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa', () => {
  let component: ProductsListComponent;
  let fixture: ComponentFixture<ProductsListComponent>;
  let dh: DOMHelper<ProductsListComponent>;
  let productServiceMock: jasmine.SpyObj<ProductService>;
  let helper: Helper;
  beforeEach(waitForAsync(() => {
    helper = new Helper();
    productServiceMock = jasmine.createSpyObj('ProductService', [
      'getProducts',
      'getProducts1',
    ]);
    productServiceMock.getProducts.and.returnValue(of([]));
    // fixture = TestBed.createComponent(ProductsListComponent);
    // component = fixture.componentInstance;

    TestBed.configureTestingModule({
      declarations: [ProductsListComponent],
      imports: [RouterTestingModule],
      providers: [{ provide: ProductService, useValue: productServiceMock }],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsListComponent);
    component = fixture.componentInstance;
    dh = new DOMHelper(fixture);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should initialize user and product data', fakeAsync(() => {
    // productServiceMock.getProducts.and.returnValue(of(helper.getProducts(1)));
    // productServiceMock.getProducts1.and.returnValue(of(helper.getProducts(1)));
    component.products$ = helper.getProducts(1);
    component.products1$ = helper.getProducts(1);
    component.combineRes$ = helper.getProducts(1);
    // spyOn(productServiceMock, 'getProducts').and.returnValue(of([]));
    // spyOn(productServiceMock, 'getProducts1').and.returnValue(of([]));
    tick();
    // fixture.detectChanges();
    component.combineRes$.subscribe({
      next: (v) => {
        console.log('expect', v);
        expect(v.d1).toBeDefined();
        expect(v.d2).toBeDefined();
      },
    });

    // expect(true).toBe(true);
    flush();
  }));
  // expect(productServiceMock.getProducts).toHaveBeenCalled();

  // describe('List Products', () => {
  //   let helper: Helper;
  //   beforeEach(() => {
  //     helper = new Helper();
  //     fixture.detectChanges();
  //   });

  //   it('Should show no list item when no products are available', () => {
  //     console.log(dh.count('li'), 'saaaa');
  //     expect(dh.count('li')).toBe(0);
  //   });

  //   it('Should show one list item when I have one product', () => {
  //     component.products$ = helper.getProducts(1);
  //     fixture.detectChanges();
  //     console.log(
  //       'show something here',
  //       fixture.debugElement.query(By.css('li')),
  //       fixture.debugElement.query(By.css('li[data-test="show-subs"]'))
  //     );
  //     expect(dh.count('.text')).toBe(1);
  //   });
  // });

  // describe('Navigation', () => {
  //   let location: Location;
  //   let router: Router;
  //   beforeEach(() => {
  //     location = TestBed.get(Location);
  //     router = TestBed.get(Router);
  //     fixture.detectChanges();
  //   });
  //   // Navigation
  //   it('Should navigate to / before + button click', () => {
  //     // find DebugElements with an attached RouterLinkStubDirective
  //     expect(location.path()).toBe('');
  //   });
  // });

  // describe('Call NgOnInit on Demand', () => {
  //   let helper: Helper;
  //   beforeEach(() => {
  //     helper = new Helper();
  //   });

  //   it('Should call getProducts on the ProductService one time on ngOnInit', () => {
  //     fixture.detectChanges();
  //     expect(productServiceMock.getProducts).toHaveBeenCalledTimes(1);
  //   });

  //   it('Should not show img tag when product does not have pictureId and is loaded async from ProductService', () => {
  //     productServiceMock.getProducts.and.returnValue(helper.getProducts(1));
  //     helper.products[0].url = undefined;
  //     fixture.detectChanges();
  //     expect(dh.count('img')).toBe(0);
  //   });
  // });
});

class Helper {
  products: Product[] = [];
  getProducts(amount: number): Observable<Product[]> {
    for (let i = 0; i < amount; i++) {
      this.products.push({
        id: 'abc' + i,
        name: 'item' + i,
        pictureId: 'abc' + i,
      });
    }
    return of(this.products);
  }
}
