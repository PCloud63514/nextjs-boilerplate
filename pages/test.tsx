import React from 'react'
import Head from "next/head"

export default function TestPage() {
    return (
        <div>
            <Head>
                <title>Test</title>
            </Head>
            <main>
                <h1>
                    Test 입니다.
                </h1>
                <p>
                    Test.
                </p>
            </main>
        </div>
    )
}