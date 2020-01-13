import { Component, OnInit, Pipe, PipeTransform } from '@angular/core';
//import { pipe } from 'rxjs';

@Pipe({
  name: 'convertToSpace'
})
export class ConvertToSpaceComponent implements PipeTransform {
  
  transform(value: any, character: any) {
    return value.replace(character, ' ').replace(character, ' ').replace(character, ' ');
  }

  constructor() { }

  ngOnInit() {
  }

}
