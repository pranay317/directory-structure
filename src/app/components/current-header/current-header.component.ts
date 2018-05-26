import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Folder } from '../../services/folders.service';
// import { EventEmitter } from 'events';

@Component({
  selector: 'app-current-header',
  templateUrl: './current-header.component.html',
  styleUrls: ['./current-header.component.scss']
})
export class CurrentHeaderComponent implements OnInit {
  @Input() current: Folder;

  @Output() initAddFolder: EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }

  notifyInitAddFolder() {
    this.initAddFolder.emit();
  }

}
