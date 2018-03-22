import React,{Component} from 'react';
import User from '../User/User'

class UserList extends Component{

	render(){
			
		return <li className="checklist__task">{this.props.username} - {this.props.id}</li>		
	

	}

}

export default UserList;