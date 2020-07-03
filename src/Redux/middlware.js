import { CREATE_POST } from '../Redux/types';
import { showAlert } from './actions';

const forbidden = ['fuck','php','shit']

export function forbiddenWordsMiddleware({dispatch}) {
    return function(next) {
        return function(action) {
            if (action.type === CREATE_POST) {
                const found = forbidden.filter(w=> action.payload.title.includes(w))
                if (found.length) {
                    return dispatch(showAlert('spam!!!!'))
                }
            }
            return next(action)
        }
    }
}