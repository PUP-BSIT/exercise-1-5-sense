enum ShoeBrand {
  NIKE = "Nike",
  PUMA = "Puma",
  VANS = "Vans",
  ADIDAS = "Adidas",
  FILA = "Fila",
  REEBOK = "Reebook",
}

type Item = {
  name: string;
  itemName: string;
  brand: string;
  price?: number;
  print(): void;
};

const Angelica: Item = {
  name: "Angelica",
  itemName: "Running Shoes",
  brand: ShoeBrand.NIKE,
  price: 150,
  print: function () {
    console.log(
      `Member: ${this.name}, 
      Item: ${this.itemName}, 
      Brand: ${this.brand}, 
      Price: ${this.price}`
    );
  },
};

const Daisy: Item = {
  name: "Daisy",
  itemName: "Casual Sneakers",
  brand: ShoeBrand.Vans,
  print: function () {
    console.log(
      `Member: ${this.name}, 
      Item: ${this.itemName}, 
      Brand: ${this.brand}`
    );
  },
};

const Alliyah: Item = {
  name: "Alliyah",
  itemName: "Sports Shoes",
  brand: ShoeBrand.PUMA,
  price: 120,
  print: function () {
    console.log(
      `Member: ${this.name}, 
      Item: ${this.itemName}, 
      Brand: ${this.brand}, 
      Price: ${this.price}`
    );
  },
};

const John: Item = {
  name: "John",
  itemName: "Running Shoes",
  brand: ShoeBrand.Adidas,
  print: function () {
    console.log(
      `Member: ${this.name}, 
      Item: ${this.itemName}, 
      Brand: ${this.brand}`
    );
  },
};

const Oliver: Item = {
  name: "Oliver",
  itemName: "Basketball Shoes",
  brand: ShoeBrand.Fila,
  price: 200,
  print: function () {
    console.log(
      `Member: ${this.name}, 
      Item: ${this.itemName}, 
      Brand: ${this.brand}, 
      Price: $${this.price}`
    );
  },
};

Angelica.print();
Daisy.print();
Alliyah.print();
John.print();
Oliver.print();
