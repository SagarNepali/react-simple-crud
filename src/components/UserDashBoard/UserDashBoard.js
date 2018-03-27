import React,{Component} from 'react';
import UserList from '../UserList/UserList'

class UserDashBoard extends Component{

	render(){
		return(
		
			<UserList users={this.props.users} 
						userCallbacks={this.props.userCallbacks}
						/>
		
		
		);
	}

}

export default UserDashBoard;