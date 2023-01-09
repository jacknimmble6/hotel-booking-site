class Image {
  readonly image: string;
}

class Rooms {
  readonly name: string;
  readonly bookedDates: string[];
  readonly price: number;
  readonly numberOfBedrooms: number;
  readonly numberOfBathrooms: number;
  readonly numberOfGuests: number;
  readonly numberOfBeds: number;
  readonly squareFeet: number;
  readonly features: string[];
  readonly images: Image[];
  readonly roomNumber: number;
}

class Type {
  readonly name: string;
  readonly price: string;
}

export class CreateHotelDto {
  readonly city: string;
  readonly country: string;
  readonly state: string;
  readonly location: string;
  readonly latitude: string;
  readonly longitude: string;
  readonly generalImages: string[];
  readonly OverviewDescription: string;
  readonly NeighborhoodDescription: string;
  readonly Address: string;
  readonly neighborhood: string;
  readonly publicTransit: string;
  readonly Downtown: string;
  readonly Parking: string[];
  readonly name: string;
  readonly numberOfRooms: number;
  readonly amenities: string[];
  readonly rooms: Rooms[];
  readonly typeOfRooms: Type[];
  readonly checkInTime: string;
  readonly checkOutTime: string;
  readonly flexibleCancellation: string;
  readonly checkInPolicy: string[];
  readonly houseRules: string[];
  readonly notes: string[];
}
