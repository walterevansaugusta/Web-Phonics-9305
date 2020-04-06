import { takeUntil, take } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { Dropbox } from 'dropbox';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DropboxService {

  constructor() { }

  private dbx = new Dropbox({
    accessToken: 'Bjf3NZBGqNAAAAAAAAAAL-Cq8a6hM1UR2pOtb8Lj-lWTzH3UNLLr4sI9m0MrfsJz',
    fetch
  });

  private root = '/FA 2019 Brainy Phonics Web - Caitlin';

  public getFiles() {
    this.dbx.filesListFolder({
      path: '/FA 2019 Brainy Phonics Web - Caitlin'
    }).then(res => console.log(res));
  }

  public getPhonemeCategories() {
    return this.dbx.filesListFolder({
      path: this.root + '/Phoneme Categories'
    });
  }

  public getCategoryImgs() {
    return this.getPhonemeCategories()
      .then((res) => {
        const folders: any[] = res['entries'];
        const paths: any[] = folders.filter(file => {
          return file['.tag'] === 'file';
        }).map(file => ({
          path: file.path_lower,
          size: 'w32h32',
        }));
        return this.dbx.filesGetThumbnailBatch({
          entries: paths,
        });
      });
  }

  public getImg() {
    this.dbx.fileRequestsGet({
      id: '"id:z5HThvPPjfwAAAAAAAG2Vw"'
    }).then(res => console.log(res));
  }
}
