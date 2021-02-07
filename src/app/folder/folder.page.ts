import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import 'Code-bar-scanner';
import { Plugins } from '@capacitor/core';

const { CodeBarScanner } = Plugins;

@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage implements OnInit {
  public folder: string;

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id');
  }


  executeBarCode() {
    CodeBarScanner.echo({value: 'plugin con BarCodeHHFM.com', id: 1989}).then(res => {
        console.log(res);
      }).catch(err => {
        console.error(err);
      });
      CodeBarScanner.suma({numero1: 2, numero2: 5}).then(res => {
        console.log("------SUMA---------");
        console.log(res);
      }).catch(err => {
        console.error(err);
      });
      CodeBarScanner.resta({numero1: 12, numero2: 6}).then(res => {
        console.log("------RESTA---------");
        console.log(res);
      }).catch(err => {
        console.error(err);
      });
  }

}
