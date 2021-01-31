class IndecisionApp extends  React.Component {
  render() {
    const title = 'Indecision';
    const subtitle = 'put your life in the hands of a computer';
    const options = [{ id:1, option:' thing one '},{id:2 , option:' thing two '}, { id:3, option:' thing three '}];
    return (
      <div>
        <Header title={title} subtitle={subtitle} />
        <Action />
        <Options options={options}/>
        <AddOption />        
      </div>
    )
  }
}



class Header extends  React.Component {
  render() {   
    return (
      <div>
        <h1>{this.props.title}</h1>
        <h2>{this.props.subtitle}</h2>
      </div>
    )
  }
}

class Action extends React.Component {
  render() {
    return (
      <div>
        <button>what should i doo??</button>
      </div>
    )
  }
}


class Options extends React.Component {
  render() {
    
    return (
      <div>        
       {
        this.props.options.map ((option) => <p key={option.id}>{option.option}</p>)
       }      
       <Option />
      </div>
    )
  }
}
class Option extends React.Component {
  render() {
    return (
      <div>
       option thing here
      </div>
    )
  }
}



class AddOption extends React.Component {
  render() {
    return (
      <div>
        <p>add option</p>
        <button>add</button>
      </div>
    )
  }
}


ReactDOM.render(<IndecisionApp />, document.getElementById('app'));