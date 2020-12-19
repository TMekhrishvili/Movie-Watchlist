import React, { useState, useContext } from 'react';
import './addMovie.css';
import { Result } from '../../helpers/types';
import { GlobalContext } from '../../context/GlobalState';


export const AddMovie = () => {
    // states
    const [results, setresults] = useState<Result[]>([]);

    const context = useContext(GlobalContext);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        const value = e.currentTarget.value;
        fetch(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&page=1&include_adult=false&query=${value.length > 0 ? value : ""}`)
            .then(response => response.json())
            .then(data => {
                const result = data.results;
                result && setresults(result.map((value: Result) => ({
                    id: value.id,
                    title: value.title,
                    overview: value.overview,
                    release_date: value.release_date,
                    poster_path: value.poster_path,
                })))
            })
    }
    return (
        <div className="container">
            <input
                type="text"
                className="input"
                onChange={handleChange}
                placeholder="Search movie"
            />
            <div className="movie">
                {results.length > 0 && results.map((value: Result, index: number) => {
                    const imageUrl = `http://image.tmdb.org/t/p/w200${value.poster_path}`
                    return (
                        <div key={index} className="movie-card">
                            <h2>{value.title}</h2>
                            <img src={imageUrl} alt={value.title} />
                            <p>{value.overview}</p>
                            <p>{value.release_date && JSON.stringify(value.release_date).substring(1, 5)}</p>
                            <button onClick={() => { context.addMovie(value) }}>Watch Later</button>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
