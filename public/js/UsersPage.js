class UsersPage extends React.Component {
  render() {
    return (
      <div id="userCardsContainer">
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
