import { FIND_BOOKMARKS_REPOSITORIES_REQUESTING, CREATE_BOOKMARKS_REPOSITORIES_REQUESTING, FIND_REPOSITORIES_REQUESTING } from './constants'

export function findBookmarksRepositoriesRequest(payload) {
  return {
    type: FIND_BOOKMARKS_REPOSITORIES_REQUESTING,
    payload,
  }
}

export function createBookmarksRepositoriesRequest(payload) {
  return {
    type: CREATE_BOOKMARKS_REPOSITORIES_REQUESTING,
    payload,
  }
}

export function findRepositoriesRequest(payload) {
  return {
    type: FIND_REPOSITORIES_REQUESTING,
    payload,
  }
}