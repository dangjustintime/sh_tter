class UserPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
      shits: [],
      showUsers: false,
      showEditForm: false,
      bio: "",
      profilePic: ""
    }
    this.handleTextChange = this.handleTextChange.bind(this);
    this.handleBioChange = this.handleBioChange.bind(this);
    this.handleProfilePicChange = this.handleProfilePicChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleUsersToggle = this.handleUsersToggle.bind(this);
    this.handleEditToggle = this.handleEditToggle.bind(this);
  }
  handleTextChange(event) {
    this.setState({ text: event.target.value });
  }
  handleBioChange(event) {
    this.setState({ bio: event.target.value });
  }
  handleProfilePicChange(event) {
    this.setState({ profilePic: event.target.value });
  }
  handleSubmit(event) {
    this.props.handleCreateShit(this.state.text);
  }
  handleFormSubmit(event) {
    this.props.handleEditSubmit(this.state.bio, this.state.profilePic);
  }
  handleUsersToggle(event) {
    this.setState({ showUsers: !this.state.showUsers });
  }
  handleEditToggle(event) {
    this.setState({ showEditForm: !this.state.showEditForm });
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
        { !this.state.showEditForm ?
          <button onClick={this.handleEditToggle}>Edit Profile</button> :
          <div>
            <button onClick={this.handleEditToggle}>Close</button>
            <form onSubmit={this.handleFormSubmit}>
              <input
                type="text"
                placeholder="bio"
                value={this.state.bio}
                onChange={this.handleBioChange}
              />
              <input
                type="text"
                placeholder="Profile Pic"
                value={this.state.profilePic}
                onChange={this.handleProfilePicChange}
              />
              <input type="submit" value="Save Changes" />
            </form>
          </div> 
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
            handleAddLike={this.props.handleAddLike}
            handleAddReshit={this.props.handleAddReshit}
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
