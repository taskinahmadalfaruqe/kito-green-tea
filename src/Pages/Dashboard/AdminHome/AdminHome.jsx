// eslint-disable-next-line no-unused-vars
import React from 'react';
import SectionTitle from '../../../shared/SectionTitle';

const AdminHome = () => {
    return (
        <div className='container'>
            <SectionTitle
             SectionTitleValue01="Admin"
                    SectionTitleValue02="Profile"
                    SectionDescription="Hi, Welcome Admin."
                    ></SectionTitle>
            <div className="flex items-center  w-full justify-center">
                <div className="max-w-xs">
                    <div className="bg-White_Color shadow-2xl border border-Primary_Color rounded-lg py-3">
                        <div className="photo-wrapper p-2">
                            <img className="w-32 h-32 rounded-full mx-auto"
                                src="https://www.gravatar.com/avatar/2acfb745ecf9d4dccb3364752d17f65f?s=260&d=mp" alt="John Doe" />
                        </div>
                        <div className="p-2">
                            <h3 className="text-center text-xl text-Primary_Color font-semibold leading-8">Joh Doe</h3>
                            <div className="text-center text-Yellow_Color text-base font-medium">
                                <p>Admin</p>
                            </div>
                            <table className="text-xs my-3">
                                <tbody><tr>
                                    <td className="px-2 py-2 text-Accent_Color text-lg font-semibold">Address:</td>
                                    <td className="px-2 py-2 text-Black_Color text-base">Bonorupa, Rangamati</td>
                                </tr>
                                    <tr>
                                        <td className="px-2 py-2 text-Accent_Color text-lg font-semibold">Phone:</td>
                                        <td className="px-2 py-2 text-Black_Color text-base">+977 9955221114</td>
                                    </tr>
                                    <tr>
                                        <td className="px-2 py-2 text-Accent_Color text-lg font-semibold">Email:</td>
                                        <td className="px-2 py-2 text-Black_Color text-base">john@exmaple.com</td>
                                    </tr>
                                </tbody></table>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default AdminHome;