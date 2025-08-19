import { TestBed, ComponentFixture } from '@angular/core/testing';
import { App }                        from './app';
import { RouterTestingModule }        from '@angular/router/testing';
import { HttpClientTestingModule }    from '@angular/common/http/testing';

describe('App', () => {
  let fixture: ComponentFixture<App>;
  let component: App;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
       
        App,

       
        RouterTestingModule.withRoutes([]),

        
        HttpClientTestingModule
      ],
     
    })
    .compileComponents();

    fixture   = TestBed.createComponent(App);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });


});