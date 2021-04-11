import { Component } from '@angular/core';
import { CompilerService } from 'src/app/services/compiler.service';


@Component({
  selector: 'app-terminal-view',
  templateUrl: './terminal-view.component.html',
  styleUrls: ['./terminal-view.component.css']
})



export class TerminalViewComponent {

  x = '\npepito \n saprissa'

  response = '';

  async onTerminalEvent(generatedSnippet) {
    console.log(generatedSnippet, 'el snippet');

    (await this._compilerService.getResponse(generatedSnippet))
      .subscribe((response) => console.log(response));
  }

  constructor(private _compilerService: CompilerService) {

  }

}


