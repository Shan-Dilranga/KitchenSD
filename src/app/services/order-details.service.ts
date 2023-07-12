import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpEvent } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class OrderDetailsService {

  constructor() { }

  foodDetails=[
    {
      id:1,
      foodName:"Special Sandwitch",
      foodDetails:"Sliced bread with green vegetable on white ceramic plate",
      foodPic:"https://images.unsplash.com/photo-1619860860774-1e2e17343432?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=804",
      foodPrice: 200
      
    },
    {
      id:2,
      foodName:"Vege Supreme",
      foodDetails:"Onion | Green Capsicum|Mushroom|Black Olives, Sweet corn",
      foodPic:"https://images.unsplash.com/photo-1555072956-7758afb20e8f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
      foodPrice: 369
      
    },
    {
      id:3,
      foodName:"Paneer Burger",
      foodDetails:"Paneer",
      foodPic:"https://images.unsplash.com/photo-1560130803-aaadb4bc913e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80",
      foodPrice: 150
      
    },
    {
      id:4,
      foodName:"Vege masala roll in Naan",
      foodDetails:"Ahomely mix of mashed potato and veggies, seasonedn with idian naan rotti",
      foodPic:"https://images.unsplash.com/photo-1662116765994-1e4200c43589?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1332&q=80",
      foodPrice: 140
      
    },
    {
      id:5,
      foodName:"Indulgence Brownie",
      foodDetails:"(Eggless) Indulge in richiy decadent chocolate brownie crafted",
      foodPic:"https://images.unsplash.com/photo-1570145820259-b5b80c5c8bd6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
      foodPrice: 100
    },
    {
      id:6,
      foodName:"Oreo Cheesecake Ice Cream",
      foodDetails:"Oreao Ice Cream",
      foodPic:"https://images.unsplash.com/photo-1571089465427-cd3c533e809f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=435&q=80",
      foodPrice: 250
      
    }
  ]
}
