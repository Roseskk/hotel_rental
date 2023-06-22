import React from 'react';
import Comment from "./Comment";
import {ScrollingCarousel} from "@trendyol-js/react-carousel";
import {useSelector} from "react-redux";

const CommentsCarouselSection = () => {
    const comments = useSelector((state) => state.comments.comments)
    return(
        <>
            {
                comments === undefined
                ? null
                : <>
                        <h2 className={'text-white text-center text-title'}>Коментарии</h2>
                        <div className={'relative w-full h-[200px]'}>
                            <ScrollingCarousel>
                                {
                                    comments &&
                                    comments.length !== 0 &&
                                    comments.map(commentary => {
                                        return (
                                            <Comment key={commentary.comment_id} comment={commentary} />
                                        )
                                    })
                                }
                            </ScrollingCarousel>
                        </div>
                    </>
            }
        </>
    )
}

export default CommentsCarouselSection;