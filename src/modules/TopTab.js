import React from 'react';
import { NavLink } from 'react-router-dom';
import './TopTab.less'

export default class TopTab extends React.Component {
    render() {
        return (
            <NavLink { ...this.props } activeClassName="active" className="link">
                <div className="text">
                    {this.props.children}
                    <div className="line-box">
                        <div className="under-line" />
                    </div>
                </div>
            </NavLink>
        );
    }
}
