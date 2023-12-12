import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
    deleteJobDetailsAction,
    getJobDetailsAction
} from '../../redux/actions/createJobAction';
import Button from '../../shared/Button/Button';
import OutlineButton from '../../shared/OutlineButton/OutlineButton';
import Loader from '../../shared/Loader/Loader';
import { useNavigate } from 'react-router-dom';
import { routerConfigurations } from '../../routes/routerConfiguration';

const JobDetails = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { loading, jobDeatilDatas } = useSelector((state) => state.jobDeatils);

    const startTime = '09:00 am';
    const endTime = '05:00 pm';

    const companyTitleCase = (str) => {
        const newTitle = str.split(" ");
        const updatedTitle = [];
        for (let st in newTitle) {
            updatedTitle[st] = newTitle[st][0]?.toUpperCase() + newTitle[st]?.slice(1)?.toLowerCase();
        }
        return updatedTitle.join(" ");
    }

    //check work type
    const checkWorkType = (workType) => {
        workType = workType?.toLowerCase();
        let workName;
        switch (true) {
            case workType === "office":
                workName = "In-office";
                break;
            case workType === "inoffice":
                workName = "In-office";
                break;
            case workType === "in-office":
                workName = "In-office";
                break;
            default:
                workName = "WFH";
        }
        return workName;
    }

    //calculate employee range
    const calculateEmployee = (totalEmployees) => {
        let range;
        if (totalEmployees <= 10) {
            range = '1-10 employees';
        } else if (totalEmployees <= 50) {
            range = '11-50 employees';
        } else if (totalEmployees <= 200) {
            range = '51-200 employees';
        } else if (totalEmployees <= 500) {
            range = '201-500 employees';
        } else if (totalEmployees <= 2000) {
            range = '501-2000 employees';
        } else if (totalEmployees <= 5000) {
            range = '2001-5000 employees';
        } else {
            range = '5k+';
        }
        return range;
    }

    useEffect(() => {
        dispatch(getJobDetailsAction());
    }, [dispatch]);

    const updateItemHandler = (id) => {
        navigate(`${routerConfigurations.editForm}/${id}`);
    }

    const deleteItemHandler = (id) => {
        dispatch(deleteJobDetailsAction(id));
    }

    return (
        <>
            <div className='w-full h-auto bg-gray'>
                <div className='sm:p-5 md:flex md:justify-between md:w-full md:py-14 md:flex-wrap lg:flex lg:justify-between lg:w-full lg:py-14 lg:flex-wrap'>
                    {
                        loading ? (
                            <div className='w-full h-screen flex items-center justify-center'>
                                <Loader />
                            </div>
                        )
                            : jobDeatilDatas && jobDeatilDatas.map((jobDeatilData) => {
                                return (
                                    <div key={jobDeatilData?.id} className='h-auto bg-cardColor flex justify-between p-5 sm:mb-5 md:w-[47%] md:m-2 rounded lg:w-[47%] lg:m-2'>
                                        <div className='flex'>
                                            <div className='w-12'>
                                                <img
                                                    src="https://th.bing.com/th/id/R.0b78b360d8f55dbae1499ec01ef9e62e?rik=8S1gAp9m8LFfqw&riu=http%3a%2f%2fcdn.wccftech.com%2fwp-content%2fuploads%2f2016%2f06%2fnetflix.png&ehk=ooW%2fyKITfT7pIiD6C6wsPhW9zaaDVj%2b9s4wl4nbbtBI%3d&risl=&pid=ImgRaw&r=0"
                                                    alt="netflix"
                                                    className='rounded'
                                                />
                                            </div>
                                            <div className='ml-3'>
                                                <div className='mt-[-5px]'>
                                                    <h6 className='text-base font-medium'>{jobDeatilData?.jobTitle}</h6>
                                                    <h6 className='text-base font-normal'>{companyTitleCase(jobDeatilData?.companyName)}</h6>
                                                    <h6 className='text-base font-light'>{jobDeatilData?.location} ({checkWorkType(jobDeatilData?.remoteType)})</h6>
                                                </div>
                                                <div className='mt-3'>
                                                    <div className='text-textColor font-normal'>
                                                        Part-Time ({startTime} - {endTime} IST)
                                                    </div>
                                                    <div className='text-textColor font-normal mt-1'>
                                                        Experience ({jobDeatilData?.experienceMinimun} - {jobDeatilData?.experienceMaximum} years)
                                                    </div>
                                                    <div className='text-textColor font-normal mt-1'>
                                                        INR (₹) {jobDeatilData?.salaryMinimun} - {jobDeatilData?.salaryMaximum} / Month
                                                    </div>
                                                    <div className='text-textColor font-normal mt-1'>
                                                        {calculateEmployee(jobDeatilData?.totalEmployee)}
                                                    </div>
                                                </div>
                                                <div className='mt-3'>
                                                    {
                                                        jobDeatilData?.selectedRadio === "Apply Now" ? (
                                                            <Button text={jobDeatilData?.selectedRadio} />
                                                        ) : (
                                                            <OutlineButton text={jobDeatilData?.selectedRadio} />
                                                        )
                                                    }
                                                </div>
                                            </div>
                                        </div>
                                        <div className='flex'>
                                            <div className='cursor-pointer' onClick={() => updateItemHandler(jobDeatilData?.id)}>
                                                <svg className="h-8 sm:w-5 md:w-8 lg:w-8" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" fill="none" strokeLinecap='round' strokeLinejoin='round'>  <path stroke="none" d="M0 0h24v24H0z" />  <path d="M9 7 h-3a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-3" />  <path d="M9 15h3l8.5 -8.5a1.5 1.5 0 0 0 -3 -3l-8.5 8.5v3" />  <line x1="16" y1="5" x2="19" y2="8" /></svg>
                                            </div>
                                            <div className='sm:ml-2 md:ml-3 cursor-pointer' onClick={() => deleteItemHandler(jobDeatilData?.id)}>
                                                <svg className="h-8 sm:w-5 md:w-8 lg:w-8 text-error" width="24" height="24" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" fill="none" strokeLinecap='round' strokeLinejoin='round'>  <path stroke="none" d="M0 0h24v24H0z" />  <line x1="4" y1="7" x2="20" y2="7" />  <line x1="10" y1="11" x2="10" y2="17" />  <line x1="14" y1="11" x2="14" y2="17" />  <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" />  <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" /></svg>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                    }
                </div>
            </div>
        </>
    )
}

export default JobDetails