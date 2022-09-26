import MainLayouts from "../../layouts/MainLayouts";
import {Box, Button, Card, Grid} from "@mui/material";
import * as React from 'react';
import {useRouter} from "next/router";
import {ITrack} from "../../types/track";
import TrackList from "../../components/TrackList";
import {NextThunkDispatch, wrapper} from "../../store";
import {fetchTracks} from "../../store/action-creators/track";
import {useTypeSelector} from "../../hooks/useTypeSelector";

const Index = () => {
    const router = useRouter()
    const {tracks, error} = useTypeSelector(state => state.tracks)

    if (error) {
        return <MainLayouts>
                <h1>{error}</h1>
            </MainLayouts>

    }

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

export const getServerSideProps = wrapper.getServerSideProps( async ({store}) => {
    const dispatch = store.dispatch as NextThunkDispatch
    await dispatch( await fetchTracks());
});