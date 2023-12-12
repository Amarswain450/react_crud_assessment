import React, { useEffect, useState } from 'react'
import Button from '../../../shared/Button/Button'
import AOS from "aos";
import { createFormOneErrorHandler } from '../../../services/ErrorHandling';
import TextInput from '../../../shared/TextInput/TextInput';
import { useDispatch } from 'react-redux';
import { getFirstFormDataAction } from '../../../redux/actions/createJobAction';

const CreateFormOne = ({ onNext }) => {
    const dispatch = useDispatch();

    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);

    const [formDatas, setFormDatas] = useState({
        jobTitle: '',
        companyName: '',
        industry: '',
        location: '',
        remoteType: ''
    });
    const [errors, setErrors] = useState({});

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormDatas({
            ...formDatas,
            [name]: value
        });
        setErrors({
            ...errors,
            [name]: undefined
        });
    }

    const { jobTitle, companyName, industry, location, remoteType } = formDatas;
    const submitHandler = (e) => {
        e.preventDefault();

        const newErrors = createFormOneErrorHandler(formDatas);
        setErrors(newErrors);

        const allFieldsFilled = Object.values(formDatas).every((item) => item.trim() !== "");

        if (allFieldsFilled && Object.keys(newErrors).length === 0) {
            dispatch(getFirstFormDataAction(formDatas));
            onNext();
        }
    }

    return (
        <>
            <div className={`w-full h-full bg-gray`}>
                <div className='sm:px-5 sm:py-10 md:flex md:justify-center md:py-28 lg:flex lg:justify-center lg:py-28'>
                    <form className="sm:w-full md:w-1/2 lg:w-1/3 bg-white p-5 rounded" data-aos={"zoom-in"}>
                        <div className='flex item-center justify-between pb-5'>
                            <div className='text-dark font-bold'>Create a job</div>
                            <div className='text-dark font-bold'>Step 1</div>
                        </div>
                        <div className="flex flex-wrap -mx-3 mb-6">
                            <div className="w-full px-3">
                                <label className="block tracking-wide text-dark text-xs font-bold mb-2" htmlFor="job-title">
                                    Job title<span className='text-error'>*</span>
                                </label>
                                <TextInput
                                    id="job-title"
                                    placeholder="ex. UX UI Designer"
                                    name="jobTitle"
                                    value={jobTitle}
                                    onChange={handleInputChange}
                                />
                                {
                                    errors?.jobTitle && (
                                        <p className="text-error text-xs font-bold">{errors?.jobTitle}</p>
                                    )
                                }
                            </div>
                            <div className="w-full px-3">
                                <label className="block tracking-wide text-dark text-xs font-bold mb-2" htmlFor="company-name">
                                    Company name<span className='text-error'>*</span>
                                </label>
                                <TextInput
                                    id="company-name"
                                    placeholder="ex. Google"
                                    name="companyName"
                                    value={companyName}
                                    onChange={handleInputChange}
                                />
                                {
                                    errors?.companyName && (
                                        <p className="text-error text-xs font-bold">{errors?.companyName}</p>
                                    )
                                }
                            </div>
                            <div className="w-full px-3">
                                <label className="block tracking-wide text-dark text-xs font-bold mb-2" htmlFor="industry">
                                    Industry<span className='text-error'>*</span>
                                </label>
                                <TextInput
                                    id="industry"
                                    placeholder="ex. Information Technology"
                                    name="industry"
                                    value={industry}
                                    onChange={handleInputChange}
                                />
                                {
                                    errors?.industry && (
                                        <p className="text-error text-xs font-bold">{errors?.industry}</p>
                                    )
                                }
                            </div>
                            <div className="w-full md:w-1/2 px-3">
                                <label className="block tracking-wide text-dark text-xs font-bold mb-2" htmlFor="location">
                                    Location
                                </label>
                                <TextInput
                                    id="location"
                                    placeholder="ex. Chennai"
                                    name="location"
                                    value={location}
                                    onChange={handleInputChange}
                                />
                                {
                                    errors?.location && (
                                        <p className="text-error text-xs font-bold">{errors?.location}</p>
                                    )
                                }
                            </div>
                            <div className="w-full md:w-1/2 px-3">
                                <label className="block tracking-wide text-dark text-xs font-bold mb-2" htmlFor="remote-type">
                                    Remote type
                                </label>
                                <TextInput
                                    id="remote-type"
                                    placeholder="ex. In-Office"
                                    name="remoteType"
                                    value={remoteType}
                                    onChange={handleInputChange}
                                />
                                {
                                    errors?.remoteType && (
                                        <p className="text-error text-xs font-bold">{errors?.remoteType}</p>
                                    )
                                }
                            </div>
                        </div>
                        <div className='flex justify-end'>
                            <Button
                                text={"Next"}
                                onClick={submitHandler}
                            />
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default CreateFormOne