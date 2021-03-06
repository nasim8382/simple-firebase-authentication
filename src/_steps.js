/* 
* Steps to use firebase
* 1. Create a project on console.firebase.google.com
* 2. npm instal firebase
* 3. Register Web App in Firebase
* 4. Copy firebase init with config from firebase project
* 5. export default app from firebase.init.js 
* 6. import getAuth from firebase/auth and create const auth = getAuth(app) in app.js
* 7. import app firebase init.js into your app .js
* 8. turn on google authentication (firebase > authentication > enable google sign in)
* 9. create google provider
* 10. use signInWithPopUp and pass auth and provider
* 11. handle .then (if successful) and catch error (if error)
*/