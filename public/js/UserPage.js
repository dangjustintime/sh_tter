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
        <div className="navbar brown">
          { !this.state.showUsers ?
            <h5 className="nav-item" onClick={this.handleUsersToggle}>Explore</h5> :
            <h5 className="nav-item" onClick={this.handleUsersToggle}>News Feed</h5>
          }
          { !this.state.showEditForm ?
            <h5 className="nav-item" onClick={this.handleEditToggle}>Edit Profile</h5> :
            <h5 className="nav-item" onClick={this.handleEditToggle}>Close</h5>
          }
          <button className="nav-item bt btn-danger" onClick={this.props.handleSignOut}>Sign Out</button>
        </div>
        <div className="row">
        <div className="col-4">
          <UserInfo user={this.props.session} />
          { !this.state.showEditForm ?
            null :
            <div className="card">
              <form onSubmit={this.handleFormSubmit} className="card-body">
                <div className="form-group">
                  <label>Edit Profile</label>
                  <input
                    className="form-control"
                    type="text"
                    placeholder="bio"
                    value={this.state.bio}
                    onChange={this.handleBioChange}
                  />
                  <input
                    className="form-control"
                    type="text"
                    placeholder="Profile Pic"
                    value={this.state.profilePic}
                    onChange={this.handleProfilePicChange}
                  />
                  <button type="submit" className="btn btn-primary">Save Changes</button>
                </div>
              </form>
            </div>
          }
          <div className="card">
            <form onSubmit={this.handleSubmit} className="card-body">
              <div className="form-group">
                <label>Post Shi*t</label>
                <input
                  className="form-control"
                  type="text"
                  placeholder="sh*t here"
                  value={this.state.text}
                  onChange={this.handleTextChange}
                />
                <button type="submit" className="btn btn-secondary"><h1>💩</h1></button>
              </div>
            </form>
          </div>
        </div>
        <div className="col-8">
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
        </div>
      </div>
    )
  }
}
