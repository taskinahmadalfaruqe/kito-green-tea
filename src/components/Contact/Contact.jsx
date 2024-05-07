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
                    className="w-full border-Primary_Color border p-2 rounded "
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
                    className="w-full border-Primary_Color border p-2 rounded"
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
                    className="w-full border-Primary_Color border p-2 rounded"
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
                    className="w-full border-Primary_Color border p-2 rounded"
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
                  className="w-full border-Primary_Color border p-2 rounded"
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
              <div className="block max-w-sm p-6  border border-Primary_Color rounded-lg shadow">
                <h5 className="mb-2 text-2xl font-bold tracking-tight ">
                  GET IN TOUCH
                </h5>
                <p className="font-normal ">
                  আমাদের পণ্যগুলো ব্যবহার করুন এবং অর্ডার করতে যোগাযোগ করুন
                  আমাদের Whatsapp নাম্বারে অথবা ইমেইলের মাধ্যমে । আপনার মূল্যবান
                  মতামতটি দাখিল করুন। কোন অভিযোগ থাকলে আমাদেরকে জানান। আমরা
                  আপনার যেকোনো সমস্যার সমাধান দেওয়ার জন্য সর্বদা প্রস্তুত আছি ।
                  ধন্যবাদ আমাদের সাথে থাকার জন্য।
                </p>
                <div className="flex gap-2 items-center pb-2">
                  <p>
                    <MdMarkEmailRead className="text-Primary_Color h-12 w-12" />
                  </p>
                  <div className="flex-col">
                    <p className="font-semibold pb-1">Mail me</p>
                    <p>developer@gmail.com</p>
                  </div>
                </div>
                <div className="flex gap-2 items-center">
                  <p>
                    <FaWhatsapp className="text-Primary_Color h-12 w-12" />
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
