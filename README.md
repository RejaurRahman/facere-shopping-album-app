# Getting Started with Create React App

Facere Shopping Album - Creating Shopping To Do List App using React.JS

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

[Production URL](https://facere-shopping-album.netlify.app/)

In order to run the project .env needs to be added to the root of the repository with Firebase DB Settings:

```
REACT_APP_API_KEY={API KEY VALUE}
REACT_APP_AUTH_DOMAIN={AUTH DOMAIN VALUE}
REACT_APP_PROJECT_ID={PROJECT ID VALUE}
REACT_APP_STORAGE_BUCKET={STORAGE BUCKET VALUE}
REACT_APP_MESSAGING_SENDER_ID={MESSAGING SENDER ID VALUE}
REACT_APP_APP_ID={APP ID VALUE}
```

## Available Scripts

In the project directory, you can run:

```
yarn start
```

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

```
yarn test
```

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

```
yarn build
```

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

```
yarn eject
```

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Actions the application performs

### Phase 1

- Adding a new item to the shopping list
- Delete an existing item
- Filter through categories
- Filter not visible if no data shown
- Filter dropdown has (show all). You can view all items added to list - set as default
- Complete an item from an existing list
- Counter status on all tasks remaining and if tasks are complete
- Edit existing data from shopping item (title) and (category)

### Phase 2

- Sentry.io integrated so errors are tracked and monitored via the Sentry.io application dashboard
- ESLint, Prettier and Stylelint setup so issues found out before deployment to production
- Store, edit and delete data which is stored in Firebase
