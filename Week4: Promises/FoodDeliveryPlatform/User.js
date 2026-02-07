/**
 * Food Delivery Platform (like Swiggy / Zomato)
 */

export class User{
    constructor(id, name, phone, location){
        if(!id || !name || !phone, !location){
            throw new Error("Invalid user data")
        }

        this.id = id;
        this.name = name;
        this.phone = phone;
        this.location = location;
        this._isLoggedIn = false // internal state (encapsulation)
    }

    login(){
        this._isLoggedIn = true;
        return true
    }

    logout(){
        this._isLoggedIn = false;
        return false
    }

    isLoggedIn(){
        return this._isLoggedIn;
    }

    updateLocation(newLocation) {
        if(!newLocation){
            throw new Error('Location required!')
        }
    }

    viewProfile(){
        return {
            id: this.id,
            name: this.name,
            phone: this.phone,
            location: this.location,
            role: this.constructor.name
        }
    }

    //To be overriden (polymorphism)
    viewDashboard(){
        return `${this.constructor.name} dashboard`
    }

}

