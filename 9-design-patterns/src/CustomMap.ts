// note: once IoC is implemented, CustomMap no longer is dependent on User or Company class!
// import { User } from "./User";
// import { Company } from "./Company";

// instructions to every other class on hwo they can be an argument to 'addMarker'
interface MapItem {
  location: {
    lat: number;
    lng: number;
  };
}

export class CustomMap {
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
    new google.maps.Marker({
      map: this.googleMap,
      position: {
        lat: mapItem.location.lat,
        lng: mapItem.location.lng,
      },
    });
  }
}
