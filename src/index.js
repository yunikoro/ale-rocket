import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './index.less';
import Home from './modules/Home'
import TopTab from './modules/TopTab'
import BlogList from './modules/BlogList'
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render((
    <BrowserRouter>
        <div>
            <div className="nav-bar">
                <div className="link-box">
                    <TopTab exact to="/">首页</TopTab>
                    <TopTab to="/cool">文章</TopTab>
                </div>
            </div>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/cool" component={BlogList} />
            </Switch>
        </div>
    </BrowserRouter>
), document.getElementById('root'));
registerServiceWorker();
