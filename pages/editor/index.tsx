import React from "react";
import Head from 'next/head';
import Editor from "../../components/ui/edittor";

const EditorPage = () => {
    return (
        <>
            <Head>
                <title>Editer Page</title>
                <meta name="description" content="Editer Page" />
                <meta property="og:title" content="Editer Page" />
                <meta property="og:description" content="Editer Page" />
                <meta property="og:type" content="website" />
            </Head>
            <Editor />
            <span>Hello</span>
        </>
    )
}

export default EditorPage;