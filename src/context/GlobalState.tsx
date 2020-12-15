import React, { createContext, useReducer } from 'react';
import { Result, initialStateType } from '../helpers/types';
import AppReducer from './AppReducer';

const initialState: initialStateType = {
    watchLater: [],
    watched: [],
    addMovie: () => { }
}

export const GlobalContext = createContext(initialState);

export const GlobalProvider = (props: any) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);
    const addMovie = (movie: Result) => {
        dispatch({ type: 'ADD_MOVIE', payload: movie });
    }
    return (
        <GlobalContext.Provider value={{ watchLater: state.watchLater, watched: state.watched, addMovie, }}>
            { props.children}
        </GlobalContext.Provider>
    )
}