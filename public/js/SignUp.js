class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
    this.handleChangeUsername = this.handleChangeUsername.bind(this);
    this.handleChangePassword = this.handleChangePassword.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChangeUsername(event) {
    this.setState({ username: event.target.value });
  }
  handleChangePassword(event) {
    this.setState({ password: event.target.value });
  }
  handleSubmit(event) {
    this.props.handleSignUp(this.state)
  }
  render() {
    return (
       <form onSubmit={this.handleSubmit}>
         <input
           type="text"
           placeholder="username"
           value={this.state.username}
           onChange={this.handleChangeUsername}
         />
         <input
           type="password"
           placeholder="password"
           value={this.state.password}
           onChange={this.handleChangePassword}
         />
         <input type="submit" value="Sign Up" />
       </form>
    )
  }
}
