import { User } from "./User.js";

export class RestaurantOwner extends User {
    constructor(id, name, phone, location) {
        super(id, name, phone, location);
        this.menu = [];
        this.incomingOrders = [];
    }

    addFoodItem(name, price) {
        if(!name || price <= 0) throw new Error("Invalid item");
        this.menu.push({name, price})
    }

    removeFoodItem(name) {
        this.menu = this.menu.filter(i => i.name !== name)
    }

    updatePrice(name, newPrice) {
        const item = this.menu.find(i => i.name === name);
        if(!item) throw new Error("Item not found");
        item.price = newPrice;
    }

    receiveOrder(order) {
        this.incomingOrders.push(order)
    }

    acceptOrder(order) {
        order.acceptByRestaurant(this);
    }

    startPreparing(order) {
        order.startPreparing(this)
    }

    makeOrderReady(order){
        order.markReady(this);
    }

    viewDashboard() {
        return `Restaurant ${this.name}: ${this.incomingOrders.length} incoming orders`;
    }
}