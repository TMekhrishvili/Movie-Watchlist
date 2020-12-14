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
                    result && result.map((value: Result) => setresults([...results, {
                        id: value.id,
                        title: value.title,
                        overview: value.overview,
                        release_date: value.release_date,
                    }]))
                })
            : setresults([])
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
                    <div key={index} className="item"><h4>{value.title}</h4></div>
                ))}
            </div>
        </div>
    )
}
