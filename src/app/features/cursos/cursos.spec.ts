import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CommonModule }              from '@angular/common';
import { RouterTestingModule }       from '@angular/router/testing';
import { Usuario } from '../../usuario/usuario';



describe('Usuario', () => {
  let component: Usuario;
  let fixture:   ComponentFixture<Usuario>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        Usuario,                          // tu standalone component
        CommonModule,                     // *ngIf, *ngFor, pipes…
        RouterTestingModule.withRoutes([])// routerLink, ActivatedRoute, RouterOutlet…
      ]
    })
    .compileComponents();

    fixture   = TestBed.createComponent(Usuario);
    component = fixture.componentInstance;
    fixture.detectChanges();  // dispara ngOnInit y monta el template
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});