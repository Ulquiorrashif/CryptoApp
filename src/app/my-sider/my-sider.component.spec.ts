import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MySiderComponent } from './my-sider.component';

describe('MySiderComponent', () => {
  let component: MySiderComponent;
  let fixture: ComponentFixture<MySiderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MySiderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MySiderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
