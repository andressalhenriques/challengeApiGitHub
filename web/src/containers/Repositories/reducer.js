import {
  FIND_BOOKMARKS_REPOSITORIES_REQUESTING,
  FIND_BOOKMARKS_REPOSITORIES__ERROR,
  FIND_BOOKMARKS_REPOSITORIES__SUCCESS,
  CREATE_BOOKMARKS_REPOSITORIES_REQUESTING,
  CREATE_BOOKMARKS_REPOSITORIES__ERROR,
  CREATE_BOOKMARKS_REPOSITORIES__SUCCESS,
  FIND_REPOSITORIES_REQUESTING,
  FIND_REPOSITORIES_SUCCESS,
  FIND_REPOSITORIES_ERROR,
} from './constants'

const initState = {
    findBookmarksRepositoriesRequesting: false,
    createBookmarksRepositoriesRequesting: false,
    findRepositoriesRequesting: false,
    success: false,
    error: '',
    data: {},
    createBookmarksData: {},
}

export default function reducer(state = initState, action) {
  const { type, payload } = action
  switch (type) {
    case FIND_BOOKMARKS_REPOSITORIES_REQUESTING:
      return {
      ...state,
      findBookmarksRepositoriesRequesting: true,
      success: false,
      error: '',
      data: {},
      }
    case FIND_BOOKMARKS_REPOSITORIES__SUCCESS:
        return {
        ...state,
        findBookmarksRepositoriesRequesting: false,
        success: true,
        error: '',
        data: payload,
        }
    case FIND_BOOKMARKS_REPOSITORIES__ERROR:
        return {
        ...state,
        findBookmarksRepositoriesRequesting: false,
        success: false,
        error: payload.error,
        }

    case CREATE_BOOKMARKS_REPOSITORIES_REQUESTING:
      return {
      ...state,
      createBookmarksRepositoriesRequesting: true,
      success: false,
      error: '',
      createBookmarksData: {},
        }
    case CREATE_BOOKMARKS_REPOSITORIES__SUCCESS:
        return {
        ...state,
        createBookmarksRepositoriesRequesting: false,
        success: true,
        error: '',
        createBookmarksData: payload,
        }
    case CREATE_BOOKMARKS_REPOSITORIES__ERROR:
        return {
        ...state,
        createBookmarksRepositoriesRequesting: false,
        success: false,
        error: payload.error,
        }

    case FIND_REPOSITORIES_REQUESTING:
        return {
        ...state,
        findRepositoriesRequesting: true,
        success: false,
        error: '',
        data: {},
        }
    case FIND_REPOSITORIES_SUCCESS:
        return {
        ...state,
        findRepositoriesRequesting: false,
        success: true,
        error: '',
        data: payload,
        }
    case FIND_REPOSITORIES_ERROR:
        return {
        ...state,
        findRepositoriesRequesting: false,
        success: false,
        error: payload.error,
        }
    default:
    return state
  }
}