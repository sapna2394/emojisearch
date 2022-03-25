import './App.css';
import React ,{Component} from 'react';
import Emoji from './Emoji.json'

class App extends Component {
  constructor() {
    super();
    this.state = {
      searchData: " ",
    }
  }
  search = (event) => {
    this.setState({
      searchData: event.target.value
    })
  }
  render() {
    return (
      <div>
        <h1 className='heading'>Emoji Search</h1>
        <input type="text"className="inputText" onChange={this.search} placeholder="search" />
        {Emoji.filter((data)=>{
          return(data.symbol.toLowerCase().includes(this.state.searchData.toLowerCase())
          ||data.keywords.toLowerCase().includes(this.state.searchData.toLowerCase())
          ||data.title.toLowerCase().includes(this.state.searchData.toLowerCase()))
        })
        .map(data=>{
          return(
            <ul className='pic'>
              <div key={data.symbol}>
              {data.symbol}
              {data.title}
            </div>
            </ul>
            
          )
        })}

      </div>
    )}
}
export default App;


