import { useCount } from "@/hooks/useCount";
import { FunctionComponent, useEffect,useMemo } from "react";
import { useState} from "react";
import { FilmInfo } from "../FilmInfo/FilmInfo";

interface Props {
    title: string;
    genre: 'comedy' | 'horror';
    seasonsCount: number;
};

export const FilmDetails: FunctionComponent<Props> = ({
    title,
    genre,
    seasonsCount,
}) => {
    // let [count, setCount] = useState(0);
    // useEffect(() => {
    //     console.log('count:', count);
    //     return() => {}
    // }, [count]);
    
    let {count, increment, decrement} = useCount(0);

   
    const filmRating = useMemo(() => {
        return Math.floor(
            FilmDetails.reviews.reduce ((sum,review) => {
                return sum + review.rating 
            }, 0) / FilmDetails.reviews.length
        )
    }, [FilmDetails.reviews]);

    return (
        <div>
            <FilmInfo 
                title={title}
                genre={genre}
                seasonsCount={seasonsCount}
            />
            <div>
                <button onClick={decrement}>-</button>
                {count}
                <button onClick={()=> {increment}}>+</button>
            </div>
        </div>
    );
};