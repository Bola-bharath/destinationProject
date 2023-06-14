import {Component} from 'react'

import DestinationItem from './DestinationItem/index'

import './index.css'

class DestinationSearch extends Component {
  state = {
    searchInput: '',
    destinyList: '',
  }

  onChangeSearchInput = event => {
    this.setState({
      searchInput: event.target.value,
    })
  }

  render() {
    const {searchInput, destinyList} = this.state
    const {destinationsList} = this.props
    const searchResults = destinationsList.filter(eachDestiny =>
      eachDestiny.name.includes(searchInput),
    )
    return (
      <div className="destination-container">
        <h1 className="heading">Destinations List</h1>
        <input
          type="search"
          onChange={this.onChangeSearchInput}
          value={searchInput}
        />
        <ul className="destiny-container">
          {searchResults.map(eachDestiny => (
            <DestinationItem
              destinationDetails={eachDestiny}
              key={eachDestiny.id}
            />
          ))}
        </ul>
      </div>
    )
  }
}
export default DestinationSearch
