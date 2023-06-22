import React from 'react';
import Comment from "./Comment";
import {ScrollingCarousel} from "@trendyol-js/react-carousel";
import {useSelector} from "react-redux";

const CommentsCarouselSection = () => {
    const comments = useSelector((state) => state.comments.comments)
    return(
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
    )
}

export default CommentsCarouselSection;