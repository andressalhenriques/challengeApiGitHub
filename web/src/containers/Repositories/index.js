import { Button, Input } from 'antd'
import _isEmpty from 'lodash/isEmpty'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import {
  createBookmarksRepositoriesRequest,
  findBookmarksRepositoriesRequest,
  findRepositoriesRequest,
} from './actions'
import ListRepositories from './components/ListRepositories'
import feedbackMessage from '../Feedback/Message'
import '../../styles/repositories.scss'

export class Repositories extends Component {
  constructor(props) {
    super(props)

    this.state = {
      bookmarks: {},
      bookmarksSelected: {},
      search: '',
    }
  }

  componentDidUpdate(prevProps) {
    const {
      createBookmarksRepositoriesRequesting,
      createBookmarksData,
      error,
      findBookmarksRepositoriesRequesting,
      findRepositoriesRequesting,
      success,
    } = this.props.reducer
    const {
      createBookmarksRepositoriesRequesting: prevCreateBookmarksRepositoriesRequesting,
      findBookmarksRepositoriesRequesting: prevFindBookmarksRepositoriesRequesting,
      findRepositoriesRequesting: prevFindRepositoriesRequesting,
    } = prevProps.reducer

    if (prevCreateBookmarksRepositoriesRequesting && !createBookmarksRepositoriesRequesting) {
      if (success) {
        this.setState({ bookmarks: createBookmarksData })
      } else {
        feedbackMessage(error)
      }
    }

    if (prevFindBookmarksRepositoriesRequesting && !findBookmarksRepositoriesRequesting && !success) {
      feedbackMessage(error)
    }


    if (prevFindRepositoriesRequesting && !findRepositoriesRequesting) {
      if (success) {
        this.setState({ search: '' })
      } else {
        feedbackMessage(error)
      }
    }

  }

  createBookmarksRepositories = () => {
    const { bookmarksSelected } = this.state

    this.props.createBookmarksRepositories({ input: bookmarksSelected })
    this.setState({ search: '', bookmarksSelected: {} })
  }

  findBookmarksRepositories = () => {
    const { bookmarks } = this.state

    this.props.findBookmarksRepositories({ input: bookmarks })
  }

  findRepositories = (input) => {
    this.props.findRepositories({ input })
  }

  handleInputChange = (value, type) => {
    this.setState({ [type]: value })
  }

  handleCheckboxClicked = ( name, { checked } ) => {
    const { bookmarksSelected } = this.state

    bookmarksSelected[name] = checked
    this.setState({ ...bookmarksSelected })
  
  }

  render() {
    const { bookmarks, bookmarksSelected, search } = this.state
    const {
      createBookmarksData,
      data,
    } = this.props.reducer
    return (
      <div className="container">
        <div className="form">
            <h2>Repository name</h2>
          <div className="formInput">
            <Input
              key={'search'}
              value={search}
              onChange={(pickedValue) => this.handleInputChange(pickedValue.target.value, 'search')}
            />
          <Button
            disabled={_isEmpty(search)}
            type='primary'
            onClick={() => { this.findRepositories(search)}}
          >
            Search
          </Button>

          <Button
            disabled={_isEmpty(bookmarks)}
            type='primary'
            onClick={() => { this.findBookmarksRepositories()}}
          >
            Search bookmarks repositories
          </Button>
          </div>
        </div>
        <Button
          className='button-add-bookmarks'
          type='primary'
          onClick={() => { this.createBookmarksRepositories()}}
          disabled={_isEmpty(bookmarksSelected)}
        >
          ADD bookmarks
        </Button>    
      <div>
        {!_isEmpty(data || createBookmarksData) && <ListRepositories
        data={data || createBookmarksData}
        bookmarksSelected={bookmarksSelected}
        onChange={this.handleCheckboxClicked}
        /> }
      </div>
      </div>
    )
  }
}


const mapStateToProps = ({ repositories }) => ({ reducer: repositories })

const mapDispatchToProps = {
  createBookmarksRepositories: (payload) => createBookmarksRepositoriesRequest(payload),
  findBookmarksRepositories: (payload) => findBookmarksRepositoriesRequest(payload),
  findRepositories: (payload) => findRepositoriesRequest(payload),
}

export default connect(mapStateToProps, mapDispatchToProps)(Repositories)
