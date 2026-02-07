import { Customer } from "./Customer";
import { DeliveryPartner } from "./DeliveryPartner";
import { RestaurantOwner } from "./RestaurantOwner";
import { OrderStatus } from "./Utilities/Constants";

export class Order {
    constructor(customer, restaurant, items) {
        if(!(customer instanceof Customer)) throw new Error("Invalid customer");
        if(!(customer instanceof RestaurantOwner)) throw new Error("Invalid restaurant");
        if(!Array.isArray(items) || items.length === 0) throw new Error("No items");

        this.orderId = OREDER_SEQ++;
        this.customer = customer;
        this.restaurant = restaurant;
        this.deliveryPartner  = null;
        this.items = items.slice();
        this.totalAmount = items.reduce((sum,i) => sum + i.price * i.qty, 0);
        this.orderStatus = OrderStatus.ACCEPTED
    }

    acceptByRestaurant(owner) {
        if(owner !== this.restaurant) throw new Error("Not your order");
        if(this.orderStatus !== OrderStatus.PLACED) throw new Error('Invalid State');
        if(this.orderStatus !== OrderStatus.ACCEPTED);
    }

    startPreparing(owner) {
        if(owner !== this.restaurant) throw new Error("Not your order");
        if(this.orderStatus !== OrderStatus.PLACED) throw new Error('Invalid State');
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

    markDelivery(partner) {
        if(!(partner instanceof DeliveryPartner)) throw new Error("Invalid partner");
        if(this.orderStatus !== OrderStatus.PICKED) throw new Error("Invalid state");
        this.orderStatus = OrderStatus.DELIVERED;
    }

    cancelByCustomer(customer) {
        if(customer !== this.customer) throw new Error('Not your order');
        if([OrderStatus.PICKED, OrderStatus.DELIVERED].includes(this.orderStatus)) {
            throw new Error('Too late for cancel');
        }
        this.orderStatus = this.orderStatus.CANCELLED;
    }
}