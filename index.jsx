import React from 'react';
import ReactDOM from 'react-dom';
import Slider_Auto from './Slider_Auto';
import Slider_Click from './Slider_Click';
export default class Full_component extends React.Component{
	
	render(){
			return(
			<div className="form">
				<Slider_Auto/>
				<Slider_Click/>
			</div>
		)
	}
}
	ReactDOM.render((
	<Full_component/>
	), document.getElementById('root'));