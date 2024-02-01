import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { MyLayoutComponent } from './my-layout.component';

describe('MyLayoutComponent', () => {
  let component: MyLayoutComponent;
  let fixture: ComponentFixture<MyLayoutComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ MyLayoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
