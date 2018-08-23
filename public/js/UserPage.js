class UserPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: this.props.username,
      shits: []
    }
    this.getShits = this.getShits.bind(this); 
  }
  getShits(event) {
  
  }
  render() {
    return (
      <div>
        <h1>Welcome {(this.props.session.id)}!!</h1>
        <button onClick={this.props.handleSignOut}>Sign Out</button>
        <form onSubmit={this.props.handleCreateShit}>
          Create Shi*t
          <input type="text" placeholder="sh*t" id="text"/>
          <input type="submit" value="sh*t" />
        </form>
        <ShitList shits={this.props.shits}/>
      </div>
    )
  }
}
