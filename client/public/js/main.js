class Hello extends React.Component {
  constructor(props) {
    super(props);
    this.state = { msg: "Chao" }
  }
  f1() {
    console.log("f1");
  }
  componentDidMount() {
    var state = this.state;
    state.name = "phap";
    this.setState(state);
  }

  componentWillUnmount() {
    console.log("willmount");
  }

  componentWillUnmount() {
    console.log("will unmount");
  }
  render() {
    return (
      <div>
        <input type="button" value="Click" onClick={this.f1} />
        <h1>Hello { this.state.msg }</h1>
        <h1>Hello { this.state.name }</h1>
      </div>
    );
  }
}
ReactDOM.render(
  <Hello name="phap"/>,
  document.getElementById('app')
);
