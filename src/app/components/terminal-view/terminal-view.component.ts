import { Component } from '@angular/core';
import { CompilerService } from 'src/app/services/compiler.service';
import { async } from '@angular/core/testing';


@Component({
  selector: 'app-terminal-view',
  templateUrl: './terminal-view.component.html',
  styleUrls: ['./terminal-view.component.css']
})

export class TerminalViewComponent {

  response = '';

  async onTerminalEvent(generatedSnippet) {
    // console.log(generatedSnippet, 'el snippet');

    // (await this._compilerService.postResponse(generatedSnippet))
    //   .subscribe(async r => {
    //     await this._compilerService.getAllResponse()
    //       .subscribe((data: any) => {
    //         if (data.data !== 'Ok!') {
    //           this.response = data.data;
    //         } else {
    //           this.response = null;
    //         }
    //         console.log(this.response);
    //       })
    //   });
  }

  constructor(private _compilerService: CompilerService) {

  }

}


