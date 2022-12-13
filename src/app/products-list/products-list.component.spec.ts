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
import { ProductService1 } from './product1.service';
import { By } from '@angular/platform-browser';
import { provideMockStore } from '@ngrx/store/testing';

describe('ProductsListComponent aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa', () => {
  let component: ProductsListComponent;
  let fixture: ComponentFixture<ProductsListComponent>;
  let dh: DOMHelper<ProductsListComponent>;
  let productServiceMock: jasmine.SpyObj<ProductService>;
  let productServiceMock1: jasmine.SpyObj<ProductService1>;
  let helper: Helper;
  const initialState = {};
  beforeEach(waitForAsync(() => {
    helper = new Helper();
    productServiceMock = jasmine.createSpyObj('ProductService', [
      'getProducts',
    ]);
    productServiceMock1 = jasmine.createSpyObj('ProductService1', [
      'getProducts1',
    ]);
    productServiceMock.getProducts.and.returnValue(of([]));
    productServiceMock1.getProducts1.and.returnValue(of([]));

    TestBed.configureTestingModule({
      declarations: [ProductsListComponent],
      imports: [RouterTestingModule],
      providers: [
        provideMockStore({ initialState }),
        { provide: ProductService, useValue: productServiceMock },
        { provide: ProductService1, useValue: productServiceMock1 },
      ],
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
  // it('should initialize user and product data', fakeAsync(() => {
  //   tick();
  //   fixture.detectChanges();
  //   component.combineRes$.subscribe({
  //     next: (v) => {
  //       expect(v.d1).toBeDefined();
  //       expect(v.d2).toBeDefined();
  //     },
  //   });

  //   // expect(true).toBe(true);
  //   // flush();
  // }));
  // expect(productServiceMock.getProducts).toHaveBeenCalled();

  describe('List Products', () => {
    it('Should show no list item when no products are available', () => {
      expect(dh.count('li')).toBe(0);
    });

    it('Should show one list item when I have one product', () => {
      component.products1$ = helper.getProducts(1);
      fixture.detectChanges();
      expect(dh.count('.text')).toBe(1);
    });

    it('Should show no list item when no products are available', () => {
      component.pr2Store$ = helper.getmergedObservableMockData();
      fixture.detectChanges();
      console.log(
        'show something here data-test',
        fixture.debugElement.queryAll(By.css('div[data-test="settings-data"]'))
      );
      expect(dh.count('li')).toBe(0);
    });
  });

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

  mergedObservableMockData: any[] = [];
  getmergedObservableMockData(): Observable<any[]> {
    this.mergedObservableMockData = [
      {
        FullName: 'Name Lastname',
        PictureData: '',
        initialLetters: 'NL',
        settingsPagesFeatureState: [
          {
            Personal: [
              {
                Title: 'Title',
                Description: 'Description',
                LinkText: 'LinkText',
              },
            ],
          },
          {
            ManageUsers: [{}],
          },
          {
            Advanced: [{}],
          },
        ],
      },
    ];
    return of(this.mergedObservableMockData);
  }
}
