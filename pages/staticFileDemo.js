import React from 'react';
import '../style/photo.scss';
import Header from '../components/Header/header'


const Photo = props => {
    return (
        <div className="co_photo">
            <Header />
            <img src="/static/img/bg_01.jpg" alt="bg"/>
        </div>
    );
};

export default Photo;
