import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TelaAlbum } from './tela-album';

describe('TelaAlbum', () => {
  let component: TelaAlbum;
  let fixture: ComponentFixture<TelaAlbum>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TelaAlbum]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TelaAlbum);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
