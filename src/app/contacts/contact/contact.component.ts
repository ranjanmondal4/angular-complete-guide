import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit, OnDestroy {
  user: {id: number};
  privateSubscription: Subscription;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.user = {id: this.route.snapshot.params["id"]};
    this.privateSubscription = this.route.params.subscribe((params: Params) => {
      this.user = {id: params['id']};
    });
  }

  ngOnDestroy(): void {
    this.privateSubscription.unsubscribe();
  }

}
