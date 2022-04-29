# Configuration Demo

The structure for sheetCore's config options follows the interface defined for it:

Here's an example snippet:
```js
const sheetCoreConfig:sheetCoreConfigInfo = {
    cacheKey: "AYYO_SHEETCACHE",
    cacheExpiration: 1800
    
}
```

Note: because of the way AppScript works, you can stick this definition anywhere you want! (It's probably a good idea to have a ``config.ts`` file or similar to keep track of this stuff in, though!)