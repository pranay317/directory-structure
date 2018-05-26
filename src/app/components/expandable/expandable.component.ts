import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Folder, FoldersService } from '../../services/folders.service';

@Component({
  selector: 'app-expandable',
  templateUrl: './expandable.component.html',
  styleUrls: ['./expandable.component.scss']
})
export class ExpandableComponent implements OnInit {
  @Input() folder: Folder;
  children: Folder[];

  @Output() removeItem: EventEmitter<any> = new EventEmitter<any>();

  _isExpanded = false;
  set isExpanded(data: boolean) {
    if (data) {
      this.children = this.foldersService.getChildren(this.folder.name);
    } else {
      this.children = [];
    }
    this._isExpanded = data;
  }
  get isExpanded(): boolean {
    return this._isExpanded;
  }
  constructor(
    private foldersService: FoldersService
  ) { }

  ngOnInit() {
  }

  remove(e) {
    e.preventDefault();
    e.stopPropagation();
    this.removeItem.emit(this.folder);
  }

  removeFolder(item) {
    this.foldersService.removeFolder(item.name).then(val => {
      this.children = this.foldersService.getChildren(this.folder.name);
    });
  }

  toggleExpanded(e) {
    e.preventDefault();
    e.stopPropagation();
    this.isExpanded = !this.isExpanded;
  }

}
