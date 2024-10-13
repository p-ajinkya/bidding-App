import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../../../app/common-services/login.service';
import { ProductService } from '../../../app/common-services/product.service';

@Component({
  selector: 'app-place-bid',
  templateUrl: './place-bid.component.html',
  styleUrls: ['./place-bid.component.css']
})
export class PlaceBidComponent implements OnInit {
  @Input() productDetails;
  @Input() loggedInUser;
  @Output() bidPlaced: EventEmitter<string> = new EventEmitter<string>();

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private productService: ProductService
  ) { }

  bidForm: FormGroup;
  submitted: boolean = false;
  ngOnInit(): void {
    console.log(this.productDetails)
    this.bidForm = this.fb.group({
      bidAmount: [this.productDetails.currentBid, [Validators.required, Validators.min(this.productDetails.currentBid + 1)]],
      productId: [this.productDetails.id, [Validators.required]],
      userId: [this.loggedInUser.id, [Validators.required]],
      bidTime: [new Date().toISOString(), [Validators.required]],
    });
  }

  async onLoginClick(){
    this.submitted = true;
    console.log(this.bidForm.controls)
    if (this.bidForm.valid) {
      await this.productService.addNewBid(this.bidForm.value).subscribe(
        data => {
          this.productDetails.currentBid = this.bidForm.value.bidAmount;
          this.productService.editProduct(this.productDetails.id, this.productDetails).subscribe(data =>{
            this.bidPlaced.emit('Bid Placed');
          })
          // console.log(data);
          // this.bidPlaced.emit();
        },error=>{
          console.log(
            error
          )
        }
      )
      
    }
  }

}
