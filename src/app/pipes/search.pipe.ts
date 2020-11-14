import { Pipe, PipeTransform } from '@angular/core';
import { IBook } from '../interfaces/book.interface';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(value: Array<IBook>, field: string): Array<IBook> {
    console.log(value, field);
    if (!field) {
      return value;
    }
    if (!value) {
      return value;
    }
    console.log(value.filter(book => book.fname.toLowerCase().includes(field) || book.lname.toLowerCase().includes(field) 
    || book.number.includes(field)));
    return value.filter(book => book.fname.toLowerCase().includes(field) || book.lname.toLowerCase().includes(field) 
    || book.number.includes(field))
    
  }

}
