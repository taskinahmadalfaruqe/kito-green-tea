import PropTypes from "prop-types";
import { FaCheckCircle } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const LodeOrderTable = ({ item }) => {
  const {
    _id,
    totalCost,
    userName,
    district,
    thana,
    village,
    note,
    PhoneNumber,
    trackOrder,
    data,
    status,
  } = item;
  const handelOrderDelivery = (id) => {
    fetch(`https://e-shopbd-server.vercel.app/pendingOrderData/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ status: "done" }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.matchedCount == 1) {
          toast.success("Successfully Pack Product. Order Ready To Shipped", {
            position: "top-center",
            autoClose: 5000,
            theme: "colored",
          });
          setTimeout(() => {
            window.scrollTo(0, 0);
            location.reload();
          }, 5000);
        }
      });
  };

  return (
    <div>
      <div className="border border-Primary_Color p-2 rounded-md space-y-5 text-sm relative">
        <div className="absolute top-2 right-2">
          <button
            onClick={() => handelOrderDelivery(_id)}
            className="bg-White_Color hover:bg-Primary_Color border hover:text-White_Color border-Primary_Color text-Primary_Color p-2 px-4 rounded-md text-xl transition-all duration-500"
          >
            <FaCheckCircle></FaCheckCircle>
          </button>
        </div>

        <div className="flex flex-col gap-1">
          <div className="font-semibold uppercase">Delivery Address</div>
          <div>
            <div>
              <span className="text-Yellow_Color mr-1">User Name:</span>
              {userName}
            </div>
            <div>
              <span className="text-Yellow_Color mr-1">District:</span>
              {district}
            </div>
            <div>
              <span className="text-Yellow_Color mr-1">Thana:</span>
              {thana}
            </div>
            <div>
              <span className="text-Yellow_Color mr-1">Village:</span>
              {village}
            </div>
            <div>
              <span className="text-Yellow_Color mr-1">Number:</span>
              {PhoneNumber}
            </div>
            <div>
              <span className="text-Yellow_Color mr-1">Note:</span>
              {note}
            </div>
            <div>
              <span className="text-Yellow_Color mr-1">Delivery Status:</span>
              {status}
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-1">
          <div className="font-semibold uppercase">Order Details</div>
          <div>
            <div>
              <span className="text-Yellow_Color mr-1">Order Number:</span>
              {trackOrder}
            </div>
            <div>
              <span className="text-Yellow_Color mr-1">Order Cost:</span>
              {totalCost}
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-1">
          <div className="font-semibold uppercase">Order Items</div>
          <div>
            {data.map((value, index) => (
              <div key={index}>
                <span className="text-Yellow_Color mr-1">Product Name:</span>
                {value.productName} ({value.totalOrderItems})
              </div>
            ))}
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

LodeOrderTable.propTypes = {
  item: PropTypes.object.isRequired,
};

export default LodeOrderTable;
