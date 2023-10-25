<p align="center">
  <a href="https://www.wlchurch.org.tw/" target="blank">
    <img 
      src="https://www.wlchurch.org.tw/mw/cufiles/images/web/logo.webp" 
      width="200" 
      alt="Wanlong church logo" 
    />
  </a>
</p>

<p align="center">
  An open-source Line bot project by JD Developers.
</p>

  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description
A nest.js backend service for a Line bot.

## Installation

```bash
$ npm install
$ cp .env.template .env
$ # open .env and put your messaging api token
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## API Documentation

The API is documented and accessible via Swagger UI. Open `localhost:3000/api` in your browser to explore the API endpoints and parameters.

API Endpoint Summary
- `POST /api/webhook`: Processes incoming messages from Line.
- Additional endpoints (if applicable)

## Architectural Diagram

### Production

```mermaid
flowchart LR
    A[User Device] --> B["Line Bot Controller (hosted on Line's server)"]
    B --> |POST /api/webhook| C["Line Bot (hosted on GKE)"]
    C --> |POST replay message| B
    B --> A
```

### Local Development

```mermaid
flowchart LR
    A[User Message] --> B["Line Bot Controller"]
    B --> |POST| C[Ngrok Server]
    C --> |forward| N["Ngrok client (running on your laptop)"]
    N --> |forward| D["Line Bot (hosted on your laptop)"]
    D --> |POST replay message| B
    B --> A
```
