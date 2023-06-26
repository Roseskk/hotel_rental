import React from 'react';

const Button = ({value, isDisabled, textSize, pySize, pxSize}) => {
    return(
        <button
            disabled={isDisabled}
            className={`hover:bg-black bg-primary ${pxSize} ${pySize} rounded-[15px] ${textSize} text-secondary border border-black text-center w-full`}
        >
            {value}
        </button>
    )
}

export default Button;