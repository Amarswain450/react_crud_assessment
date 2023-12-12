import React from 'react'
import Button from '../../../shared/Button/Button'

const CreateJobButton = ({onNext}) => {
    return (
        <>
            <div className='m-10'>
                <Button
                    text={"Create Job"}
                    onClick={onNext}
                />
            </div>
        </>
    )
}

export default CreateJobButton