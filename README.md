# React App Boilerplate 

Boilerplate for creating React App.

## Stack used
- React v16
- Redux
- React Router
- Firebase
- Jest for testing
- SASS
- Webpack

## Firebase
Firebase is used for storing data, authentincation and testing application.
You have to setup two files in root of the application. One for deveopment and one for testing purposes.
- .env.development  
- .env.test

Both files should have similar structure and contains configuration data for database. Example:

All these configuration elements are provided by Firebase when creating database.

```
FIREBASE_API_KEY=
FIREBASE_AUTH_DOMAIN=
FIREBASE_DATABASE_URL=
FIREBASE_PROJECT_ID=
FIREBASE_STORAGE_BUCKET=
FIREBASE_MESSAGING_SENDER_ID=
```