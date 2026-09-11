// TASK 1
fetch("https://fakestoreapi.com/products")
  .then((response) => response.json())
  .then((products) => {
    console.log("ALL PRODUCTS");

    products.forEach((product) => {
      console.log("Title:", product.title);
      console.log("Price:", product.price);
      console.log("Category:", product.category);
    });

    let newProducts = products.map((product) => {
      return {
        title: product.title,
        price: product.price,
      };
    });

    console.log("MAP");
    console.log(newProducts);

    let expensive = products.filter((product) => product.price > 100);

    console.log("PRODUCTS ABOVE $100");
    console.log(expensive);

    let electronics = products.find(
      (product) => product.category === "electronics",
    );

    console.log("FIRST ELECTRONICS PRODUCT");
    console.log(electronics);

    let total = products.reduce((sum, product) => sum + product.price, 0);

    console.log("Total Price:", total);

    let sorted = [...products].sort((a, b) => b.price - a.price);

    console.log("HIGHEST TO LOWEST");

    sorted.forEach((product) => {
      console.log(product.title, "-", product.price);
    });
  });

// TASK 2

fetch("https://fakestoreapi.com/products")
  .then((response) => response.json())
  .then((products) => {
    let electronics = products.filter(
      (product) => product.category === "electronics",
    );

    let jewelery = products.filter(
      (product) => product.category === "jewelery",
    );

    let men = products.filter(
      (product) => product.category === "men's clothing",
    );

    let women = products.filter(
      (product) => product.category === "women's clothing",
    );

    let prices = products.map((product) => product.price);

    let total = prices.reduce((sum, price) => sum + price, 0);

    let sortedPrices = [...prices].sort((a, b) => b - a);

    let average = total / products.length;

    console.log(`PRODUCT DASHBOARD

Total Products: ${products.length}

Electronics: ${electronics.length}
Jewelery: ${jewelery.length}
Men's Clothing: ${men.length}
Women's Clothing: ${women.length}

Highest Price: $${sortedPrices[0].toFixed(2)}
Lowest Price: $${sortedPrices[sortedPrices.length - 1].toFixed(2)}
Average Price: $${average.toFixed(2)}
    `);
  });
// TASK 3

fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => response.json())
  .then((users) => {
    console.log("ALL USER NAMES");

    users.forEach((user) => {
      console.log(user.name);
    });

    console.log("USER NAME + EMAIL");

    users.forEach((user) => {
      console.log(user.name + " - " + user.email);
    });

    let user5 = users.find((user) => user.id === 5);

    console.log("USER ID 5");
    console.log(user5);

    let city = "Gwenborough";

    let cityUsers = users.filter((user) => user.address.city === city);

    console.log("===== USERS FROM " + city + " =====");

    cityUsers.forEach((user) => {
      console.log(user.name);
    });
  })
  .catch((error) => {
    console.log("User Error:", error);
  });

fetch("https://jsonplaceholder.typicode.com/posts")
  .then((response) => response.json())
  .then((posts) => {
    let userPosts = posts.filter((post) => post.userId === 1);

    console.log("POSTS BY USER ID 1");

    userPosts.forEach((post) => {
      console.log("Title:", post.title);
      console.log("Body:", post.body);
    });

    console.log("User ID 1 created " + userPosts.length + " posts.");

    let longTitle = posts.find((post) => post.title.length > 50);

    console.log("FIRST LONG TITLE");
    console.log(longTitle);
  });
// TASK 4

let category = prompt("Enter product category:");

let maxPrice = Number(prompt("Enter maximum price:"));

fetch("https://fakestoreapi.com/products")
  .then((response) => response.json())
  .then((products) => {
    let result = products.filter((product) => {
      return product.category === category && product.price <= maxPrice;
    });

    console.log("SEARCH RESULTS");

    result.forEach((product) => {
      console.log("Product:", product.title);
      console.log("Price:", "$" + product.price);
      console.log("Category:", product.category);
    });
  });

// TASK 5

fetch("https://fakestoreapi.com/products")
  .then((response) => response.json())
  .then((products) => {
    console.log("AVAILABLE PRODUCTS");

    products.forEach((product) => {
      console.log(product.id + " - " + product.title + " - $" + product.price);
    });

    let input = prompt("Enter product IDs separated by commas:");

    let ids = input.split(",");

    let cart = [];

    ids.forEach((id) => {
      let product = products.find(
        (product) => product.id === Number(id.trim()),
      );

      if (product) {
        cart.push(product);
      }
    });

    console.log("CART");

    cart.forEach((product, index) => {
      console.log("Product " + (index + 1) + ": " + product.title);

      console.log("Price: $" + product.price);
    });

    let cartTotal = cart.reduce((sum, product) => sum + product.price, 0);

    let discount = 0;

    if (cartTotal > 200) {
      discount = 20;
    } else if (cartTotal > 100) {
      discount = 10;
    }

    let discountAmount = (cartTotal * discount) / 100;

    let finalAmount = cartTotal - discountAmount;

    console.log("Total: $" + cartTotal.toFixed(2));
    console.log("Discount: " + discount + "%");
    console.log("Final Amount: $" + finalAmount.toFixed(2));
  });

// TASK 6

fetch("https://fakestoreapi.com/products")
  .then((response) => response.json())
  .then((products) => {
    console.log("PRODUCT REPORT");

    console.log("Total Products: " + products.length);

    console.log("PRODUCT NAMES");

    products.forEach((product) => {
      console.log("- " + product.title);
    });

    let names = products.map((product) => product.title);

    console.log("Product Names Array:");
    console.log(names);

    let expensive = products.filter((product) => product.price > 100);

    console.log("PRODUCTS ABOVE $100");

    expensive.forEach((product) => {
      console.log(product.title + " - $" + product.price);
    });

    let electronics = products.find(
      (product) => product.category === "electronics",
    );

    console.log("ELECTRONICS PRODUCT");
    console.log(electronics);

    let total = products.reduce((sum, product) => sum + product.price, 0);

    console.log("Total Product Value: $" + total.toFixed(2));

    let above500 = products.some((product) => product.price > 500);

    console.log("Any Product Above $500: " + above500);

    let above1 = products.every((product) => product.price > 1);

    console.log("All Products Above $1: " + above1);

    let sorted = [...products].sort((a, b) => b.price - a.price);

    console.log("HIGHEST TO LOWEST");

    sorted.forEach((product) => {
      console.log(product.title + " - $" + product.price);
    });
  });
