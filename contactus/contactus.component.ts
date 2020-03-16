import { Component, OnInit } from '@angular/core';
import { MouseEvent } from '@agm/core';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  lat = 23.2106;
  lng = 87.83905;
  zoom: number = 8;

  clickedMarker(label: string, index: number) {
    console.log(`clicked the marker: ${label || index}`)
  }  
  
  markerDragEnd(m: marker, $event: MouseEvent) {
    console.log('dragEnd', m, $event);
  }  
  markers: marker[] = [
	  {
		  lat: 22.51565,
		  lng: 88.35067,
		  label: 'K',
      draggable: false,
      add1: '17C Lake Road Kavi Bharati Sarani',
      add2: 'Opp. – Charu Chandra College',
      add3: 'Kolkata – 700029, West Bengal'
	  },
	  {
		  lat: 23.2106,
		  lng: 87.83905,
		  label: 'B',
      draggable: false,
      add1: 'Room No. 5, Sen Market, 68, G.T. Road,',
      add2: 'Badamtala, Opp. City Tower, Ground Floor',
      add3: 'Burdwan – 713101, West Bengal'
	  },
	  {
		  lat: 22.787365,
		  lng: 88.319729,
		  label: 'H',
      draggable: false,
      add1: '47/2/1 Chatterjee Para Lane',
      add2: 'Baidyabati, Hooghly – 712222',
      add3: 'West Bengal'
	  }
  ]
}
interface marker {
	lat: number;
	lng: number;
	label?: string;
  draggable: boolean;
  add1: string;
  add2: string;
  add3: string;
}