import React, { useContext } from "react";
import { GlobalContext } from '../../context/GlobalState';
import { Result } from '../../helpers/types';

export const MovieList = () => {
    const context = useContext(GlobalContext)
    return (
        <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
            {context && context.watchLater.length > 0 && context.watchLater.map((value: Result, index: number) => {
                const imageUrl = `http://image.tmdb.org/t/p/w200${value.poster_path}`
                return (
                    <div key={index} className="movie-card" style={{ maxWidth: '300px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <img src={imageUrl} alt={value.title} />
                        <h2>{value.title}</h2>
                    </div>
                )
            })}
        </div>
    );
}