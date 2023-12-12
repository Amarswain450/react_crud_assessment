import React, { useEffect, useState } from 'react'
import AOS from "aos";
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from "react-router-dom";
import { createFormTwoErrorHandler } from '../../../services/ErrorHandling';
import { routerConfigurations } from '../../../routes/routerConfiguration';
import TextInput from '../../../shared/TextInput/TextInput';
import Button from '../../../shared/Button/Button';
import { updateJobDetailAction } from '../../../redux/actions/createJobAction';
import RadioInput from '../../../shared/RadioInput/RadioInput';

const JobEditFormTwo = () => {
    const { id } = useParams();
    console.log(id, ",,,,,,");
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { firstFormJobData } = useSelector((state) => state.firstFormReducer);
    const { getSingleJobData } = useSelector((state) => state.singleJobReducer);

    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);

    const [createFormTwoDatas, setCreateFormDatas] = useState({
        experienceMinimun: "",
        experienceMaximum: "",
        salaryMinimun: "",
        salaryMaximum: "",
        totalEmployee: "",
    });
    const [selectedRadio, setSelectedRadio] = useState('');
    const [errors, setErrors] = useState({});

    useEffect(() => {
        if (getSingleJobData) {
            setCreateFormDatas((prevFormDatas) => ({
                ...prevFormDatas,
                ...getSingleJobData,
            }));
            setSelectedRadio(getSingleJobData?.selectedRadio);
        }
    }, [getSingleJobData]);

    const createFormTwoHandler = (e) => {
        const { name, value } = e.target;
        setCreateFormDatas({
            ...createFormTwoDatas,
            [name]: value
        });
        setErrors({
            ...errors,
            [name]: undefined
        });
    }

    const createFormTwoRadioHandler = (e) => {
        setErrors({
            ...errors,
            radio: undefined
        });
        setSelectedRadio(e.target.value)
    }

    const {
        experienceMinimun,
        experienceMaximum,
        salaryMinimun,
        salaryMaximum,
        totalEmployee
    } = createFormTwoDatas;

    const updateFormTwoSubmitHandler = (e) => {
        e.preventDefault();
        const newErrors = createFormTwoErrorHandler(createFormTwoDatas, selectedRadio);
        setErrors(newErrors);

        if (selectedRadio && Object.keys(newErrors).length === 0) {
            const newData = {
                ...firstFormJobData,
                experienceMinimun: Number(experienceMinimun),
                experienceMaximum: Number(experienceMaximum),
                salaryMinimun: Number(salaryMinimun),
                salaryMaximum: Number(salaryMaximum),
                totalEmployee: Number(totalEmployee),
                selectedRadio
            }
            dispatch(updateJobDetailAction(id, newData));
            navigate(routerConfigurations.details);
        }
    }

    return (
        <>
            <div className='w-full h-full bg-gray'>
                <div className='sm:px-5 sm:py-10 md:flex md:justify-center md:py-32 lg:flex lg:justify-center lg:py-32'>
                    <form className="sm:w-full md:w-1/2 lg:w-1/3 bg-white p-5 rounded" data-aos={"zoom-in"}>
                        <div className='flex item-center justify-between pb-5'>
                            <div className='text-gray-700 font-bold'>Create a job</div>
                            <div className='text-gray-700 font-bold'>Step 2</div>
                        </div>
                        <div>
                            <div className="block tracking-wide text-dark text-xs font-bold mb-2">
                                Experience
                            </div>
                            <div className={`flex flex-wrap -mx-3 ${errors?.experienceMinimun ? "mb-0" : "mb-2"}`}>
                                <div className="w-full md:w-1/2 px-3">
                                    <TextInput
                                        type="number"
                                        pattern="[0-9]*"
                                        placeholder="Minimum"
                                        id="experienceMinimun"
                                        name="experienceMinimun"
                                        value={experienceMinimun}
                                        onChange={createFormTwoHandler}
                                    />
                                    {
                                        errors?.experienceMinimun && (
                                            <p className="text-error text-xs font-bold mb-1">{errors?.experienceMinimun}</p>
                                        )
                                    }
                                </div>
                                <div className="w-full md:w-1/2 px-3">
                                    <TextInput
                                        type="number"
                                        pattern="[0-9]*"
                                        placeholder="Maximum"
                                        id="experienceMaximum"
                                        name="experienceMaximum"
                                        value={experienceMaximum}
                                        onChange={createFormTwoHandler}
                                    />
                                    {
                                        errors?.experienceMaximum && (
                                            <p className="text-error text-xs font-bold">{errors?.experienceMaximum}</p>
                                        )
                                    }
                                </div>
                            </div>
                            <div className="block tracking-wide text-dark text-xs font-bold mb-2">
                                Salary
                            </div>
                            <div className={`flex flex-wrap -mx-3 ${errors?.salaryMinimun ? "mb-0" : "mb-2"}`}>
                                <div className="w-full md:w-1/2 px-3">
                                    <TextInput
                                        type="number"
                                        pattern="[0-9]*"
                                        placeholder="Minimum"
                                        id="salaryMinimun"
                                        name="salaryMinimun"
                                        value={salaryMinimun}
                                        onChange={createFormTwoHandler}
                                    />
                                    {
                                        errors?.salaryMinimun && (
                                            <p className="text-error text-xs font-bold mb-1">{errors?.salaryMinimun}</p>
                                        )
                                    }
                                </div>
                                <div className="w-full md:w-1/2 px-3">
                                    <TextInput
                                        type="number"
                                        pattern="[0-9]*"
                                        placeholder="Maximum"
                                        id="salaryMaximum"
                                        name="salaryMaximum"
                                        value={salaryMaximum}
                                        onChange={createFormTwoHandler}
                                    />
                                    {
                                        errors?.salaryMaximum && (
                                            <p className="text-error text-xs font-bold">{errors?.salaryMaximum}</p>
                                        )
                                    }
                                </div>
                            </div>
                            <div className="flex flex-wrap -mx-3 mb-2">
                                <div className="w-full px-3">
                                    <label className="block tracking-wide text-dark text-xs font-bold mb-2" htmlFor="total-employee">
                                        Total employee
                                    </label>
                                    <TextInput
                                        type="number"
                                        pattern="[0-9]*"
                                        id="total-employee"
                                        placeholder="ex. 100"
                                        name="totalEmployee"
                                        value={totalEmployee}
                                        onChange={createFormTwoHandler}
                                    />
                                    {
                                        errors?.totalEmployee && (
                                            <p className="text-error text-xs font-bold">{errors?.totalEmployee}</p>
                                        )
                                    }
                                </div>
                            </div>
                            <div className={`flex ${errors.radio ? "mb-3" : "mb-6"}`}>
                                <div className="flex items-center me-4">
                                    <RadioInput
                                        id="quick-apply"
                                        value="Apply Now"
                                        checked={selectedRadio === "Apply Now"}
                                        onChange={createFormTwoRadioHandler}
                                    />
                                    <label htmlFor="quick-apply" className="ms-2 text-sm font-500 text-placeholder dark:text-placeholder">Quick apply</label>
                                </div>
                                <div className="flex items-center me-4">
                                    <RadioInput
                                        id="external-apply"
                                        value="External Apply"
                                        checked={selectedRadio === "External Apply"}
                                        onChange={createFormTwoRadioHandler}
                                    />
                                    <label htmlFor="external-apply" className="ms-2 text-sm font-500 text-placeholder dark:text-placeholder">External apply</label>
                                </div>
                            </div>
                            {
                                errors?.radio && (
                                    <p className="text-error text-xs font-bold">{errors?.radio}</p>
                                )
                            }
                        </div>
                        <div className='flex justify-end'>
                            <Button
                                text={"Next"}
                                onClick={updateFormTwoSubmitHandler}
                            />
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default JobEditFormTwo