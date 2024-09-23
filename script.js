var ShoeBrand;
(function (ShoeBrand) {
    ShoeBrand["Nike"] = "Nike";
    ShoeBrand["Puma"] = "Puma";
    ShoeBrand["Vans"] = "Vans";
    ShoeBrand["Adidas"] = "Adidas";
    ShoeBrand["Fila"] = "Fila";
    ShoeBrand["Reebok"] = "Reebook";
})(ShoeBrand || (ShoeBrand = {}));
var Angelica = {
    name: "Angelica",
    itemName: "Running Shoes",
    brand: ShoeBrand.Nike,
    price: 150,
    print: function () {
        console.log("Member: ".concat(this.name, ", \n      Item: ").concat(this.itemName, ", \n      Brand: ").concat(this.brand, ", \n      Price: $").concat(this.price));
    },
};
var Daisy = {
    name: "Daisy",
    itemName: "Casual Sneakers",
    brand: ShoeBrand.Vans,
    print: function () {
        console.log("Member: ".concat(this.name, ", \n      Item: ").concat(this.itemName, ", \n      Brand: ").concat(this.brand));
    },
};
var Alliyah = {
    name: "Alliyah",
    itemName: "Sports Shoes",
    brand: ShoeBrand.Puma,
    price: 120,
    print: function () {
        console.log("Member: ".concat(this.name, ", \n      Item: ").concat(this.itemName, ", \n      Brand: ").concat(this.brand, ", \n      Price: $").concat(this.price));
    },
};
var John = {
    name: "John",
    itemName: "Running Shoes",
    brand: ShoeBrand.Adidas,
    print: function () {
        console.log("Member: ".concat(this.name, ", \n      Item: ").concat(this.itemName, ", \n      Brand: ").concat(this.brand));
    },
};
var Oliver = {
    name: "Oliver",
    itemName: "Basketball Shoes",
    brand: ShoeBrand.Fila,
    price: 200,
    print: function () {
        console.log("Member: ".concat(this.name, ", \n      Item: ").concat(this.itemName, ", \n      Brand: ").concat(this.brand, ", \n      Price: $").concat(this.price));
    },
};
Angelica.print();
Daisy.print();
Alliyah.print();
John.print();
Oliver.print();
