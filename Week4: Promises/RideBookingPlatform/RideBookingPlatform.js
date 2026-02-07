import { Ride } from "./Ride.js";

export class RideBookingPlatform {
    constructor() {
        this.users = new Map();
        this.rides = new Map();
        this.rideCounter = 1;
    }

    registerUser(user) {
        this.users.set(user.id, user);
    }

    getAvailableDriver() {
        for(const user of this.users.values()) {
            if(user.availability && !user.currentRide){
                return user
            }
        }
        throw new Error("No drivers available");
    }

    requestRide(rider, pickup, drop) {
        const driver = this.getAvailableDriver();
        const ride = new Ride(this.rideCounter++, rider, pickup, drop, 150);

        this.rides.set(ride.rideId, ride);
        return ride;
    }

    assignDriver(driver, rideId) {
        const ride = this.rides.get(rideId);
        ride.assignDriver(driver);
        return ride;
    }


    startRide(ride, driver) {
        if (ride.driver !== driver) throw new Error("Wrong driver");
        ride.start();
    }

    completeRide(ride, driver) {
        if(ride.driver !== driver) throw new Error('Wrong driver');

        ride.complete();
        ride.rider.completeRide(ride);
    }

    cancelRide(ride, rider) {
        if(ride.rider !== rider) throw new Error("Not your ride");
        ride.cancel();
    }
}