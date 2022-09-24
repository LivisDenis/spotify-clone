import React, {FC} from 'react';
import NavBar from "../components/NavBar";
import {Container} from "@mui/material";
import Player from "../components/Player";

interface MainLayoutProps {
    children?: React.ReactNode | React.ReactChild
}

const MainLayouts: FC<MainLayoutProps> = ({children}) => {
    return (
        <>
            <NavBar/>
            <Container style={{marginBottom: 100}}>
                {children}
            </Container>
            <Player/>
        </>
    );
};

export default MainLayouts;