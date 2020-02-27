'use strict';

/**
 * Logo plugin for MediaElement.js Video player
 * Add a logo to the player. Position can be done with css .mejs_logo, .mejs_logo_link,  .mejs_logo_link
 * Usage:

 */
 
 

Object.assign(mejs.MepDefaults, {
	logoOptions : {'href' : 'https://example.org', 'src' : 'https://example.org/logo.png', 'height' : 32, 'width' : 32, 'target' : '_blank'},

});

Object.assign(MediaElementPlayer.prototype, {
	
	logoOptions : {},
	
	//callled on init
	
	buildlogo(player,controls, layers, media){
		console.log(player);
		console.log(this.options.logoOptions);
		const t = this;
		var div = document.createElement('div');
		div.id = 'logo-' + player.domNode.id;
		div.className = 'mejs_logo_layer';
		layers.appendChild(div);
		
		//this part can also be done by innerHTML if you want
		var link = document.createElement('a');
		link.href = this.options.logoOptions.href;
		link.target = this.options.logoOptions.target;
		link.className = "mejs_logo_link";
		
		div.appendChild(link);
		var img = document.createElement('img');
		img.className = "mejs_logo_img";
		img.src =  this.options.logoOptions.src;
		if(this.options.logoOptions.width){
			img.width =  this.options.logoOptions.width;		
		}
		if(this.logoOptions.height){
			img.height =  this.options.logoOptions.height;
		}
		link.appendChild(img);
	}
			
});
