import { Component } from '@angular/core';
import { CompilerService } from 'src/app/services/compiler.service';
import { async } from '@angular/core/testing';


@Component({
  selector: 'app-terminal-view',
  templateUrl: './terminal-view.component.html',
  styleUrls: ['./terminal-view.component.css']
})

export class TerminalViewComponent {

  estado;

  response = '';

  async onTerminalEvent(generatedSnippet) {
    console.log(generatedSnippet);
  }

  constructor(private _compilerService: CompilerService) {
  }



}


