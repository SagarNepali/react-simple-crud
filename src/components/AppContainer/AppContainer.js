import React,{Component} from 'react';
import UserDashBoard from '../UserDashBoard/UserDashBoard'
import 'whatwg-fetch';
import update from 'react-addons-update'

const API_URL = 'http://localhost/resource'
const API_HEADERS = {
	'Content-Type': 'application/json',
	};

class AppContainer extends Component{

	constructor(){
		super();
		this.state ={ 
			users:[]
		}
	}

	
	

	addUser(param){
		console.log(param)
	}

	updateUser(){
		
	}

	deleteUser(userId,userIndex){
		let currentState = this.state;
		console.log(currentState)
		let nextState =this.state.users.filter((user,index)=>index!=userIndex);

		
		fetch(API_URL+`/user/delete/`+userId,
							{headers:API_HEADERS,
								method:"DELETE"},
				)
		.then((response)=>{
					if(response.ok){
						alert("User deleted successfully")
						this.setState({users:nextState})
						
					}else{
						alert("Could not delete")
					}
		})
		.catch((error)=>
		{
			console.log(error)
			this.setState(currentState);
			alert("Error")
		})
		

	}

	componentDidMount(){
		fetch(API_URL+'/user/list',{headers:API_HEADERS})
		.then((response) =>response.json())
		.then((responseData)=>{
			this.setState({users:responseData})
		})
		.catch((error) => {
			console.error("Fetch error:",error)
		});

	}

	render(){
		return <UserDashBoard users={this.state.users}
								userCallbacks={{
									add:this.addUser.bind(this),
								 	update:this.updateUser.bind(this),
									delete:this.deleteUser.bind(this)
								}}
								/>
	}

}

export default AppContainer;