class UserPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: this.props.username,
      text: "",
      shits: [],
      showUsers: false
    }
    this.handleTextChange = this.handleTextChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleUsersToggle = this.handleUsersToggle.bind(this);
  }
  handleTextChange(event) {
    this.setState({ text: event.target.value });
  }
  handleSubmit(event) {
    this.props.handleCreateShit(this.state.text);
  }
  handleUsersToggle(event) {
    this.setState({ showUsers: !this.state.showUsers });
  }
  render() {
    return (
      <div>
        <h1>Welcome {(this.props.session.username)}!!</h1>
        <button onClick={this.props.handleSignOut}>Sign Out</button>
        { !this.state.showUsers ?
          <button onClick={this.handleUsersToggle}>Explore</button> :
          <button onClick={this.handleUsersToggle}>News Feed</button>
        }
        <form onSubmit={this.handleSubmit}>
          Create Shi*t
          <input
            type="text"
            placeholder="sh*t"
            value={this.state.text}
            onChange={this.handleTextChange}
          />
          <input type="submit" value="sh*t" />
        </form>
        { !this.state.showUsers ?
          <ShitList
            shits={this.props.shits}
            handleDeleteShit={this.props.handleDeleteShit}
          /> :
          <UsersPage
            users={this.props.users}
            handleAddFollower={this.props.handleAddFollower}
            handleAddFollowing={this.props.handleAddFollowing}
          />
        }
      </div>
    )
  }
}
