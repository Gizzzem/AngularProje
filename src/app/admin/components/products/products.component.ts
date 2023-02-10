import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { BaseComponent, SpinnerType } from 'src/app/base/base.component';
import { Product } from 'src/app/contracts/product';
import { HttpClientService } from 'src/app/services/common/http-client.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent extends BaseComponent implements OnInit {

  constructor( spinner: NgxSpinnerService, private httpClientService: HttpClientService) {
    super(spinner);
  }  
  ngOnInit(): void {
    this.showSpinner(SpinnerType.BallSpinClockwiseFadeRoating);
    
    this.httpClientService.get<Product[]>({
        controller: 'Product'
      }).subscribe(data=>{console.log(data)});

  //   this.httpClientService.post({
  //     controller: "Product"
  //   },{ 
  //     name: "Kalem",
  //     stock: 100,
  //     price:15

  //   }).subscribe();


  // this.httpClientService.put({
  //   controller:"Product"
  // },{
  //   id:"0428eb9f-8a00-4d9c-bc6b-27255cc01ad7",
  //   name:"Silgi",
  //   stock: 50,
  //   price: 10
  // }).subscribe();

    // this.httpClientService.delete({
    //   controller: "Product"
    // }, "a4b74017-e594-4ea3-9ba5-79d28937be7b").subscribe();

    // this.httpClientService.get({
    //   fullEndPoint:"https://jsonplaceholder.typicode.com/posts",
    // }).subscribe(data=>console.log(data))
  }
}
