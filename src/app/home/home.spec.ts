import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CommonModule }              from '@angular/common';
import { RouterTestingModule }       from '@angular/router/testing';

// Importa tu componente standalone Home
import { Home }                      from './home';

describe('Home', () => {
  let component: Home;
  let fixture:   ComponentFixture<Home>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        Home,                               
        CommonModule,                       
        RouterTestingModule.withRoutes([])  
      ]
      
    })
    .compileComponents();

    fixture   = TestBed.createComponent(Home);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});