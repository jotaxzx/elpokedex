import Head from 'next/head'
import React from 'react'
import { NavBar } from './NavBar'
import styles from '../styles/Layout.module.css'
import Image from 'next/image'



export const Layout = ({ children, namePage, content }) => {
    return (
        <>
            <Head>
                <title>{namePage}</title>
                <meta name="description" content={content} />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            

            <NavBar />
            <div className={styles.container} >
                <main className={styles.main}>
                    {children}
                </main>
            </div>

            <footer className={'footer'}>                    
                    
                    <Image src="/pokemon.png" alt="Vercel Logo" width={92} height={40} style={{ cursor: 'pointer' }} />
                             
            </footer>
        </>
    )
}
