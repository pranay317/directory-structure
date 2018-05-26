import { Pipe, PipeTransform } from '@angular/core';
import { Folder } from '../services/folders.service';

@Pipe({
  name: 'orderBy'
})
export class OrderByPipe implements PipeTransform {

  transform(folders: Folder[], field: string, incOrDec: string): Folder[] {
    if (!field || !incOrDec) { return folders.slice(); }
    const sorted = folders.slice().sort((a: Folder, b: Folder): number => {
      return a[field].toUpperCase() > b[field].toUpperCase() ? 1 : -1;
    });
    console.log(sorted);
    return incOrDec === 'inc' ? sorted : sorted.reverse();
  }

}
