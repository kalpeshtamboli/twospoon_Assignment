import React from "react";
import CreditCardImg from "../assets/CreditCardImg.svg";
import Button from "../Components/Button/Button";
import InputBox from "../Components/Textbox/InputBox";
const OrderSummary = ({ paymentSteps, summaryData }) => {
  return (
    <main className="mt-20 font-inter">
      <section className="flex justify-around lg:gap-x-20">
        {paymentSteps?.map((step) => (
          <div className={`flex items-center gap-x-2 ${step?.label==="Step 1" && "hidden md:flex"}`}>
            <div>
              <img src={step.img} alt="no load" className="mx-auto h-6 w-6" loading="lazy" />
            </div>
            <div
              className={` font-semibold ${
                step?.label === "Step 3" ? "text-black" : "text-gray-400"
              }`}
            >
              <h1 className="text-[15px] tracking-wide">{step?.label}</h1>
              <p className="text-[17px]   tracking-wider">{step?.Content}</p>
            </div>
          </div>
        ))}
      </section>

      <div className="  flex flex-col  lg:flex-row justify-center lg:space-x-24   mt-28 mb-10">
        <div className=" hidden md:block summary  border-[1.5px] rounded-xl py-2 md:mx-20 xl:mx-0 px-8">
          <h1 className="font-semibold text-xl py-5">Summary</h1>

          <div className="flex flex-col x-5 md:px-0 gap-y-5 md:w-[30rem]">
            {summaryData?.map((data) => (
              <div className="flex justify-between rounded-xl  bg-gray-100 py-4 px-5 ">
                <div className="flex items-center gap-x-4">
                  <img src={data?.img} alt="" loading="lazy" />{" "}
                  <p className="font-semibold text-[15px] tracking-wide">{data?.title}</p>
                </div>
                <div className="flex items-center font-bold text-[15px]">
                  {data?.price}
                </div>{" "}
              </div>
            ))}
          </div>

          <div className="pt-6">
            <h1 className="text-md text-gray-500 font-semibold">Address</h1>
            <p className="text-lg py-4">
              1131 Dusty Townline, Jacksonville, TX 40322
            </p>
          </div>

          <div className="pt-6">
            <h1 className="text-md text-gray-500 font-semibold">
              Shipment method
            </h1>
            <p className="text-lg py-1">Free</p>
          </div>

          <div className="pt-6 text-lg flex justify-between">
            <div className="flex flex-col gap-y-3">
              <p className="font-semibold pb-4">Subtotal</p>
              <p>Estimated Tax</p>
              <p>Estimated shipping & Handling</p>
              <p className="font-bold pt-5">Total</p>
            </div>
            <div className="flex flex-col gap-y-3">
              <p className=" pb-4 font-extralight">$2347</p>
              <p className=" font-extralight">$50</p>
              <p className="font-extralight">$29</p>
              <p className="font-bold pt-5">$2426</p>
            </div>
          </div>
        </div>

        {/* payment UI */}

        <div className="payment md:mx-20 lg:mx-0 md:mt-10 px-6 ">
          <h1 className="font-bold text-xl py-5">Payment</h1>

          <div className="flex gap-x-12 text-sm md:text-[14px] font-semibold">
            {["Credit Card", "PayPal", "PayPal Credit"]?.map(
              (paymentOption) => (
                <div
                  className={`tracking-wide ${
                    paymentOption === "Credit Card"
                      ? "text-black underline underline-offset-8"
                      : "text-gray-400"
                  }`}
                >
                  {paymentOption}
                </div>
              )
            )}
          </div>
          <div>
            <img
              src={CreditCardImg}
              alt="credit card image"
              className="mt-10  md:w-80"
              loading="lazy"
            />
          </div>

          <form className="flex flex-col gap-y-5 mt-12">
            <InputBox
              type="text"
              placeHolder="Cardholder Name"
              classes={
                "border-[1px] rounded-md outline-none py-3 pl-2 w-[22rem] md:w-[30rem] "
              }
            />
            <InputBox
              type="text"
              placeHolder="Card Number"
              classes={
                "border-[1px] rounded-md outline-none py-3 pl-2 w-[22rem] md:w-[30rem]"
              }
            />

            <div className="flex flex-col space-y-5 md:space-y-0 md:flex-row gap-x-5">
              <InputBox
                type="text"
                placeHolder="Exp.Date"
                classes={
                  "border-[1px] rounded-md outline-none py-3 pl-2 w-[22rem] md:w-[15rem]"
                }
              />
              <InputBox
                type="text"
                placeHolder="CVV"
                classes={
                  "border-[1px] rounded-md outline-none py-3 pl-2 w-[22rem] md:w-[14rem]"
                }
              />
            </div>

            <div className="flex items-center  gap-x-4 py-[2rem]">
              <InputBox type={"checkbox"} classes="relative" />
              <p>Same as billing address </p>
            </div>

            <div className="flex  justify-between gap-x-6">
              <Button
                classes={
                  "border-[2px] py-4 rounded-lg text-lg font-semibold w-1/2 border-black"
                }
                label={"Back"}
              />
              <Button
                classes={
                  " py-4 rounded-lg bg-black text-white w-1/2 text-lg font-semibold border-black"
                }
                label={"Pay"}
              />
            </div>
          </form>
        </div>
      </div>
    </main>
  );
};

export default OrderSummary;
