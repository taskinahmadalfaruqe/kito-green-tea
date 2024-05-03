import { useEffect } from "react";
import { useState } from "react";
import SingleProductCard from "./SingleProductCard.jsx";
import SectionTitle from "../../shared/SectionTitle.jsx";

const AllProductCard = () => {
  const [allProduct, SetAllProduct] = useState([]);
  useEffect(() => {
    fetch("/product.json")
      .then((res) => res.json())
      .then((data) => SetAllProduct(data));
  }, []);
  return (
    <div>
      <div className="container">
        
        <SectionTitle
          SectionTitleValue01="OUR"
          SectionTitleValue02="Products"
          SectionDescription="আমাদের প্রোডাক্ট একটি স্বাস্থ্য পণ্য যা আপনার স্বাস্থ্য ও সামগ্রিক কল্যাণের জন্য অত্যন্ত গুরুত্বপূর্ণ। এই পণ্যটি উচ্চ মানের উপকারী উপাদানসমূহ সমৃদ্ধ করে যা আপনাকে সুস্থ, সাক্ষাৎকারিক জীবনযাপনে সহায়তা করতে সক্ষম করে। আমাদের পণ্যের ব্যবহার সাধারণ জীবনযাপনে পরিবর্তন আনতে সহায়ক, তাত্ক্ষণিক এবং সাবলীল ফলাফল সরবরাহ করে। এটি প্রাকৃতিক উপাদানগুলির সমন্বয়ে তৈরি হয়েছে যা আপনার শরীরের প্রতিরক্ষা বৃদ্ধি করে এবং আপনাকে সুস্থ ও সাক্ষাৎকারিক জীবনযাপনে সাহায্য করে।"
        ></SectionTitle>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center items-center gap-5">
          {allProduct?.map((singleProduct, index) => (
            <SingleProductCard
              key={index}
              singleProduct={singleProduct}
            ></SingleProductCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllProductCard;
