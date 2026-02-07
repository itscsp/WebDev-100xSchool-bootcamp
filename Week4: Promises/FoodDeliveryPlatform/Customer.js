
import { Order } from './Order';
import User from './User';

export class Customer extends User{
    constructor(id, name, phone, location){
        super(id, name, phone, location);
        this.cart = [];
        this.orders = [];
    }

    browseRestaurants(restaurant){
        return restaurant.map(r => r.name)
    }

    addToCart(item){
        if(!item || !item.name || !item.price) throw new Error("Invalid item");
        this.cart.push({...item, qty: item.qty || 1})
    }

    clearCart(){
        this.cart = []
    }

    placeOrder(restaurant) {
        if(this.cart.length === 0) throw new Error("Cart empty");
        const order = new Order(this, restaurant, this.cart);
        this.orders.push(order);
        restaurant.receiveOrder(order);
        this.clearCart();
        return order;
    }

    cancelOrder(order) {
        order.cancelByCustomer(this)
    }

    trackOrder(order) {
        return order.orderStatus;
    }

    viewDashboard() {
        return `Customer ${this.name}: ${this.order.length} orders`
    }
}