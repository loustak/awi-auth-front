# AWI Auth Front
The front end authentication part of the AWI project.

## Setup
You need Node.js (version >= 10) & npm. Once installed simply run `npm install` followed by `npm start` and you should be running.

## Tests
They work using [jest](https://jestjs.io/). Jest allow to make tests using a simple API . To run the tests use `npm test`.

## Docker
For easier deployment and integration with dokku this project use [docker](https://www.docker.com/). The file allowing to build the docker image is the `dockerfile`. The image is based on [LTS node 10](https://hub.docker.com/_/node) from docker hub. To build the image simply run `docker build -t <your username>/awi-auth-front .`, once the image is build use `docker run -p 49160:3000 -d <your username>/awi-auth-front` to run the image. More information on the official node + docker [documentation](https://nodejs.org/en/docs/guides/nodejs-docker-webapp/).

## Style
This project use [standard](https://standardjs.com/). Standard help to improve code readability by standardizing code style. To run standard type `npm run style`. To let standard auto fix the errors type `npm run style-fix`.

## Build
Run `npm run-script build`.

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### Deployment
This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `yarn build` fails to minify
This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
