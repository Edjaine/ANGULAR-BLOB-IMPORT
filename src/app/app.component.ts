import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { BlobService } from './blob.service';

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
  constructor(private formBuilder: FormBuilder,
              private blobService: BlobService){ }

  public enviaArquivo1(): void{    
    var file = this.formUpload.get("arquivo1")?.value
    this.blobService.adiciona(file.files[0], file.files[0].name);
  }

  public enviaArquivo2(): void{
    console.log("enviou arquivo 2")
  }

  public enviaArquivo3(): void{
    console.log("enviou arquivo 3")
  }
}
