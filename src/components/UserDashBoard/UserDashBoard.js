import React,{Component} from 'react';
import UserList from '../UserList/UserList'

class UserDashBoard extends Component{

	render(){
		return(
			<ul>
				{this.props.users.map(
					(user) => 
					 <UserList 	key={user.id} 
												username={user.username}
												id={user.id} />
				)}
			</ul>
		);
	}

}

export default UserDashBoard;