import { Customer } from "./Customer.js";
import { DeliveryPartner } from "./DeliveryPartner.js";
import { RestaurantOwner } from "./RestaurantOwner.js";

function demo() {
    /**
     * Restaurant Owner
     */
    const rest = new RestaurantOwner(1, 'Spice Hun', "9999999999", "City Center");
    rest.addFoodItem("Burger", 120);
    rest.addFoodItem("Pizza", 250)

    /**
     * Customer
     */

    const cust = new Customer(2, "Chethab", "888888888", "North Area");



    cust.addToCart({name: "Burder", price: 120, qty: 2});
    const order = cust.placeOrder(rest)

    rest.acceptOrder(order);
    rest.startPreparing(order)
    rest.makeOrderReady(order);

    /**
     * Delivery Partner
     */
    const rider = new DeliveryPartner(3, "Aman", "777777777", "West ares");

    rider.acceptDelivery(order)
    rider.markDelivered();

    

    const user = [rest, cust, rider];
    const dashboards = user.map(u => u.viewDashboard());
    return {status: order.orderStatus, dashboards};
}

    const out = demo()

    console.log(out);
