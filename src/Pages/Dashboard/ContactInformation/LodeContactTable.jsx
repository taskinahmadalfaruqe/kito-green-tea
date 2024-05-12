import PropTypes from "prop-types";
import { FaCheckCircle } from "react-icons/fa";

const LodeContactTable = ({ SingleContactData, No }) => {
  const { _id, name, number, email, emailSubject, comment } =
    SingleContactData;
  const handelAction = (id) => {
    console.log(id);
  };

  return (
    <tr className="text-center py-1">
      <td className="border border-Primary_Color px-2 w-fit">{No}</td>
      <td className="border border-Primary_Color px-2 w-8">
        <div
          title="Mark As Done"
          className="p-1 border rounded-md text-Primary_Color text-xl font-semibold cursor-pointer w-fit border-Primary_Color mx-auto"
          onClick={()=>handelAction(_id)}
        >
          <FaCheckCircle></FaCheckCircle>
        </div>
      </td>
      <td className="border border-Primary_Color px-2" title={name}>{name}</td>
      <td className="border border-Primary_Color px-2 overflow-x-auto" title={email}>{email}</td>
      <td className="border border-Primary_Color px-2">{number}</td>
      <td className="border border-Primary_Color px-2" title={emailSubject}>{emailSubject.slice(0,10)}...</td>
      <td className="border border-Primary_Color px-2 min-w-[250px]">{comment}</td>
    </tr>
  );
};

LodeContactTable.propTypes = {
  SingleContactData: PropTypes.object.isRequired,
  No: PropTypes.number.isRequired,
};

export default LodeContactTable;
