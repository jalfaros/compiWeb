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

  variablesInformation = []

  async onTerminalEvent(generatedSnippet) {
    console.log( generatedSnippet );
  }

  constructor(private _compilerService: CompilerService) {
  }



  onGetEvent(event : string){
    this.variablesInformation = [];
    var variables = JSON.parse(event.substring(0, event.length - 2) + '}')
    for (const [,value] of Object.entries(variables)) {
      this.variablesInformation.push(value);
    }
  }

  onWipeData(){
    this.variablesInformation = []
  }



  





  

}


