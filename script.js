var ShoeBrand;
(function (ShoeBrand) {
  ShoeBrand["NIKE"] = "Nike";
  ShoeBrand["PUMA"] = "Puma";
  ShoeBrand["VANS"] = "Vans";
  ShoeBrand["ADIDAS"] = "Adidas";
  ShoeBrand["FILA"] = "Fila";
  ShoeBrand["REEBOK"] = "Reebook";
})(ShoeBrand || (ShoeBrand = {}));

var Angelica = {
  name: "Angelica",
  itemName: "Running Shoes",
  brand: ShoeBrand.NIKE,
  price: 150,
  print: function () {
    console.log(
      "Member: "
        .concat(this.name, ", \n      Item: ")
        .concat(this.itemName, ", \n      Brand: ")
        .concat(this.brand, ", \n      Price: ")
        .concat(this.price)
    );
  },
};

var Daisy = {
  name: "Daisy",
  itemName: "Casual Sneakers",
  brand: ShoeBrand.VANS,
  print: function () {
    console.log(
      "Member: "
        .concat(this.name, ", \n      Item: ")
        .concat(this.itemName, ", \n      Brand: ")
        .concat(this.brand)
    );
  },
};

var Alliyah = {
  name: "Alliyah",
  itemName: "Sports Shoes",
  brand: ShoeBrand.PUMA,
  price: 120,
  print: function () {
    console.log(
      "Member: "
        .concat(this.name, ", \n      Item: ")
        .concat(this.itemName, ", \n      Brand: ")
        .concat(this.brand, ", \n      Price: ")
        .concat(this.price)
    );
  },
};

var John = {
  name: "John",
  itemName: "Running Shoes",
  brand: ShoeBrand.ADIDAS,
  print: function () {
    console.log(
      "Member: "
        .concat(this.name, ", \n      Item: ")
        .concat(this.itemName, ", \n      Brand: ")
        .concat(this.brand)
    );
  },
};

var Oliver = {
  name: "Oliver",
  itemName: "Basketball Shoes",
  brand: ShoeBrand.FILA,
  price: 200,
  print: function () {
    console.log(
      "Member: "
        .concat(this.name, ", \n      Item: ")
        .concat(this.itemName, ", \n      Brand: ")
        .concat(this.brand, ", \n      Price: ")
        .concat(this.price)
    );
  },
};

Angelica.print();
Daisy.print();
Alliyah.print();
John.print();
Oliver.print();
