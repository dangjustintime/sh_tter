class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      session: {
        username: '',
        password: '',
        user_id: 0,
      }
    }
    this.handleLogin = this.handleLogin.bind(this);
    this.handleLoginSubmit = this.handleLoginSubmit.bind(this);
  }
  handleLogin(session) {
    console.log(session);
    this.setState({ session: session });
  }
  handleLoginSubmit(session) {
    fetch('/sessions')
    .then(response => {
      return response.json();
    })
    .then(jsonedSession => {
      this.handleLogin(jsonedSession);
    })
    .catch(error => console.log(error));
  }
  render() {
    return (
      <div>

        { this.state.session.user_id == 0 ?
          <HomePage
            username={this.state.session.username} 
            password={this.state.session.password} 
            user_id={this.state.session.user_id} 
            handleLogin={this.state.handleLogin} 
            handleLoginSubmit={this.state.handleLoginSubmit} 
          /> : null }
      </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.querySelector('#react_container')
);
