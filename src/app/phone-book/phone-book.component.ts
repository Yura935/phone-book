import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { IBook } from '../interfaces/book.interface';

@Component({
  selector: 'app-phone-book',
  templateUrl: './phone-book.component.html',
  styleUrls: ['./phone-book.component.scss']
})
export class PhoneBookComponent implements OnInit {
  newFName: string = '';
  newLName: string = '';
  newNumber: string = '';
  hiden = false;
  changeIndex: number = null;
  title = 'hw14';
  taskName: string;
  searchName: string;
  visible: boolean = true;
  ischeck = true;
  ischeck1 = true;
  ischeck2 = true;
  change: string;
  modalRef: BsModalRef;
  bookList: Array<IBook> = [
    {
      fname: 'Sofia',
      lname: 'Zhuk',
      number: '0977777777'
    },
    {
      fname: 'Ira',
      lname: 'Tytar',
      number: '0636666666'
    },
    {
      fname: 'Vasylyna',
      lname: 'Vryblevska',
      number: '0635555555'
    },
    {
      fname: 'Alejandro',
      lname: 'Del Rio Albrechet',
      number: '0633333333'
    },
    {
      fname: 'Petro',
      lname: 'Petriv',
      number: '0631222222'
    },
    {
      fname: 'Petya',
      lname: 'Zhuk',
      number: '0631111111'
    }
  ];

  constructor(private modalService: BsModalService) { }

  ngOnInit(): void {
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  display() {
    if (this.searchName.length == 0) {
      this.visible = true;
    }
    else {
      this.visible = false;
    }
  }

  clear() {
    this.searchName = '';
  }

  delete(index: number): void {
    this.bookList.splice(index, 1);
  }

  edit(index: number) {
    this.newFName = this.bookList[index].fname;
    this.newLName = this.bookList[index].lname;
    this.newNumber = this.bookList[index].number;
    this.hiden = true;
    this.changeIndex = index;
  }

  add(): void {
    this.hiden = true;
  }
  save(): void {
    if (this.changeIndex === null) {
      if (this.newFName.length !== 0 && this.newLName.length !== 0 && this.newNumber.length !== 0) {
        const newContact = {
          fname: this.newFName,
          lname: this.newLName,
          number: this.newNumber
        }
        this.bookList.push(newContact)
        this.newFName = '';
        this.newLName = '';
        this.newNumber = '';
        this.hiden = false;
      }
    }
    else {
      this.bookList[this.changeIndex].fname = this.newFName;
      this.bookList[this.changeIndex].lname = this.newLName;
      this.bookList[this.changeIndex].number = this.newNumber;
      this.changeIndex = null;
      this.newFName = '';
      this.newLName = '';
      this.newNumber = '';
      this.hiden = false;
    }
  }

  close() {
    this.hiden = false;
  }

  byField(field) {
    return (a, b) => a[field] > b[field] ? 1 : -1;
  }

  sort(field?: string) {
    if (field) {
      this.change = field;
      this.bookList.sort(this.byField(field));
      this.ischeck = false;
    }
    else {
      this.bookList.reverse();
      this.ischeck = true;
      this.change = this.change;
    }
  }

  sort1(field?: string) {
    if (field) {
      this.bookList.sort(this.byField(field));
      this.ischeck1 = false;
      this.change = field;
    }
    else {
      this.bookList.reverse();
      this.ischeck1 = true;
      this.change = this.change;
    }
  }

  sort2(field?: string) {
    if (field) {
      this.bookList.sort(this.byField(field));
      this.ischeck2 = false;
      this.change = field;
    }
    else {
      this.bookList.reverse();
      this.ischeck2 = true;
      this.change = this.change;
    }
  }
}