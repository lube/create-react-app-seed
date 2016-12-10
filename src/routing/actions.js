import { NAVIGATE } from './constants'

export function push (location, params) {
  return {
    type: NAVIGATE,
    location: { pathname: location, search: '', hash: '' },
    action: 'PUSH'
  }
}
