import MainLayouts from "../../layouts/MainLayouts";
import {Box, Button, Card, Container, Grid} from "@mui/material";
import * as React from 'react';
import {useRouter} from "next/router";
import {ITrack} from "../../types/track";
import TrackList from "../../components/TrackList";

const Index = () => {
    const router = useRouter()

    const tracks: ITrack[] = [
        {_id: 1, name: 'track 1', artist: 'artist 1', text: 'text about track 1', listens: 0, picture: 'http://localhost:5000/image/714c6f25-8b44-4022-b606-5e769ff675ab.jpeg', audio: 'https://dll.z2.fm/music/5/8e/hiti_2022_-_rasa_-_pogudim.mp3', comments: []},
        {_id: 2, name: 'track 2', artist: 'artist 2', text: 'text about track 2', listens: 0, picture: 'http://localhost:5000/image/714c6f25-8b44-4022-b606-5e769ff675ab.jpeg', audio: 'https://dll.z2.fm/music/5/8e/hiti_2022_-_rasa_-_pogudim.mp3', comments: []},
        {_id: 3, name: 'track 3', artist: 'artist 3', text: 'text about track 3', listens: 0, picture: 'http://localhost:5000/image/714c6f25-8b44-4022-b606-5e769ff675ab.jpeg', audio: 'https://dll.z2.fm/music/5/8e/hiti_2022_-_rasa_-_pogudim.mp3', comments: []},
    ]

    return (
        <MainLayouts>
                <Grid container justifyContent='center'>
                    <Card style={{width: 900}}>
                        <Box p={3}>
                            <Grid container justifyContent='space-between'>
                                <h1>Список треков</h1>
                                <Button onClick={() => router.push('/tracks/create')}>
                                    Загрузить
                                </Button>
                            </Grid>
                        </Box>
                        <hr/>
                        <TrackList tracks={tracks}/>
                    </Card>
                </Grid>
        </MainLayouts>
    );
};

export default Index;