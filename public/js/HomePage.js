class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: this.props.username,
      password: this.props.password
    }
  }
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
            <LoginForm
              handleLogin={this.props.handleLogin}
              handleLoginSubmit={this.props.handleLoginSubmit}
            />
            <SignUp
              handleSignUp={this.props.handleSignUp}
            />
          </div> 
        </div> 
      </div> 
    )
  }
}
