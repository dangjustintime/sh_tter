class ShitItem extends React.Component {
  render() {
    return(
      <div>
        <h3>{this.props.shit.author}</h3>
        <h4>{this.props.shit.timestamp}</h4>
        <h2>{this.props.shit.text}</h2>
        <p>❤️{this.props.shit.likes.length} 💩{this.props.shit.reshits.length}</p>
      </div>
    );
  }
}
