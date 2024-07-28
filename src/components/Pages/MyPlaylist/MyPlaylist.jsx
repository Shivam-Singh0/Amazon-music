import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loadPlaylist } from "../../../redux/features/playlistSlice";

const MyPlaylist = () => {
    const auth = getAuth();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (!user) {
                navigate('/');
            } else {
                dispatch(loadPlaylist({ userId: user.uid }));
            }
        });

        return () => unsubscribe();
    }, [auth, navigate, dispatch]);

    const { playlist } = useSelector((state) => state.playlist);

    useEffect(() => {
        if (playlist.length > 0) {
            console.log(playlist);
        }
    }, [playlist]);

    return (
        <div>
            Playlist
        </div>
    );
};

export default MyPlaylist;
