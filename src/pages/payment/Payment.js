import React, { useState } from "react";
import { Link } from "react-router-dom";
import Breadcrumbs from "../../components/pageProps/Breadcrumbs";
import Card from "react-credit-cards-2";

import {
  formatCreditCardNumber,
  formatCVC,
  formatExpirationDate,
  formatFormData,
} from "./utils";

const Payment = () => {
  // const [cardNumber, setCardNumber] = useState("");
  // const [expiry, setExpiry] = useState("");
  // const [cvc, setCvc] = useState("");

  //
  // const handleInputChange = (evt) => {
  //   const { name, value } = evt.target;

  //   setState((prev) => ({ ...prev, [name]: value }));
  // }

  // const handleInputFocus = (evt) => {
  //   setState((prev) => ({ ...prev, focus: evt.target.name }));
  // }

  return (
    <div className="max-w-container mx-auto px-4">
      <Breadcrumbs title="Төлем картасы" />
      <div className="pb-10">
        <Link to="/">
          <button className="w-52 h-10 bg-primeColor text-white text-lg mt-4 hover:bg-black duration-300">
            Басты
          </button>
        </Link>
      </div>
    </div>
  );
};

const PaymentForm = () => {
  const [state, setState] = useState({
    number: "",
    expiry: "",
    cvc: "",
    name: "",
    focus: "",
  });

  return (
    <div key="Payment">
      <div className="App-payment">
        <h1>React Credit Cards</h1>
        <h4>Beautiful credit cards for your payment forms</h4>
        <Card
        // number={number}
        // name={name}
        // expiry={expiry}
        // cvc={cvc}
        // focused={focused}
        // callback={this.handleCallback}
        />
        <form 
        // ref={(c) => (this.form = c)} onSubmit={this.handleSubmit}
        >
          <div className="form-group">
            <input
              type="tel"
              name="number"
              className="form-control"
              placeholder="Card Number"
              pattern="[\d| ]{16,22}"
              required
              // onChange={this.handleInputChange}
              // onFocus={this.handleInputFocus}
            />
            <small>E.g.: 49..., 51..., 36..., 37...</small>
          </div>
          <div className="form-group">
            <input
              type="text"
              name="name"
              className="form-control"
              placeholder="Name"
              required
              // onChange={this.handleInputChange}
              // onFocus={this.handleInputFocus}
            />
          </div>
          <div className="row">
            <div className="col-6">
              <input
                type="tel"
                name="expiry"
                className="form-control"
                placeholder="Valid Thru"
                pattern="\d\d/\d\d"
                required
                // onChange={this.handleInputChange}
                // onFocus={this.handleInputFocus}
              />
            </div>
            <div className="col-6">
              <input
                type="tel"
                name="cvc"
                className="form-control"
                placeholder="CVC"
                pattern="\d{3,4}"
                required
                // onChange={this.handleInputChange}
                // onFocus={this.handleInputFocus}
              />
            </div>
          </div>
          <input type="hidden" name="issuer"
          //  value={issuer} 

           />
          <div className="form-actions">
            <button className="btn btn-primary btn-block">PAY</button>
          </div>
        </form>
        {/* {formData && (
          <div className="App-highlight">
            {formatFormData(formData).map((d, i) => (
              <div key={i}>{d}</div>
            ))}
          </div>
        )} */}
      </div>
    </div>
  );
};

export default Payment;
