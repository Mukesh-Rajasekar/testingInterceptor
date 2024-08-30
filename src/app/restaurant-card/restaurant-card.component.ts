import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'; 
import { RestaurantServiceService } from '../restaurant-service.service';

@Component({
  selector: 'app-restaurant-card',
  templateUrl: './restaurant-card.component.html',
  styleUrls: ['./restaurant-card.component.css']
})
export class RestaurantCardComponent implements OnInit {
  rData: any[] = [];         
  filteredData: any[] = [];   

  constructor(
    private restaurantData: RestaurantServiceService,  
    private router: Router, private ac:ActivatedRoute                            
  ) {}

  ngOnInit(): void {
    
    this.restaurantData.getRestaurant().subscribe(data => {
      this.rData = data;
      this.filteredData = data; 
    });
  }

 
  viewDetails(id: string): void {
    this.router.navigate(['/restaurant', id]); 
  }

  
  filterData(searchTerm: string): void {
    this.filteredData = this.rData.filter(restaurant =>
      restaurant.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      restaurant.location.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }

  
}
