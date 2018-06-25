import React, { Component } from 'react';
import Link from 'next/link';

export default class PrefetchHeader extends Component {
    render() {
        return (
            <nav>
                <ul>
                    <li>
                        <Link prefetch href="/cssDemo">
                            <a>cssDemo</a>
                        </Link>
                    </li>
                    <li>
                        <Link prefetch href="/nextStar">
                            <a>nextStar</a>
                        </Link>
                    </li>
                </ul>
            </nav>
        );
    }
}
