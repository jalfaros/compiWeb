import { AfterViewInit, Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { NgTerminal } from 'ng-terminal';
import { CompilerService } from '../../services/compiler.service';

@Component({
  selector: 'app-terminal',
  templateUrl: './terminal.component.html',
  styleUrls: ['./terminal.component.css']
})

export class TerminalComponent implements AfterViewInit {

  @ViewChild('term', { static: true }) child: NgTerminal;
  @Input() response: string;
  @Output() snippet = new EventEmitter<string>();


  globalSnippet = '';
  openBracketCounter = 0;
  closeBracketCounter = 0;

  onAddingChecker(event, e) {

    if (!(event.keyCode === 37 || event.keyCode === 38 || event.keyCode === 39 || event.keyCode === 40)) {

      if (event.keyCode === 222) {
        this.openBracketCounter++;
      } else if (event.keyCode === 191) {
        this.closeBracketCounter++;
      }

      this.globalSnippet += e.key;
    }
    this.child.write(e.key);
  }


  onDelettingChecker() {
    if (this.child.underlying.buffer.active.cursorX > 1) {
      this.child.write('\b \b');
      this.globalSnippet = this.globalSnippet.slice(0, this.globalSnippet.length - 1);
    }
  }

  onSnippedChecker(): boolean {
    if (this.openBracketCounter === this.closeBracketCounter) {
      console.log(this.globalSnippet);

      return true;
    } else {
      console.log(this.globalSnippet);
      return false;
    }
  }



  ngAfterViewInit() {

    this.child.write('Created by Ignacio Alfaro & Warner Hurtado - TEC 2021\r\n$');

    this.child.keyEventInput.subscribe(async e => {

      const event = e.domEvent;
      const printable = !event.altKey && !event.ctrlKey && !event.metaKey;

      if (event.keyCode === 13) {
        if (this.onSnippedChecker()) {

          this.onEnter(this.globalSnippet);

          this.globalSnippet = '';
          this.openBracketCounter = 0;
          this.closeBracketCounter = 0;
        } else {
          this.globalSnippet += '\n';
          this.child.write('\r\n...');
        }

      } else if (event.keyCode === 8) {
        this.onDelettingChecker();
      } else if (printable) {
        this.onAddingChecker(event, e);
      }
    })
  }

  constructor(private _compilerService: CompilerService) { }

  async onEnter(generatedSnippet) {
    await this._compilerService.postResponse(generatedSnippet)
      .subscribe(r => {
        this._compilerService.getAllResponse()
          .subscribe((data: any) => {

            if (data.data !== 'Ok!') {
              this.child.write('\r\n');
              this.child.write(data.data);
              this.child.write('\r\n$');
            } else {
              this.child.write('\r\n$');
            }
          })
      });
  }

}
