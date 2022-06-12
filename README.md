# Start application

- npm install
- npm run local

# Test
- Postman collection: RssFeedsMonitoring.postman_collection.json

# Core libraries
- Express/Typescript
- rss-parser (Fetching and parsing feed items)
- socket.io (Real-time stream of new feed item)

# API endpoints

Pattern

- POST /patterns - create pattern in runtime and apply it to all feed items from cache
- DELETE /patterns/:name - remove pattern from runtime (will not be applied to new incoming feed items)
- GET /patterns - list current patterns

Source

- POST /sources - create source in runtime and fetch from it in next pull iteration
- DELETE /sources/:name - remove pattern from runtime (will not be used for fetching feed items anymore)
- GET /sources - list current sources

Feed items

- GET /feed-items?pattern=.*Crypto.* - list all feed items from runtime that match this pattern

# Feed items pull mechanism

- In the root file (app.ts) startFeedPull() function is invoked for fetching data in intervals. Interval time is defined in env variable PULL_INTERVAL

# Live news

- On http://localhost:3000 there is small webpage for rendering live news

# Stdout stream

- Whenever mathced item is found it will be printed at ./stdout folder in file (defined as category). For exmaple =>
  Pattern {
    name: "crypto",
    pattern: .*Crypto.*
  }
  If item matches above pattern it will be printed in stdout/crypto.txt
