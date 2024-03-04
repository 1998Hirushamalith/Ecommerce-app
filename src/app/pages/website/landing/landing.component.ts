import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../../services/product/product.service';
import { Router, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [RouterOutlet,CommonModule],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.css'
})
export class LandingComponent implements OnInit {

  productList: any[]=[];
  categoryList: any[] = [];
  constructor(private prodSrv:ProductService,private router:Router) {

  }

  ngOnInit(): void {
    this.getAllProducts();
    this.getAllCategory();
  }
  navigateToPRoducts(id: number) {
    this.router.navigate(['/products',id])
  }

  getAllProducts() {
    this.prodSrv.getProducts().subscribe((res:any)=>{
      debugger;
      this.productList = res.data;
    })
  }
  getAllCategory() {
    this.prodSrv.getCategory().subscribe((res:any)=>{
      this.categoryList = res.data;
    })
  }


}
