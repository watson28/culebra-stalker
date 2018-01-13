# culebra-stalker (work in progress)
Web application to follow up the money you have borrow to friends, family or coworkers.

## Technologies involved
* Reactjs
* Redux
* es6
* webpack
* Nodejs
* express
* mongoose
* Docker

# Getting Started

## requirements
Docker and Docker Compose installed on your system.

## installation
go into folder project and run

```bash
docker-compose build
docker-compose run --rm web_api yarn install
```

## Running applications
```
docker-compose up
```

execute npm script on running container
```
docker-compose exec web_api yarn run [my-yarn-command]
```
