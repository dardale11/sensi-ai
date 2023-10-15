# Monitor App

repo: https://github.com/dardale11/sensi-ai

to start `git clone https://github.com/dardale11/sensi-ai.git`

the app uses `socket.io` for communcation, as the server broadcasts values simulating heart rates and client render them pn a dynamic graph, when pulse is above some level an alert is displayed.

## client

- client was created with `create-react-app`

usage:

- `cd client`
- `npm i`
- `npm start`

## server

- server was created using `express `

usage:

- `cd server`
- `npm i`
- `node server.ts`
