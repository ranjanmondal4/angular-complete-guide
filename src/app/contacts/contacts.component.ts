import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  contacts = [
    {
      id: 1,
      fname: 'Jane',
      lname: 'Smith',
      age: 29,
      enable: false
    },
    {
      id: 2,
      fname: 'Joe',
      lname: 'Smith',
      age: 31,
      enable: false
    },
    {
      id: 3,
      fname: 'Stephane',
      lname: 'Gates',
      age: 15,
      enable: false
    }
  ];

  onEnableContact(contact: {contactId: number}){
      // console.log(contact);
      this.contacts.forEach(ele => {
        if(ele.id === contact.contactId){
          ele.enable = true;
        }
      })

      console.log(this.contacts);
  }
}
