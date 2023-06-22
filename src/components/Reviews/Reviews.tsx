


export const Reviews = ({reviews}) => {
    return(
        <div>
            {
                Boolean(reviews.length) && reviews.map(
                    (review) => (
                        <Review 
                            key = {review.id}
                            rating = {review. rating}
                            text = {review. text}
                            author = {review. author}
                        />      
                ))
            }
        </div>
    )
}