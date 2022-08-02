import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroesListComponent } from './heroes-list.component';

describe(HeroesListComponent.name, () => {
  let component: HeroesListComponent;
  let fixture: ComponentFixture<HeroesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ HeroesListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeroesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show a superheroes list with series and events where they appear when pages load', () => {

  });

  it('should the superheroes list have max 10 items per page', () => {

  });

  // it('should the superhero item have 3 series', () => {

  // });

  // it('should the superhero item have 3 events', () => {

  // });

  it('should the superhero item hidde series on smaller device', () => {

  });

  it('should be possible to filter character by name', () => {

  });

  it('should be possible to navigate between the pages of the list', () => {

  });

  it('should navigate to hero detail when selected ', () => {

  });

  // ● Mostra uma lista com os super-heróis, as séries que eles participam e os eventos
  // da Marvel onde eles aparecem.
  // ● A listagem deve ter 10 super-heróis por página. Na listagem, mostrar apenas 3
  // séries e os eventos
  // ● Para telas pequenas, mostrar apenas os super-heróis, sem suas séries e eventos
  // ● Deve ser possível filtrar os personagens por nome
  // ● Deve ser possível navegar entre as páginas da tabela
  // ● Ao selecionar um super-herói, mostrar as informações sobre ele em na parte de
  // Detalhe
  // ● Seguir a especificação em anexo

});
