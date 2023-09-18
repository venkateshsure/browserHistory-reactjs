import {Component} from 'react'

import './index.css'

import HistoryList from '../HistoryList'

class BrowseHistory extends Component {
  constructor(props) {
    super(props)

    const {initialHistoryList} = props

    this.state = {
      input: '',
      initialHistory: initialHistoryList,
    }
  }

  searchInputHistory = event => {
    console.log(event.target.value)

    this.setState({input: event.target.value})
  }

  deleteHistory = id => {
    const {initialHistory} = this.state
    const unDeleteHistory = initialHistory.filter(each => each.id !== id)
    this.setState({initialHistory: unDeleteHistory})
  }

  render() {
    const {initialHistory} = this.state
    const {input} = this.state
    const filteredSearchHistory = initialHistory.filter(each =>
      each.title.toLowerCase().includes(input.toLowerCase()),
    )

    return (
      <div className="bg-con">
        <div className="cg-con">
          <img
            className="history-img"
            src="https://assets.ccbp.in/frontend/react-js/history-website-logo-img.png"
            alt="app logo"
          />
          <div className="dg-con">
            <img
              className="search-logo"
              src="https://assets.ccbp.in/frontend/react-js/search-img.png"
              alt="search"
            />
            <input
              onChange={this.searchInputHistory}
              className="input-con"
              type="search"
              value={input}
            />
          </div>
        </div>
        {filteredSearchHistory.length !== 0 ? (
          <ul className="ul-con">
            {filteredSearchHistory.map(eachHistory => (
              <HistoryList
                deleteHistory={this.deleteHistory}
                key={eachHistory.id}
                eachHistory={eachHistory}
              />
            ))}
          </ul>
        ) : (
          <p>There is no history to show</p>
        )}
      </div>
    )
  }
}

export default BrowseHistory
