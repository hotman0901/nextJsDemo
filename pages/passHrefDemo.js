import React, { Component } from 'react';
import PassH from '../components/PassH/passH';
import Link from 'next/link';
import Header from '../components/Header/header'


export default class PassHref extends Component {
    render() {
        return (
            <div>
                <Header />
                {/* passHref會傳遞href的參數到子component讓子compoent props內有href這個參數 */}
                <Link href="/staticFileDemo" passHref>
                    <PassH>passHref</PassH>
                </Link>
                <hr/>
            </div>
        );
    }
}
