/**
 * Rider class extends users
 *
 */

import User from "./User.js";

export class Driver extends User {
    constructor(id, name, phone, location, vehicleNo, vehicleType){
        super(id, name, phone, location)
        this.vehicleNo = vehicleNo;
        this.vehicleType = vehicleType;
        this.availability = false;
        this.earning = 0;
        this.currentRide = null;
    }

    updateAvailability(status){
        this.availability = status;
    }


    acceptRide(platform, rideId){
        if(!this.availability){throw new Error('Please make your available to acceptRide')}
        const ride = platform.assignDriver(this, rideId)
        this.currentRide = ride;
    }

    startRide(platform) {
        if(!this.currentRide) throw new Error("No ride assigned");
        platform.startRide(this.currentRide, this)
    }


    endRide(platform) {
        if(!this.currentRide) throw new Error("No ride assigned");
        
        platform.completeRide(this.currentRide, this);
        this.earning += this.currentRide.fare;
        this.currentRide = null;
    }

    viewEarning(){
        return this.earning;
    }
}