import { useState } from "react";
import CommonButton from "../../shared/CommonButton";
import useLocalStorage from "../../Hooks/useLocalStorage";
import OrderSummery from "../../components/CheckouteComponents/OrderSummery";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
  const data = useLocalStorage();
  const navigate = useNavigate();
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
  const totalCost = (Number(total) + Number(deliveryCost)).toFixed(2)||0;
  const Order = {
    data,
    totalCost,
    userName,
    district,
    thana,
    village,
    note,
    PhoneNumber,
    status: "pending",
  };

  const HandelOrder = (orderData) => {
    if (
      userName.length == 0 ||
      district.length == 0 ||
      thana.length == 0 ||
      village.length == 0 ||
      PhoneNumber.length == 0
    ) {
      toast.error("Enter Information Properly", {
        position: "top-center",
        autoClose: 15000,
        theme: "colored",
      });
    } else {
      fetch("http://localhost:5000/pendingOrderData", {
        method: "POST",
        body: JSON.stringify(orderData),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        .then((response) => response.json())
        .then((data) => {
          const ID = data.orderID;
          if (data.orderData.acknowledged) {
            toast.success(`Successfully order Placed. OrderID:${ID}`, {
              position: "top-center",
              autoClose: 15000,
              theme: "colored",
            });
            localStorage.removeItem("items");
            setTimeout(() => {
              window.scrollTo(0, 0);
              navigate("/");
              location.reload();
            }, 15000);
          }
        });
    }
  };

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
                <div>{total?.toFixed(2)}</div>
              </div>
              <div>
                <form>
                  <fieldset className="border border-Primary_Color rounded-md p-5">
                    <legend className="px-2 text-Primary_Color font-semibold text-xl">
                      Select Delivery Address
                    </legend>
                    <div className="flex items-center space-x-2">
                      <input
                        type="radio"
                        id="dhaka"
                        name="deliveryLocation"
                        value={120}
                        onChange={(event) =>
                          setDeliveryCost(event.target.value)
                        }
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
                        onChange={(event) =>
                          setDeliveryCost(event.target.value)
                        }
                        className="h-5 w-5 text-Primary_Color focus:ring-Primary_Color border-Primary_Color rounded"
                      />
                      <label
                        htmlFor="outsideDhaka"
                        className="text-Primary_Color cursor-pointer font-semibold text-xl"
                      >
                        Anywhere BD: 150
                      </label>
                    </div>
                  </fieldset>
                </form>
              </div>
              <div className="flex justify-between items-center text-xl md:text-2xl font-semibold">
                <div>Total(with Delivery):</div>
                <div>{totalCost}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        {data?.length > 0 ? (
          <div className="" onClick={() => HandelOrder(Order)}>
            <CommonButton
              ButtonName="Place Order"
              NavigateLink="/checkout"
            ></CommonButton>
          </div>
        ) : (
          <CommonButton
            ButtonName="Add Product"
            NavigateLink="/products"
          ></CommonButton>
        )}
      </div>
      <ToastContainer />
    </div>
  );
};

export default Checkout;
