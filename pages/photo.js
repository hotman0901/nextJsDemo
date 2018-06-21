import React from 'react';
import Content from '../components/Content/content';
import '../style/photo.scss';

export const Photo = props => {
    return (
        <div className="co_photo">
            <img src="/static/img/bg_01.jpg" alt="bg"/>
            <Content />
        </div>
    );
};

export default Photo;
