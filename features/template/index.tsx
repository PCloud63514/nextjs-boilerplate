import React from 'react'
import Head from "next/head";
import {Button} from '@/components'
import * as Styled from './style'

export default function TemplatePage() {
    return (
        <Styled.container>
            <Head>
                <title>Theme</title>
            </Head>
            <main>
                <h1>THEME BOARD</h1>
                <p>Theme</p>
                <Button onClick={()=>{alert('pick pick')}}>
                    hi
                </Button>
            </main>
        </Styled.container>
    );
}