import React, { Component } from 'react';
class Info extends Component {
    btnClick = () => {
        console.log(this)
        console.log("按钮被按下")
    }
    render() {
        console.log(this.props.race)
        return (
            <div className="bodyInfo_list">
                <ul>
                    <li>
                        <div className="body_info_left">
                            <p className="body_info_date">2月6日</p>
                            <p>7Days</p>
                        </div>
                        <div className="body_info_right">
                            <p className="body_info_title">WSOP国际扑克竞标赛-澳门站</p>
                            <p className="body_info_money">入场资格：¥356</p>
                        </div>
                    </li>
                    <li>
                        <div className="body_info_left">
                            <p className="body_info_date">2月6日</p>
                            <p>7Days</p>
                        </div>
                        <div className="body_info_right">
                            <p className="body_info_title">WSOP国际扑克竞标赛WSOP国际扑克竞标赛WSOP国际扑克竞标赛-澳门站</p>
                            <p className="body_info_money">
                                入场资格：¥356
                                <span className="info_label">ROY</span>
                            </p>
                        </div>
                    </li>
                </ul>
                <div className="p20">
                    <button className="btn-bottom" onClick={this.btnClick}>
                        立即购买
                    </button>
                </div>
            </div>
        );
    }
}
export default Info;
