class UsersPage extends React.Component {
  render() {
    return (
      <div>
        { this.props.users.map((user) => {
          return(
            <UserCard
              user={user}
              handleAddFollower={this.props.handleAddFollower}
              handleAddFollowing={this.props.handleAddFollowing}
            />
          )
        })}
      </div>
    )
  }
}
