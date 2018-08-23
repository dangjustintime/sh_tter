class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      session: {
        username: "",
        password: "",
        id: ""
      },
      text: "",
      shits: []
    };
    this.handleLogin = this.handleLogin.bind(this);
    this.handleLoginSubmit = this.handleLoginSubmit.bind(this);
    this.handleSignOut = this.handleSignOut.bind(this);
    this.handleSignUp = this.handleSignUp.bind(this);
    this.handleCreateShit = this.handleCreateShit.bind(this); 
    this.getShits = this.getShits.bind(this);
  }
  handleLogin(newSession) {
    this.setState({ session: {
      username: newSession.username,
      password: newSession.password,
      id: newSession._id
    }});
    this.getShits();
  }
  handleLoginSubmit(newSession) {
    fetch('/sessions', {
      method: "POST",
      body: JSON.stringify(newSession),
      credentials: "include",
      headers: {
        "Accept": "application/json, text/plain, */*",
        "Content-Type": "application/json"
      }
    })
    .then(response => {
      return response.json();
    })
    .then(jsonedSession => {
      if (!jsonedSession.status) {
        this.handleLogin(jsonedSession);
      }
    })
    .catch(error => console.log(error));
    event.preventDefault();
  }
  handleSignOut(event) {
    fetch("/sessions", {
      method: "DELETE",
      headers: {
        "Accept": "application/json, text/plain, */*",
        "Content-Type": "application/json"
      }
    })
    .then(response => {
      this.setState({
        session: {
          username: "",
          password: "",
          id: ""
        },
        text: ""
      })
      return response.json();
    })
    .catch(error => console.log(error));
  }
  handleSignUp(newUser) {
    fetch('/users', {
      method: "POST",
      body: JSON.stringify(newUser),
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
  }
  handleCreateShit(event) {
    console.log("create shit");
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
      console.log(jsonedSession); 
    })
    .catch(error => console.log(error));
    event.preventDefault();
  }
  getShits() {
    console.log("get shits"); 
    fetch('/shits/index/' + this.state.session.username)
    .then(response => {
      console.log(response);
      return response.json();
    })
    .then(jsonedData => {
      this.setState({ shits: jsonedData });
      console.log("json data:", jsonedData);
    })
    .catch(error => console.log(error));
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
            session={this.state.session}
            handleSignOut={this.handleSignOut}
            handleCreateShit={this.handleCreateShit}
            getShits={this.getShits}
            shits={this.state.shits}
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
