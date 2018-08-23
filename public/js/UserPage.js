class UserPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: this.props.username,
      text: "",
      shits: []
    }
    this.handleTextChange = this.handleTextChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleTextChange(event) {
    this.setState({ text: event.target.value });
  }
  handleSubmit(event) {
    this.props.handleCreateShit(this.state.text);
  }
  render() {
    return (
      <div>
        <h1>Welcome {(this.props.session.username)}!!</h1>
        <button onClick={this.props.handleSignOut}>Sign Out</button>
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
        <ShitList
          shits={this.props.shits}
          handleDeleteShit={this.props.handleDeleteShit}
        />
      </div>
    )
  }
}
