import React, { useContext } from "react";
import { GlobalContext } from '../../context/GlobalState';
import { Result } from '../../helpers/types';

export const MovieList = () => {
    const context = useContext(GlobalContext)
    return (
        <div>
            {context && context.watchLater.length > 0 && context.watchLater.map((value: Result, index: number) => {
                const imageUrl = `http://image.tmdb.org/t/p/w200${value.poster_path}`
                return (
                    <div key={index} className="movie-card">
                        <h2>{value.title}</h2>
                        <img src={imageUrl} alt={value.title} />
                        <p>{value.overview}</p>
                        <p>{value.release_date && JSON.stringify(value.release_date).substring(1, 5)}</p>
                    </div>
                )
            })}
        </div>
    );
}