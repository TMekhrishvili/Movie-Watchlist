import React, { useState } from 'react';
import './addMovie.css';
import { Result } from '../../helpers/types';

export const AddMovie = () => {
    // states
    const [results, setresults] = useState<Result[]>([]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        const value = e.currentTarget.value;
        value.length > 0 ?
            fetch(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&page=1&include_adult=false&query=${value}`)
                .then(response => response.json())
                .then(data => {
                    const result = data.results;
                    result && setresults(result.map((value: Result) => ({
                        id: value.id,
                        title: value.title,
                        overview: value.overview,
                        release_date: value.release_date,
                    })))
                }) : setresults([])
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
                {results.length > 0 && results.map((value: Result, index: number) => (
                    <div key={index} className="movie-card">
                        <h2>{value.title}</h2>
                        <p>{value.overview}</p>
                        <p>{JSON.stringify(value.release_date).substring(1, 5)}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}
