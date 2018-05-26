import { Component, OnInit, Input } from '@angular/core';
import { Folder } from '../../services/folders.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input() back: Folder;
  constructor() { }

  ngOnInit() {
  }

}
