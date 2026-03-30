// Project - Restaurant v1.0

function GamingSnackShop() {
    const products = [
        { name: "Energy Drink", price: 80 },
        { name: "Chips Pack", price: 40 },
        { name: "Burger", price: 120 },
        { name: "Cold Coffee", price: 150 },
        { name: "Pizza Slice", price: 180 },
        { name: "Chocolate Shake", price: 130 }
    ];

    let cart = [];
    let total = 0;

    function showMenu() {
        return products
            .map((p, i) => `${i + 1}. ${p.name} (₹${p.price})`)
            .join("\n");
    }

    function orderItem() {
        let input = prompt(`Gaming Snack Shop Menu:\n\n${showMenu()}\n\nEnter item number:`);

        let index = Number(input) - 1;

        if (isNaN(index) || index < 0 || index >= products.length) {
            alert("Invalid selection.");
            return;
        }

        let product = products[index];

        let qty = Number(prompt(`Enter quantity for ${product.name}:`));

        if (!qty || qty <= 0) {
            alert("Invalid quantity.");
            return;
        }

        let cost = product.price * qty;
        total += cost;

        cart.push({
            item: product.name,
            quantity: qty,
            cost: cost
        });

        alert(`Added: ${product.name} x${qty} = ₹${cost}`);
    }

    function generateBill() {
        let bill = "🧾 Your Order:\n\n";

        cart.forEach((p, i) => {
            bill += `${i + 1}. ${p.item} x${p.quantity} = ₹${p.cost}\n`;
        });

        bill += `\nTotal Amount: ₹${total}`;
        bill += `\nThanks for visiting!`;

        alert(bill);
    }

    let choice;

    do {
        orderItem();
        choice = prompt("Add more items? (yes/no)");
    } while (choice && choice.toLowerCase() === "yes");

    generateBill();
}

GamingSnackShop();