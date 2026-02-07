
import {User} from './User.js';

export class DeliveryPartner extends User{
    constructor(id, name, phone, location){
        super(id, name, phone, location);
        this.currentDelivery = null;
        this.completed = [];
        this.earning = 0
    }

    acceptDelivery(order){
        if(this.currentDelivery) throw new Error("Already on delivery");
        order.assignDelivery(this);
        this.currentDelivery = order;
    }

    markDelivered() {
        if(!this.currentDelivery) throw new Error("No delivery");
        this.currentDelivery.markDelivered(this);
        this.completed.push(this.currentDelivery);
        this.earning += Math.round(this.currentDelivery.totalAmount * 0.1);
        this.currentDelivery = null;
    }

    viewEarning() {
        return this.earning;
    }

    viewDashboard() {
        return `DeliveryPartner ${this.name}: ${this.completed.length} completed, earnings ${this.earning}`;
    }
}