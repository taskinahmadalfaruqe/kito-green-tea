// eslint-disable-next-line no-unused-vars
import React from 'react';
import SectionTitle from '../../../shared/SectionTitle';
import CommonButton from '../../../shared/CommonButton';

const UpdateProduct = () => {
    return (
        <div className="flex justify-between gap-10 items-start container my-5">
            <div className="min-w-full">
                <SectionTitle
                    SectionTitleValue01="Update"
                    SectionTitleValue02="Product"
                    SectionDescription=""
                ></SectionTitle>
                <form className="w-full space-y-5" >

                    <div className="md:flex gap-6">
                        <fieldset className="border border-Primary_Color px-2 pb-2 rounded-md w-full">
                            <legend className="px-5 text-Primary_Color font-semibold">
                                Product Name
                            </legend>
                            <input
                                type="text"
                                name="productName"
                                required
                                placeholder="Enter Product Name:"
                                className="border-b border-Primary_Color text-Primary_Color px-5 w-full"
                            />
                        </fieldset>

                        <fieldset className="border border-Primary_Color px-2 pb-2 rounded-md w-full">
                            <legend className="px-5 text-Primary_Color font-semibold">
                                Product Category
                            </legend>
                            <input
                                type="text"
                                name="productCategory"
                                required
                                placeholder="Enter product Category:"
                                className="border-b border-Primary_Color text-Primary_Color px-5 w-full"
                            />
                        </fieldset>
                    </div>

                    <div className="md:flex gap-6">
                        <fieldset className="border border-Primary_Color px-2 pb-2 rounded-md w-full">
                            <legend className="px-5 text-Primary_Color font-semibold">
                                Regular Price
                            </legend>
                            <input
                                type="text"
                                name="regularPrice"
                                required
                                placeholder="Enter regular Price:"
                                className="border-b border-Primary_Color text-Primary_Color px-5 w-full"
                            />
                        </fieldset>

                        <fieldset className="border border-Primary_Color px-2 pb-2 rounded-md w-full">
                            <legend className="px-5 text-Primary_Color font-semibold">
                                Discount Price
                            </legend>
                            <input
                                type="text"
                                name="discountPrice"
                                required
                                placeholder="Enter Discount Price:"
                                className="border-b border-Primary_Color text-Primary_Color px-5 w-full"
                            />
                        </fieldset>
                    </div>

                    <div className="md:flex gap-6">
                        <fieldset className="border border-Primary_Color px-2 pb-2 rounded-md w-full">
                            <legend className="px-5 text-Primary_Color font-semibold">
                                Product Image
                            </legend>
                            <input
                                type="file"
                                name="image"
                                required
                                placeholder="Enter Your Phone Number:"
                                className="border-b border-Primary_Color text-Primary_Color px-5 w-full"
                            />
                        </fieldset>

                        <fieldset className="border border-Primary_Color px-2 pb-2 rounded-md w-full">
                            <legend className="px-5 text-Primary_Color font-semibold">
                                Additional Details
                            </legend>
                            <textarea
                                type="text"
                                name="additionalDetails"
                                required
                                placeholder="Enter Additional Details:"
                                className="border-b border-Primary_Color text-Primary_Color px-5 w-full"
                            />
                        </fieldset>
                    </div>

                    <fieldset className="border border-Primary_Color px-2 pb-2 rounded-md w-full">
                        <legend className="px-5 text-Primary_Color font-semibold">
                            Product Details
                        </legend>
                        <textarea
                            rows="4"
                            cols="50"
                            name="productDetails"
                            placeholder="Enter Product Details:"
                            className="border-b border-Primary_Color text-Primary_Color px-5 w-full"
                        />
                    </fieldset>
                    <div className='text-center'>
                        <CommonButton ButtonName="Add Product" NavigateLink="/"></CommonButton>
                    </div>
                </form>
            </div>

        </div>
    );
};

export default UpdateProduct;