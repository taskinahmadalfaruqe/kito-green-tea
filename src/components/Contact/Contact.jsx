import { Fade, Slide, Zoom } from "react-awesome-reveal";
import { MdMarkEmailRead } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";
import CommonButton from "../../shared/CommonButton";
import SectionTitle from "../../shared/SectionTitle";

const Contact = () => {
  return (
    <Fade>
      <div className="container">
        <Zoom>
          <SectionTitle
            SectionTitleValue01="Contact"
            SectionTitleValue02="us"
            SectionDescription="আমাদের পণ্যগুলো ব্যবহার করুন এবং অর্ডার করতে যোগাযোগ করুন। আপনার মূল্যবান মতামতটি দাখিল করুন। কোন অভিযোগ থাকলে আমাদেরকে জানান। ধন্যবাদ আমাদের সাথে থাকার জন্য ।"
          ></SectionTitle>
        </Zoom>
        <div className="hero-content flex-col lg:flex-row-reverse gap-24">
          <Slide direction="right">
            <form>
              <div className="flex gap-4 mb-4">
                <div className="w-1/2">
                  <label className="block mb-2 ">Name</label>
                  <input
                    type="text"
                    id="fullName"
                    name="from_name"
                    className="w-full border-gray-300 border p-2 rounded "
                    required
                  />
                </div>
                <div className="w-1/2">
                  <label htmlFor="contactNumber" className="block mb-2 ">
                    Number
                  </label>
                  <input
                    type="tel"
                    id="contactNumber"
                    className="w-full border-gray-300 border p-2 rounded"
                    required
                  />
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-1/2">
                  <label className="block mb-2 ">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="from_email"
                    className="w-full border-gray-300 border p-2 rounded"
                    required
                  />
                </div>
                <div className="w-1/2">
                  <label htmlFor="subject" className="block mb-2 ">
                    Email Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    className="w-full border-gray-300 border p-2 rounded"
                    required
                  />
                </div>
              </div>
              <div className="my-4">
                <label htmlFor="message" className="block mb-2 ">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  className="w-full border-gray-300 border p-2 rounded"
                  rows="5"
                  required
                ></textarea>
              </div>
              <div className="text-center">
                <CommonButton
                  ButtonName="Submit"
                  NavigateLink="/"
                ></CommonButton>
              </div>
            </form>
          </Slide>
          <Slide direction="left">
            <div>
              <div className="block max-w-sm p-6  border border-gray-200 rounded-lg shadow hover:bg-gray-700 hover:text-white">
                <h5 className="mb-2 text-2xl font-bold tracking-tight ">
                  GET IN TOUCH
                </h5>
                <p className="font-normal ">
                  DO NOT BE SHY. I appreciate your openness to collaboration and
                  discussion. If you have any new projects, creative ideas,
                  opportunities that align with my expertise, I would be
                  delighted to explore them further with you. Together, we can
                  work towards bringing your visions to life and achieving great
                  results. Please feel free to reach out to me anytime; I am
                  always here to listen and contribute to meaningful endeavors..
                </p>
                <div className="flex gap-2 items-center pb-2">
                  <p>
                    <MdMarkEmailRead className="text-[#4ADE80] h-12 w-12" />
                  </p>
                  <div className="flex-col">
                    <p className="font-semibold pb-1">Mail me</p>
                    <p>developer@gmail.com</p>
                  </div>
                </div>
                <div className="flex gap-2 items-center">
                  <p>
                    <FaWhatsapp className="text-[#4ADE80] h-12 w-12" />
                  </p>
                  <div className="flex-col">
                    <p className="font-semibold pb-1 "> WhatsApp || Phone</p>
                    <p>+8801567829745</p>
                  </div>
                </div>
              </div>
            </div>
          </Slide>
        </div>
      </div>
    </Fade>
  );
};

export default Contact;
