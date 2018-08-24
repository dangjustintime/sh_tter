class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    this.setState({[event.target.id]: event.target.value})
  }
  handleSubmit(event) {
    event.preventDefault();
    this.props.handleLoginSubmit(this.state);
  }
  render() {
    return (
       <form onSubmit={this.handleSubmit}>
         <input
          className="form-control"
          type="text"
          placeholder="username"
          id="username"
          value={this.state.username}
          onChange={this.handleChange}
         />
         <input
          className="form-control"
          type="password"
          placeholder="password"
          id="password"
          value={this.state.password}
          onChange={this.handleChange}
         />
         <button
          className="btn btn-primary"
          type="submit"
         >
            Log in
         </button>
       </form>
    )
  }
}
