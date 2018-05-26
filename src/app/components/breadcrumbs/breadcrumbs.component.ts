import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Folder, FoldersService } from '../../services/folders.service';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.scss']
})
export class BreadcrumbsComponent implements OnInit {
  backtrack: Folder[];

  _current: Folder;
  @Input()
  set current(data: Folder) {
    if (data) { this.backtrack = this.foldersService.backTrack(data.name); }
    this._current = data;
  }
  get current(): Folder {
    return this._current;
  }

  constructor(
    private route: ActivatedRoute,
    private foldersService: FoldersService
  ) { }

  ngOnInit() {
  }

}
