enum ShoeBrand {
    Nike = "Nike",
    Puma = "Puma",
    Vans = "Vans",
    Adidas = "Adidas",
    Fila = "Fila",
    Reebok = "Reebook"
}

type Item = {
    name: string;
    itemName: string;
    brand: string;
    price?: number;
    print: () => void;
}

const Angelica: Item = {
    name: "Angelica",
    itemName: "Running Shoes",
    brand: ShoeBrand.Nike,
    price: 150,
    print: function() {
        console.log(Member: ${this.name}, Item: ${this.itemName}, Brand: ${this.brand}, Price: $${this.price});
    }
};

Angelica.print(); 