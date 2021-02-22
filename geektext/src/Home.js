import React from "react";
import Books from "./Books";
import "./Home.css";
import banner from "./images/banner.jpg";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img src={banner} className="home__image" alt="banner-img"></img>

        <div className="home__row">
          {/*Product*/}
          <Books
            id="12321341"
            title="Harry Potter and the Sorcerer's Stone: MinaLima Edition (Harry Potter, Book 1) (Illustrated edition) (1)"
            price={21.57}
            image="https://images-na.ssl-images-amazon.com/images/I/51gVtiVGL5L._SX331_BO1,204,203,200_.jpg"
          />
          <Books
            id="12321341"
            title="Harry Potter and the Sorcerer's Stone: MinaLima Edition (Harry Potter, Book 1) (Illustrated edition) (1)"
            price={21.57}
            image="https://images-na.ssl-images-amazon.com/images/I/51gVtiVGL5L._SX331_BO1,204,203,200_.jpg"
          />
        </div>

        <div className="home__row">
          <Books
            id="12321341"
            title="Harry Potter and the Sorcerer's Stone: MinaLima Edition (Harry Potter, Book 1) (Illustrated edition) (1)"
            price={21.57}
            image="https://images-na.ssl-images-amazon.com/images/I/51gVtiVGL5L._SX331_BO1,204,203,200_.jpg"
          />
          <Books
            id="12321341"
            title="Harry Potter and the Sorcerer's Stone: MinaLima Edition (Harry Potter, Book 1) (Illustrated edition) (1)"
            price={21.57}
            image="https://images-na.ssl-images-amazon.com/images/I/51gVtiVGL5L._SX331_BO1,204,203,200_.jpg"
          />
          <Books
            id="12321341"
            title="Harry Potter and the Sorcerer's Stone: MinaLima Edition (Harry Potter, Book 1) (Illustrated edition) (1)"
            price={21.57}
            image="https://images-na.ssl-images-amazon.com/images/I/51gVtiVGL5L._SX331_BO1,204,203,200_.jpg"
          />
        </div>

        <div className="home__row">
          <Books
            id="12321341"
            title="Harry Potter and the Sorcerer's Stone: MinaLima Edition (Harry Potter, Book 1) (Illustrated edition) (1)"
            price={21.57}
            image="https://images-na.ssl-images-amazon.com/images/I/51gVtiVGL5L._SX331_BO1,204,203,200_.jpg"
          />
          <Books
            id="12321341"
            title="Harry Potter and the Sorcerer's Stone: MinaLima Edition (Harry Potter, Book 1) (Illustrated edition) (1)"
            price={21.57}
            image="https://images-na.ssl-images-amazon.com/images/I/51gVtiVGL5L._SX331_BO1,204,203,200_.jpg"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
