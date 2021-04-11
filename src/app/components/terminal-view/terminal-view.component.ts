import { Component } from '@angular/core';
import { CompilerService } from 'src/app/services/compiler.service';


@Component({
  selector: 'app-terminal-view',
  templateUrl: './terminal-view.component.html',
  styleUrls: ['./terminal-view.component.css']
})



export class TerminalViewComponent {

  response = '';

  async onTerminalEvent(generatedSnippet) {
    console.log(generatedSnippet);
    
    (await this._compilerService.getResponse(generatedSnippet))
      .subscribe((response) => console.log(response));
  }

  constructor(private _compilerService: CompilerService) { }



}
