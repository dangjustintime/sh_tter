class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      session: {
        username: "",
        password: "",
        id: ""
      },
      users: [],
      shits: []
    };
    this.handleLogin = this.handleLogin.bind(this);
    this.handleLoginSubmit = this.handleLoginSubmit.bind(this);
    this.handleEditSubmit = this.handleEditSubmit.bind(this);
    this.handleSignOut = this.handleSignOut.bind(this);
    this.handleSignUp = this.handleSignUp.bind(this);
    this.handleCreateShit = this.handleCreateShit.bind(this); 
    this.handleDeleteShit = this.handleDeleteShit.bind(this); 
    this.handleAddFollower = this.handleAddFollower.bind(this);
    this.handleAddFollowing = this.handleAddFollowing.bind(this);
    this.getShits = this.getShits.bind(this);
    this.getFollowingShits = this.getFollowingShits.bind(this);
    this.getUsers = this.getUsers.bind(this);
  }
  componentDidMount() {
    this.getUsers();
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
  handleEditSubmit(bio, profilePic) {
    const editedUser = {
      bio: bio,
      profilePic: profilePic
    }
    console.log("handleEditSubmit");
    fetch("/users/edit/"+ this.state.session.id, {
      method: "PUT",
      body: JSON.stringify(editedUser),
      headers: {
        "Accept": "application/json, text/plain, */*",
        "Content-Type": "application/json"
      }
    }) 
    .then(response => {
      return response.json();
    })
    .then(JSONData => {
      console.log(JSONData);
    })
    .catch(error => console.log("error"));
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
    fetch("/shits/" + id, {
      method: "DELETE"
    })
    getShits();
  }
  handleAddFollower(user) {
    console.log("add follower");
    fetch("/users/addFollower/" + user._id, {
      method: "PUT",
      body: JSON.stringify({ follower: this.state.session.username}),
      headers: {
        "Content-Type": "application/json"
      }
    })
    .then(response => { return response.json() })
    .then(JSONFollowerData => {
      console.log("added my nuts");
    })
    .catch(error => console.log("error"));
  }
  handleAddFollowing(user) {
    console.log("add following");
    fetch("/users/following/" + this.state.session.id, {
      method: "PUT",
      body: JSON.stringify({ following: user.username}),
      headers: {
        "Content-Type": "application/json"
      }
    })
    .then(response => { return response.json() })
    .then(JSONFollowingData => {
      console.log("added follower and following");
    })
    .catch(error => console.log(error));
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
    const followingAccounts = [];
    const followingShits = [];
    fetch("/users/" + this.state.session.id)
    .then(response => {
      return response.json();
    })
    .then(jsonedData => {
      jsonedData.following.forEach((account) => {
        fetch("/shits/index/" + account)
        .then(response => response.json())
        .then(jsonedShit => {
          jsonedShit.forEach((shit) => followingShits.push(shit));
          const newShits = followingShits.concat(this.state.shits);
          newShits.sort((shit1, shit2) => {
            return Date.parse(shit2.timestamp) - Date.parse(shit1.timestamp);
          })
          this.setState({ shits: newShits });
        });
      });
    })
  }
  getUsers() {
    console.log("get users");
    fetch("/users")
    .then(response => response.json())
    .then(jsonedUsers => {
      this.setState({ users: jsonedUsers });
      console.log("users:", this.state.users);
    })
    .catch(error => console.log(error));
  }
  render() {
    return (
      <div>
        <div>
          <h1>Sh*tter💩</h1>
          <h1>{this.state.session.password}</h1>
        </div>
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
            handleEditSubmit={this.handleEditSubmit}
            handleAddFollower={this.handleAddFollower}
            handleAddFollowing={this.handleAddFollowing}
            getShits={this.getShits}
            shits={this.state.shits}
            users={this.state.users}
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
