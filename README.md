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
