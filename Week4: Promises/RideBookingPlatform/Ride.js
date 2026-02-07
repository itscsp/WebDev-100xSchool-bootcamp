/**
 * Ride
 */

import { RideStatus } from "./Utilities/Constants.js";

export class Ride{
    constructor(id, rider, pickupLoction, dropLoction, fare = 30){
        this.rideId = id;
        this.rider = rider;
        this.driver = null
        this.pickupLoction = pickupLoction;
        this.dropLoction = dropLoction;
        this.price = fare;
        this.status = RideStatus.REQUESTED;
    }

    assignDriver(driver){
        //Checking if driver are same location as rider? if true and status is occupied or
        if (this.status !== RideStatus.REQUESTED)
            throw new Error("Ride already assigned");

        this.driver = driver
        this.status = RideStatus.ASSIGNED;
    }

    start(){
        if (this.status !== RideStatus.ASSIGNED)
            throw new Error("Ride cannot start");

        this.status = RideStatus.STARTED;
    }

    complete() {
        if (this.status !== RideStatus.STARTED)
            throw new Error("Ride not started");

        this.status = RideStatus.COMPLETED;
    }

    cancel() {
        if (this.status === RideStatus.STARTED)
            throw new Error("Ride already started");

        this.status = RideStatus.CANCELLED;
    }
}