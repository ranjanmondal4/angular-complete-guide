import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = 'angular-complete-guide';
  // contacts = [
  //   {
  //     id: 1,
  //     fname: 'Jane',
  //     lname: 'Smith',
  //     age: 29,
  //     enable: false
  //   },
  //   {
  //     id: 2,
  //     fname: 'Joe',
  //     lname: 'Smith',
  //     age: 31,
  //     enable: false
  //   },
  //   {
  //     id: 3,
  //     fname: 'Stephane',
  //     lname: 'Gates',
  //     age: 15,
  //     enable: false
  //   }
  // ];

  // onEnableContact(contact: {contactId: number}){
  //     // console.log(contact);
  //     this.contacts.forEach(ele => {
  //       if(ele.id === contact.contactId){
  //         ele.enable = true;
  //       }
  //     })

  //     console.log(this.contacts);
  // }
}
