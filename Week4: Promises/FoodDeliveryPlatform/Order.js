import { Customer } from "./Customer.js";
import { DeliveryPartner } from "./DeliveryPartner.js";
import { RestaurantOwner } from "./RestaurantOwner.js";
import { OrderStatus } from "./Utilities/Constants.js";

export class Order {
    constructor(customer, restaurant, items) {

        if(!(customer instanceof Customer)) throw new Error("Invalid customer");
        if(!(restaurant instanceof RestaurantOwner)) throw new Error("Invalid restaurant");
        if(!Array.isArray(items) || items.length === 0) throw new Error("No items");

        this.orderId = new Date();
        this.customer = customer;
        this.restaurant = restaurant;
        this.deliveryPartner  = null;
        this.items = items.slice();
        this.totalAmount = items.reduce((sum,i) => sum + i.price * i.qty, 0);
        this.orderStatus = OrderStatus.PLACED
    }

    acceptByRestaurant(owner) {
        if(owner !== this.restaurant) throw new Error("Not your order");
        if(this.orderStatus !== OrderStatus.PLACED) throw new Error('Invalid State');
        this.orderStatus = OrderStatus.ACCEPTED;
    }

    startPreparing(owner) {
        if(owner !== this.restaurant) throw new Error("Not your order");
        if(this.orderStatus !== OrderStatus.ACCEPTED) throw new Error('Invalid State');
        this.orderStatus = OrderStatus.PREPARING;
    }

    markReady(owner) {
        if(owner !== this.restaurant) throw new Error("Not your order");
        if(this.orderStatus !== OrderStatus.PREPARING) throw new Error('Invalid State');
        this.orderStatus = OrderStatus.READY;
    }

    assignDelivery(partner){
        if(!(partner instanceof DeliveryPartner)) throw new Error("Invalid partner");
        if(this.orderStatus !== OrderStatus.READY) throw new Error("Not ready for for pickup");
        this.deliveryPartner = partner;
        this.orderStatus = OrderStatus.PICKED;
    }

    markDelivered(partner) {
        if (partner !== this.deliveryPartner) throw new Error("Not your delivery");
        if (this.orderStatus !== OrderStatus.PICKED) throw new Error("Invalid state");
        this.orderStatus = OrderStatus.DELIVERED;
    }

    cancelByCustomer(customer) {
        if(customer !== this.customer) throw new Error('Not your order');
        if([OrderStatus.PICKED, OrderStatus.DELIVERED].includes(this.orderStatus)) {
            throw new Error('Too late for cancel');
        }
        this.orderStatus = OrderStatus.CANCELLED;
    }
}