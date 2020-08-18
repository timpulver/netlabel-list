# Netlabel-List

List of netlabels (active and inactive) and their URLs.
Based on [NetlabelList](https://github.com/nsorog/NetlabelList) / [Acts of Silence](http://www.actsofsilence.com/netlabels/) (offline) by [David Nemeth (dpnem)](https://github.com/dpnem).

### Why another netlabel-list?

The *Acts of Silence*-list contains unstructured data, which makes it hard to explore all netlabels that e.g. release *Experimental* music, or that are based in *France*. Filtering is not possible.

For this reason I have converted the original *Acts of Silence*-list to JSON-format, which makes it easy to build upon, filter the results or create data visualisations with.

## Example Netlabel

```
{
  "label_name": "Yarn Audio",
  "activity_state": "active",
  "countries": [
    "Germany"
  ],
  "genres": [
    "Bass Music",
    "House",
    "Techno",
    "Experimental",
    "Ambient",
    "Dark Ambient",
    "Juke"
  ],
  "urls": {
    "bandcamp": "https://yarnaudio.bandcamp.com/",
    "twitter": "https://twitter.com/YarnAudio",
    "rss": "http://yarnaudio.com/feed",
    "internet_archive": "https://archive.org/details/yarnaudio",
    "facebook": "https://www.facebook.com/YarnAudio",
    "soundcloud": "https://soundcloud.com/yarn-audio",
    "homepage": "http://yarnaudio.com"
  }
}
```

## Fields

### Label name
Key: `label_name`  
Type: *String*  
Example: `"Yarn Audio"`  

### Activity state
Key: `activity_state`  
Type: *String*  
Value: Either `"active"` or `"inactive"`  
Example: `"active"`   

### Countries
Key: `countries`  
Type: *Array*  
Example:    
  
```
"countries": [
  "Germany"
],
```
  
In contrast to traditional labels, which are mostly based in a single country, many netlabels are based in multiple countries.  
*Please note:* Even if a label is associated only with *one* country, it must be specified as an Array to be consistent.
 
### Description
Key: `description`  
Type: *String*  
Example: `"Monthly upbeat compilations"`  

### Genres
Key: `genres`  
Type: *Array*  
Example:  
  
```
"genres": [
  "Ambient",
  "Bass Music",
  "Experimental"
]
```

For electronic-subgenres the styles from Discogs are being used – [Electronic Styles](https://reference.discogslabs.com/browse/style).

In addition to that the following styles were added:

- `"8-Bit"`
- `"Lo-Bit"`
- `"Live"`
- `"Warm"`
- `"Melodic"`
- `"Juke"`

Don’t enter `"Multiple Genres"` or something similar. List the individual genres or leave it empty (`"genres": []`).


### URLs
Key: `urls`  
Type: *Object*  
Example:  

```
"urls": {
  "bandcamp": "https://yarnaudio.bandcamp.com/",
  "twitter": "https://twitter.com/YarnAudio",
  "rss": "http://yarnaudio.com/feed",
  "internet_archive": "https://archive.org/details/yarnaudio",
  "facebook": "https://www.facebook.com/YarnAudio",
  "soundcloud": "https://soundcloud.com/yarn-audio",
  "homepage": "http://yarnaudio.com"
}
```

#### URL keys

- `homepage`: Main website of the netlabel, for example `http://yarnaudio.com`
- `rss`: RSS-feed, which people can subscribe to, for example `"http://yarnaudio.com/feed"`
- `bandcamp`: [Bandcamp](http://bandcamp.com/) profile, for example `"https://yarnaudio.bandcamp.com/"`
- `soundcloud`: [Soundcloud](http://soundcloud.com/) profile, for example `"https://soundcloud.com/yarn-audio"`
- `free_music_archive`: [Free Music Archive](http://freemusicarchive.org/) profile, for example `"https://soundcloud.com/yarn-audio"`
- `sonicsquirrel`: [Sonicsquirrel](http://sonicsquirrel.net/) profile, for example `"http://sonicsquirrel.net/detail/label/Yarn_Audio/"`
- `facebook`: [Facebook](https://www.facebook.com/) profile, for example `"https://www.facebook.com/YarnAudio"`
- `twitter` – [Twitter](https://twitter.com/) profile, for example `"https://twitter.com/YarnAudio"`
- `internet_archive` – [archive.org](https://archive.org/) profile, for example `https://archive.org/details/yarnaudio`
- `instagram` - [Instagram](https://instagram.com) profile, for example `"https://instagram.com/blocsonic"`

## Contributions

Contributions are very welcome!  

**Before adding a new netlabel please perform a search first to make sure it is not already in the list.**

### How to make a contribution?

- Open the netlabel list: [netlabels.json](https://github.com/timpulver/netlabel-list/blob/master/netlabels.json)
- Click on the pen icon in the top right ("Edit this file")
- Add / edit / delete stuff
- To make sure your edits did not introduce any JSON syntax errors, copy and paste the complete file-contents into [JSONLint](http://jsonlint.com/). It will check if the file-format is still intact. When everything is okay it should report `Valid JSON`.
- Click the "Commit changes" button below and send a pull request

## Other Sources for Netlabel Information

The following list contains other netlabel-related websites which could be used to extend the list.

### Archive.org

- Get infos in JSON-format about a specific release, for example [archive.org/metadata/yarn014](http://archive.org/metadata/yarn014) returns the information for a release with the identifier `yarn014`
- Netlabel-Overview: [archive.org/details/netlabels?and[]=mediatype%3A%22collection%22](https://archive.org/details/netlabels?and[]=mediatype%3A%22collection%22)
- Archive.org also offers something like an API, which can be accessed here: [archive.org/advancedsearch.php#raw](https://archive.org/advancedsearch.php#raw)

### Sonicsquirrel

- No public API

### Free Music Archive

- Public API available: [freemusicarchive.org/api](https://freemusicarchive.org/api)

### Clongclongmoo

- Netlabel List: [clongclongmoo.org/labels](http://www.clongclongmoo.org/labels/)

## License

[CC-BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/), by [Tim Pulver](https://timpulver.de/), based on [NetlabelList](https://github.com/nsorog/NetlabelList) / [Acts of Silence](http://www.actsofsilence.com/netlabels/) (offline) by [David Nemeth (dpnem)](https://github.com/dpnem) 
