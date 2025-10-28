import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CriacaoPlaylistComponent } from './criacao-playlist.component';

describe('CriacaoPlaylistComponent', () => {
  let component: CriacaoPlaylistComponent;
  let fixture: ComponentFixture<CriacaoPlaylistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CriacaoPlaylistComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CriacaoPlaylistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
