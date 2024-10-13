import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { LoginService } from '../../../app/common-services/login.service';
import { ProductService } from '../../../app/common-services/product.service';
import { ActivatedRoute } from '@angular/router';
import { PlaceBidComponent } from '../place-bid/place-bid.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  constructor(private loginService: LoginService, private productService: ProductService, 
    private router: ActivatedRoute, private modalService: NgbModal) { }
  loggedInUser: any;
  productDetails: any;
  biddingHistory: any = [];
  placeBidopen: boolean = false;
  viewHistory: boolean = false;
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
    this.viewHistory = true;
    this.placeBidopen = false;
    this.productService.fetchBiddingHistory(this.productDetails.id).subscribe(data=>{
      this.biddingHistory = data;
    },error=>{
      console.log(error);
    })
  }

  userCache: any = {};
  getuserdetails(userId){
    if (this.userCache[userId]) {
      return  this.userCache[userId][0].name;
    }
    return this.loginService.getSingleUserDetails(userId).subscribe(userDetails => {
      this.userCache[userId] = userDetails;
      return userDetails[0].name;
    });
  }

  checkAccessPermission(permissionToCheck){
    return this.loginService.checkAccessPermission(permissionToCheck)
  }

  @ViewChild('placeBid') placeBid: ElementRef;


  openPlaceBid() {
    this.viewHistory = false;
    this.placeBidopen = true;
    // this.modalService.open(this.placeBid)
  }

}
