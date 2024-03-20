import React, { useState, useEffect } from "react";
import '../paypal/paypal.css';
import book from '../../image/book.jpeg';

const ProductDisplay = () => (
  <section>
    <div className="product">
      <img
        width={300}
        src={book}
        alt="The cover of Stubborn Attachments"
      />
      <div className="description">
      <h3 className="mt-4">Stubborn Attachments</h3>
      <h5>20Rs</h5>
      </div>
    </div>
    <form action="/hosted/create-checkout-session" method="POST">
      <input type="hidden"  name="amount" value={30}/> 
      <input type="hidden" name="product_name" value="T-Shirt"/> 
      <button type="submit" className="px-4 rounded-1 bg-dark">
        Checkout
      </button>
    </form>
  </section>
);

const Message = ({ message }) => (
  <section>
    <p>{message}</p>
  </section>
);

export const Hosted = ()=> {
  const [message, setMessage] = useState("");

  useEffect(() => {
    const query = new URLSearchParams(window.location.search);

    if (query.get("success")) {
      setMessage("Order placed! You will receive an email confirmation.");
    }

    if (query.get("canceled")) {
      setMessage(
        "Order canceled -- continue to shop around and checkout when you're ready."
      );
    }
  }, []);

  return message ? (
    <Message message={message} />
  ) : (
    <ProductDisplay/>
  );
}