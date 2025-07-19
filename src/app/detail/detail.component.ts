// detail.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent {
  productName: string = 'ICE CUBE';
  tagline: string = 'The Icy Temptation';
  manufacturer: string = 'Winter Fussion';
  address: string = 'Ooramana kayanad road\nOoramana P.O, Ernakulam 686663, Kerala, India';
  email: string = 'winterfussion@gmail.com';
  website: string = 'www.winterfussion.com';
  customerCareNo: string = '+91 73561 68312';
  licenseNo: string = '21324190000452';
  weight: string = '1 Kg';
  ingredients: string = 'UV Treated Purified Water';
  barcode: string = '9 102769 999572';

  nutritionFacts = [
    { label: 'Calories', value: '0' },
    { label: 'Total Fat', value: '0g' },
    { label: 'Sodium', value: '0g' },
    { label: 'Total Carbohydrate', value: '0g' },
    { label: 'Protein', value: '0g' }
  ];

  usageInstructions = [
    'Please shake the cover well before use to release any sticky cubes',
    'Use a long ice picker to pick the ice cubes from the packet',
    'Drain out any excess water before storing the packet in your freezer for future usage',
    'Recommended temperature of storage should be between -7 degrees to -10 degrees'
  ];
}