import React,{Component} from 'react';
import PropTypes from 'prop-types';
import {Button} from 'reactstrap';


class UserRow extends Component{

	render(){
		let users  = this.props.users.map((user,userIndex)=>(
				
				<tr key={user.user_id}>
					<td>{user.user_id}</td>
					<td>{user.username}</td>
					<td>
						<Button color="danger" onClick={
									this.props.userCallbacks.delete.bind(null,user.user_id,userIndex)
								}> Delete</Button>	
					</td>
				</tr>
				
			));

		return(
			<tbody>{users}</tbody>
		);
	

	}

}



export default UserRow;
