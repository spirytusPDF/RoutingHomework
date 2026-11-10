import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
export interface Monument {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
}
@Component({
  imports: [],
  selector: 'app-monuments',
  styleUrl: './monuments.css',
  templateUrl: './monuments.html',
})
export class Monuments {
  private route = inject(ActivatedRoute);

  allMonuments: Monument[] = [
    {
      id: 1,
      title: 'Sergey Korolyov Astronautics Museum',
      description: 'A space museum dedicated to rocket design and cosmonautics founder Sergey Korolyov.',
      imageUrl: 'https://fearlessfemaletravels.com/wp-content/uploads/2018/11/zhytomir-Sergei-Pavlovich-Korolyov-Museum-of-Cosmonautics-1024x768.jpg'
    },
    {
      id: 2,
      title: 'St. Sophia Cathedral',
      description: 'An architectural landmark built in 1751 combining Late Renaissance and Baroque styles.',
      imageUrl: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0e/46/e8/8b/caption.jpg?w=1400&h=800&s=1'
    },
    {
      id: 3,
      title: 'Suspension Bridge over Teteriv River',
      description: 'A 24-meter-high pedestrian suspension bridge offering panoramic views of Park of Fame.',
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/1/1a/Zhytomyr_suspension_bridge.jpg'
    },
    {
      id: 4,
      title: 'Water Tower of Zhytomyr',
      description: 'Built in 1898, this 31-meter historic water tower is one of the symbols of Zhytomyr.',
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/6/69/Zhytomyr_Water_Tower.jpg'
    },
    {
      id: 5,
      title: 'St. Mikhail Metropolitan Cathedral',
      description: 'An Orthodox church constructed in 1856 with characteristic blue and gold domes.',
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/5/52/Zhytomyr_St_Mikhail_Cathedral.jpg'
    }
  ];

  displayedMonuments: Monument[] = [];
  requestedAmount: number = 0;

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      const amountParam = parseInt(params['amount'], 10);
      
      this.requestedAmount = isNaN(amountParam) ? this.allMonuments.length : amountParam;
      
      this.displayedMonuments = this.allMonuments.slice(0, this.requestedAmount);
    });
  }
}
