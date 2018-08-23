class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      session: {
        username: "dangjustintime",
        password: ""
      },
      text: ""
    };
    this.handleLogin = this.handleLogin.bind(this);
    this.handleLoginSubmit = this.handleLoginSubmit.bind(this);
    this.handleSignUp = this.handleSignUp.bind(this);
    this.handleCreateShit = this.handleCreateShit.bind(this); 
  }
  handleLogin(newSession) {
    console.log("handleLogin")
    this.setState({ session: {
      username: newSession.username,
      password: newSession.password
    }});
  }
  handleLoginSubmit(event) {
    fetch('/sessions', {
      method: "POST",
      body: JSON.stringify(this.state.session),
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json"
      }
    })
    .then(response => {
      console.log(response);
      return response.json();
    })
    .then(jsonedSession => {
      console.log(jsonedSession);
      this.handleLogin(jsonedSession);
    })
    .catch(error => console.log(error));
    event.preventDefault();
  }
  handleSignUp(event) {
    console.log("handleSignUp");
    /*
    fetch('/users', {
      method: "POST",
      body: JSON.stringify(this.state.session);
      headers: {
        "Content-Type": "application/json"
      }
    }) 
    .then(response => {
      return response.json();
    })
    .then(jsonedSession => {
      this.handleLogin(jsonedSession);
    })
    .catch(error => console.log(error));
    */
    event.preventDefault();
  }
  handleCreateShit(event) {
    console.log("create shit");
    /*
    fetch('/shits', {
      method: "Post",
      body: JSON.stringify(this.state.session),
      headers: {
        "Content-Type": "application/json"
      }
    })
    .then(response => {
      return response.json();
    })
    .then(jsonedSession => {
      this.handleLogin(jsonedSession);
    })
    .catch(error => console.log(error));
    event.preventDefault();
    */
  }
  render() {
    return (
      <div>
        { this.state.session.username == "" ?
          <HomePage
            username={this.state.session.username} 
            password={this.state.session.password} 
            handleLogin={this.handleLogin} 
            handleLoginSubmit={this.handleLoginSubmit} 
            handleSignUp={this.handleSignUp}
          /> : 
          <UserPage
            username={this.state.session.username}
            handleCreateShit={this.handleCreateShit}
          />
        }
        <h1>{this.state.username}</h1>
        <h1>{this.state.password}</h1>
      </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.querySelector('#react_container')
);
