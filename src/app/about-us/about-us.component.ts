import { Component } from '@angular/core';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent {
  description: string = 'We are a dedicated team committed to providing exceptional service and quality products.';
  
  teamMembers = [
    { name: `John Doe`, photoUrl: 'assets/pic1.png', description: 'Team Leader' },
    { name: `Jane Smith`, photoUrl: 'assets/pic2.png', description: 'Developer' },
    { name: `Alice Johnson`, photoUrl: 'assets/pic3.png', description: 'Designer' },
    { name: `Bob Brown`, photoUrl: 'assets/pic4.png', description: 'Marketing' },
    { name: `Charlie Black`, photoUrl: 'assets/pic5.png', description: 'Sales' },
    { name: `Daisy White`, photoUrl: 'assets/pic6.png', description: 'Support' }
  ];
}
