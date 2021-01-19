import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit {
  @Output() enableContact = new EventEmitter<{contactId: number}>();
  
  @Input() contact: {
    id: number,
    fname: string,
    lname: string,
    age: number,
    active: boolean
  }

  constructor() { }

  ngOnInit(): void {
  }

  enableContactMethod(){
    this.enableContact.emit({contactId: this.contact.id});
  }

}
