class UserInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: this.props.username,
      bio: "",
      id: this.props.id,
      followers: [],
      following: []
    }
    this.getUser = this.getUser.bind(this);
  }
  componentDidMount() {
    this.getUser();
  }
  getUser() {
    fetch("/users/" + this.props.user.id)
    .then(response => { return response.json()})
    .then(JSONData => {
      console.log("GETUSER", JSONData);
      this.setState({
        bio: JSONData.bio,
        profilePic: JSONData.profilePic,
        followers: JSONData.followers,
        following: JSONData.following
      })
    })
    .catch(error => console.log(error));
  }
  render() {
    return (
      <div className="card">
        <div className="card-body">
          <img
            hieght="180px"
            width="180px"
            src={this.state.profilePic}
            alt="Profile Picture" />
          <h3>{this.props.user.username}</h3>
          <p>{this.state.bio}</p>
          <h6>Following {this.state.following.length}</h6>
          <h6>Followers {this.state.followers.length}</h6>
        </div>
      </div>
    )
  }
}
