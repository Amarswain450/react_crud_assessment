import React from 'react'

const OutlineButton = ({ text }) => {
    return (
        <>
            <button className="text-primary font-bold hover:text-primary py-2 px-4 border border-primary hover:border-primary rounded">
                {text}
            </button>
        </>
    )
}

export default OutlineButton