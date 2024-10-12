import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../../app/common-services/product.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  constructor(private productService: ProductService) { }
  productsArray: any = []
  ngOnInit(): void {
    this.fetchAllProducts();
  }

  fetchAllProducts(){
    this.productService.fetchAllProducts().subscribe((response) => {
      this.productsArray = response;
    },error=>{

    })
  }


}
