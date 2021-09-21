import { put, takeEvery, all , call} from "redux-saga/effects";

//promise resolved after 1000 mills
export const delay = (ms) => new Promise(res => setTimeout(res, ms));

export function* incrementAsync(){
    yield call(delay, 1000)
    yield put({ type: 'INCREMENT' })
}

function* watchIncrementAsync(){
    yield takeEvery('INCREMENT_ASYNC', incrementAsync)
}

function* helloSaga(){
    console.log('Hello Saga!');
}

export default function* rootSaga(){
    yield all([
        helloSaga(),
        watchIncrementAsync()
    ])
}
