var noadsver = "$Id: no-ads.pac,v 6.1 2016/10/15 01:01:23 loverso Exp loverso $";

var normal = "DIRECT";

var blackhole = "PROXY 255.255.255.0:3421";
if (typeof(navigator) != "undefined"
	&& navigator.appVersion.indexOf("Mac") != -1) {
    blackhole = "PROXY 0.0.0.0:3421";
}


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
    }

    url = url.toLowerCase();
    host = host.toLowerCase();

    if (0
    ) {
	return localproxy;
    }

    if (0
    ) {
	return socksproxy;
    }

    if (0


	|| re_whitelist_domains.test(host)

	|| shExpMatch(url, "*.apple.com/switch/ads/*")


	|| (host == "adf.ly"
	    && shExpMatch(url, "*/http:/*"))
	|| (host == "cdn.adf.ly"
	    && shExpMatch(url, "*js"))

	|| (host == "images.rottentomatoescdn.com"
	    && shExpMatch(url, "*/scripts?"))

	|| ((   _dnsDomainIs(host, "wunderground.com")
	     || _dnsDomainIs(host, "wund.com")
	    )
	    && (   shExpMatch(url, "*/cgi-bin/banner/ban/wxbanner*")
		|| shExpMatch(url, "*/weathersticker/*")
		|| shExpMatch(url, "*/cgi-bin/satbanner*")
	    )
	   )
    ) {
	return normal;
    }


    if (0

	|| shExpMatch(url, "*/favicon.*")
	|| shExpMatch(url, "*/animated_favicon*")


	|| (re_banner.test(url) && !re_banner_white.test(url))

	|| re_banner2.test(url)

	|| re_adhost.test(host)

	

	|| _dnsDomainIs(host, "doubleclick.com")
        || _dnsDomainIs(host, "doubleclick.net")
        || _dnsDomainIs(host, "rpts.net")
	|| _dnsDomainIs(host, "2mdn.net")
	|| _dnsDomainIs(host, "2mdn.com")

	|| _dnsDomainIs(host, "chartbeat.net")
	|| _dnsDomainIs(host, "chitika.net")

	|| _dnsDomainIs(host, "globaltrack.com")
	|| _dnsDomainIs(host, "burstnet.com")
	|| _dnsDomainIs(host, "adbureau.net")
	|| _dnsDomainIs(host, "targetnet.com")
	|| _dnsDomainIs(host, "humanclick.com")
	|| _dnsDomainIs(host, "linkexchange.com")

	|| _dnsDomainIs(host, "fastclick.com")
	|| _dnsDomainIs(host, "fastclick.net")

	|| shExpMatch(host, "205.180.85.*")

	|| _dnsDomainIs(host, "admonitor.com")
	|| _dnsDomainIs(host, "focalink.com")

	|| _dnsDomainIs(host, "websponsors.com")
	|| _dnsDomainIs(host, "advertising.com")
	|| _dnsDomainIs(host, "cybereps.com")
	|| _dnsDomainIs(host, "postmasterdirect.com")
	|| _dnsDomainIs(host, "mediaplex.com")
	|| _dnsDomainIs(host, "adtegrity.com")
	|| _dnsDomainIs(host, "bannerbank.ru")
	|| _dnsDomainIs(host, "bannerspace.com")
	|| _dnsDomainIs(host, "theadstop.com")
	|| _dnsDomainIs(host, "l90.com")
	|| _dnsDomainIs(host, "webconnect.net")
	|| _dnsDomainIs(host, "avenuea.com")
	|| _dnsDomainIs(host, "flycast.com")
	|| _dnsDomainIs(host, "engage.com")
	|| _dnsDomainIs(host, "imgis.com")
	|| _dnsDomainIs(host, "datais.com")
	|| _dnsDomainIs(host, "link4ads.com")
	|| _dnsDomainIs(host, "247media.com")
	|| _dnsDomainIs(host, "hightrafficads.com")
	|| _dnsDomainIs(host, "tribalfusion.com")
	|| _dnsDomainIs(host, "rightserve.net")
	|| _dnsDomainIs(host, "admaximize.com")
	|| _dnsDomainIs(host, "valueclick.com")
	|| _dnsDomainIs(host, "adlibris.se")
	|| _dnsDomainIs(host, "vibrantmedia.com")
	|| _dnsDomainIs(host, "coremetrics.com")
	|| _dnsDomainIs(host, "vx2.cc")
	|| _dnsDomainIs(host, "webpower.com")
	|| _dnsDomainIs(host, "everyone.net")
	|| _dnsDomainIs(host, "zedo.com")
	|| _dnsDomainIs(host, "bigbangmedia.com")
	|| _dnsDomainIs(host, "ad-annex.com")
	|| _dnsDomainIs(host, "iwdirect.com")
	|| _dnsDomainIs(host, "adlink.de")
	|| _dnsDomainIs(host, "bidclix.net")
	|| _dnsDomainIs(host, "webclients.net")
	|| _dnsDomainIs(host, "linkcounter.com")
	|| _dnsDomainIs(host, "sitetracker.com")
	|| _dnsDomainIs(host, "adtrix.com")
	|| _dnsDomainIs(host, "netshelter.net")
	|| _dnsDomainIs(host, "rn11.com")
	|| _dnsDomainIs(host, "ru4.com")
	|| _dnsDomainIs(host, "rightmedia.net")
	|| _dnsDomainIs(host, "casalemedia.com")
	|| _dnsDomainIs(host, "casalemedia.com")
	|| _dnsDomainIs(host, "quantserve.com")
	|| _dnsDomainIs(host, "quantcast.com")
	|| _dnsDomainIs(host, "crwdcntrl.net")
	|| _dnsDomainIs(host, "scorecardresearch.net")
	|| _dnsDomainIs(host, "pubmatic.net")
	|| _dnsDomainIs(host, "yumenetworks.com")
	|| _dnsDomainIs(host, "brilig.com")

	|| _dnsDomainIs(host, "perfb.com")
	|| _dnsDomainIs(host, "blogads.com")

	|| _dnsDomainIs(host, "fetchback.com")
	|| _dnsDomainIs(host, "creatives.badongo.com")
	|| _dnsDomainIs(host, "pmsrvr.com")
	|| _dnsDomainIs(host, "trafficmack.com")


	|| _dnsDomainIs(host, "commission-junction.com")
	|| _dnsDomainIs(host, "qkimg.net")

	|| _dnsDomainIs(host, "bluestreak.com")

	|| _dnsDomainIs(host, "virtumundo.com")
	|| _dnsDomainIs(host, "treeloot.com")
	|| _dnsDomainIs(host, "memberprize.com")

	|| _dnsDomainIs(host, "internetfuel.net")
	|| _dnsDomainIs(host, "internetfuel.com")
	|| _dnsDomainIs(host, "peoplecaster.com")
	|| _dnsDomainIs(host, "cupidsdatabase.com")
	|| _dnsDomainIs(host, "automotive-times.com")
	|| _dnsDomainIs(host, "healthy-lifetimes.com")
	|| _dnsDomainIs(host, "us-world-business.com")
	|| _dnsDomainIs(host, "internet-2-web.com")
	|| _dnsDomainIs(host, "my-job-careers.com")
	|| _dnsDomainIs(host, "freeonline.com")
	|| _dnsDomainIs(host, "exitfuel.com")
	|| _dnsDomainIs(host, "netbroadcaster.com")
	|| _dnsDomainIs(host, "spaceports.com")
	|| _dnsDomainIs(host, "mircx.com")
	|| _dnsDomainIs(host, "exitchat.com")
	|| _dnsDomainIs(host, "atdmt.com")
	|| _dnsDomainIs(host, "partner2profit.com")
	|| _dnsDomainIs(host, "centrport.net")
	|| _dnsDomainIs(host, "centrport.com")
	|| _dnsDomainIs(host, "rampidads.com")

	|| _dnsDomainIs(host, "dt07.net")
	|| _dnsDomainIs(host, "criteo.com")
	|| _dnsDomainIs(host, "bidswitch.com")


	|| _dnsDomainIs(host, "commonwealth.riddler.com")
	|| _dnsDomainIs(host, "banner.freeservers.com")
	|| _dnsDomainIs(host, "usads.futurenet.com")
	|| _dnsDomainIs(host, "banners.egroups.com")
	|| _dnsDomainIs(host, "ngadclient.hearme.com")
	|| _dnsDomainIs(host, "affiliates.allposters.com")
	|| _dnsDomainIs(host, "adincl.go2net.com")
	|| _dnsDomainIs(host, "webads.bizservers.com")
	|| _dnsDomainIs(host, "addserv.com")
	|| _dnsDomainIs(host, "falkag.net")
	|| _dnsDomainIs(host, "buysellads.com")
	|| _dnsDomainIs(host, "dtscout.com")
	|| _dnsDomainIs(host, "tynt.com")

	|| (host == "promote.pair.com")

	|| _dnsDomainIs(host, "interclick.com")
	|| _dnsDomainIs(host, "travelscream.com")

	|| (_dnsDomainIs(host, "mktw.net")
	    && !shExpMatch(url, "*/css/*"))
	|| _dnsDomainIs(host, "cjt1.net")
	|| _dnsDomainIs(host, "bns1.net")
	
	|| _dnsDomainIs(host, "image.ugo.com")
	|| _dnsDomainIs(host, "mediamgr.ugo.com")

	|| _dnsDomainIs(host, "zonecms.com")
	|| _dnsDomainIs(host, "zoneld.com")

	|| _dnsDomainIs(host, "atwola.com")
	|| _dnsDomainIs(host, "toolbar.aol.com")
	|| _dnsDomainIs(host, "adsdk.com")

	|| (_dnsDomainIs(host, "overstock.com")
	    && shExpMatch(url, "*/linkshare/*"))
	|| (_dnsDomainIs(host, "supermediastore.com")
	    && shExpMatch(url, "*/lib/supermediastore/*"))
	|| (_dnsDomainIs(host, "shop4tech.com")
	    && shExpMatch(url, "*/assets/*"))
	|| (_dnsDomainIs(host, "softwareandstuff.com")
	    && shExpMatch(url, "*/media/*"))
	|| (_dnsDomainIs(host, "buy.com")
	    && shExpMatch(url, "*/affiliate/*"))

	|| (_dnsDomainIs(host, "pdaphonehome.com")
	    && (shExpMatch(url, "*/pocketpcmagbest.gif")
		|| shExpMatch(url, "*/link-msmobiles.gif")))
	|| (_dnsDomainIs(host, "ppc4you.com")
	    && shExpMatch(url, "*/ppc_top_sites.gif"))

	|| (_dnsDomainIs(host, "freewarepalm.com")
	    && shExpMatch(url, "*/sponsors/*"))

	|| _dnsDomainIs(host, "travelscream.com")
	|| _dnsDomainIs(host, "traveldeals.com")
	|| _dnsDomainIs(host, "traveldeals.wunderground.com")
	|| _dnsDomainIs(host, "as5000.com")


	|| (_dnsDomainIs(host, "mc.dailymotion.com")
	    && shExpMatch(url, "*/masscast/*"))

	|| (host == "downloads.thespringbox.com"
	)

	|| _dnsDomainIs(host, "outbrain.com")
	
	|| _dnsDomainIs(host, "marketgid.com")
	|| _dnsDomainIs(host, "mgid.com")

	|| _dnsDomainIs(host, "rtbsystem.com")

	|| _dnsDomainIs(host, "directrev.com")
	|| _dnsDomainIs(host, "az708531.vo.msecnd.net")


	|| _dnsDomainIs(host, "remotead.cnet.com")
	|| _dnsDomainIs(host, "1st-dating.com")
	|| _dnsDomainIs(host, "mousebucks.com")
	|| _dnsDomainIs(host, "yourfreedvds.com")
	|| _dnsDomainIs(host, "popupsavings.com")
	|| _dnsDomainIs(host, "popupmoney.com")
	|| _dnsDomainIs(host, "popuptraffic.com")
	|| _dnsDomainIs(host, "popupnation.com")
	|| _dnsDomainIs(host, "infostart.com")
	|| _dnsDomainIs(host, "opupad.net")
	|| _dnsDomainIs(host, "usapromotravel.com")
	|| _dnsDomainIs(host, "goclick.com")
	|| _dnsDomainIs(host, "trafficwave.net")
	|| _dnsDomainIs(host, "popupad.net")
	|| _dnsDomainIs(host, "paypopup.com")
	|| _dnsDomainIs(host, "trafficstars.com")

	|| _dnsDomainIs(host, "vipcpms.com")
	|| _dnsDomainIs(host, "putags.com")

	|| _dnsDomainIs(host, "greenreaper.com")
	|| _dnsDomainIs(host, "spewey.com")
	|| _dnsDomainIs(host, "englishharbour.com")
	|| _dnsDomainIs(host, "casino-trade.com")
	|| _dnsDomainIs(host, "got2goshop.com")
	|| _dnsDomainIs(host, "addynamix.com")
	|| _dnsDomainIs(host, "trafficmp.com")
	|| _dnsDomainIs(host, "makingmoneyfromhome.net")
	|| _dnsDomainIs(host, "leadcart.com")

	|| _dnsDomainIs(host, "euros4click.de")

	|| _dnsDomainIs(host, "power-mark.com")


	|| _dnsDomainIs(host, "webtrendslive.com")
	|| _dnsDomainIs(host, "wtlive.com")
	|| _dnsDomainIs(host, "imrworldwide.com")


	|| shExpMatch(host, "66.40.16.*")

	|| _dnsDomainIs(host, "web-stat.com")
	|| _dnsDomainIs(host, "superstats.com")
	|| _dnsDomainIs(host, "allhits.ru")
	|| _dnsDomainIs(host, "list.ru")
	|| _dnsDomainIs(host, "counted.com")
	|| _dnsDomainIs(host, "rankyou.com")
	|| _dnsDomainIs(host, "clickcash.com")
	|| _dnsDomainIs(host, "clickbank.com")
	|| _dnsDomainIs(host, "paycounter.com")
	|| _dnsDomainIs(host, "cashcount.com")
	|| _dnsDomainIs(host, "clickedyclick.com")
	|| _dnsDomainIs(host, "clickxchange.com")
	|| _dnsDomainIs(host, "sitestats.com")
	|| _dnsDomainIs(host, "site-stats.com")
	|| _dnsDomainIs(host, "hitbox.com")
	|| _dnsDomainIs(host, "exitdirect.com")
	|| _dnsDomainIs(host, "realtracker.com")
	|| _dnsDomainIs(host, "etracking.com")
	|| _dnsDomainIs(host, "livestat.com")
	|| _dnsDomainIs(host, "spylog.com")
	|| _dnsDomainIs(host, "freestats.com")
	|| _dnsDomainIs(host, "addfreestats.com")
	|| _dnsDomainIs(host, "topclicks.net")
	|| _dnsDomainIs(host, "mystat.pl")
	|| _dnsDomainIs(host, "hitz4you.de")
	|| _dnsDomainIs(host, "hitslink.com")
	|| _dnsDomainIs(host, "thecounter.com")
	|| _dnsDomainIs(host, "roiservice.com")
	|| _dnsDomainIs(host, "overture.com")
	|| _dnsDomainIs(host, "xiti.com")
	|| _dnsDomainIs(host, "cj.com")
	|| _dnsDomainIs(host, "anrdoezrs.net")
	|| _dnsDomainIs(host, "hey.it")
	|| _dnsDomainIs(host, "ppctracking.net")
	|| _dnsDomainIs(host, "darkcounter.com")
	|| _dnsDomainIs(host, "2o7.com")
	|| _dnsDomainIs(host, "2o7.net")
	|| _dnsDomainIs(host, "gostats.com")
	|| _dnsDomainIs(host, "everstats.com")
	|| _dnsDomainIs(host, "onestat.com")
	|| _dnsDomainIs(host, "statcounter.com")
	|| _dnsDomainIs(host, "trafic.ro")
	|| _dnsDomainIs(host, "exitexchange.com")
	|| _dnsDomainIs(host, "clicktorrent.info")
	|| _dnsDomainIs(host, "ventimedia.com")
	|| _dnsDomainIs(host, "flashmediaportal.com")
	|| _dnsDomainIs(host, "clictrackr.com")

	|| _dnsDomainIs(host, "clickability.com")
	|| _dnsDomainIs(host, "savethis.com")

	|| _dnsDomainIs(host, "extremetracking.com")
	|| _dnsDomainIs(host, "extreme-dm.com")
	|| _dnsDomainIs(host, "pop6.com")
	|| _dnsDomainIs(host, "medleyads.com")

	|| _dnsDomainIs(host, "news6insider.com")

	|| _dnsDomainIs(host, "cw.cm")
	|| _dnsDomainIs(host, "co.cc")

	|| _dnsDomainIs(host, "hideus.in")
	|| _dnsDomainIs(host, "addthis.com")
	|| _dnsDomainIs(host, "popadscdn.net")

	|| _dnsDomainIs(host, "netster.com")

	|| _dnsDomainIs(host, "searchmarketing.com")


	|| _dnsDomainIs(host, "friendgreetings.com")
	|| _dnsDomainIs(host, "permissionedmedia.com")
	|| _dnsDomainIs(host, "searchbarcash.com")
	|| _dnsDomainIs(host, "shipboardserviceberrysiltstone.info")
	|| _dnsDomainIs(host, "how2update4u.com")
	|| _dnsDomainIs(host, "travelwednesday.com")
	|| _dnsDomainIs(host, "masterclassfoods.com")
	|| _dnsDomainIs(host, "liveadexchanger.com")
	|| _dnsDomainIs(host, "betterads.co")
	|| _dnsDomainIs(host, "livegoal.net")

	|| _dnsDomainIs(host, "techsupport-verizon.com")
	|| _dnsDomainIs(host, "avstats.com")


	|| _dnsDomainIs(host, "zoomerang.com")
	|| _dnsDomainIs(host, "quizrocket.com")

	|| (_dnsDomainIs(host, "amazonaws.com")
	    && shExpMatch(url, "*/udm_img/mid*")
	)


	|| _dnsDomainIs(host, "aceshigh.com")
	|| _dnsDomainIs(host, "idealcasino.net")
	|| _dnsDomainIs(host, "casinobar.net")
	|| _dnsDomainIs(host, "casinoionair.com")

	|| (_dnsDomainIs(host, "go2net.com")
	    && shExpMatch(url, "*adclick*")
	)


	|| _dnsDomainIs(host, "licensed-collectibles.com")
	|| _dnsDomainIs(host, "webdesignprofessional.com")


	|| _dnsDomainIs(host, "gator.com")

	|| ((_dnsDomainIs(host, "pics.ebay.com")
	     || _dnsDomainIs(host, "pics.ebaystatic.com"))
	    && shExpMatch(url, "*/pics/mops/*/*[0-9]x[0-9]*")
	)
	|| (_dnsDomainIs(host, "ebayobjects.com")
	    && shExpMatch(url, "*search/keywords*")
	)
	|| _dnsDomainIs(host, "admarketplace.com")
	|| _dnsDomainIs(host, "admarketplace.net")

	|| (_dnsDomainIs(host, "ezboard.com")
	    && shExpMatch(url, "*/bravenet/*")
	)
	|| (_dnsDomainIs(host, "bravenet.com")
	    && (   shExpMatch(host, "*counter*")
		|| shExpMatch(url, "*/jsbanner*")
	        || shExpMatch(url, "*/bravenet/*")
	    )
	)

	|| ((   _dnsDomainIs(host,"geo.yahoo.com")
	     || _dnsDomainIs(host,"geocities.com"))
	    && (
		   shExpMatch(url,"*/toto?s*")
		|| shExpMatch(url, "*geocities.com/js_source*")
		|| _dnsDomainIs(host, "visit.geocities.com")
	    )
	)

	|| (_dnsDomainIs(host,"yimg.com")
	    && !(   shExpMatch(url,"*yimg.com/a/i/*")
		 || shExpMatch(url,"*yimg.com/a/lib/*")
		 || shExpMatch(url,"*yimg.com/a/combo*")
	    )
	    && (   shExpMatch(url,"*yimg.com/a/*")
		|| shExpMatch(url,"*yimg.com/*/adv/*")
		|| shExpMatch(url,"*yimg.com/*/promotions/*")
	    )
	)
	|| _dnsDomainIs(host,"qz3.net")
	|| _dnsDomainIs(host,"eyewonder.com")

	|| _dnsDomainIs(host,"buzzcity.com")

	|| (_dnsDomainIs(host,"fortunecity.com")
	    && (    shExpMatch(url,"*/js/adscript*")
		 || shExpMatch(url,"*/js/fctrack*")
	    )
	)

	|| (_dnsDomainIs(host, "zdnet.com")
	    && (   _dnsDomainIs(host, "ads3.zdnet.com")
		|| host == "gserv.zdnet.com"
		|| shExpMatch(url, "*/texis/cs/ad.html")
		|| shExpMatch(url, "*/adverts")
	     )
	)

	|| (host == "dw.com.com" || host == "mads.com.com")
	|| (_dnsDomainIs(host, "com.com")
	    && (   host == "dw.com.com"
		|| host == "mads.com.com"
	     )
	)

	|| (_dnsDomainIs(host, "nytimes.com")
	    && shExpMatch(url,"*/adx/*")
	)

	|| _dnsDomainIs(host, "unicast.net")


	|| _dnsDomainIs(host, "reporting.net")
	|| _dnsDomainIs(host, "affliate.net")
	|| (_dnsDomainIs(host, "akamai.net")
	    && shExpMatch(url, "*.affiliate.net/*")
	)

	|| (_dnsDomainIs(host, "infospace.com")
	    && shExpMatch(url, "*/goshopping/*")
	)
	|| _dnsDomainIs(host, "webmarket.com")
	|| _dnsDomainIs(host, "shopping.dogpile.com")

	|| _dnsDomainIs(host, "information.gopher.com")

	|| (_dnsDomainIs(host, "about.com")
	    && (0
	    || shExpMatch(url, "*/sprinks/*")
	    || shExpMatch(url, "*about.com/0/js/*")
	    || shExpMatch(url, "*about.com/f/p/*")
	    )
	)

	|| (_dnsDomainIs(host, "dell.com")
	    && shExpMatch(url, "*/images/affiliates/*")
	)

	|| (_dnsDomainIs(host, "ifilm.com")
	    && (shExpMatch(url, "*/partners/*")
	        || shExpMatch(url, "*/redirect*")
	    )
	)

	|| ((_dnsDomainIs(host, "tomshardware.com")
	     || shExpMatch(host, "216.92.21.*"))
	    && (   shExpMatch(url, "*/cgi-bin/banner*")
	        || shExpMatch(url, "*/cgi-bin/bd.m*")
	        || shExpMatch(url, "*/images/banner/*")
	    )
	)

	|| shExpMatch(url, "*mapsonus.com/ad.images*")

	|| _dnsDomainIs(host, "adfu.blockstackers.com")
	|| (_dnsDomainIs(host, "slashdot.org")
	    && (
	           shExpMatch(url, "*/slashdot/pc.gif*")
		|| shExpMatch(url, "*/pagecount.gif*")
		|| shExpMatch(url, "*/adlog.pl*")
	    )
        )
	|| _dnsDomainIs(host, "googlesyndication.com")

	|| (_dnsDomainIs(host, "aintitcool.com")
	    && (
	           shExpMatch(url, "*/newline/*")
		|| shExpMatch(url, "*/drillteammedia/*")
		|| shExpMatch(url, "*/foxsearchlight/*")
		|| shExpMatch(url, "*/media/aol*")
		|| shExpMatch(url, "*swf")
	    )
	)

	|| (_dnsDomainIs(host, "staples.com")
	    && shExpMatch(url, "*/pixeltracker/*")
	)
	|| _dnsDomainIs(host, "pt.crossmediaservices.com")

	|| (_dnsDomainIs(host, "officemax.com")
	    && shExpMatch(url, "*/affart/*")
	)


	|| (host == "hera.hardocp.com")
	|| shExpMatch(url,"*/onlineads/*")

	|| (_dnsDomainIs(host, "fatwallet.com")
	    && shExpMatch(url,"*/js/*")
	)

	|| _dnsDomainIs(host, "promo.search.com")

	|| (_dnsDomainIs(host, "imdb.com")
	    && (   shExpMatch(url, "*/photos/cmsicons/*")
	        || shExpMatch(url, "*/icons/*/celeb/*")
	        || shExpMatch(url, "*.swf")
	    )
	)
	|| _dnsDomainIs(host, "kliptracker.com")
	|| _dnsDomainIs(host, "klipmart.com")

	|| host == "avpa.javalobby.org"

	|| host == "spinbox.techtracker.com"

	|| host == "rcm.amazon.com"

	|| (_dnsDomainIs(host, "megaupload.com") && (
		   shExpMatch(url, "*/aff*.php")
		|| shExpMatch(url, "*/mrads/*")
	    )
	)
	|| _dnsDomainIs(host, "megaflirt.com")

	|| _dnsDomainIs(host, "ifriends.com")

	|| ((_dnsDomainIs(host, "gamecopyworld.com")
	     || _dnsDomainIs(host, "linkworld.com")
	     || _dnsDomainIs(host, "filetarget.com")
	    )&& (
		   shExpMatch(url, "*/ii/*")
		|| shExpMatch(url, "*/@_eve*")
	    )
	)

	|| _dnsDomainIs(host, "lookoutmovies.com")
	|| _dnsDomainIs(host, "tube-player.com")


	|| re_crud.test(url)


	|| _dnsDomainIs(host, "taboola.com")
	|| _dnsDomainIs(host, "taboolasyndication.com")
	|| _dnsDomainIs(host, "disqus.com")
	|| _dnsDomainIs(host, "revcontent.com")


	|| (_dnsDomainIs(host, "register.com")
	    && (shExpMatch(url,"*.js")
		|| shExpMatch(host, "searchtheweb*")
		|| shExpMatch(host, "futuresite*")
	    )
	)

	|| _dnsDomainIs(host, "oingo.com")
	|| _dnsDomainIs(host, "namingsolutions.com")

	|| _dnsDomainIs(host, "coremetrics.com")

	|| _dnsDomainIs(host, "firehunt.com")

	|| _dnsDomainIs(host, "appliedsemantics.com")

	|| (host == "216.216.246.31")

	|| (host == "216.66.21.35")
	|| _dnsDomainIs(host, "avsads.com")

	|| _dnsDomainIs(host, "search411.com")

	|| (_dnsDomainIs(host, "palmgear.com")
	    && (   shExpMatch(url, "*/adsales/*")
		|| shExpMatch(url, "*/emailblast*")
	    )
	)

	|| _dnsDomainIs(host, "prreleases.net")


	|| _dnsDomainIs(host, "porntrack.com")
	|| _dnsDomainIs(host, "sexe-portail.com")
	|| _dnsDomainIs(host, "sextracker.com")
	|| _dnsDomainIs(host, "sexspy.com")
	|| _dnsDomainIs(host, "offshoreclicks.com")
	|| _dnsDomainIs(host, "exxxit.com")
	|| _dnsDomainIs(host, "private-dailer.biz")
	|| shExpMatch(url, "*retestrak.nl/misc/reet.gif")
	|| shExpMatch(url, "*dontstayin.com/*.swf")
	|| shExpMatch(url, "*pornotube.com/textads*")
	|| _dnsDomainIs(host, "xratedbucks.com")
	|| _dnsDomainIs(host, "hornymatches.com")
	|| _dnsDomainIs(host, "hornymatches.com")
	|| _dnsDomainIs(host, "etology.com")
	|| _dnsDomainIs(host, "streamray.com")
	|| _dnsDomainIs(host, "awempire.com")
	|| _dnsDomainIs(host, "promos.fling.com")
	|| _dnsDomainIs(host, "pussygreen.com")
	|| _dnsDomainIs(host, "livejasmin.com")
	|| _dnsDomainIs(host, "imlive.com")
	|| _dnsDomainIs(host, "ihookup.com")

	|| (_dnsDomainIs(host, "shufuni.com")
	    && (   shExpMatch(url, "*images/activepage*")
	    )
	)

    ) {

	return blackhole;

    } else {

	return normal;
    }
}

if (0) {
	alert("no-ads.pac: LOADED:\n" +
		"	version:	"+noadsver+"\n" +
		"	blackhole:	"+blackhole+"\n" +
		"	normal:		"+normal+"\n" +
		"	localproxy:	"+localproxy+"\n" +
		"	bypass:		"+bypass+"\n"
	);
}


function alertmatch(str)
{
	alert(str);
	return 1;
}

function _dnsDomainIs(host, domain) {
    if (host.length > domain.length) {
	return (host.substring(host.length - domain.length - 1) == "."+domain);
    }
    return (host == domain);
}



