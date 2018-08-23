class ShitList extends React.Component {
  render() {
    return(
      <div>
        {this.props.shits.map((shit) => {
          return(<ShitItem shit={shit} />);
        })}
      </div>
    )
  }
}
