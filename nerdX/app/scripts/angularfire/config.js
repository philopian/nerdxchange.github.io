angular.module('firebase.config', [])
  .constant('FBURL', 'https://nerdx.firebaseio.com')
  .constant('SIMPLE_LOGIN_PROVIDERS', ['github'])

  .constant('loginRedirectPath', '/login');