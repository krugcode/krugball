To install dependencies:

```sh
bun install
```

To run:

```sh
bun run dev
```

open http://localhost:3000

## Goals

- get this thing to spin up a sqlite db
- get info into and out of a sqlite db

## strategy

- it needs to be told when to spin up a match right
- middleware auth, post call with initial match state (probably a chunky boy)
- store anything like model types in static files/env to keep it stateless
- probably need to store and parse markdown for the LLMs or something? not sure again
