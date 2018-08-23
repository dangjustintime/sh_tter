class ShitItem extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(event) {
    this.props.handleDeleteShit(this.props.shit._id);
  }
  render() {
    return(
      <div>
        <h3>{this.props.shit.author}</h3>
        <h4>{this.props.shit.timestamp}</h4>
        <h2>{this.props.shit.text}</h2>
        <p>❤️{this.props.shit.likes.length} 💩{this.props.shit.reshits.length}</p>
        <button onClick={this.handleClick}>Trash</button>
      </div>
    );
  }
}
