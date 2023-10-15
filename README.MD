# Monitor App

repo: https://github.com/dardale11/sensi-ai

to start `git clone https://github.com/dardale11/sensi-ai.git`

the app uses `socket.io` for communcation, as the server broadcasts values simulating heart rates and client render them pn a dynamic graph, when pulse is above some level an alert is displayed.

## client

- client was created with `create-react-app`

usage:

- `cd client`
- `npm i`
- define `REACT_APP_SERVER_URL: http://localhost:8000` in enviroment
- `npm start`

## server

- server was created using `express `

usage:

- `cd server`
- `npm i`
- define `PORT = 8000` in enviroment
- `node server.ts`
