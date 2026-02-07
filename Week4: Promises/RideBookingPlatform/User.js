/**
 * User class (Base class)
 * 
 * - Id, Name, Location
 * 
 */

export default class User{

    constructor(id, name, phone, location){
        if(!id || !name || !phone || !location){
            return new Error('Invalid user data!')
        }
        this.id = id
        this.name = name
        this.phone = phone
        this.location = location
        this._isLoggedIn = false
    }

    login() {
        this._isLoggedIn = true;
        console.log(`${this.name} logged in`);
    }

    logout() {
        this._isLoggedIn = false
        console.log(`${this.name} logged out`);
    }

    isLoggedIn(){
        return this._isLoggedIn;
    }

    updateLocation(newLocation) {
        if(!newLocation){
            return new Error('Invalid user location!')
        }
        this.location = newLocation;
    }

    viewProfile() {
        return {
            id: this.id,
            name: this.name,
            location: this.location,
            role: this.constructor.name
        }
    }
}