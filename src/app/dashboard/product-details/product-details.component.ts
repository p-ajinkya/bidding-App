import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../../app/common-services/login.service';
import { ProductService } from '../../../app/common-services/product.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  constructor(private loginService: LoginService, private productService: ProductService, private router: ActivatedRoute) { }
  loggedInUser: any;
  productDetails: any;
  biddingHistory: any = [];
  ngOnInit(): void {
    this.router.params.subscribe(data=> {
      console.log(data);
      this.fetchProductDetails(data.id)
    })
    this.loggedInUser = this.loginService.getLoggedUserDetails();
  }

  fetchProductDetails(id){
    this.productService.fetchSingleProduct(id).subscribe(data=>{
      console.log(data)
      this.productDetails = data[0]
    },error=>{
      console.log(error);
    })
  }

  fetchBiddingHostory(){
    let historyArr: any = [];
    this.productService.fetchBiddingHistory(this.productDetails.id).subscribe(data=>{
      this.biddingHistory = data;
    },error=>{
      console.log(error);
    })
  }

}
