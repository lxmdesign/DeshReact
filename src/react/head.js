import React, { Component } from "react";
import "./head.css";


class Head extends Component{
	render(){
		return(
			<div className="head">
				{/*标题栏*/}
				<div className="title">
					<div>&gt;</div>
					<div className="ellipsis">WSOP德国扑克大赛（国际扑克大赛)</div>
				</div>
                {/*信息栏*/}
				<div className="message">
					<div className="leftM">
					</div>
					<div className="rightM">
						<div className="timer">2017.04.23-2017.05.12</div>
						<div className="detail">澳大利亚墨尔本皇冠娱乐场澳大是寿...</div>
						<div className="btn">
							<span>比赛中</span>
							<span>已在售票</span>
						</div>
					</div>
				</div>


				{/*<Title />*/}
				{/*<Message />*/}
				{/*<Nav />*/}
			</div>
		);
	}
}
export default Head;

