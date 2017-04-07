# Netlabel-List

List of netlabels (active and inactive) and their URLs.
Based on the list of [Acts of Silence](http://www.actsofsilence.com/netlabels/).

### Why another list?

The *Acts of Silence*-list contains unstructured data, which makes it hard to explore all netlabels which e.g. release *Experimental* music, er which are based in *France* – filtering is not possible.

For this reason I have converted the original *Acts of Silence*-list to JSON-format – which makes it easy to build upon it, filter the results or create data visualisations with the it.

## Example Netlabel

```
{
  "activity_state": "active",
  "genres": "Experimental, Noise, Rock",
  "label_name": "Dontrusttheruin",
  "urls": {
    "rss": "http://dontrusttheruin.blogspot.com/feeds/posts/default?alt=rss",
    "bandcamp": "https://dontrustheruin.bandcamp.com/",
    "homepage": "http://dontrusttheruin.blogspot.com/",
    "free_music_archive": "http://freemusicarchive.org/label/dontrustheruin/"
  },
  "country": "United States"
}
```

## Fields

`"activity_state"`: `"active"` or `"inactive"`   
`"label_name"`: `"Dontrusttheruin"`  
`"country"`: `"United States" `  

### URLs

Use the following keys:  

- "homepage" – e.g. http://fancylabel.com
- "rss" – The RSS-feed, which people can subscribe to e.g. via [Feedly](https://feedly.com)
- "bandcamp" – [Bandcamp](http://bandcamp.com/) profile
- "soundcloud" – [Soundcloud](http://soundcloud.com/) profile
- "free_music_archive" – [Free Music Archive](http://freemusicarchive.org/) profile
- "sonicsquirrel" – [Sonicsquirrel](http://sonicsquirrel.net/) profile
- "facebook" – [Facebook](https://www.facebook.com/) profile
- "twitter" – [Twitter](https://twitter.com/) profile
- "internet_archive" – [archive.org](https://archive.org/) profile

### Genres

Array of genres, e.g. `"genres": ["Experimental", "Noise", "Rock"]`  

## Contribution

**Before adding a netlabel please perform a search first to make sure it’s not already there.**

- Go to ` netlabel-list.json` and click on the pen-icon (`Edit this file`)
- Add / edit / delete stuff
- To make sure there were no errors, paste the complete file-content into [JSONLint](http://jsonlint.com/) – it will check if the file-format is still intact, when everything is okay, it should report `Valid JSON`
- Send a pull request

## Other Sources for Netlabel Information

The following are other netlabel-related websites which could be used to extend the list.

### Archive.org

- Get infos in JSON-format about a specific release via `http://archive.org/metadata/yarn014`
- Netlabel-Overview: [archive.org/details/netlabels?and[]=mediatype%3A%22collection%22](https://archive.org/details/netlabels?and[]=mediatype%3A%22collection%22)
- They also have something like an API, which can be accessed here: [archive.org/advancedsearch.php#raw](https://archive.org/advancedsearch.php#raw)

### Sonicsquirrel

- No public API

### Free Music Archive

- Public API available: [freemusicarchive.org/api](https://freemusicarchive.org/api)

### Clongclongmoo

- Netlabel List: [clongclongmoo.org/labels](http://www.clongclongmoo.org/labels/)

## License

[CC-BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/), [original list](https://github.com/dpnem/NetlabelList) by [dpnem](https://github.com/dpnem)

