import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})



export class AppComponent {

  title = 'app-blob';  
  formUpload = this.formBuilder.group({
    arquivo1: '',
    arquivo2: '',
    arquivo3: ''
  });
  constructor(private formBuilder: FormBuilder){ }

  public enviaArquivo1(): void{
    var a1 = this.formUpload.get("arquivo1")?.value
    console.log(a1);
  }

  public enviaArquivo2(): void{
    console.log("enviou arquivo 2")
  }

  public enviaArquivo3(): void{
    console.log("enviou arquivo 3")
  }
}
