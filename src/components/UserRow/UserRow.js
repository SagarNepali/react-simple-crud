import React,{Component} from 'react';
import PropTypes from 'prop-types';
import {Button} from 'reactstrap';


class UserRow extends Component{

	render(){
		let users  = this.props.users.map((user)=>(
				<tr key={user.id}>
					<td>{user.id}</td>
					<td>{user.username}</td>
					<td><Button color="danger" id={user.id}> Delete</Button></td>
				</tr>
			));
			
		return(
			<tbody>{users}</tbody>
		);
	

	}

}



export default UserRow;
