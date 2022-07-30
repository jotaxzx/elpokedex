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
                <a
                    href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Powered by{' '}
                    <span className={'logo'}>
                        <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
                    </span>
                </a>
            </footer>
        </>
    )
}
