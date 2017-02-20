import { CHANGE_AUTH
} from './actions';

export function authenticate(isLoggedIn) {
  return {
    type: CHANGE_AUTH,
    payload: isLoggedIn
  }
}