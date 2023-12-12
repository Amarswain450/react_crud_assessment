import React from 'react'

const RadioInput = (props) => {
    return (
        <>
            <input
                type="radio"
                name="inline-radio-group"
                className="w-4 h-4"
                {...props}
            />
        </>
    )
}

export default RadioInput