import PropTypes from "prop-types";
import { FaCheckCircle } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const LodeContactTable = ({ SingleContactData, No }) => {
  const { _id, name, number, email, emailSubject, comment } = SingleContactData;
  const handelAction = (id) => {
    fetch(`https://e-shopbd-server.vercel.app/pendingContact/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ status: "done" }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.matchedCount == 1) {
          toast.success("Query Successfully Completed.", {
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
    <tr className="text-center py-1">
      <td className="border border-Primary_Color px-2 w-fit">{No}</td>
      <td className="border border-Primary_Color px-2 w-8">
        <div
          title="Mark As Done"
          className="p-1 border rounded-md text-Primary_Color text-xl font-semibold cursor-pointer w-fit border-Primary_Color mx-auto"
          onClick={() => handelAction(_id)}
        >
          <FaCheckCircle></FaCheckCircle>
        </div>
      </td>
      <td className="border border-Primary_Color px-2" title={name}>
        {name}
      </td>
      <td
        className="border border-Primary_Color px-2 overflow-x-auto"
        title={email}
      >
        {email}
      </td>
      <td className="border border-Primary_Color px-2">{number}</td>
      <td className="border border-Primary_Color px-2" title={emailSubject}>
        {emailSubject.slice(0, 10)}...
      </td>
      <td className="border border-Primary_Color px-2 min-w-[250px]">
        {comment}
      </td>
      <ToastContainer></ToastContainer>
    </tr>
  );
};

LodeContactTable.propTypes = {
  SingleContactData: PropTypes.object.isRequired,
  No: PropTypes.number.isRequired,
};

export default LodeContactTable;
