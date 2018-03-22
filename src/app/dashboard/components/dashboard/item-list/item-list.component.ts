import { Component, OnInit, Input } from '@angular/core';
import { User } from '../../../../core/models/user.model';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements OnInit {

  @Input() user:User;

  constructor() { }

  ngOnInit() {
  }

}
