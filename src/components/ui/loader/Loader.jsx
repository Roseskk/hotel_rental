import React from 'react';
import {ThreeDots} from "react-loader-spinner";

const Loader = () => {
    return(
        <div className={
            "w-[100px] h-[100px] absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]"
        }>
            <ThreeDots
                height="100%"
                width="100%"
                radius="9"
                color="#d2beb1"
                ariaLabel="three-dots-loading"
                visible={true}
            />
        </div>
    )
}

export default Loader;