import { Injectable } from '@angular/core';
import { BlobServiceClient, ContainerClient } from '@azure/storage-blob';
@Injectable({
  providedIn: 'root'
})
export class BlobService {
  client : BlobServiceClient;
  containerClient : ContainerClient;

  constructor() { 
        
    const containerName = 'poc-container';

    this.client = new BlobServiceClient("https://stgpocestudo.blob.core.windows.net/?sv=2020-02-10&ss=bfqt&srt=sco&sp=rwdlacupx&se=2022-04-04T23:54:11Z&st=2021-04-04T15:54:11Z&spr=https&sig=lIc93Y9B9lcaZIW9fDFxlK4EN3XW2%2FCQap59uRlm9u4%3D");
    this.containerClient = this.client.getContainerClient(containerName);
  }

  public async adiciona(arquivo: any, nome: string){
    
    console.log("enviado para azure");    
    
    const blobName = nome;
    const blockBlobClient = this.containerClient.getBlockBlobClient(blobName);
    const response = await blockBlobClient.upload(arquivo, arquivo.size);

    console.log(response);
    return response;
  }
}
