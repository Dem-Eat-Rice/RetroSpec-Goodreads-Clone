import { fetch } from './csrf';

const GET_ALL_SHELVED_MOVIES = 'shelvedMovies/getAllShelvedMovies';
// const ADD_SHELVED_MOVIE = 'shelvedMovies/addShelvedMovie';
// const DELETE_SHELVED_MOVIE = 'shelvedMovies/deleteShelvedMovie';

const getAllShelvedMovies = (shelvedMovies) => {
    return {
        type: GET_ALL_SHELVED_MOVIES,
        shelvedMovies: shelvedMovies,
    }
}

// const addShelvedMovie = (shelfMovie) => {
//     return {
//         type: ADD_SHELVED_MOVIE,
//         shelfMovie
//     }
// }

// const removeShelvedMovie = (shelfMovie) => {
//     return {
//         type: DELETE_SHELVED_MOVIE,
//         shelfMovie
//     }
// }

export const getAllShelves = () => async dispatch => {
    const response = await fetch(`/api/shelves`);
    
    if (response.ok) {
        const listOfShelves = await response.json();
        dispatch(getAllShelvedMovies(listOfShelves.data.shelvedMovies));
    }
};

// export const addShelvedMovie = data => async dispatch => {
//     const response = await fetch(`/api/shelves`, {
//         method: 'post',
//         headers: {
//             'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(data)
//     })

//     if (response.ok) {
//         const moviesOnShelf = await response.json();
//         dispatch(addShelvedMovie(moviesOnShelf))
//         return moviesOnShelf;
//     }
// }
const initialState = [];

function reducer(state = initialState, action) {
    let newState;
    switch (action.type) {
        case GET_ALL_SHELVED_MOVIES:
            newState = action.shelvedMovies;
            return newState;           
        default:
            return state;
    }
}

export default reducer;

// export const getMoviesInSingleShelf = shelf => async dispatch => {
//     const response = await fetch(`/api/shelves/${shelf.name}`);
    
//     if (response.ok) {
//         const moviesInSingleShelf = await response.json();
//         dispatch({
//             type: 'shelf/LOAD_SHELF',
//             moviesInSingleShelf,
//         });
//     }
// };



