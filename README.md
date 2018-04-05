# Publication Count Scraper 🤓

## Usage
1. Install [`node`](https://nodejs.org) and [`yarn`](https://yarnpkg.com) on your machine
2. Run `yarn install` in the root of this repo, this will install necessary dependencies
3. Run `node scrape`. This will save all data in the file `results.json` 🎉

## Caveats
The [website this data is from](https://app.dimensions.ai/discover/publication?search_text=electric%20field%20AND%20in%20situ%20TEM&search_type=kws&full_search=true) is rendered client-side. Therefore it's a bit more tricky to scrape the online version of it. Right now, you need to copy the relevant portion of the html source to the file `source.html` and surround it with a `<body>`tag. Just look at the files... 🤷‍♂️
