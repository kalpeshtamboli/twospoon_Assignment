import { useState } from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import location from "./assets/Location.png";
import shipping from "./assets/Shipping.png";
import payment from "./assets/Payment.png";
import Headphone from "./assets/Headphone.svg";
import Watch from "./assets/Watch.svg";
import Phone from "./assets/Phone.svg";
import Footer from "./Footer";
import OrderSummary from "./Pages/OrderSummary";
import HamburgerMenu from "./Components/HamburgerMenu";

function App() {
  const paymentData = [
    { img: location, label: "Step 1", Content: "Address" },
    { img: shipping, label: "Step 2", Content: "Shipping" },
    { img: payment, label: "Step 3", Content: "Payment" },
  ];

  const summaryData = [
    { img: Phone, title: "Apple iPhone 14 Pro Max 128Gb", price: "$1399" },
    { img: Headphone, title: "Airpods Max Silver", price: "$549" },
    { img: Watch, title: "Apple Watch Series 9 GPS 41mm", price: "$399" },
  ];

  const footerServices = [
    "Bonus program",
    "Gift cards",
    "Credit and payment",
    "Service contracts",
    "Non-crash account",
    "Payment",
  ];

  const assitantToTheBuyer = [
    "Find an order",
    "Terms of delivery",
    "Exchange and return of goods",
    "Guarentee",
    "Frequently asked questions",
    "Terms of use the site",
  ];
  return (
    <div className="font-Inter">
     <Navbar navList={["Home", "About", "Contact Us", "Blog"]} />
     <HamburgerMenu navList={["Home", "About", "Contact Us", "Blog"]} />
      <OrderSummary paymentSteps={paymentData} summaryData={summaryData} />
      <Footer
        assitantToTheBuyer={assitantToTheBuyer}
        footerServices={footerServices}
      />
    </div>
  );
}

export default App;
