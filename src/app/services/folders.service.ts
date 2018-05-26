import { Injectable } from '@angular/core';

let g_fid_counter = 1;

@Injectable()
export class FoldersService {

  folders: Folder[] = [
    {name: '/', display: 'root', parent: ''},
    {name: 'documents', display: 'Documents', parent: '/'},
    {name: 'desktop', display: 'Desktop', parent: '/'},
    {name: 'music', display: 'Music', parent: '/'},
    {name: 'work', display: 'Work', parent: 'documents'},
    {name: 'Personal', display: 'Personal', parent: 'documents'},
    {name: 'hits-2018', display: 'Hits 2018', parent: 'music'}
  ];

  constructor() { }

  getChildren(name: string): Folder[] {
    return this.folders.filter(item => item.parent === name);
  }

  addFolder(data: Folder): Promise<Folder> { // using Promise instead of Observable 'coz of simple functionality
    data.name = `${data.display.toLowerCase().split(' ').join('-')}-${g_fid_counter++}`;
    this.folders.push(data);
    // debugger;
    return new Promise((r, e) => {
      r(data);
    });
  }

  removeFolder(name: string): Promise<Folder> {
    const index = this.folders.findIndex(item => item.name === name);
    const data = this.folders[index];
    this.folders.splice(index, 1);
    return new Promise((r, e) => {
      r(data);
    });
  }

  getItem(name: string): Folder {
    return this.folders.find(item => item.name === name);
  }

  getParent(name: string): Folder {
    if (!name) { return null; }
    const current = this.folders.find(item => item.name === name);
    return this.folders.find(item => item.name === current.parent);
  }

  backTrack (name: string, folders?: Folder[]): Folder[] {
    // debugger;
    folders = folders || [];
    const current = this.folders.find(item => item.name === name);
    folders.push(current);
    if (!current.parent) {
      folders.reverse().pop();
      return folders;
    }
    return this.backTrack(current.parent, folders);
  }

}

export interface Folder {
  name?: string;
  display: string;
  parent: string;
}
