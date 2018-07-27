import React from 'react';
import ContentBox from './ContentBox'

import './Home.less'

export default class Home extends React.Component {
    render() {
        return (
            <ContentBox>
                <div>
                    <div className="bg-board" />
                    <div className="footer-box">

                    </div>
                </div>
            </ContentBox>
        );
    }
}