import React from 'react';
import { render } from 'react-dom';
import App from './components/app';
import { Provider } from 'react-redux'
import { createStore } from 'redux'

const rootEl = document.getElementById('app');

const initialState = {
    tracks: [
        'Smells like spirit',
        'Enter Sandman'
    ],
    playlists: [
        'My home playlist',
        'My work playlist'
    ]
};

function playlist(state = initialState, action) {
    if (action.type === 'ADD_TRACK') {
        return {
            ...state,
            tracks: [...state.tracks, action.payload]
        };
    }
    return state;
}
const store = createStore(playlist, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

render(
    <Provider store={store}>
        <App />
    </Provider>,
    rootEl
);



// import { createStore } from 'redux';
//
// function playlist(state = [], action) {
//     if (action.type === 'ADD_TRACK') {
//         return [
//             ...state,
//             action.payload
//         ]
//     }
//     return state;
// }
//
// const store = createStore(playlist);
// const addTrackBtn = document.querySelectorAll('.addTrack')[0];
// const list = document.querySelectorAll('.list')[0];
// const trackInput = document.querySelectorAll('.trackInput')[0];
//
// store.subscribe(() => {
//     list.innerHTML = '';
//     trackInput.value = '';
//     store.getState().forEach(track => {
//         const li = document.createElement('li');
//         li.textContent = track;
//         list.appendChild(li);
//     })
// });
//
// addTrackBtn.addEventListener('click', () => {
//     const trackName = trackInput.value;
//     store.dispatch({ type: 'ADD_TRACK', payload: trackName });
// });