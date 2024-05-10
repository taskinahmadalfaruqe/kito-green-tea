import { useState } from "react";
import CommonButton from "../../shared/CommonButton";
import useLocalStorage from "../../Hooks/useLocalStorage";
import OrderSummery from "../../components/CheckouteComponents/OrderSummery";

const Checkout = () => {
  const data = useLocalStorage();
  const [userName, setUserName] = useState("");
  const [district, setDistrict] = useState("");
  const [thana, setThana] = useState("");
  const [village, setVillage] = useState("");
  const [note, setNote] = useState("");
  const [PhoneNumber, setPhoneNumber] = useState("");

  const [deliveryCost, setDeliveryCost] = useState(120);
  const total = data?.reduce((accumulator, currentValue) => {
    return (
      accumulator + currentValue.totalOrderItems * currentValue.discountPrice
    );
  }, 0);

  const totalCost = Number(total) + Number(deliveryCost);

  return (
    <div className="container space-y-5 mb-10">
      <div className="flex justify-center items-center lg:justify-between lg:gap-10 lg:items-start my-5 flex-col lg:flex-row">
        <div className="min-w-[40%] lg:max-w-[50%]">
          <div className="text-2xl font-bold uppercase my-5">
            Billing Details
          </div>
          <form className="w-full space-y-5">
            <fieldset className="border border-Primary_Color px-2 pb-2 rounded-md w-full">
              <legend className="px-5 text-Primary_Color font-semibold">
                Name
              </legend>
              <input
                type="text"
                name="name"
                required
                onChange={(event) => setUserName(event.currentTarget.value)}
                placeholder="Enter Your Name:"
                className="border-b border-Primary_Color text-Primary_Color px-5 w-full"
              />
            </fieldset>

            <fieldset className="border border-Primary_Color px-2 pb-2 rounded-md w-full">
              <legend className="px-5 text-Primary_Color font-semibold">
                District
              </legend>
              <input
                type="text"
                name="district"
                onChange={(event) => setDistrict(event.currentTarget.value)}
                required
                placeholder="Enter Your District Name:"
                className="border-b border-Primary_Color text-Primary_Color px-5 w-full"
              />
            </fieldset>

            <fieldset className="border border-Primary_Color px-2 pb-2 rounded-md w-full">
              <legend className="px-5 text-Primary_Color font-semibold">
                Thana
              </legend>
              <input
                type="text"
                name="thana"
                onChange={(event) => setThana(event.currentTarget.value)}
                required
                placeholder="Enter Your Thana Name:"
                className="border-b border-Primary_Color text-Primary_Color px-5 w-full"
              />
            </fieldset>

            <fieldset className="border border-Primary_Color px-2 pb-2 rounded-md w-full">
              <legend className="px-5 text-Primary_Color font-semibold">
                Village
              </legend>
              <input
                type="text"
                name="village"
                onChange={(event) => setVillage(event.currentTarget.value)}
                required
                placeholder="Enter Your Village Name:"
                className="border-b border-Primary_Color text-Primary_Color px-5 w-full"
              />
            </fieldset>

            <fieldset className="border border-Primary_Color px-2 pb-2 rounded-md w-full">
              <legend className="px-5 text-Primary_Color font-semibold">
                Phone Number
              </legend>
              <input
                type="number"
                name="phone"
                onChange={(event) => setPhoneNumber(event.currentTarget.value)}
                required
                placeholder="Enter Your Phone Number:"
                className="border-b border-Primary_Color text-Primary_Color px-5 w-full"
              />
            </fieldset>

            <fieldset className="border border-Primary_Color px-2 pb-2 rounded-md w-full">
              <legend className="px-5 text-Primary_Color font-semibold">
                Note
              </legend>
              <textarea
                rows="4"
                cols="50"
                name="note"
                onChange={(event) => setNote(event.currentTarget.value)}
                placeholder="Enter Your Optional Details:"
                className="border-b border-Primary_Color text-Primary_Color px-5 w-full"
              />
            </fieldset>
          </form>
        </div>

        <div className="min-w-[40%] lg:max-w-[50%]">
          <div className="text-2xl font-bold uppercase my-5 lg:text-end">
            Order Summary
          </div>
          <div className="flex flex-col space-y-5 rounded-md">
            {data?.map((SingleProducts, index) => (
              <OrderSummery
                key={index}
                SingleProducts={SingleProducts}
              ></OrderSummery>
            ))}
            <div className="space-y-5">
              <div className="flex justify-between items-center text-2xl font-semibold">
                <div>Sub Total:</div>
                <div>{total}</div>
              </div>
              <div>
                <form>
                  <div className="flex items-center space-x-2">
                    <input
                      type="radio"
                      id="dhaka"
                      name="deliveryLocation"
                      value={120}
                      onChange={(event) => setDeliveryCost(event.target.value)}
                      required
                      className="h-5 w-5 text-Primary_Color focus:ring-Primary_Color border-Primary_Color rounded"
                    />
                    <label
                      htmlFor="dhaka"
                      className="text-Primary_Color cursor-pointer font-semibold text-xl"
                    >
                      Dhaka: 120
                    </label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <input
                      type="radio"
                      id="outsideDhaka"
                      name="deliveryLocation"
                      value={150}
                      onChange={(event) => setDeliveryCost(event.target.value)}
                      className="h-5 w-5 text-Primary_Color focus:ring-Primary_Color border-Primary_Color rounded"
                    />
                    <label
                      htmlFor="outsideDhaka"
                      className="text-Primary_Color cursor-pointer font-semibold text-xl"
                    >
                      Anywhere BD: 150
                    </label>
                  </div>
                </form>
              </div>
              <div className="flex justify-between items-center text-xl md:text-2xl font-semibold">
                <div>Total(with Delivery): TK-</div>
                <div>{totalCost}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="">
        <CommonButton ButtonName="Place Order" NavigateLink="/"></CommonButton>
      </div>
    </div>
  );
};

export default Checkout;
