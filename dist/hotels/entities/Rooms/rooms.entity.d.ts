import { HydratedDocument } from 'mongoose';
export type RoomsDocument = HydratedDocument<Rooms>;
export declare class Rooms {
    name: string;
    bookedDates: string[];
    price: number;
    numberOfBedrooms: number;
    numberOfBathrooms: number;
    numberOfBeds: number;
    numberOfGuests: number;
    squareFeet: number;
    features: string[];
    images: string[];
    roomNumber: number;
}
