class ShitList extends React.Component {
  render() {
    return(
      <div>
        {this.props.shits.map((shit) => {
          return(
            <ShitItem
              shit={shit}
              handleDeleteShit={this.props.handleDeleteShit}
              handleAddLike={this.props.handleAddLike}
              handleAddReshit={this.props.handleAddReshit}
            />
          );
        })}
      </div>
    )
  }
}
