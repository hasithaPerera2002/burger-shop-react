import Burger from "../models/burger.ts";

function Order(burger:Burger) {
    return (
        <div>
            {burger.name}
        </div>
    );
}

export default Order;