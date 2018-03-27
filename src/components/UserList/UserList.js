import React,{Component} from 'react';
import PropTypes from 'prop-types';
import {Button, Table, Container} from 'reactstrap';
import UserRow from '../UserRow/UserRow';
import logo from './add_blue.png';
class UserList extends Component{

	render(){
		let iconStyle = {
		  height: '50px',
		  width: '50px',
		  
		  WebkitTransition: 'all', // note the capital 'W' here
		  msTransition: 'all' // 'ms' is the only lowercase vendor prefix
		};
			
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
					<UserRow users={this.props.users} key={this.props.users.id} userCallbacks={this.props.userCallbacks}/>
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