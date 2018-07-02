import React from 'react';
// import Header from '../components/Header/header';
import Link from 'next/link'


export const Index = props => {
    return (
        <ul>
            <li>
                <Link href="/b" as="/a">
                    <a>a</a>
                </Link>
            </li>
            <li>
                <Link href="/a" as="/b">
                    <a>b</a>
                </Link>
            </li>
        </ul>
    );
};

export default Index;
