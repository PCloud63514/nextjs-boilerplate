import React from 'react'
import Head from "next/head";
import * as Styled from './style'

export default function ThemePage() {
    return (
        <Styled.container>
            <Head>
                <title>Theme</title>
            </Head>
            <main>
                <h1>THEME BOARD</h1>
                <p>Theme</p>
            </main>
        </Styled.container>
    );
}