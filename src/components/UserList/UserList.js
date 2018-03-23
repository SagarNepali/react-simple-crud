import React,{Component} from 'react';
import PropTypes from 'prop-types';
import {Button, Table, Container} from 'reactstrap';
import UserRow from '../UserRow/UserRow';

class UserList extends Component{

	render(){
			
		//return <li className="checklist__task">{this.props.username} - {this.props.id}</li>		
		return(

			<div> 
				<Container>
				<div className="clearfix"></div>
				<br/>
				<div align="center">User List</div>
				<Table striped>
					<thead>
						<tr>
							<td>Id</td>
							<td>Name</td>
							<td>Action</td>
						</tr>
					</thead>
					<UserRow users={this.props.users} key={this.props.users.id}/>
				</Table>
				</Container>
			</div>

			);
	

	}

}
UserList.propTypes = {
	// Pass in a Component to override default element
	tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
	size: PropTypes.string,
	bordered: PropTypes.bool,
	striped: PropTypes.bool,
	dark: PropTypes.bool,
	hover: PropTypes.bool,
	responsive: PropTypes.bool
};

export default UserList;