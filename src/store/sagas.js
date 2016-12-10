import loginSagas from './../modules/authentication/sagas.js'

export default function *rootSaga () {
  yield [
    loginSagas()
  ]
}
