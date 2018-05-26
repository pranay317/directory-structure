import { Component, OnInit } from '@angular/core';
import { FoldersService, Folder } from '../../services/folders.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { ThrowStmt } from '@angular/compiler';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.component.html',
  styleUrls: ['./folder.component.scss']
})
export class FolderComponent implements OnInit {
  currentChildren: Folder[];
  back: Folder;
  current: Folder;

  incOrDec = '';

  form: FormGroup;
  showForm = false;

  isInvalidRoute = false;

  constructor(
    private foldersService: FoldersService,
    private route: ActivatedRoute,
    private location: Location,
    private _fb: FormBuilder
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.isInvalidRoute = false;
      this.current = this.foldersService.getItem(params.id || '/');
      // debugger;
      if (!this.current) { return this.isInvalidRoute = true; }
      this.back = this.foldersService.getParent(params.id || '/');
      this.currentChildren = this.foldersService.getChildren(params.id || '/');
    });
  }

  initForm() {
    this.form = this._fb.group({
      display: ['', Validators.required],
      parent: this.current.name
    });
  }

  initAddFolder() {
    this.initForm();
    this.showForm = true;
  }

  cancelAdd() {
    this.showForm = false;
  }

  submit() {
    console.log('submitting');
    this.foldersService.addFolder(this.form.value).then(val => {
      this.currentChildren = this.foldersService.getChildren(this.current.name);
      this.cancelAdd();
    });
  }

  removeFolder(item) {
    this.foldersService.removeFolder(item.name).then(val => {
      this.currentChildren = this.foldersService.getChildren(this.current.name);
    });
  }

  setIncFlag() {
    switch (this.incOrDec) {
      case 'inc': return this.incOrDec = 'dec';
      case 'dec': return this.incOrDec = '';
      default: return this.incOrDec = 'inc';
    }
  }

}
