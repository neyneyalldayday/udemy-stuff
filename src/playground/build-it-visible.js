//visibilityToggle - render, constructor, handleToggleVisibility
// visibility -> false, 


class Fuck extends React.Component {
    constructor(props) {
        super(props);
        this.handleShowShit = this.handleShowShit.bind(this);
        this.state = {
            visibility: false,
        }
    }

    handleShowShit() {
        this.setState((prevState) => {
            return {
              visibility: !prevState.visibility
            }
            
        })
    }
  render() {
      return (
          <div>
              <h1>can you see the words</h1>
              <button onClick={this.handleShowShit}>
                  show shit
              </button>
              <div>             
                  {this.state.visibility && <p>im right behind you</p>}
              </div>
          </div>
      );
  }  
}

ReactDOM.render(<Fuck />, document.getElementById('app'));






















// let visibility = false;

// const showShit = () => {
// visibility = !visibility;
// visibilityToggle();
// };



// const visibilityToggle = () => {
//     const buildIt = (
//        <div>
//          <h1>can you see the words</h1>  
//          <button onClick={showShit}>
//              {visibility ? 'dont show shit' : 'show shit'}
//          </button>
//          {visibility && (
//          <div>
//              <p>im right behind you</p>
//          </div>)}
        
         
//        </div>
//         );
//         console.log(showShit)
//         ReactDOM.render(buildIt, document.getElementById('app'));
       
// };

// visibilityToggle();