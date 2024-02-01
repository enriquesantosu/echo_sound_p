// import { Component } from '@angular/core';
// import { Router } from '@angular/router';
// import { ConcertsService } from 'src/app/services/concerts.service';

// @Component({
//   selector: 'app-next-shows',
//   templateUrl: './next-shows.component.html',
//   styleUrls: ['./next-shows.component.css']
// })
// export class NextShowsComponent {

//   constructor( private _concertService: ConcertsService, private router: Router ) {

//     shows() {

//       console.log('get next concerts fired')

//       this._concertService.getNextConcerts().subscribe(data) => {

//         console.log(data)

//       }
//     }
//   }
// }

// import { Component } from '@angular/core';
// import { Router } from '@angular/router';
// import { ConcertsService } from 'src/app/services/concerts.service';
// import { OnInit } from '@angular/core';

// @Component({
//   selector: 'app-next-shows',
//   templateUrl: './next-shows.component.html',
//   styleUrls: ['./next-shows.component.css']
// })
// export class NextShowsComponent implements OnInit {

//   constructor(private concertService: ConcertsService, private router: Router) {

//     ngOnInit() {
//       shows() {
//         console.log('get next concerts fired');

//         this.concertService.getNextConcerts().subscribe(data => {


//           let concertList = data

//           console.log(concertList);
//         });
//       }

//     }

//   }

// }


import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConcertsService } from 'src/app/services/concerts.service';

@Component({
  selector: 'app-next-shows',
  templateUrl: './next-shows.component.html',
  styleUrls: ['./next-shows.component.css']
})
export class NextShowsComponent implements OnInit {

  concertList: any[] = []; // Declare concertList to store fetched data

  constructor(private concertService: ConcertsService, private router: Router) { }

  ngOnInit() {
    this.shows(); // Call shows() within ngOnInit
  }

  shows() {
    console.log('get next concerts fired');

    this.concertService.getNextConcerts().subscribe(data => {
      this.concertList = data; // Assign fetched data to concertList
      console.log(this.concertList);
    });
  }
}

