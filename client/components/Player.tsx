import {PauseCircle, PlayArrow, VolumeUp} from "@mui/icons-material";
import {Container, Grid, IconButton} from "@mui/material";
import styles from '../styles/Player.module.scss';
import TrackProgress from "./TrackProgress";

const Player = () => {
    const active = false
    const track = {_id: 1, name: 'track 1', artist: 'artist 1', text: 'text about track 1', listens: 0, picture: 'http://localhost:5000/image/714c6f25-8b44-4022-b606-5e769ff675ab.jpeg', audio: 'https://dll.z2.fm/music/5/8e/hiti_2022_-_rasa_-_pogudim.mp3', comments: []}

    return (
        <div className={styles.player}>
            <div style={{display: 'flex', alignItems: 'center'}}>
                <IconButton onClick={e => e.stopPropagation()}>
                    {!active
                        ? <PlayArrow/>
                        : <PauseCircle/>
                    }
                </IconButton>
                <img src={track.picture} height={70} width={70} style={{marginLeft: '20px'}}/>
                <Grid container direction='column' style={{marginLeft: '20px', width: '120px'}}>
                    <div style={{fontSize: 20}}>{track.name}</div>
                    <div style={{fontSize: 14}}>{track.artist}</div>
                </Grid>
            </div>
            <TrackProgress left={0} right={100} width={350}/>
            <div style={{display: 'flex'}}>
                <VolumeUp/>
                <TrackProgress left={0} right={100} width={100}/>
            </div>
        </div>
    );
};

export default Player;