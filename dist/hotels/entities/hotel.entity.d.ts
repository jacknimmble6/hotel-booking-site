/// <reference types="mongoose/types/aggregate" />
/// <reference types="mongoose/types/callback" />
/// <reference types="mongoose/types/collection" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/expressions" />
/// <reference types="mongoose/types/helpers" />
/// <reference types="mongoose/types/middlewares" />
/// <reference types="mongoose/types/indexes" />
/// <reference types="mongoose/types/models" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/populate" />
/// <reference types="mongoose/types/query" />
/// <reference types="mongoose/types/schemaoptions" />
/// <reference types="mongoose/types/schematypes" />
/// <reference types="mongoose/types/session" />
/// <reference types="mongoose/types/types" />
/// <reference types="mongoose/types/utility" />
/// <reference types="mongoose/types/validation" />
/// <reference types="mongoose/types/virtuals" />
/// <reference types="mongoose/types/inferschematype" />
import { HydratedDocument } from 'mongoose';
import { Rooms } from './Rooms/rooms.entity';
import { Type } from './type.entity';
export type HotelDocument = HydratedDocument<Hotel>;
export declare class Hotel {
    city: string;
    country: string;
    state: string;
    location: string;
    latitude: string;
    longitude: string;
    generalImages: string[];
    OverviewDescription: string;
    NeighborhoodDescription: string;
    Address: string;
    neighborhood: string;
    PublicTransit: string;
    Downtown: string;
    Parking: string[];
    name: string;
    amountOfRooms: number;
    amenities: string[];
    rooms: Rooms[];
    typeOfRooms: Type[];
    checkInTime: string;
    checkOutTime: string;
    flexibleCancellation: string;
    checkInPolicy: string[];
    houseRules: string[];
    notes: string[];
}
export declare const HotelSchema: import("mongoose").Schema<Hotel, import("mongoose").Model<Hotel, any, any, any, any>, {}, {}, {}, {}, "type", Hotel>;
