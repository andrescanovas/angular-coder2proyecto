// import { Bigtitle } from './bigtitle';
// import { ElementRef, Renderer2 } from '@angular/core';

// describe('Bigtitle', () => {
//   it('should create an instance', () => {
//     const directive = new Bigtitle();
//     expect(directive).toBeTruthy();
//   });
// });

import { Bigtitle } from './bigtitle';
import { ElementRef, Renderer2 } from '@angular/core';

describe('Bigtitle', () => {
  it('should create an instance', () => {
    const mockElementRef = {} as ElementRef;
    const mockRenderer = {} as Renderer2;
    const directive = new Bigtitle(mockElementRef, mockRenderer);
    expect(directive).toBeTruthy();
  });
});