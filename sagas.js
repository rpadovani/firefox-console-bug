import { delay } from 'redux-saga'
import { call, put, takeEvery } from 'redux-saga/effects'

export function* helloSaga() {
  console.log('Hello Saga!')
}

export function* incrementAsync() {
  let action = {}
  if (action.a.b === true) {console.log('impossible')}


  yield call(delay, 1000)
  yield put({type: 'INCREMENT'})
}

export function* watchIncrementAsync() {
  yield takeEvery('INCREMENT_ASYNC', incrementAsync)
}

// single entry point to start all Sagas at once
export default function* rootSaga() {
  yield [
    helloSaga(),
    watchIncrementAsync()
  ]
}
