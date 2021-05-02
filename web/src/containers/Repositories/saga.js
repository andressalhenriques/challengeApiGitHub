import {
  all,
  call,
  put,
  takeLatest,
} from 'redux-saga/effects'

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


function* findBookmarksRepositoriesFlow({ payload }) {
  try {
    const response = yield call(findBookmarksRepositoriesApi, payload)
    yield put({ type: FIND_BOOKMARKS_REPOSITORIES__SUCCESS, payload: response })
  } catch (error) {
    yield put({ type: FIND_BOOKMARKS_REPOSITORIES__ERROR, payload: error })
  }
}

async function findBookmarksRepositoriesApi({ input }) {
  const response = await fetch(`http://localhost:3001/bookmarksRepositories` , {
    method: "POST",
    headers: {
      'Accept': 'application/json',
      'Content-type': 'application/json',
    },
    body: JSON.stringify({input})
  })
  .then(response => response.json())
  return response
}


function* createBookmarksRepositoriesFlow({ payload }) {
  try {
    const response = yield call(createBookmarksRepositoriesApi, payload)
    yield put({ type: CREATE_BOOKMARKS_REPOSITORIES__SUCCESS, payload: response })
  } catch (error) {
    yield put({ type: CREATE_BOOKMARKS_REPOSITORIES__ERROR, payload: error })
  }
}

async function createBookmarksRepositoriesApi({ input }) {
  const response = await fetch(`http://localhost:3001/createBookmarksRepositories` , {
    method: "POST",
    headers: {
      'Accept': 'application/json',
      'Content-type': 'application/json',
    },
    body: JSON.stringify({input})
  })
  .then(response => response.json())
  return response
}

function* findRepositoriesFlow({ payload }) {
  try {
    const response = yield call(findRepositoriesApi, payload)
    yield put({ type: FIND_REPOSITORIES_SUCCESS, payload: response })
  } catch (error) {
    yield put({ type: FIND_REPOSITORIES_ERROR, payload: error })
  }
}

async function findRepositoriesApi({ input }) {
  const response = await fetch(`http://localhost:3001/repositories` , {
    method: "POST",
    headers: {
      'Accept': 'application/json',
      'Content-type': 'application/json',
    },
    body: JSON.stringify({input})
  })
  .then(response => response.json())
  return response
}



export default function* rootSaga() {
  yield all([
    takeLatest(FIND_BOOKMARKS_REPOSITORIES_REQUESTING, findBookmarksRepositoriesFlow),
    takeLatest(CREATE_BOOKMARKS_REPOSITORIES_REQUESTING, createBookmarksRepositoriesFlow),
    takeLatest(FIND_REPOSITORIES_REQUESTING, findRepositoriesFlow),
  ])
}