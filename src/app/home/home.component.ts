import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  //need to define any here as Type!!!
	products:any[] = [];
	constructor(private apiService: ApiService) { }
	ngOnInit() {
		this.apiService.get().subscribe((data: any)=>{
			console.log(data);
			this.products = data;
      console.log(this.products)

      for(let product of this.products){
        console.log(product.name)
      }
		})
	}
}
