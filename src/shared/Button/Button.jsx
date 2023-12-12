import React from 'react'

const Button = ({
    text, 
    onClick
}) => {
    return (
        <>
            <button 
                onClick={onClick} 
                className={`bg-primary hover:bg-primary text-white font-bold py-2 px-4 rounded cursor-pointer`}
            >
                {text}
            </button>
        </>
    )
}

export default Button