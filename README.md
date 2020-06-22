# DragonBallStore
Store of Dragon ball SH Figuarts

> This repo use Postgres as engine storage

You should must setting up some enviroment variables just copy __.env.example__ to __.env__ file.
You want to run the proyect with out docker, you should copy __.env.example__ to __Server/.env__ & __Client/.env__ though.

> You can use docker postgress container insted of install it in you machine

### Docker-cli
``` bash
$ docker-compose up --build -d
```

## Install
There are a pair of folder *Client* and *Server*. Move to client and server to run the proyect.
```bash
  $ cd Client && npm install
  $ cd Server && npm install
```
or
```bash
  $ cd Client && yarn
  $ cd Server && yarn
```
