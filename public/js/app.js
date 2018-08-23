class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      session: {
        username: "",
        password: "",
        id: ""
      },
      shits: []
    };
    this.handleLogin = this.handleLogin.bind(this);
    this.handleLoginSubmit = this.handleLoginSubmit.bind(this);
    this.handleSignOut = this.handleSignOut.bind(this);
    this.handleSignUp = this.handleSignUp.bind(this);
    this.handleCreateShit = this.handleCreateShit.bind(this); 
    this.handleDeleteShit = this.handleDeleteShit.bind(this); 
    this.getShits = this.getShits.bind(this);
    this.getFollowingShits = this.getFollowingShits.bind(this);
  }
  handleLogin(newSession) {
    this.setState({ session: {
      username: newSession.username,
      password: newSession.password,
      id: newSession._id
    }});
    this.getShits();
    this.getFollowingShits();
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
  handleCreateShit(text) {
    const newShit = {
      text: text,
      author: this.state.session.username,
      timestamp: Date(Date.now()),
      likes: [],
      reshits: []
    };
    fetch('/shits', {
      method: "Post",
      body: JSON.stringify(newShit),
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
    getShits();
  }
  handleDeleteShit(id) {
    console.log("delete shit");
    fetch("/shits/" + id, {
      method: "DELETE"
    })
    getShits();
  }
  getShits() {
    fetch('/shits/index/' + this.state.session.username)
    .then(response => {
      return response.json();
    })
    .then(jsonedData => {
      this.setState({ shits: jsonedData });
    })
    .catch(error => console.log(error));
  }
  getFollowingShits() {
    console.log("getting following shits");
    const followingAccounts = [];
    const followingShits = [];
    fetch("/users/" + this.state.session.id)
    .then(response => {
      console.log("user response: ", response);
      return response.json();
    })
    .then(jsonedData => {
      jsonedData.following.forEach((account) => {
        console.log("account:", account); 
        fetch("/shits/index/" + account)
        .then(response => response.json())
        .then(jsonedShit => {
          jsonedShit.forEach((shit) => followingShits.push(shit));
          console.log(followingShits);
          this.setState({ shits: followingShits.concat(this.state.shits) });
        });
      });
    })
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
            handleDeleteShit={this.handleDeleteShit}
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
