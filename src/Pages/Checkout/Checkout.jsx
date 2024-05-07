import { useParams } from "react-router-dom";
import CommonButton from "../../shared/CommonButton";

const Checkout = () => {
  const { id } = useParams();
  console.log(id);
  const handelSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const name = formData.get("name");
    const district = formData.get("district");
    const thana = formData.get("thana");
    const village = formData.get("village");
    const phone = formData.get("phone");
    const note = formData.get("note");
    console.log(name, district, thana, village, phone, note);
  };
  return (
    <div className="flex justify-between gap-10 items-start container my-5">
      <div className="min-w-[50%]">
        <div className="text-2xl font-bold uppercase my-5">Billing Details</div>
        <form className="w-full space-y-5" onSubmit={handelSubmit}>
          <fieldset className="border border-Primary_Color px-2 pb-2 rounded-md w-full">
            <legend className="px-5 text-Primary_Color font-semibold">
              Name
            </legend>
            <input
              type="text"
              name="name"
              required
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
              placeholder="Enter Your Optional Details:"
              className="border-b border-Primary_Color text-Primary_Color px-5 w-full"
            />
          </fieldset>
          <CommonButton ButtonName="Submit" NavigateLink="/"></CommonButton>
        </form>
      </div>

      <div className="min-w-[50%]">
        <div className="text-2xl font-bold uppercase my-5 lg:text-end">
          Order Summery
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default Checkout;
