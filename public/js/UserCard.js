class UserCard extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(event) {
    this.props.handleAddFollower(this.props.user);
    this.props.handleAddFollowing(this.props.user);
  }
  render() {
    return(
      <div className="card col-3">
        <div className="card-body">
          <img
            hieght="100px"
            width="100px"
            src={this.props.user.profilePic}
            alt="Profile Pic"
          />
          <h5>{this.props.user.username}</h5>
          <p>{this.props.user.bio}</p>
          <p>Following {this.props.user.following.length} Followers {this.props.user.followers.length}</p>
          <button onClick={this.handleClick}>Follow</button>
        </div>
      </div>
    )
  }
}
