import { Injectable } from '@angular/core';
import { BlobServiceClient, BlockBlobUploadResponse, ContainerClient } from '@azure/storage-blob';
@Injectable({
  providedIn: 'root'
})
export class BlobService {
  client : BlobServiceClient;
  containerClient : ContainerClient;

  constructor() { 
        
    const containerName = 'poc-container';

    this.client = new BlobServiceClient("Insira aqui a Share Acess Signature");
    this.containerClient = this.client.getContainerClient(containerName);
  }

  public async adiciona(arquivo: any, nome: string) : Promise<boolean> {
    
    console.log("enviado para azure");    
    
    const blobName = nome;
    const blockBlobClient = this.containerClient.getBlockBlobClient(blobName);
    const response = await blockBlobClient.upload(arquivo, arquivo.size);

    console.log(response);

    if(response._response.status === 201)
      return true;

    return false;

    
  }
}
