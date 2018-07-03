import React, { Component } from "react";
import "./route-modal.css";
import { NavLink } from "react-router-dom";

class RouteModal extends Component {
	constructor(props) {
		super(props);
	}

	render() {
        console.log(this.props);
		return (
			<div className={`routes-modal ${this.props.display}`}>
				<div onClick={this.props.handleClick}>
					<h1>
						{this.props.location ? this.props.location.name : ""}
					</h1>
					<p>
						{this.props.location ? this.props.location.numRoutes : ""} routes <span />
						{this.props.location ? this.props.location.climbType : ""}
					</p>
				</div>
				<ul>
					{this.props.routes.map((route, i) => (
						<li key={i}>
							<NavLink to="/route-details">
								<p>{route.routeName}</p>
								<p>{route.difficulty}</p>
								<i className="material-icons">arrow_forward_ios</i>
							</NavLink>
						</li>
					))}
				</ul>
			</div>
		);
	}
}

export default RouteModal;
