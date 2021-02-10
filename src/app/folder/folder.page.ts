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

  readBarCode() {
    CodeBarScanner.readBarCode({color: "rojo", activo: false, num: 8, obj: {nombre: "Harold Funeme", edad: 31, vivo:true} }).then(options => {
      console.log("------Ojeto desde app---------");
      console.log(options);
    }).catch(err => {
      console.error(err);
    });

  }

}
