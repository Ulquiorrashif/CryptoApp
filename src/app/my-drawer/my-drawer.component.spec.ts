import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { MyDrawerComponent } from './my-drawer.component';

describe('MyDrawerComponent', () => {
  let component: MyDrawerComponent;
  let fixture: ComponentFixture<MyDrawerComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ MyDrawerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyDrawerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
