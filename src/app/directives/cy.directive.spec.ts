import { Component, DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { CyDirective } from './cy.directive';

@Component({
  template: '<div id="test" cy="test"></div>'
})
class TestCyComponent { }

describe('CyDirective', () => {

  let fixture: ComponentFixture<TestCyComponent>;
  let component: TestCyComponent;
  let el: DebugElement;

  beforeEach(() => {

    TestBed.configureTestingModule({
      declarations: [
        CyDirective,
        TestCyComponent
      ]
    });

    fixture = TestBed.createComponent(TestCyComponent);
    component = fixture.componentInstance;
    el = fixture.debugElement.query(By.css('#test'));

    fixture.detectChanges();

  });

  it('should contain data-cy attribute', () => {
    expect(el.nativeElement.hasAttribute('data-cy')).toBeTrue();
  });

  it('should have "test" as data-cy attribute', () => {
    expect(el.nativeElement.getAttribute('data-cy')).toEqual('test');
  });

});
