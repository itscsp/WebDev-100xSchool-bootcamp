import { RideBookingPlatform } from "./RideBookingPlatform.js"
import {Rider} from "./Rider.js"
import {Driver} from "./Driver.js"
const platform = new RideBookingPlatform();

const rider = new Rider(1, "Chethan", "8888888888", "Home");
const driver = new Driver(2, "Aman", "7777777777", "Stand", "KA01AB1234", "Sedan");

platform.registerUser(rider);
platform.registerUser(driver);

rider.login();
driver.login();
driver.updateAvailability(true);

const ride = rider.requestRide(platform, "Home", "Mall");


driver.acceptRide(platform, ride.rideId);
driver.startRide(platform);
driver.endRide(platform);

console.log("Ride Status:", ride.status);
console.log("Driver Earnings:", driver.earnings);
console.log("Rider History:", rider.rideHistory.length);