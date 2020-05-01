# DragonBallStore
Store of Dragon ball SH Figuarts

> This repo use Postress as engine storage
> You can use docker postgress container insted of install it in you machine

### Docker-cli
``` bash
$ docker volume create DragonBallStore
$ docker run \
	--name dragonBallDB \
	-e POSTGRES_PASSWORD='123' \
	--mount src=DragonBallStore=/var/lib/postgresql/data \
	-p 5432:5432 \
	-d postgres
```
> Execute docker as interactive mode
```bash
$ docker run exec -it dragonBallDB psql -U postgres
```

> Create database dragon_ball_store
> Copy .env.example to .env and fill out the fields
## Install

```bash
npm install
```
or

```bash
yarn install
```

## Settings
Copy ___.env.example___ file to ___.env___ file and fill out enviroment variables. Actualy there just 2 scripts to run the proyect

- Front-end (webpack live server - react)
    ```bash
        npm run dev
    ```
    or
    ```bash
        yarn run dev
    ```

- Back-end (nodemon - express)
    ```bash
        npm run dev
    ```
    or
    ```bash
        yarn run dev
    ```
