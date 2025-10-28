import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TelaAlbumComponent } from './tela-album.component';

describe('TelaAlbum', () => {
  let component: TelaAlbumComponent;
  let fixture: ComponentFixture<TelaAlbumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TelaAlbumComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TelaAlbumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
