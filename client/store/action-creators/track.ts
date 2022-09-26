import axios from "axios";
import {Dispatch} from "react";
import {TrackActionTypes, TracksAction} from "../../types/track";


export const fetchTracks = () => {
    return async (dispatch: Dispatch<TracksAction>) => {
        try {
            const response = await axios.get('http://localhost:5000/tracks')
            dispatch({type: TrackActionTypes.FETCH_TRACKS, payload: response.data})
        } catch (e) {
            dispatch({type: TrackActionTypes.FETCH_TRACKS_ERROR, payload: 'Произошла ошибка при загрузке треков'})
        }
    }
}