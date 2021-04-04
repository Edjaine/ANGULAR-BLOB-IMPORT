import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { BlobService } from './blob.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})



export class AppComponent {

  sucesso1 = false;
  sucesso2 = false;
  sucesso3 = false;

  title = 'app-blob';  
  formUpload = this.formBuilder.group({
    arquivo1: '',
    arquivo2: '',
    arquivo3: ''
  });
  constructor(private formBuilder: FormBuilder,
              private blobService: BlobService){ }

  public async enviaArquivo1(){    
    var file = this.formUpload.get("arquivo1")?.value
    this.sucesso1 = await this.blobService.adiciona(file.files[0], file.files[0].name);
  }

  public async enviaArquivo2(){
    var file = this.formUpload.get("arquivo2")?.value
    this.sucesso2 = await this.blobService.adiciona(file.files[0], file.files[0].name);
  }

  public async enviaArquivo3() {
    var file = this.formUpload.get("arquivo3")?.value
    this.sucesso3 = await this.blobService.adiciona(file.files[0], file.files[0].name);
  }
}
