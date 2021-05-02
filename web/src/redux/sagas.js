import { all } from 'redux-saga/effects'

import repositories from '../containers/Repositories/saga'

export default function* rootSaga() {
  yield all([
    repositories(),
  ])
}