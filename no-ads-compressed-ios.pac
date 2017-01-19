var noadsver = "$Id: no-ads.pac,v 6.1 2016/10/15 01:01:23 loverso Exp loverso $";

var normal = "DIRECT";

var blackhole = "PROXY 0.0.0.0:3421";


var localproxy = normal;

var socksproxy = normal;

var bypass = normal;

var re_banner  = /[/]([^/]*?)(advert|adimage|adframe|adserv|admentor|adview|viewad|banner|popunder|media\/subtract)s?/i;

var re_banner_white = /(load|feature=banner|upload_popup|popupplayer|popupmenu\.css|loginpopup|bannerbomb|popup\.lala\.com\/|css)/i;

var re_banner2 = /[/](?!no-ads)([^/]*?([^0-9/][^-/]))?(\b|[_])(ad[s]?)(\b|[_0-9])/i;

var re_adhost = /\b((new)?ad(?!(venture|vantage|am|mission|visor|alur|iumx|ult|vizia|obe|min|sl|d|olly|vance))|ads\b|adserv|pop(?!ular|corn|e)|click(?!redblue|andbuy|.reference)|cash(?!back)|banner|bans)/i;

var re_crud = /www\.\w+\.com\/image-\d+-\d+$/;

var re_whitelist_domains = /(^|\.)(adorama\.com|adafruit\..*|advogato\.org|adirondack\..*|kintera\.org|sprintpcs\.com|adp\.com|lego\.com|dell\.com|mozdev\.org|mozilla\.org|fidelity\.com|tirerack\.com|titantv\.com|lala\.com|sprint\.com|nextel\.com|verizon\.com|vupload\.facebook\.com|rit\.edu|mididb\.com|sony\.tv|market\.android\.com|weeklyad\.staples\.com|(code|plus|www|mail|apis|drive|docs)\.google\.com|googleadservices\.com|gmail\.com|gstatic\.com|thetvdb\.com|bits\te.wikimedia\.org|css\.slickdealscdn\.com|newegg\.com|androiddrawer\.com|addons\.cdn\.mozilla\.net|wsj\.com|massdrop\.com|cloudfront\.net|ad.*\.rackcdn\.com|bankofamerica\.com\|office\.com|smarttiles\.click|solaredge\.com|smartthings\.com)$/i;

var isActive = 1;

function FindProxyForURL(url, host)
{

    if (shExpMatch(host, "no-ads.int")) {
        if (shExpMatch(url, "*/on*")) {
	    isActive = 1;
	} else if (shExpMatch(url, "*/off*")) {
	    isActive = 0;
	} else if (shExpMatch(url, "*no-ads.int/")) {
	    alert("no-ads is "+(isActive ? "enabled" : "disabled")+".\n" + url);
	} else {
	    alert("no-ads unknown option.\n" + url);
	}

	return blackhole;
    }

    if (!isActive) {
	return bypass;
