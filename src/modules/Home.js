import React from 'react';
import ContentBox from './ContentBox'

import wxContact from '@/static/wx-ahuang.png'

import './Home.less'

export default class Home extends React.Component {
    render() {
        return (
            <ContentBox>
                <div>
                    <div className="bg-board">
                        <div className="big-tit-box">
                            <div className="big-title">
                                黄饼坯的文章
                            </div>
                            <div className="sub-title">
                                <div class="line-tit">
                                都是思考后的产物
                                </div>
                            </div>
                            <div className="btn-line">
                                <div className="btn-box">
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="footer-box">
                        <div className="foot-line">
                            <div className="wx-contact">
                                <img alt="qrcode" src={wxContact} />
                                <div>扫码加好友</div>
                            </div>
                        </div>
                        <div className="foot-line">
                            <a href="https://github.com/yunikoro">
                                <div className="github" />
                            </a>
                        </div>
                        <div className="foot-line">
                            <div className="owner">黄知恒 - 2018</div>
                        </div>
                        <div className="foot-line">
                            <a href="http://www.miitbeian.gov.cn/?ref=ahuangale.top" className="icp">
                                <div className="police" />
                                浙ICP备 18002956 号
                            </a>
                        </div>
                    </div>
                </div>
            </ContentBox>
        );
    }
}