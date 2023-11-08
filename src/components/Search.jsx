import React from "react";

class Search extends React.Component {
  constructor() {
    super();
    this.state = {
      search: '',
      type: ''
    };
  }

  componentDidMount() {
    this.setState({
      search: '',
      type: 'all'
    })
  }

  setFilter = (e) => {
    console.log(e)
    this.setState(() => ({
      type: e.target.value
    }), () => {
      this.props.handleSearch(this.state.search, this.state.type)
    })
  }

  render() {
    return (
      <>
        <div className="row">
          <div className="input-field">
            <input
              placeholder="search..."
              type="search"
              className="validate"
              value={this.state.search}
              onChange={(e) => this.setState({search: e.target.value})}
            />
            <button type="submit" onClick={() => this.props.handleSearch(this.state.search, this.state.type)}>SEARCH</button>
          </div>
        </div>
        <div className="row">
          <label>
            <input checked={this.props.type === 'all'} type="radio" name="typeMovie" value="all" onChange={this.setFilter} />
            <span>All</span>
          </label>
          <label>
            <input checked={this.props.type === 'movies'} type="radio" name="typeMovie" value="movies" onChange={this.setFilter} />
            <span>Movies</span>
          </label>
          <label>
            <input checked={this.props.type === 'series'} type="radio" name="typeMovie" value="series" onChange={this.setFilter} />
            <span>Series</span>
          </label>
        </div>
      </>

    )
  }
}

export {Search}