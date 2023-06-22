import React from 'react';

const Comment = ({comment}) => {
    return(
        <div className={'flex flex-col bg-secondary w-[30%] h-[200px] overflow-y-scroll rounded-[15px] border border-white m-2 font-primary text-default'}>
            <div className={'flex justify-between border-b p-2'}>
                <span>От: Пользователь</span>
                <span>Дата: 28.01.23</span>
            </div>
            <span className={'p-2'}>{comment.content}</span>
        </div>
    )
}
export default Comment;