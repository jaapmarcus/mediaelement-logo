# MediaElement-logo

## Overview

This plugin create a new layer and add the logo inside

## Keyword to use it
```javascript
	features: [..., 'logo'],
```

## Usage
```javascript
	features: [..., 'logo'],
	
```


```html
		<script type="text/javascript" src="/path/to/mediaelement-logo.js"></script>		
```

## API

Parameter | Type | Default | Description
------ | --------- | ------- | --------
vastTag | String | `[]` | Valid URL


Due to limitation of the IMA plugin it self only one vasttag can be used. How ever with waterfall you can use multiple vast tags in 1 vsat tag.

## Known Limitations
		
* Mobile browsers have alot of issues playing advertisement with audio due to the video is often played in an newly created div and there is always a delay of 1 to 2 seconds before all sources have been checked. Due to this issue just before loading the advertisement MediaElements get muted and the the advertiment get played as muted. When advertisment is finished the original video will get unmuted again.
* There is current no support for postroll/midroll in the advertisement. Will look into it in the future...
