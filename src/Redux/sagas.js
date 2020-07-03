import { takeEvery, put, call } from 'redux-saga/effects';
import { REQUEST_POSTS, FETCHED_POST } from './types';
import { showLoader, hideLoader, showAlert } from './actions';

export function* sagaWatcer() {
   yield takeEvery(REQUEST_POSTS,sagaWorker)
}

function* sagaWorker() {
    try {
        yield put(showLoader())
        const payload = yield call(fetchedPosts)
        yield put({type:FETCHED_POST,payload})
        yield put(hideLoader())
    } catch (error) {
       yield put(showAlert('something wrong'))
       yield put(hideLoader())
    }
}

async function fetchedPosts() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=5')
    return await response.json()
}