import { Component } from "react";
interface User {
    name:string,
    age:number
}

interface UserSearchProps {
    users :User[]
}

interface UserSearchState {
    name: string;
    user : User| undefined
}

class UserSearch extends Component<UserSearchProps>{

    state:UserSearchState  ={
        name : '',
        user: undefined

    };

    onChange =  (e:React.ChangeEvent<HTMLInputElement>) => {

        this.setState({
            name:e.target.value
        })
    }
    onClick = () =>{

       const foundUser =  this.props.users.find( user => user.name === this.state.name);

       this.setState({ user : foundUser});

    }

    render () {

        return (

            <div>
        <input value={this.state.name} onChange={this.onChange} />
        <button onClick={this.onClick}>Find User</button>

        <div>
            {
                this.state.user && this.state.user.name
            }

            <br ></br>
             {
                this.state.user && this.state.user.age
            }
        </div>
    </div>


        );
    }



}

export default UserSearch;