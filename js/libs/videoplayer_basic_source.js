/*
	krpano Basic/Simplified HTML5 Videoplayer Plugin
	- for krpano 1.19
*/
var krpanoplugin = function()
{
	var local = this;
	
	var krpano = null;
	var device = null;
	var plugin = null;
	
	var video  = null;


	local.registerplugin = function(krpanointerface, pluginpath, pluginobject)
	{
		krpano = krpanointerface;
		device = krpano.device;
		plugin = pluginobject;
		
		
		// version check
		if (krpano.version < "1.19" || krpano.build < "2015-03-01")
		{
			krpano.trace(3,"basic videoplayer plugin - too old krpano version (min. 1.19)");
			return;
		}
		
		
		// register attributes
		plugin.registerattribute("videourl",     null);
		plugin.registerattribute("onvideoready", null);
		
		// actions
		plugin.registerattribute("play",        interface_play);
		plugin.registerattribute("pause",       interface_pause);
		plugin.registerattribute("togglepause", interface_togglepause);
		
		// add state variables
		plugin.videowidth    = 0;
		plugin.videoheight   = 0;
		plugin.havevideosize = false;
		plugin.isvideoready  = false;
		
		
		// create the HTML5 video object
		video = document.createElement("video");
		video.style.width  = "100%";	// => automatic scale with the parent element
		video.style.height = "100%";
		
		// events for getting the video size
		video.addEventListener("loadeddata",     check_ready_state, false);
		video.addEventListener("loadedmetadata", check_ready_state, false);
		
		// start playing the video
		video.loop     = "loop";
		video.preload  = "auto";
		video.autoplay = "autoplay";
		video.src      = krpano.parsepath( plugin.videourl );

		
		// internal: provide access to the video object for usage as WebGL texture
		plugin.videoDOM = video;
		
		
		// add to the DOM (when using as <layer>)
		if (plugin.sprite)
			plugin.sprite.appendChild(video);
		
		
		// trace some debug info to the log
		krpano.debugmode = true;	// show debug/trace(0) messages
		krpano.trace(0, "basic videoplayer plugin - video.src="+video.src);
		
		
		if (device.mobile || device.tablet)
		{
			// show touch-required warning
			krpano.trace(2, "on mobile devices a touch is required to start playing the video!");
			krpano.call("showlog()");
			
			document.body.addEventListener("touchstart", play_via_touch_workaround, true);
			document.body.addEventListener("touchend",   play_via_touch_workaround, true);	// iOS 9 allows playing only on touchend
		}
	}


	local.unloadplugin = function()
	{
		if (video)
		{
			// just pause the video (because real unloading is not possible)
			video.pause();
			
			// remove listeners
			video.removeEventListener("loadeddata",     check_ready_state, false);
			video.removeEventListener("loadedmetadata", check_ready_state, false);
			
			// set the video source to undefined to force unloading (this can cause a warning, but helps against memory leaks from the browsers)
			try { video.src=undefined; } catch(e) {};
			
			// remove from the DOM
			if (plugin.sprite)
				plugin.sprite.removeChild(video);
		}
		
		// remove the touch workaround listeners (in case of removing the plugin before the touch)
		document.body.removeEventListener("touchstart", play_via_touch_workaround, true);
		document.body.removeEventListener("touchend",   play_via_touch_workaround, true);
		
		// remove videoplayer attributes
		delete plugin.videourl;
		delete plugin.onvideoready;
		delete plugin.play;
		delete plugin.pause;
		delete plugin.togglepause;
		delete plugin.videowidth;
		delete plugin.videoheight;
		delete plugin.havevideosize;
		delete plugin.isvideoready;
		delete plugin.videoDOM;
		
		video  = null;
		plugin = null;
		device = null;
		krpano = null;
	}


	function play_via_touch_workaround(event)
	{
		if (video)
		{
			// try playing
			video.play();
			
			// check if successful
			if (video.paused == false)
			{
				document.body.removeEventListener("touchstart", play_via_touch_workaround, true);
				document.body.removeEventListener("touchend",   play_via_touch_workaround, true);
			}
		}
	}


	function check_ready_state()
	{
		if (plugin && plugin.havevideosize == false && video.videoWidth > 0 && video.videoHeight > 0)
		{
			// got a valid size
			
			// register the size in krpano
			plugin.registercontentsize(video.videoWidth, video.videoHeight);
			
			// save size and state (required internally in krpano)
			plugin.videowidth    = video.videoWidth;
			plugin.videoheight   = video.videoHeight;
			plugin.havevideosize = true;
			plugin.isvideoready  = true;
			
			// internal: 'ready CallBack' for video panos
			if (plugin.onvideoreadyCB)
				plugin.onvideoreadyCB();
			
			// xml event callback
			krpano.call(plugin.onvideoready, plugin);
		}
	}


	function interface_play()
	{
		video.play();
	}


	function interface_pause()
	{
		video.pause();
	}
	
	
	function interface_togglepause()
	{
		if (video.paused == false)
		{
			video.pause();
		}
		else
		{
			video.play();
		}
	}
}
