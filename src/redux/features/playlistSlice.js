import { createSlice } from "@reduxjs/toolkit";



const initialState = {
    playlist: [],
}

const playlistSlice = createSlice({
    name: 'playlist',
    initialState,
    reducers: {
        setPlaylist: (state, action) => {
            const {userID, track} = action.payload;
            state.playlist.push(track);
            const playlist_key = `playlist_${userID}`;
            localStorage.setItem(playlist_key, JSON.stringify(state.playlist));
        },
        loadPlaylist: (state, action) => {
            const {userID} = action.payload;
            const playlist_key = `playlist_${userID}`;
            const playlist = localStorage.getItem(playlist_key);
            if(playlist) {
                state.playlist = JSON.parse(playlist);
            }
        }
    }
})

export const { setPlaylist, loadPlaylist } = playlistSlice.actions;
export default playlistSlice.reducer;