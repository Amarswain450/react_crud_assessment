import React, { useEffect, useState } from 'react'
import JobEditFormOne from './JobEditFormOne/JobEditFormOne'
import JobEditFormTwo from './JobEditFormTwo/JobEditFormTwo'
import { useParams } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { getSingleJobDetailAction } from '../../redux/actions/createJobAction'

const steps = {
    1: JobEditFormOne,
    2: JobEditFormTwo
}

const JobEditForm = () => {
    const { id } = useParams();
    const dispatch = useDispatch();

    const [step, setStep] = useState(1);
    const Component = steps[step];

    function onNext() {
        setStep(step + 1);
    }

    useEffect(() => {
        dispatch(getSingleJobDetailAction(id));
    }, []);

    return (
        <>
            <Component onNext={onNext} />
        </>
    )
}

export default JobEditForm