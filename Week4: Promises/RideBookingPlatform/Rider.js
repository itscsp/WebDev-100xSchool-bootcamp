/**
 * Rider class extends users
 *
 */

import User from "./User.js";

export class Rider extends User {
    constructor(id, name, phone, location){
        super(id, name, phone, location)
        this.currentRide = null;
        this.rideHistory = [];
    }

    requestRide(platform, pickup, drop){
        if(!this.isLoggedIn()) throw new Error('Login required');

        const ride = platform.requestRide(this, pickup, drop);
        this.currentRide = ride;
        return ride
    }

    cancelRide(platform){
        if(!this.currentRide) throw new Error("No active ride");

        platform.cancelRide(this.currentRide, this)
        this.currentRide = null;
    }

    completeRide(ride) {
        this.rideHistory.push(ride);
        this.currentRide = null;
    }
}