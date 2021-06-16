import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { CompilerService } from '../../services/compiler.service';


@Component({
  selector: 'app-text-editor',
  templateUrl: './text-editor.component.html',
  styleUrls: ['./text-editor.component.css']
})
export class TextEditorComponent implements OnInit {

  @Output() variablesInformation = new EventEmitter<string>();
  @Output() wipeData = new EventEmitter<any>();

  constructor(private _compilerService: CompilerService) { }

  text: string;
  alert: string;
  error: boolean = false;

  ngOnInit(): void {
  }

  async onRunCode() {

    (await this._compilerService.postResponse(this.text))
      .subscribe( () => {
        this._compilerService.getAllResponse()
          .subscribe((data: any) => {
            console.log(data)

            if ( data['status'] === "200" ){
              this.error = false;
              this.alert = "Sin errores de compilación"
              this.onEmitEvent( data['data'] )
            }else{
              this.error = true;
              this.alert = data['data']
            }
          })
      });

  }

  onWipeData(){
    this.error = false;
    this._compilerService.wipeData().subscribe( response => {
      this.alert = response['data'];
      this.wipeData.emit();
    });
  }


  onEmitEvent( variablesJson ){
    this.variablesInformation.emit( variablesJson );
  }

}
