import React,{Component} from 'react';
import UserDashBoard from '../UserDashBoard/UserDashBoard'
import 'whatwg-fetch';


const API_URL = 'http://localhost/resource'
const API_HEADERS = {
	'Content-Type': 'application/json',
	'Access-Control-Allow-Origin': '*',

};

class AppContainer extends Component{

	constructor(){
		super();
		this.state ={ 
			users:[]
		}
	}

	componentDidMount(){
		fetch(API_URL+'/user/list',{headers:API_HEADERS},{method:'GET'})
		.then((response) =>response.json())
		.then((responseData)=>{
			this.setState({users:responseData})
		})
		.catch((error) => {
			console.error("Fetch error:",error)
		});

	}

	render(){
		return <UserDashBoard users={this.state.users}/>
	}

}

export default AppContainer;