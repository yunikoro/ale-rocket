import React from 'react';

export default class Home extends React.Component {
    render() {
        const { params: { id } } = this.props.match;
        console.log(this.props);
        return <h1>hello {id}</h1>;
    }
}