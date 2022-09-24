import MainLayouts from "../../layouts/MainLayouts";
import {Button, Grid, TextField} from "@mui/material";
import {useRouter} from "next/router";

const TrackPage = () => {
    const router = useRouter()
    const track = {_id: 1, name: 'track 1', artist: 'artist 1', text: 'text about track 1', listens: 0, picture: 'http://localhost:5000/image/714c6f25-8b44-4022-b606-5e769ff675ab.jpeg', audio: 'https://dll.z2.fm/music/5/8e/hiti_2022_-_rasa_-_pogudim.mp3', comments: []}

    return (
        <MainLayouts>
            <Button variant='outlined' onClick={() => router.push('/tracks')}>К списку</Button>
            <Grid container style={{marginTop: 50}}>
                <img src={track.picture} height={150} width={150}/>
                <div style={{marginLeft: 35}}>
                    <h1>Название - {track.name}</h1>
                    <div>Автор - {track.artist}</div>
                    <div>Прослушиваний - {track.listens}</div>
                </div>
            </Grid>
            <div>
                <h1>Текст</h1>
                <p>{track.text}</p>
            </div>
            <Grid style={{marginTop: 40}}>
                <TextField
                    label='Ваше имя'
                    fullWidth
                />
                <TextField
                    label='Комментарий'
                    style={{marginTop: 25}}
                    fullWidth
                    multiline
                    rows={4}
                />
                <Button style={{marginTop: 25}} variant='outlined'>Отправить</Button>
            </Grid>
            <div style={{marginTop: 40}}>
                {track.comments.map(comment =>
                    <div key={comment._id} style={{marginTop: 25}}>
                        <div>{comment.username}</div>
                        <p>{comment.text}</p>
                    </div>
                )}
            </div>
        </MainLayouts>
    );
};

export default TrackPage;