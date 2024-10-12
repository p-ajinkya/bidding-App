import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../../app/common-services/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  constructor(private productService: ProductService, private router: Router) { }
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

  gotoDetails(details){
    this.router.navigateByUrl(`/dashboard/details/${details.id}`)
  }

}
