import React, { useState } from 'react'
import CreateJobButton from './CreateJobButton/CreateJobButton'
import CreateFormOne from './CreateFormOne/CreateFormOne'
import CreateFormTwo from './CreateFormTwo/CreateFormTwo'

const steps = {
    1: CreateJobButton,
    2: CreateFormOne,
    3: CreateFormTwo,
};

const JobCreateFormDetails = () => {
    const [step, setStep] = useState(1);
    const Step = steps[step];

    function onNext() {
        setStep(step + 1);
    }

    return (
        <>
            <Step onNext={onNext} />
        </>
    )
}

export default JobCreateFormDetails