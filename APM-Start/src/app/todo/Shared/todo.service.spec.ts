import { TestBed } from '@angular/core';

describe('ToDoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ToDoService = TestBed.get(ToDoService);
    expect(service).toBeTruthy();
  });
});
