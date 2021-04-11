import { Component, OnInit } from '@angular/core';
import { CompilerService } from '../../services/compiler.service';
import { async } from '@angular/core/testing';

@Component({
  selector: 'app-text-editor',
  templateUrl: './text-editor.component.html',
  styleUrls: ['./text-editor.component.css']
})
export class TextEditorComponent implements OnInit {

  constructor(private _compilerService: CompilerService) { }

  text: string;

  alert: string;

  ngOnInit(): void {
  }

  async onRunCode() {

    (await this._compilerService.postResponse(this.text))
      .subscribe(r => {
        this._compilerService.getAllResponse()
          .subscribe((data: any) => {

            if (data.data !== 'Ok!') {
              this.alert = data.data;
            } else {
              this.alert = null;
            }

          })
      });

  }

}
