import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setPageTitle } from '../../store/themeConfigSlice';
import { userInfo } from 'os';

const AccountSetting = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(setPageTitle('Account Setting'));
    }, [dispatch]);

    const [tabs, setTabs] = useState<string>('home');
    const [formData, setFormData] = useState({
        name:"time",
        email:"time@email.com",
        BOD:"1/1/2002",
        ordinaryPlaceOfWorking:"air",
        district:"Japan",
        mobile:123456789,
        state:"Japan"
    });

    const toggleTabs = (name: string) => {
        setTabs(name);
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { id, value } = e.target;
        setFormData({
            ...formData,
            [id]: value
        });
    };

    const handleSave = () => {
        // Here, you can perform actions to save the updated data, e.g., send it to the backend
        console.log('Updated Data:', formData);
        // Add logic here to update the data in the backend
    };

    return (
        <div>
            <ul className="flex space-x-2 rtl:space-x-reverse">
                <li>
                    <Link to="#" className="text-primary hover:underline">
                        Users
                    </Link>
                </li>
                <li className="before:content-['/'] ltr:before:mr-2 rtl:before:ml-2">
                    <span>Account Settings</span>
                </li>
            </ul>
            <div className="pt-5">
                <div className="flex items-center justify-between mb-5">
                    <h5 className="font-semibold text-lg dark:text-white-light">Settings</h5>
                </div>
                <div>
                </div>
                {tabs === 'home' ? (
                    <div>
                        <form className="border border-[#ebedf2] dark:border-[#191e3a] rounded-md p-4 mb-5 bg-white dark:bg-black">
                            <h6 className="text-lg font-bold mb-5">General Information</h6>
                            <div className="flex flex-col sm:flex-row">
                                <div className="ltr:sm:mr-4 rtl:sm:ml-4 w-full sm:w-2/12 mb-5">
                                    <img src="/assets//images/profile-34.jpeg" alt="img" className="w-20 h-20 md:w-32 md:h-32 rounded-full object-cover mx-auto" />
                                </div>
                                <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-5">
                                    <div>
                                        <label htmlFor="name">Full Name</label>
                                    <input
                                        id="name"
                                        type="text"
                                        placeholder="Name"
                                        className="form-input"
                                        value={formData.name}
                                        onChange={handleInputChange}
                                    />
                                    </div>
                                    <div>
                                        <label htmlFor="profession">Profession</label>
                                        <input
                                        id="name"
                                        type="text"
                                        placeholder="Name"
                                        className="form-input"
                                        value={formData.ordinaryPlaceOfWorking}
                                        onChange={handleInputChange}
                                    /></div>
                                    <div>
                                        <label htmlFor="country">Country</label>
                                        <select
                                        id="country"
                                        className="form-select text-white-dark"
                                        value={formData.district}
                                        onChange={handleInputChange}>
                                            <option value="All Countries">All Countries</option>
                                            <option value="United States">United States</option>
                                            <option value="India">India</option>
                                            <option value="Japan">Japan</option>
                                            <option value="China">China</option>
                                            <option value="Brazil">Brazil</option>
                                            <option value="Norway">Norway</option>
                                            <option value="Canada">Canada</option>
                                        </select>
                                    </div>
                                    <div>
                                    <label htmlFor="country">Country</label>
                                        <select
                                        id="country"
                                        className="form-select text-white-dark"
                                        value={formData.state}
                                        onChange={handleInputChange}>
                                            <option value="All Countries">All Countries</option>
                                            <option value="United States">United States</option>
                                            <option value="India">India</option>
                                            <option value="Japan">Japan</option>
                                            <option value="China">China</option>
                                            <option value="Brazil">Brazil</option>
                                            <option value="Norway">Norway</option>
                                            <option value="Canada">Canada</option>
                                        </select>

                                        </div>
                                    <div>
                                        <label htmlFor="phone">Phone</label>
                                        <input
                                        id="phone"
                                        type="text"
                                        placeholder="+1 (530) 555-12121"
                                        className="form-input"
                                        value={formData.mobile}
                                        onChange={handleInputChange} />
                                    </div>
                                    <div>
                                        <label htmlFor="email">Email</label>
                                        <input id="email" type="email" placeholder="Jimmy@gmail.com" className="form-input" value={formData.email} onChange={handleInputChange} />
                                    </div>
                                    <div>
                                        <label htmlFor="web">Birth Of Date</label>
                                        <input id="web" type="date" placeholder="15/02/2003" className="form-input" value={formData.BOD} onChange={handleInputChange} />
                                    </div>
                                    <div className="sm:col-span-2 mt-3">
                                        <button type="button" className="btn btn-primary">
                                            Save
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                ) : (
                    ''
                )}
            </div>
        </div>
    );
};

export default AccountSetting;
