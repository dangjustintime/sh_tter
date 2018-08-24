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
          <div className="col-6 brown" id="homeInfoContainer">
              <h3>Welcome to Sh*tter!! Sh*t on whatever you like!!😀</h3>
            <div>
              <i class="fas fa-search fa-5x"></i>
              <h3>Follow your disinterest.</h3>
            </div>
            <div>
              <i class="fas fa-users fa-5x"></i>
              <h3>Hear what people are sh*ting about.</h3>
            </div>
            <div>
              <i class="fas fa-comments fa-5x"></i>
              <h3>Join the conversion.</h3>
            </div>
          </div>
          <div className="col-6 container" id="homeLogin">
            <h1>💩</h1>
            <h1>See what's sh*tting in the world right now</h1>
            <LoginForm
              id="loginForm"
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
