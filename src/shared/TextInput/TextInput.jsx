import React from 'react'

const TextInput = (props) => {
    return (
        <>
            <input
                className="appearance-none block w-full text-placeholder border border-gray rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray"
                type="text"
                {...props}
            />
        </>
    )
}

export default TextInput