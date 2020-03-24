// note: once IoC is implemented, CustomMap no longer is dependent on User or Company class!
// import { User } from "./User";
// import { Company } from "./Company";

// instructions to every other class on how they can be an argument to 'addMarker'
export interface MapItem {
  location: {
    lat: number;
    lng: number;
  };
  markerContent(): string;
  color: string;
}

export class CustomMap {
  // private means this property can only be accessed inside this class
  private googleMap: google.maps.Map;

  constructor(divId: string) {
    this.googleMap = new google.maps.Map(document.getElementById(divId), {
      zoom: 1,
      center: {
        lat: 0,
        lng: 0,
      }
    })
  }

  addMarker(mapItem: MapItem): void {
    const marker = new google.maps.Marker({
      map: this.googleMap,
      position: {
        lat: mapItem.location.lat,
        lng: mapItem.location.lng,
      },
    });

    marker.addListener('click', () => {
      const infoWindow = new google.maps.InfoWindow({
        content: mapItem.markerContent(),
      });

      infoWindow.open(this.googleMap, marker);
    });
  }
}
