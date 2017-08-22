import React, { Component } from "react";
import Info from "./Info";
import  './body.css';
import {BrowserRouter as Router, Route, NavLink} from "react-router-dom";

//得到父级Router的URL
//得到ID对应的des
// const des="";
const navs = [{
    exact: true,
    name: "旅游介绍",

	main:"Info"
}, {
    name: "主赛信息",
    main:"Info",
    path: "/mainInfo"
}, {
    name: "边赛信息",
    main:"Info",
    path: "/info"
}];

class Body extends Component{

    componentDidMount(){
    	let url=this.props.match.url;
        console.log('Info',this.props.match.url)
        {
            navs.map((routerTable, key) =>(
                routerTable.path="url"+routerTable.path
			));

        }
	}

	render(){

		return(
			<div className="body">
				<ul className="nav">
                    {
                        navs.map((routerTable, key) =>
                            (<li key={key}>
								<NavLink className="navLink" activeClassName="active" exact={routerTable.exact} to={routerTable.path} >
                                    {routerTable.name}
								</NavLink>
							</li>))
                    }
				</ul>

				<div className="content">
                    {/*导航栏*/}
					<br/>
					<a>{}</a><br/>
					<p>
						{/*{*/}
                            {/*navs.map((routerTable, key) =>*/}
                                {/*(<Route*/}
									{/*key={key}*/}
									{/*path={routerTable.path}*/}
									{/*exact={routerTable.exact}*/}
									{/*component={routerTable.main}*/}
								{/*/>))*/}
						{/*}*/}

						{/*{des}*/}
					</p>

					<div className="p20">
						<button className="btn-bottom" onClick={this.btnClick}>
							立即购买
						</button>
					</div>
				</div>

			</div>
		);
	}
}
export default Body;