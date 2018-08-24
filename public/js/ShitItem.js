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
      <div className="card col-9">
        <div className="card-body">
          <h4>{this.props.shit.author}</h4>
          <p className="card-subtitle">{this.props.shit.timestamp}</p>
          <h2>{this.props.shit.text}</h2>
          <h5>
            <span onClick={this.handleLike}>❤️{this.props.shit.likes.length}</span>  
            <span onClick={this.handleReshit}>💩{this.props.shit.reshits.length}</span>
          </h5>
        </div>
      </div>
    );
  }
}

