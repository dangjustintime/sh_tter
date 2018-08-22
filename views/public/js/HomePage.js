class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: this.props.username,
      password: this.props.password
    }
    this.handleSubmit = this.props.handleSubmit;
  }
  this.handleLoginSubmit = this.handleLoginSubmit.bind(this);
  this.handleLogin = this.handleLogin.bind(this);
  render() {
    return (
      <div>
        <div className="row">
          <div className="col-6" id="homeInfo">
            <p>Welcome to Sh*tter!! Sh*t on whatever you like!!😀</p>
            <p>Follow your disinterest.</p>
            <p>Hear what people are sh*ting about.</p>
            <p>Join the conversion.</p>
          </div> 
          <div className="col-6 container">
            <h1>💩</h1>
            <form onSubmit={this.handleSubmit} >
              <input type="text" placeholder="username" value={this.state.username}/>
              <input type="password" placeholder="password" value={this.state.password}/>
              <input type="submit" value="Log in" />
            </form>
          </div> 
        </div> 
      </div> 
    )
  }
}
