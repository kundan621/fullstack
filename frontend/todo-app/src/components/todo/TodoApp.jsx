import { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

export default class TodoApp extends Component{
render(){
    return(
        <div className="TodoApp">
            {/* <LoginComponent/>
            <WelcomeComponent/> */}
            <BrowserRouter>
            <Switch>
            <Route path="/" exact component={LoginComponent}/>
            <Route path="/login" component={LoginComponent}/>
            <Route path="/welcome/:name" component={WelcomeComponent}/>
            <Route component ={ErrorComponent}/>
            </Switch>
            </BrowserRouter>
        </div>
    );
}
}
class LoginComponent extends Component{
    constructor(props){
        super(props);
        this.state={
            userName:"csebuddy",
            passWord:"",
            hasLoginFailed:false,
            showSuccessMessage:false
        }
        this.handleUserNameChange=this.handleUserNameChange.bind(this);
        this.handlePasswordChange=this.handlePasswordChange.bind(this);
        this.loginClicked=this.loginClicked.bind(this);
    }
    render(){
        return(
            <>
            {/* <ShowInvalidCredentials hasLoginFailed={this.state.hasLoginFailed}/> */}
            {this.state.hasLoginFailed   &&  <div>Invalid Credentials</div>}
            {/* <ShowSuccessMessage showSuccessMessage={this.state.showSuccessMessage}/> */}
            {this.state.showSuccessMessage && <div>Login Successful</div>}
           User Name: <input type="text" name="userName" value={this.state.userName} onChange={this.handleUserNameChange}/>
           Password: <input type="password" name="passWord" value={this.state.passWord} onChange={this.handlePasswordChange}/>
           <button onClick={this.loginClicked}>Login</button>
           </>
        );
    }

    handleUserNameChange(event){
        this.setState({
            userName:event.target.value,
        })
        console.log(event.target.value)
    }
    handlePasswordChange(event){
        this.setState({
            passWord:event.target.value,
        })
        console.log(event.target.value)
    }

    loginClicked(){
        if(this.state.userName==="csebuddy" && this.state.passWord==="dummy"){
            // this.setState({
            //     showSuccessMessage:true,
            //     hasLoginFailed:false
            // }) 
            this.props.history.push("/welcome")
        }else{
            this.setState({
                hasLoginFailed:true,
                showSuccessMessage:false
            }) 
        }
        console.log(this.state)
    }
}

// function ShowInvalidCredentials(props){
//     if(props.hasLoginFailed){
//         return <div>Invalid Credentials</div>
//     }
//     return null;
// }

// function ShowSuccessMessage(props){
//     if(props.showSuccessMessage){
//         return <div>Login Successful</div>
//     }
//     return null;
// }
class WelcomeComponent extends Component{
    render(){
        return(
            <>
            <div>hello {this.props.match.params.name}</div>
            </>
        );

    }
}

function ErrorComponent(){
    return(
        <div>Error occurred</div>
    );
}