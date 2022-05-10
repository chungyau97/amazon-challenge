import React from "react";
import "./Home.css";
import BG_Home from "./BG_Home.jpg";
import Product from "../Product/Product";
function Home() {
  const products = [
    {
      id: "p1",
      title:
        "The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback",
      price: 11.96,
      rating: 5,
      image:
        "https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_BO1,204,203,200_.jpg",
    },
    {
      id: "p2",
      title:
        "Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl",
      price: 239.0,
      rating: 4,
      image:
        "https://images-na.ssl-images-amazon.com/images/I/81O%2BGNdkzKL._AC_SX450_.jpg",
    },
    {
      id: "p3",
      title: "Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor",
      price: 199.99,
      rating: 3,
      image:
        "https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg",
    },
    {
      id: "p4",
      title:
        "Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric",
      price: 98.99,
      rating: 5,
      image:
        "https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$",
    },
    {
      id: "p5",
      title:
        "New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)",
      price: 598.99,
      rating: 4,
      image:
        "https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg",
    },
    {
      id: "p6",
      title:
        "Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440",
      price: 1094.98,
      rating: 4,
      image:
        "https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg",
    },
  ];
  return (
    <div className="home">
      <div className="home__container">
        <img className="home__image" src={BG_Home} alt="Background Home" />
        <div className="home__row">
          <Product
            id={products[0].id}
            title={products[0].title}
            price={products[0].price}
            rating={products[0].rating}
            image={products[0].image}
          />
          <Product
            id={products[1].id}
            title={products[1].title}
            price={products[1].price}
            rating={products[1].rating}
            image={products[1].image}
          />
        </div>

        <div className="home__row">
          <Product
            id={products[2].id}
            title={products[2].title}
            price={products[2].price}
            rating={products[2].rating}
            image={products[2].image}
          />
          <Product
            id={products[3].id}
            title={products[3].title}
            price={products[3].price}
            rating={products[3].rating}
            image={products[3].image}
          />
          <Product
            id={products[4].id}
            title={products[4].title}
            price={products[4].price}
            rating={products[4].rating}
            image={products[4].image}
          />
        </div>

        <div className="home__row">
          <Product
            id={products[5].id}
            title={products[5].title}
            price={products[5].price}
            rating={products[5].rating}
            image={products[5].image}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
