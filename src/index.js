import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch, NavLink } from 'react-router-dom';
import './index.less';
import Home from './modules/Home'
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render((
    <BrowserRouter>
        <div>
            <div className="nav-bar">
                <div className="link-box">
                    <NavLink activeClassName="active" className="link" to="/home">
                        <div className="text">
                            首页
                            <div className="line-box">
                                <div className="under-line"/>
                            </div>
                        </div>
                    </NavLink>
                    <NavLink activeClassName="active" className="link" to="/cool">
                        <div className="text">
                            博客列表
                            <div className="line-box">
                                <div className="under-line"/>
                            </div>
                        </div>
                    </NavLink>
                </div>
            </div>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/home/:id" component={Home}/>
            </Switch>
        </div>
    </BrowserRouter>
), document.getElementById('root'));
registerServiceWorker();
