class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    this.setState({[event.target.id]: event.target.value})
    console.log(this.state);
  }
  handleSubmit(event) {
    console.log(this.state);
    this.props.handleLoginSubmit(event);
    event.preventDefault();
  }
  render() {
    return (
       <form onSubmit={this.props.handleLoginSubmit}>
         <h1>{this.state.username}</h1>
         <h1>{this.state.password}</h1>
         <input
            type="text"
            placeholder="username"
            id="username"
            value={this.state.username}
            onChange={this.handleChange}
         />
         <input
            type="password"
            placeholder="password"
            id="password"
            value={this.state.password}
            onChange={this.handleChange}
         />
         <input type="submit" value="Log in" />
       </form>
    )
  }
}
