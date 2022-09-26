import {FC} from "react";
import {ITrack} from "../types/track";
import {Card, Grid, IconButton} from "@mui/material";
import {Delete, PauseCircle, PlayArrow} from "@mui/icons-material";
import styles from '../styles/TrackItem.module.scss';
import {useRouter} from "next/router";
import {useActions} from "../hooks/useActions";

interface TrackItemProps {
    track: ITrack
    active?: boolean
}

const TrackItem: FC<TrackItemProps> = ({track, active = false}) => {
    const router = useRouter()
    const {setActiveTrack, playTrack} = useActions()

    const play = (e) => {
        e.stopPropagation()
        setActiveTrack(track)
        playTrack()
    }

    return (
        <Card className={styles.track} onClick={() => router.push('/tracks/' + track._id)}>
            <IconButton onClick={play}>
                {!active
                    ? <PlayArrow/>
                    : <PauseCircle/>
                }
            </IconButton>
            <img src={'http://localhost:5000/' + track.picture} height={70} width={70}/>
            <Grid container direction='column' style={{marginLeft: '40px'}}>
                <div style={{fontSize: 22}}>{track.name}</div>
                <div>{track.artist}</div>
            </Grid>
            <div  style={{marginLeft: 'auto', display: 'flex', alignItems: 'center'}}>
                <div style={{marginRight: 20, whiteSpace: 'nowrap'}}>2:12 / 3:45</div>
                <IconButton onClick={e => e.stopPropagation()}>
                    <Delete/>
                </IconButton>
            </div>
        </Card>
    );
};

export default TrackItem;