import React from 'react'
import './ContentBox.less'

export default class ContentBox extends React.Component {
    render() {
        return (
            <div className="content-box">
                {this.props.children}
            </div>
        );
    }
}