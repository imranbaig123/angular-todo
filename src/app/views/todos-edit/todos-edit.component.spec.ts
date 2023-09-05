import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodosEditComponent } from './todos-edit.component';

describe('TodosEditComponent', () => {
  let component: TodosEditComponent;
  let fixture: ComponentFixture<TodosEditComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TodosEditComponent]
    });
    fixture = TestBed.createComponent(TodosEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
