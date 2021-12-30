import React from 'react';
import Navbar from "../components/Navbar";
import {Container} from "@mui/material";
import Player from "../components/Player";
import Head from "next/head";

interface MainLayoutProps {
    title?: string;
    description?: string;
    keywords?: string
}

const MainLayout: React.FC<MainLayoutProps> =
    ({
         children,
         title,
         description,
         keywords
    }) => {
    return (
        <>
            <Head>
                <title>{title || 'Музыкальгая площадка'}</title>
                <meta name='description' content={'Музыкальгая площадка. Здесь каждый может оставить свой трек ' + description}/>
                <meta name='robots' content='index, follow'/>
                <meta name='keywords' content={keywords || 'Музыка, треки, артист'}/>
                <meta name='viewport' content='width=device-width, initial-scale=1'/>
            </Head>
            <Navbar/>
            <Container style={{margin: '90px 0'}}>
                {children}
            </Container>
            <Player/>
        </>
    );
};

export default MainLayout