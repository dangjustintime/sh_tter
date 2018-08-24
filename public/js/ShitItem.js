class ShitItem extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.handleLike = this.handleLike.bind(this);
    this.handleReshit = this.handleReshit.bind(this);
  }
  handleClick(event) {
    this.props.handleDeleteShit(this.props.shit._id);
  }
  handleLike(event) {
    this.props.handleAddLike(this.props.shit._id);
  }
  handleReshit(event) {
    this.props.handleAddReshit(this.props.shit._id);
  }
  render() {
    return(
      <div>
        <h3>{this.props.shit.author}</h3>
        <h4>{this.props.shit.timestamp}</h4>
        <h2>{this.props.shit.text}</h2>
        <p>
          <span onClick={this.handleLike}>❤️{this.props.shit.likes.length}</span> 
          <span onClick={this.handleReshit}>💩{this.props.shit.reshits.length}</span>
        </p>
        <button onClick={this.handleClick}>Trash</button>
      </div>
    );
  }
}

