// Avoid `console` errors in browsers that lack a console.
(function() {
    var method;
    var noop = function () {};
    var methods = [
        'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
        'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
        'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
        'timeStamp', 'trace', 'warn'
    ];
    var length = methods.length;
    var console = (window.console = window.console || {});

    while (length--) {
        method = methods[length];

        // Only stub undefined methods.
        if (!console[method]) {
            console[method] = noop;
        }
    }
}());









// Smooth Scrolling

(function($) {

  // function niceScrollInit(){
  //     $("html").niceScroll({
  //       scrollspeed: 60,
  //       mousescrollstep: 35,
  //       cursorwidth: 10,
  //       cursorborder: 0,
  //       cursorcolor: '#f25953',
  //       cursorborderradius: 0,
  //       autohidemode: false
  //     });
  //   };
    
    var $smoothActive = $('body').attr('data-smooth-scrolling'); 
    // if( $smoothActive == 1 && $(window).width() > 690){ niceScrollInit(); }

})(jQuery);








// Place any jQuery/helper plugins in here.



// jquery.tweet.js - See http://tweet.seaofclouds.com/ or https://github.com/seaofclouds/tweet for more info
// Copyright (c) 2008-2012 Todd Matthews & Steve Purcell
(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['jquery'], factory); // AMD support for RequireJS etc.
  else
    factory(jQuery);
}(function ($) {
  $.fn.tweet = function(o){
    var s = $.extend({
      username: null,                           // [string or array] required unless using the 'query' option; one or more twitter screen names (use 'list' option for multiple names, where possible)
      list: null,                               // [string]   optional name of list belonging to username
      favorites: false,                         // [boolean]  display the user's favorites instead of his tweets
      query: null,                              // [string]   optional search query (see also: http://search.twitter.com/operators)
      avatar_size: null,                        // [integer]  height and width of avatar if displayed (48px max)
      count: 3,                                 // [integer]  how many tweets to display?
      fetch: null,                              // [integer]  how many tweets to fetch via the API (set this higher than 'count' if using the 'filter' option)
      page: 1,                                  // [integer]  which page of results to fetch (if count != fetch, you'll get unexpected results)
      retweets: true,                           // [boolean]  whether to fetch (official) retweets (not supported in all display modes)
      intro_text: null,                         // [string]   do you want text BEFORE your your tweets?
      outro_text: null,                         // [string]   do you want text AFTER your tweets?
      join_text:  null,                         // [string]   optional text in between date and tweet, try setting to "auto"
      auto_join_text_default: " I said, ",      // [string]   auto text for non verb: "I said" bullocks
      auto_join_text_ed: " I ",                 // [string]   auto text for past tense: "I" surfed
      auto_join_text_ing: " I am ",             // [string]   auto tense for present tense: "I was" surfing
      auto_join_text_reply: " I replied to ",   // [string]   auto tense for replies: "I replied to" @someone "with"
      auto_join_text_url: " I was looking at ", // [string]   auto tense for urls: "I was looking at" http:...
      loading_text: null,                       // [string]   optional loading text, displayed while tweets load
      refresh_interval: null,                   // [integer]  optional number of seconds after which to reload tweets
      twitter_url: "twitter.com",               // [string]   custom twitter url, if any (apigee, etc.)
      twitter_api_url: "api.twitter.com",       // [string]   custom twitter api url, if any (apigee, etc.)
      twitter_search_url: "search.twitter.com", // [string]   custom twitter search url, if any (apigee, etc.)
      template: "{avatar}{time}{join} {text}",  // [string or function] template used to construct each tweet <li> - see code for available vars
      comparator: function(tweet1, tweet2) {    // [function] comparator used to sort tweets (see Array.sort)
        return tweet2.tweet_time - tweet1.tweet_time;
      },
      filter: function(tweet) {                 // [function] whether or not to include a particular tweet (be sure to also set 'fetch')
        return true;
      }
      // You can attach callbacks to the following events using jQuery's standard .bind() mechanism:
      //   "loaded" -- triggered when tweets have been fetched and rendered
    }, o);

    // See http://daringfireball.net/2010/07/improved_regex_for_matching_urls
    var url_regexp = /\b((?:https?:\/\/|www\d{0,3}[.]|[a-z0-9.\-]+[.][a-z]{2,4}\/)(?:[^\s()<>]+|\(([^\s()<>]+|(\([^\s()<>]+\)))*\))+(?:\(([^\s()<>]+|(\([^\s()<>]+\)))*\)|[^\s`!()\[\]{};:'".,<>?«»“”‘’]))/gi;

    // Expand values inside simple string templates with {placeholders}
    function t(template, info) {
      if (typeof template === "string") {
        var result = template;
        for(var key in info) {
          var val = info[key];
          result = result.split('{'+key+'}').join(val === null ? '' : val);
        }
        return result;
      } else return template(info);
    }
    // Export the t function for use when passing a function as the 'template' option
    $.extend({tweet: {t: t}});

    function replacer (regex, replacement) {
      return function() {
        var returning = [];
        this.each(function() {
          returning.push(this.replace(regex, replacement));
        });
        return $(returning);
      };
    }

    function escapeHTML(s) {
      return s.replace(/</g,"&lt;").replace(/>/g,"^&gt;");
    }

    $.fn.extend({
      linkUser: replacer(/(^|[\W])@(\w+)/gi, "$1<span class=\"at\">@</span><a href=\"http://"+s.twitter_url+"/$2\">$2</a>"),
      // Support various latin1 (\u00**) and arabic (\u06**) alphanumeric chars
      linkHash: replacer(/(?:^| )[\#]+([\w\u00c0-\u00d6\u00d8-\u00f6\u00f8-\u00ff\u0600-\u06ff]+)/gi,
                         ' <a href="https://twitter.com/search?q=%23$1&lang=all'+
                         ((s.username && s.username.length === 1 && !s.list) ? '&from='+s.username.join("%2BOR%2B") : '')+
                         '" class="tweet_hashtag">#$1</a>'),
      makeHeart: replacer(/(&lt;)+[3]/gi, "<tt class='heart'>&#x2665;</tt>")
    });

    function linkURLs(text, entities) {
      return text.replace(url_regexp, function(match) {
        var url = (/^[a-z]+:/i).test(match) ? match : "http://"+match;
        var text = match;
        for(var i = 0; i < entities.length; ++i) {
          var entity = entities[i];
          if (entity.url === url && entity.expanded_url) {
            url = entity.expanded_url;
            text = entity.display_url;
            break;
          }
        }
        return "<a href=\""+escapeHTML(url)+"\">"+escapeHTML(text)+"</a>";
      });
    }

    function parse_date(date_str) {
      // The non-search twitter APIs return inconsistently-formatted dates, which Date.parse
      // cannot handle in IE. We therefore perform the following transformation:
      // "Wed Apr 29 08:53:31 +0000 2009" => "Wed, Apr 29 2009 08:53:31 +0000"
      return Date.parse(date_str.replace(/^([a-z]{3})( [a-z]{3} \d\d?)(.*)( \d{4})$/i, '$1,$2$4$3'));
    }

    function extract_relative_time(date) {
      var toInt = function(val) { return parseInt(val, 10); };
      var relative_to = new Date();
      var delta = toInt((relative_to.getTime() - date) / 1000);
      if (delta < 1) delta = 0;
      return {
        days:    toInt(delta / 86400),
        hours:   toInt(delta / 3600),
        minutes: toInt(delta / 60),
        seconds: toInt(delta)
      };
    }

    function format_relative_time(time_ago) {
      if ( time_ago.days > 2 )     return 'about ' + time_ago.days + ' days ago';
      if ( time_ago.hours > 24 )   return 'about a day ago';
      if ( time_ago.hours > 2 )    return 'about ' + time_ago.hours + ' hours ago';
      if ( time_ago.minutes > 45 ) return 'about an hour ago';
      if ( time_ago.minutes > 2 )  return 'about ' + time_ago.minutes + ' minutes ago';
      if ( time_ago.seconds > 1 )  return 'about ' + time_ago.seconds + ' seconds ago';
      return 'just now';
    }

    function build_auto_join_text(text) {
      if (text.match(/^(@([A-Za-z0-9-_]+)) .*/i)) {
        return s.auto_join_text_reply;
      } else if (text.match(url_regexp)) {
        return s.auto_join_text_url;
      } else if (text.match(/^((\w+ed)|just) .*/im)) {
        return s.auto_join_text_ed;
      } else if (text.match(/^(\w*ing) .*/i)) {
        return s.auto_join_text_ing;
      } else {
        return s.auto_join_text_default;
      }
    }

    function build_api_url() {
      var proto = ('https:' === document.location.protocol ? 'https:' : 'http:');
      var count = (s.fetch === null) ? s.count : s.fetch;
      var common_params = '&include_entities=1&callback=?';
      if (s.list) {
        return proto+"//"+s.twitter_api_url+"/1/"+s.username[0]+"/lists/"+s.list+"/statuses.json?page="+s.page+"&per_page="+count+common_params;
      } else if (s.favorites) {
        return proto+"//"+s.twitter_api_url+"/1/favorites.json?screen_name="+s.username[0]+"&page="+s.page+"&count="+count+common_params;
      } else if (s.query === null && s.username.length === 1) {
        return proto+'//'+s.twitter_api_url+'/1/statuses/user_timeline.json?screen_name='+s.username[0]+'&count='+count+(s.retweets ? '&include_rts=1' : '')+'&page='+s.page+common_params;
      } else {
        var query = (s.query || 'from:'+s.username.join(' OR from:'));
        return proto+'//'+s.twitter_search_url+'/search.json?&q='+encodeURIComponent(query)+'&rpp='+count+'&page='+s.page+common_params;
      }
    }

    function extract_avatar_url(item, secure) {
      if (secure) {
        return ('user' in item) ?
          item.user.profile_image_url_https :
          extract_avatar_url(item, false).
            replace(/^http:\/\/[a-z0-9]{1,3}\.twimg\.com\//, "https://s3.amazonaws.com/twitter_production/");
      } else {
        return item.profile_image_url || item.user.profile_image_url;
      }
    }

    // Convert twitter API objects into data available for
    // constructing each tweet <li> using a template
    function extract_template_data(item){
      var o = {};
      o.item = item;
      o.source = item.source;
      o.screen_name = item.from_user || item.user.screen_name;
      // The actual user name is not returned by all Twitter APIs, so please do not
      // file an issue if it is empty:
      o.name = item.from_user_name || item.user.name;
      o.retweet = typeof(item.retweeted_status) != 'undefined';

      o.tweet_time = parse_date(item.created_at);
      o.join_text = s.join_text === "auto" ? build_auto_join_text(item.text) : s.join_text;
      o.tweet_id = item.id_str;
      o.twitter_base = "http://"+s.twitter_url+"/";
      o.user_url = o.twitter_base+o.screen_name;
      o.tweet_url = o.user_url+"/status/"+o.tweet_id;
      o.reply_url = o.twitter_base+"intent/tweet?in_reply_to="+o.tweet_id;
      o.retweet_url = o.twitter_base+"intent/retweet?tweet_id="+o.tweet_id;
      o.favorite_url = o.twitter_base+"intent/favorite?tweet_id="+o.tweet_id;
      o.retweeted_screen_name = o.retweet && item.retweeted_status.user.screen_name;
      o.tweet_relative_time = format_relative_time(extract_relative_time(o.tweet_time));
      o.entities = item.entities ? (item.entities.urls || []).concat(item.entities.media || []) : [];
      o.tweet_raw_text = o.retweet ? ('RT @'+o.retweeted_screen_name+' '+item.retweeted_status.text) : item.text; // avoid '...' in long retweets
      o.tweet_text = $([linkURLs(o.tweet_raw_text, o.entities)]).linkUser().linkHash()[0];
      o.retweeted_tweet_text = $([linkURLs(item.text, o.entities)]).linkUser().linkHash()[0];
      o.tweet_text_fancy = $([o.tweet_text]).makeHeart()[0];

      o.avatar_size = s.avatar_size;
      o.avatar_url = extract_avatar_url(o.retweet ? item.retweeted_status : item, (document.location.protocol === 'https:'));
      o.avatar_screen_name = o.retweet ? o.retweeted_screen_name : o.screen_name;
      o.avatar_profile_url = o.twitter_base+o.avatar_screen_name;

      // Default spans, and pre-formatted blocks for common layouts
      o.user = t('<a class="tweet_user" href="{user_url}">{screen_name}</a>', o);
      o.join = s.join_text ? t('<span class="tweet_join">{join_text}</span>', o) : '';
      o.avatar = o.avatar_size ?
        t('<a class="tweet_avatar" href="{avatar_profile_url}"><img src="{avatar_url}" height="{avatar_size}" width="{avatar_size}" alt="{avatar_screen_name}\'s avatar" title="{avatar_screen_name}\'s avatar" border="0"/></a>', o) : '';
      o.time = t('<span class="tweet_time"><a href="{tweet_url}" title="view tweet on twitter">{tweet_relative_time}</a></span>', o);
      o.text = t('<span class="tweet_text">{tweet_text_fancy}</span>', o);
      o.retweeted_text = t('<span class="tweet_text">{retweeted_tweet_text}</span>', o);
      o.reply_action = t('<a class="tweet_action tweet_reply" href="{reply_url}">reply</a>', o);
      o.retweet_action = t('<a class="tweet_action tweet_retweet" href="{retweet_url}">retweet</a>', o);
      o.favorite_action = t('<a class="tweet_action tweet_favorite" href="{favorite_url}">favorite</a>', o);
      return o;
    }

    function render_tweets(widget, tweets) {
      var list = $('<ul class="tweet_list">');
      list.append($.map(tweets, function(o) { return "<li>" + t(s.template, o) + "</li>"; }).join('')).
        children('li:first').addClass('tweet_first').end().
        children('li:odd').addClass('tweet_even').end().
        children('li:even').addClass('tweet_odd');

      $(widget).empty().append(list);
      if (s.intro_text) list.before('<p class="tweet_intro">'+s.intro_text+'</p>');
      if (s.outro_text) list.after('<p class="tweet_outro">'+s.outro_text+'</p>');

      $(widget).trigger("loaded").trigger((tweets.length === 0 ? "empty" : "full"));
      if (s.refresh_interval) {
        window.setTimeout(function() { $(widget).trigger("tweet:load"); }, 1000 * s.refresh_interval);
      }
    }

    function load(widget) {
      var loading = $('<p class="loading">'+s.loading_text+'</p>');
      if (s.loading_text) $(widget).not(":has(.tweet_list)").empty().append(loading);
      $.getJSON(build_api_url(), function(data){
        var tweets = $.map(data.results || data, extract_template_data);
        tweets = $.grep(tweets, s.filter).sort(s.comparator).slice(0, s.count);
        $(widget).trigger("tweet:retrieved", [tweets]);
      });
    }

    return this.each(function(i, widget){
      if(s.username && typeof(s.username) === "string"){
        s.username = [s.username];
      }

      $(widget).unbind("tweet:render").unbind("tweet:retrieved").unbind("tweet:load").
        bind({
          "tweet:load": function() { load(widget); },
          "tweet:retrieved": function(ev, tweets) {
            $(widget).trigger("tweet:render", [tweets]);
          },
          "tweet:render": function(ev, tweets) {
            render_tweets($(widget), tweets);
          }
        }).trigger("tweet:load");
    });
  };
}));








/* ------------------------------------------------------------------------
  Class: prettyPhoto
  Use: Lightbox clone for jQuery
  Author: Stephane Caron (http://www.no-margin-for-errors.com)
  Version: 3.1.5
------------------------------------------------------------------------- */
(function($) {
  $.prettyPhoto = {version: '3.1.5'};
  
  $.fn.prettyPhoto = function(pp_settings) {
    pp_settings = jQuery.extend({
      hook: 'rel', /* the attribute tag to use for prettyPhoto hooks. default: 'rel'. For HTML5, use "data-rel" or similar. */
      animation_speed: 'fast', /* fast/slow/normal */
      ajaxcallback: function() {},
      slideshow: 5000, /* false OR interval time in ms */
      autoplay_slideshow: false, /* true/false */
      opacity: 0.80, /* Value between 0 and 1 */
      show_title: true, /* true/false */
      allow_resize: true, /* Resize the photos bigger than viewport. true/false */
      allow_expand: true, /* Allow the user to expand a resized image. true/false */
      default_width: 500,
      default_height: 344,
      counter_separator_label: '/', /* The separator for the gallery counter 1 "of" 2 */
      theme: 'pp_default', /* light_rounded / dark_rounded / light_square / dark_square / facebook */
      horizontal_padding: 20, /* The padding on each side of the picture */
      hideflash: false, /* Hides all the flash object on a page, set to TRUE if flash appears over prettyPhoto */
      wmode: 'opaque', /* Set the flash wmode attribute */
      autoplay: true, /* Automatically start videos: True/False */
      modal: false, /* If set to true, only the close button will close the window */
      deeplinking: true, /* Allow prettyPhoto to update the url to enable deeplinking. */
      overlay_gallery: true, /* If set to true, a gallery will overlay the fullscreen image on mouse over */
      overlay_gallery_max: 30, /* Maximum number of pictures in the overlay gallery */
      keyboard_shortcuts: true, /* Set to false if you open forms inside prettyPhoto */
      changepicturecallback: function(){}, /* Called everytime an item is shown/changed */
      callback: function(){}, /* Called when prettyPhoto is closed */
      ie6_fallback: true,
      markup: '<div class="pp_pic_holder"> \
            <div class="ppt">&nbsp;</div> \
            <div class="pp_top"> \
              <div class="pp_left"></div> \
              <div class="pp_middle"></div> \
              <div class="pp_right"></div> \
            </div> \
            <div class="pp_content_container"> \
              <div class="pp_left"> \
              <div class="pp_right"> \
                <div class="pp_content"> \
                  <div class="pp_loaderIcon"></div> \
                  <div class="pp_fade"> \
                    <a href="#" class="pp_expand" title="Expand the image">Expand</a> \
                    <div class="pp_hoverContainer"> \
                      <a class="pp_next" href="#">next</a> \
                      <a class="pp_previous" href="#">previous</a> \
                    </div> \
                    <div id="pp_full_res"></div> \
                    <div class="pp_details"> \
                      <div class="pp_nav"> \
                        <a href="#" class="pp_arrow_previous">Previous</a> \
                        <p class="currentTextHolder">0/0</p> \
                        <a href="#" class="pp_arrow_next">Next</a> \
                      </div> \
                      <p class="pp_description"></p> \
                      <div class="pp_social">{pp_social}</div> \
                      <a class="pp_close" href="#">Close</a> \
                    </div> \
                  </div> \
                </div> \
              </div> \
              </div> \
            </div> \
            <div class="pp_bottom"> \
              <div class="pp_left"></div> \
              <div class="pp_middle"></div> \
              <div class="pp_right"></div> \
            </div> \
          </div> \
          <div class="pp_overlay"></div>',
      gallery_markup: '<div class="pp_gallery"> \
                <a href="#" class="pp_arrow_previous">Previous</a> \
                <div> \
                  <ul> \
                    {gallery} \
                  </ul> \
                </div> \
                <a href="#" class="pp_arrow_next">Next</a> \
              </div>',
      image_markup: '<img id="fullResImage" src="{path}" />',
      flash_markup: '<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="{width}" height="{height}"><param name="wmode" value="{wmode}" /><param name="allowfullscreen" value="true" /><param name="allowscriptaccess" value="always" /><param name="movie" value="{path}" /><embed src="{path}" type="application/x-shockwave-flash" allowfullscreen="true" allowscriptaccess="always" width="{width}" height="{height}" wmode="{wmode}"></embed></object>',
      quicktime_markup: '<object classid="clsid:02BF25D5-8C17-4B23-BC80-D3488ABDDC6B" codebase="http://www.apple.com/qtactivex/qtplugin.cab" height="{height}" width="{width}"><param name="src" value="{path}"><param name="autoplay" value="{autoplay}"><param name="type" value="video/quicktime"><embed src="{path}" height="{height}" width="{width}" autoplay="{autoplay}" type="video/quicktime" pluginspage="http://www.apple.com/quicktime/download/"></embed></object>',
      iframe_markup: '<iframe src ="{path}" width="{width}" height="{height}" frameborder="no"></iframe>',
      inline_markup: '<div class="pp_inline">{content}</div>',
      custom_markup: '',
      social_tools: '<div class="twitter"><a href="http://twitter.com/share" class="twitter-share-button" data-count="none">Tweet</a><script type="text/javascript" src="http://platform.twitter.com/widgets.js"></script></div><div class="facebook"><iframe src="//www.facebook.com/plugins/like.php?locale=en_US&href={location_href}&amp;layout=button_count&amp;show_faces=true&amp;width=500&amp;action=like&amp;font&amp;colorscheme=light&amp;height=23" scrolling="no" frameborder="0" style="border:none; overflow:hidden; width:500px; height:23px;" allowTransparency="true"></iframe></div>' /* html or false to disable */
    }, pp_settings);
    
    // Global variables accessible only by prettyPhoto
    var matchedObjects = this, percentBased = false, pp_dimensions, pp_open,
    
    // prettyPhoto container specific
    pp_contentHeight, pp_contentWidth, pp_containerHeight, pp_containerWidth,
    
    // Window size
    windowHeight = $(window).height(), windowWidth = $(window).width(),

    // Global elements
    pp_slideshow;
    
    doresize = true, scroll_pos = _get_scroll();
  
    // Window/Keyboard events
    $(window).unbind('resize.prettyphoto').bind('resize.prettyphoto',function(){ _center_overlay(); _resize_overlay(); });
    
    if(pp_settings.keyboard_shortcuts) {
      $(document).unbind('keydown.prettyphoto').bind('keydown.prettyphoto',function(e){
        if(typeof $pp_pic_holder != 'undefined'){
          if($pp_pic_holder.is(':visible')){
            switch(e.keyCode){
              case 37:
                $.prettyPhoto.changePage('previous');
                e.preventDefault();
                break;
              case 39:
                $.prettyPhoto.changePage('next');
                e.preventDefault();
                break;
              case 27:
                if(!settings.modal)
                $.prettyPhoto.close();
                e.preventDefault();
                break;
            };
            // return false;
          };
        };
      });
    };
    
    /**
    * Initialize prettyPhoto.
    */
    $.prettyPhoto.initialize = function() {
      
      settings = pp_settings;
      
      if(settings.theme == 'pp_default') settings.horizontal_padding = 16;
      
      // Find out if the picture is part of a set
      theRel = $(this).attr(settings.hook);
      galleryRegExp = /\[(?:.*)\]/;
      isSet = (galleryRegExp.exec(theRel)) ? true : false;
      
      // Put the SRCs, TITLEs, ALTs into an array.
      pp_images = (isSet) ? jQuery.map(matchedObjects, function(n, i){ if($(n).attr(settings.hook).indexOf(theRel) != -1) return $(n).attr('href'); }) : $.makeArray($(this).attr('href'));
      pp_titles = (isSet) ? jQuery.map(matchedObjects, function(n, i){ if($(n).attr(settings.hook).indexOf(theRel) != -1) return ($(n).find('img').attr('alt')) ? $(n).find('img').attr('alt') : ""; }) : $.makeArray($(this).find('img').attr('alt'));
      pp_descriptions = (isSet) ? jQuery.map(matchedObjects, function(n, i){ if($(n).attr(settings.hook).indexOf(theRel) != -1) return ($(n).attr('title')) ? $(n).attr('title') : ""; }) : $.makeArray($(this).attr('title'));
      
      if(pp_images.length > settings.overlay_gallery_max) settings.overlay_gallery = false;
      
      set_position = jQuery.inArray($(this).attr('href'), pp_images); // Define where in the array the clicked item is positionned
      rel_index = (isSet) ? set_position : $("a["+settings.hook+"^='"+theRel+"']").index($(this));
      
      _build_overlay(this); // Build the overlay {this} being the caller
      
      if(settings.allow_resize)
        $(window).bind('scroll.prettyphoto',function(){ _center_overlay(); });
      
      
      $.prettyPhoto.open();
      
      return false;
    }


    /**
    * Opens the prettyPhoto modal box.
    * @param image {String,Array} Full path to the image to be open, can also be an array containing full images paths.
    * @param title {String,Array} The title to be displayed with the picture, can also be an array containing all the titles.
    * @param description {String,Array} The description to be displayed with the picture, can also be an array containing all the descriptions.
    */
    $.prettyPhoto.open = function(event) {
      if(typeof settings == "undefined"){ // Means it's an API call, need to manually get the settings and set the variables
        settings = pp_settings;
        pp_images = $.makeArray(arguments[0]);
        pp_titles = (arguments[1]) ? $.makeArray(arguments[1]) : $.makeArray("");
        pp_descriptions = (arguments[2]) ? $.makeArray(arguments[2]) : $.makeArray("");
        isSet = (pp_images.length > 1) ? true : false;
        set_position = (arguments[3])? arguments[3]: 0;
        _build_overlay(event.target); // Build the overlay {this} being the caller
      }
      
      if(settings.hideflash) $('object,embed,iframe[src*=youtube],iframe[src*=vimeo]').css('visibility','hidden'); // Hide the flash

      _checkPosition($(pp_images).size()); // Hide the next/previous links if on first or last images.
    
      $('.pp_loaderIcon').show();
    
      if(settings.deeplinking)
        setHashtag();
    
      // Rebuild Facebook Like Button with updated href
      if(settings.social_tools){
        facebook_like_link = settings.social_tools.replace('{location_href}', encodeURIComponent(location.href)); 
        $pp_pic_holder.find('.pp_social').html(facebook_like_link);
      }
      
      // Fade the content in
      if($ppt.is(':hidden')) $ppt.css('opacity',0).show();
      $pp_overlay.show().fadeTo(settings.animation_speed,settings.opacity);

      // Display the current position
      $pp_pic_holder.find('.currentTextHolder').text((set_position+1) + settings.counter_separator_label + $(pp_images).size());

      // Set the description
      if(typeof pp_descriptions[set_position] != 'undefined' && pp_descriptions[set_position] != ""){
        $pp_pic_holder.find('.pp_description').show().html(unescape(pp_descriptions[set_position]));
      }else{
        $pp_pic_holder.find('.pp_description').hide();
      }
      
      // Get the dimensions
      movie_width = ( parseFloat(getParam('width',pp_images[set_position])) ) ? getParam('width',pp_images[set_position]) : settings.default_width.toString();
      movie_height = ( parseFloat(getParam('height',pp_images[set_position])) ) ? getParam('height',pp_images[set_position]) : settings.default_height.toString();
      
      // If the size is % based, calculate according to window dimensions
      percentBased=false;
      if(movie_height.indexOf('%') != -1) { movie_height = parseFloat(($(window).height() * parseFloat(movie_height) / 100) - 150); percentBased = true; }
      if(movie_width.indexOf('%') != -1) { movie_width = parseFloat(($(window).width() * parseFloat(movie_width) / 100) - 150); percentBased = true; }
      
      // Fade the holder
      $pp_pic_holder.fadeIn(function(){
        // Set the title
        (settings.show_title && pp_titles[set_position] != "" && typeof pp_titles[set_position] != "undefined") ? $ppt.html(unescape(pp_titles[set_position])) : $ppt.html('&nbsp;');
        
        imgPreloader = "";
        skipInjection = false;
        
        // Inject the proper content
        switch(_getFileType(pp_images[set_position])){
          case 'image':
            imgPreloader = new Image();

            // Preload the neighbour images
            nextImage = new Image();
            if(isSet && set_position < $(pp_images).size() -1) nextImage.src = pp_images[set_position + 1];
            prevImage = new Image();
            if(isSet && pp_images[set_position - 1]) prevImage.src = pp_images[set_position - 1];

            $pp_pic_holder.find('#pp_full_res')[0].innerHTML = settings.image_markup.replace(/{path}/g,pp_images[set_position]);

            imgPreloader.onload = function(){
              // Fit item to viewport
              pp_dimensions = _fitToViewport(imgPreloader.width,imgPreloader.height);

              _showContent();
            };

            imgPreloader.onerror = function(){
              alert('Image cannot be loaded. Make sure the path is correct and image exist.');
              $.prettyPhoto.close();
            };
          
            imgPreloader.src = pp_images[set_position];
          break;
        
          case 'youtube':
            pp_dimensions = _fitToViewport(movie_width,movie_height); // Fit item to viewport
            
            // Regular youtube link
            movie_id = getParam('v',pp_images[set_position]);
            
            // youtu.be link
            if(movie_id == ""){
              movie_id = pp_images[set_position].split('youtu.be/');
              movie_id = movie_id[1];
              if(movie_id.indexOf('?') > 0)
                movie_id = movie_id.substr(0,movie_id.indexOf('?')); // Strip anything after the ?

              if(movie_id.indexOf('&') > 0)
                movie_id = movie_id.substr(0,movie_id.indexOf('&')); // Strip anything after the &
            }

            movie = 'http://www.youtube.com/embed/'+movie_id;
            (getParam('rel',pp_images[set_position])) ? movie+="?rel="+getParam('rel',pp_images[set_position]) : movie+="?rel=1";
              
            if(settings.autoplay) movie += "&autoplay=1";
          
            toInject = settings.iframe_markup.replace(/{width}/g,pp_dimensions['width']).replace(/{height}/g,pp_dimensions['height']).replace(/{wmode}/g,settings.wmode).replace(/{path}/g,movie);
          break;
        
          case 'vimeo':
            pp_dimensions = _fitToViewport(movie_width,movie_height); // Fit item to viewport
          
            movie_id = pp_images[set_position];
            var regExp = /http(s?):\/\/(www\.)?vimeo.com\/(\d+)/;
            var match = movie_id.match(regExp);
            
            movie = 'http://player.vimeo.com/video/'+ match[3] +'?title=0&amp;byline=0&amp;portrait=0';
            if(settings.autoplay) movie += "&autoplay=1;";
        
            vimeo_width = pp_dimensions['width'] + '/embed/?moog_width='+ pp_dimensions['width'];
        
            toInject = settings.iframe_markup.replace(/{width}/g,vimeo_width).replace(/{height}/g,pp_dimensions['height']).replace(/{path}/g,movie);
          break;
        
          case 'quicktime':
            pp_dimensions = _fitToViewport(movie_width,movie_height); // Fit item to viewport
            pp_dimensions['height']+=15; pp_dimensions['contentHeight']+=15; pp_dimensions['containerHeight']+=15; // Add space for the control bar
        
            toInject = settings.quicktime_markup.replace(/{width}/g,pp_dimensions['width']).replace(/{height}/g,pp_dimensions['height']).replace(/{wmode}/g,settings.wmode).replace(/{path}/g,pp_images[set_position]).replace(/{autoplay}/g,settings.autoplay);
          break;
        
          case 'flash':
            pp_dimensions = _fitToViewport(movie_width,movie_height); // Fit item to viewport
          
            flash_vars = pp_images[set_position];
            flash_vars = flash_vars.substring(pp_images[set_position].indexOf('flashvars') + 10,pp_images[set_position].length);

            filename = pp_images[set_position];
            filename = filename.substring(0,filename.indexOf('?'));
          
            toInject =  settings.flash_markup.replace(/{width}/g,pp_dimensions['width']).replace(/{height}/g,pp_dimensions['height']).replace(/{wmode}/g,settings.wmode).replace(/{path}/g,filename+'?'+flash_vars);
          break;
        
          case 'iframe':
            pp_dimensions = _fitToViewport(movie_width,movie_height); // Fit item to viewport
        
            frame_url = pp_images[set_position];
            frame_url = frame_url.substr(0,frame_url.indexOf('iframe')-1);

            toInject = settings.iframe_markup.replace(/{width}/g,pp_dimensions['width']).replace(/{height}/g,pp_dimensions['height']).replace(/{path}/g,frame_url);
          break;
          
          case 'ajax':
            doresize = false; // Make sure the dimensions are not resized.
            pp_dimensions = _fitToViewport(movie_width,movie_height);
            doresize = true; // Reset the dimensions
          
            skipInjection = true;
            $.get(pp_images[set_position],function(responseHTML){
              toInject = settings.inline_markup.replace(/{content}/g,responseHTML);
              $pp_pic_holder.find('#pp_full_res')[0].innerHTML = toInject;
              _showContent();
            });
            
          break;
          
          case 'custom':
            pp_dimensions = _fitToViewport(movie_width,movie_height); // Fit item to viewport
          
            toInject = settings.custom_markup;
          break;
        
          case 'inline':
            // to get the item height clone it, apply default width, wrap it in the prettyPhoto containers , then delete
            myClone = $(pp_images[set_position]).clone().append('<br clear="all" />').css({'width':settings.default_width}).wrapInner('<div id="pp_full_res"><div class="pp_inline"></div></div>').appendTo($('body')).show();
            doresize = false; // Make sure the dimensions are not resized.
            pp_dimensions = _fitToViewport($(myClone).width(),$(myClone).height());
            doresize = true; // Reset the dimensions
            $(myClone).remove();
            toInject = settings.inline_markup.replace(/{content}/g,$(pp_images[set_position]).html());
          break;
        };

        if(!imgPreloader && !skipInjection){
          $pp_pic_holder.find('#pp_full_res')[0].innerHTML = toInject;
        
          // Show content
          _showContent();
        };
      });

      return false;
    };

  
    /**
    * Change page in the prettyPhoto modal box
    * @param direction {String} Direction of the paging, previous or next.
    */
    $.prettyPhoto.changePage = function(direction){
      currentGalleryPage = 0;
      
      if(direction == 'previous') {
        set_position--;
        if (set_position < 0) set_position = $(pp_images).size()-1;
      }else if(direction == 'next'){
        set_position++;
        if(set_position > $(pp_images).size()-1) set_position = 0;
      }else{
        set_position=direction;
      };
      
      rel_index = set_position;

      if(!doresize) doresize = true; // Allow the resizing of the images
      if(settings.allow_expand) {
        $('.pp_contract').removeClass('pp_contract').addClass('pp_expand');
      }

      _hideContent(function(){ $.prettyPhoto.open(); });
    };


    /**
    * Change gallery page in the prettyPhoto modal box
    * @param direction {String} Direction of the paging, previous or next.
    */
    $.prettyPhoto.changeGalleryPage = function(direction){
      if(direction=='next'){
        currentGalleryPage ++;

        if(currentGalleryPage > totalPage) currentGalleryPage = 0;
      }else if(direction=='previous'){
        currentGalleryPage --;

        if(currentGalleryPage < 0) currentGalleryPage = totalPage;
      }else{
        currentGalleryPage = direction;
      };
      
      slide_speed = (direction == 'next' || direction == 'previous') ? settings.animation_speed : 0;

      slide_to = currentGalleryPage * (itemsPerPage * itemWidth);

      $pp_gallery.find('ul').animate({left:-slide_to},slide_speed);
    };


    /**
    * Start the slideshow...
    */
    $.prettyPhoto.startSlideshow = function(){
      if(typeof pp_slideshow == 'undefined'){
        $pp_pic_holder.find('.pp_play').unbind('click').removeClass('pp_play').addClass('pp_pause').click(function(){
          $.prettyPhoto.stopSlideshow();
          return false;
        });
        pp_slideshow = setInterval($.prettyPhoto.startSlideshow,settings.slideshow);
      }else{
        $.prettyPhoto.changePage('next'); 
      };
    }


    /**
    * Stop the slideshow...
    */
    $.prettyPhoto.stopSlideshow = function(){
      $pp_pic_holder.find('.pp_pause').unbind('click').removeClass('pp_pause').addClass('pp_play').click(function(){
        $.prettyPhoto.startSlideshow();
        return false;
      });
      clearInterval(pp_slideshow);
      pp_slideshow=undefined;
    }


    /**
    * Closes prettyPhoto.
    */
    $.prettyPhoto.close = function(){
      if($pp_overlay.is(":animated")) return;
      
      $.prettyPhoto.stopSlideshow();
      
      $pp_pic_holder.stop().find('object,embed').css('visibility','hidden');
      
      $('div.pp_pic_holder,div.ppt,.pp_fade').fadeOut(settings.animation_speed,function(){ $(this).remove(); });
      
      $pp_overlay.fadeOut(settings.animation_speed, function(){
        
        if(settings.hideflash) $('object,embed,iframe[src*=youtube],iframe[src*=vimeo]').css('visibility','visible'); // Show the flash
        
        $(this).remove(); // No more need for the prettyPhoto markup
        
        $(window).unbind('scroll.prettyphoto');
        
        clearHashtag();
        
        settings.callback();
        
        doresize = true;
        
        pp_open = false;
        
        delete settings;
      });
    };
  
    /**
    * Set the proper sizes on the containers and animate the content in.
    */
    function _showContent(){
      $('.pp_loaderIcon').hide();

      // Calculate the opened top position of the pic holder
      projectedTop = scroll_pos['scrollTop'] + ((windowHeight/2) - (pp_dimensions['containerHeight']/2));
      if(projectedTop < 0) projectedTop = 0;

      $ppt.fadeTo(settings.animation_speed,1);

      // Resize the content holder
      $pp_pic_holder.find('.pp_content')
        .animate({
          height:pp_dimensions['contentHeight'],
          width:pp_dimensions['contentWidth']
        },settings.animation_speed);
      
      // Resize picture the holder
      $pp_pic_holder.animate({
        'top': projectedTop,
        'left': ((windowWidth/2) - (pp_dimensions['containerWidth']/2) < 0) ? 0 : (windowWidth/2) - (pp_dimensions['containerWidth']/2),
        width:pp_dimensions['containerWidth']
      },settings.animation_speed,function(){
        $pp_pic_holder.find('.pp_hoverContainer,#fullResImage').height(pp_dimensions['height']).width(pp_dimensions['width']);

        $pp_pic_holder.find('.pp_fade').fadeIn(settings.animation_speed); // Fade the new content

        // Show the nav
        if(isSet && _getFileType(pp_images[set_position])=="image") { $pp_pic_holder.find('.pp_hoverContainer').show(); }else{ $pp_pic_holder.find('.pp_hoverContainer').hide(); }
      
        if(settings.allow_expand) {
          if(pp_dimensions['resized']){ // Fade the resizing link if the image is resized
            $('a.pp_expand,a.pp_contract').show();
          }else{
            $('a.pp_expand').hide();
          }
        }
        
        if(settings.autoplay_slideshow && !pp_slideshow && !pp_open) $.prettyPhoto.startSlideshow();
        
        settings.changepicturecallback(); // Callback!
        
        pp_open = true;
      });
      
      _insert_gallery();
      pp_settings.ajaxcallback();
    };
    
    /**
    * Hide the content...DUH!
    */
    function _hideContent(callback){
      // Fade out the current picture
      $pp_pic_holder.find('#pp_full_res object,#pp_full_res embed').css('visibility','hidden');
      $pp_pic_holder.find('.pp_fade').fadeOut(settings.animation_speed,function(){
        $('.pp_loaderIcon').show();
        
        callback();
      });
    };
  
    /**
    * Check the item position in the gallery array, hide or show the navigation links
    * @param setCount {integer} The total number of items in the set
    */
    function _checkPosition(setCount){
      (setCount > 1) ? $('.pp_nav').show() : $('.pp_nav').hide(); // Hide the bottom nav if it's not a set.
    };
  
    /**
    * Resize the item dimensions if it's bigger than the viewport
    * @param width {integer} Width of the item to be opened
    * @param height {integer} Height of the item to be opened
    * @return An array containin the "fitted" dimensions
    */
    function _fitToViewport(width,height){
      resized = false;

      _getDimensions(width,height);
      
      // Define them in case there's no resize needed
      imageWidth = width, imageHeight = height;

      if( ((pp_containerWidth > windowWidth) || (pp_containerHeight > windowHeight)) && doresize && settings.allow_resize && !percentBased) {
        resized = true, fitting = false;
      
        while (!fitting){
          if((pp_containerWidth > windowWidth)){
            imageWidth = (windowWidth - 200);
            imageHeight = (height/width) * imageWidth;
          }else if((pp_containerHeight > windowHeight)){
            imageHeight = (windowHeight - 200);
            imageWidth = (width/height) * imageHeight;
          }else{
            fitting = true;
          };

          pp_containerHeight = imageHeight, pp_containerWidth = imageWidth;
        };
      

        
        if((pp_containerWidth > windowWidth) || (pp_containerHeight > windowHeight)){
          _fitToViewport(pp_containerWidth,pp_containerHeight)
        };
        
        _getDimensions(imageWidth,imageHeight);
      };
      
      return {
        width:Math.floor(imageWidth),
        height:Math.floor(imageHeight),
        containerHeight:Math.floor(pp_containerHeight),
        containerWidth:Math.floor(pp_containerWidth) + (settings.horizontal_padding * 2),
        contentHeight:Math.floor(pp_contentHeight),
        contentWidth:Math.floor(pp_contentWidth),
        resized:resized
      };
    };
    
    /**
    * Get the containers dimensions according to the item size
    * @param width {integer} Width of the item to be opened
    * @param height {integer} Height of the item to be opened
    */
    function _getDimensions(width,height){
      width = parseFloat(width);
      height = parseFloat(height);
      
      // Get the details height, to do so, I need to clone it since it's invisible
      $pp_details = $pp_pic_holder.find('.pp_details');
      $pp_details.width(width);
      detailsHeight = parseFloat($pp_details.css('marginTop')) + parseFloat($pp_details.css('marginBottom'));
      
      $pp_details = $pp_details.clone().addClass(settings.theme).width(width).appendTo($('body')).css({
        'position':'absolute',
        'top':-10000
      });
      detailsHeight += $pp_details.height();
      detailsHeight = (detailsHeight <= 34) ? 36 : detailsHeight; // Min-height for the details
      $pp_details.remove();
      
      // Get the titles height, to do so, I need to clone it since it's invisible
      $pp_title = $pp_pic_holder.find('.ppt');
      $pp_title.width(width);
      titleHeight = parseFloat($pp_title.css('marginTop')) + parseFloat($pp_title.css('marginBottom'));
      $pp_title = $pp_title.clone().appendTo($('body')).css({
        'position':'absolute',
        'top':-10000
      });
      titleHeight += $pp_title.height();
      $pp_title.remove();
      
      // Get the container size, to resize the holder to the right dimensions
      pp_contentHeight = height + detailsHeight;
      pp_contentWidth = width;
      pp_containerHeight = pp_contentHeight + titleHeight + $pp_pic_holder.find('.pp_top').height() + $pp_pic_holder.find('.pp_bottom').height();
      pp_containerWidth = width;
    }
  
    function _getFileType(itemSrc){
      if (itemSrc.match(/youtube\.com\/watch/i) || itemSrc.match(/youtu\.be/i)) {
        return 'youtube';
      }else if (itemSrc.match(/vimeo\.com/i)) {
        return 'vimeo';
      }else if(itemSrc.match(/\b.mov\b/i)){ 
        return 'quicktime';
      }else if(itemSrc.match(/\b.swf\b/i)){
        return 'flash';
      }else if(itemSrc.match(/\biframe=true\b/i)){
        return 'iframe';
      }else if(itemSrc.match(/\bajax=true\b/i)){
        return 'ajax';
      }else if(itemSrc.match(/\bcustom=true\b/i)){
        return 'custom';
      }else if(itemSrc.substr(0,1) == '#'){
        return 'inline';
      }else{
        return 'image';
      };
    };
  
    function _center_overlay(){
      if(doresize && typeof $pp_pic_holder != 'undefined') {
        scroll_pos = _get_scroll();
        contentHeight = $pp_pic_holder.height(), contentwidth = $pp_pic_holder.width();

        projectedTop = (windowHeight/2) + scroll_pos['scrollTop'] - (contentHeight/2);
        if(projectedTop < 0) projectedTop = 0;
        
        if(contentHeight > windowHeight)
          return;

        $pp_pic_holder.css({
          'top': projectedTop,
          'left': (windowWidth/2) + scroll_pos['scrollLeft'] - (contentwidth/2)
        });
      };
    };
  
    function _get_scroll(){
      if (self.pageYOffset) {
        return {scrollTop:self.pageYOffset,scrollLeft:self.pageXOffset};
      } else if (document.documentElement && document.documentElement.scrollTop) { // Explorer 6 Strict
        return {scrollTop:document.documentElement.scrollTop,scrollLeft:document.documentElement.scrollLeft};
      } else if (document.body) {// all other Explorers
        return {scrollTop:document.body.scrollTop,scrollLeft:document.body.scrollLeft};
      };
    };
  
    function _resize_overlay() {
      windowHeight = $(window).height(), windowWidth = $(window).width();
      
      if(typeof $pp_overlay != "undefined") $pp_overlay.height($(document).height()).width(windowWidth);
    };
  
    function _insert_gallery(){
      if(isSet && settings.overlay_gallery && _getFileType(pp_images[set_position])=="image") {
        itemWidth = 52+5; // 52 beign the thumb width, 5 being the right margin.
        navWidth = (settings.theme == "facebook" || settings.theme == "pp_default") ? 50 : 30; // Define the arrow width depending on the theme
        
        itemsPerPage = Math.floor((pp_dimensions['containerWidth'] - 100 - navWidth) / itemWidth);
        itemsPerPage = (itemsPerPage < pp_images.length) ? itemsPerPage : pp_images.length;
        totalPage = Math.ceil(pp_images.length / itemsPerPage) - 1;

        // Hide the nav in the case there's no need for links
        if(totalPage == 0){
          navWidth = 0; // No nav means no width!
          $pp_gallery.find('.pp_arrow_next,.pp_arrow_previous').hide();
        }else{
          $pp_gallery.find('.pp_arrow_next,.pp_arrow_previous').show();
        };

        galleryWidth = itemsPerPage * itemWidth;
        fullGalleryWidth = pp_images.length * itemWidth;
        
        // Set the proper width to the gallery items
        $pp_gallery
          .css('margin-left',-((galleryWidth/2) + (navWidth/2)))
          .find('div:first').width(galleryWidth+5)
          .find('ul').width(fullGalleryWidth)
          .find('li.selected').removeClass('selected');
        
        goToPage = (Math.floor(set_position/itemsPerPage) < totalPage) ? Math.floor(set_position/itemsPerPage) : totalPage;

        $.prettyPhoto.changeGalleryPage(goToPage);
        
        $pp_gallery_li.filter(':eq('+set_position+')').addClass('selected');
      }else{
        $pp_pic_holder.find('.pp_content').unbind('mouseenter mouseleave');
        // $pp_gallery.hide();
      }
    }
  
    function _build_overlay(caller){
      // Inject Social Tool markup into General markup
      if(settings.social_tools)
        facebook_like_link = settings.social_tools.replace('{location_href}', encodeURIComponent(location.href)); 

      settings.markup = settings.markup.replace('{pp_social}',''); 
      
      $('body').append(settings.markup); // Inject the markup
      
      $pp_pic_holder = $('.pp_pic_holder') , $ppt = $('.ppt'), $pp_overlay = $('div.pp_overlay'); // Set my global selectors
      
      // Inject the inline gallery!
      if(isSet && settings.overlay_gallery) {
        currentGalleryPage = 0;
        toInject = "";
        for (var i=0; i < pp_images.length; i++) {
          if(!pp_images[i].match(/\b(jpg|jpeg|png|gif)\b/gi)){
            classname = 'default';
            img_src = '';
          }else{
            classname = '';
            img_src = pp_images[i];
          }
          toInject += "<li class='"+classname+"'><a href='#'><img src='" + img_src + "' width='50' alt='' /></a></li>";
        };
        
        toInject = settings.gallery_markup.replace(/{gallery}/g,toInject);
        
        $pp_pic_holder.find('#pp_full_res').after(toInject);
        
        $pp_gallery = $('.pp_pic_holder .pp_gallery'), $pp_gallery_li = $pp_gallery.find('li'); // Set the gallery selectors
        
        $pp_gallery.find('.pp_arrow_next').click(function(){
          $.prettyPhoto.changeGalleryPage('next');
          $.prettyPhoto.stopSlideshow();
          return false;
        });
        
        $pp_gallery.find('.pp_arrow_previous').click(function(){
          $.prettyPhoto.changeGalleryPage('previous');
          $.prettyPhoto.stopSlideshow();
          return false;
        });
        
        $pp_pic_holder.find('.pp_content').hover(
          function(){
            $pp_pic_holder.find('.pp_gallery:not(.disabled)').fadeIn();
          },
          function(){
            $pp_pic_holder.find('.pp_gallery:not(.disabled)').fadeOut();
          });

        itemWidth = 52+5; // 52 beign the thumb width, 5 being the right margin.
        $pp_gallery_li.each(function(i){
          $(this)
            .find('a')
            .click(function(){
              $.prettyPhoto.changePage(i);
              $.prettyPhoto.stopSlideshow();
              return false;
            });
        });
      };
      
      
      // Inject the play/pause if it's a slideshow
      if(settings.slideshow){
        $pp_pic_holder.find('.pp_nav').prepend('<a href="#" class="pp_play">Play</a>')
        $pp_pic_holder.find('.pp_nav .pp_play').click(function(){
          $.prettyPhoto.startSlideshow();
          return false;
        });
      }
      
      $pp_pic_holder.attr('class','pp_pic_holder ' + settings.theme); // Set the proper theme
      
      $pp_overlay
        .css({
          'opacity':0,
          'height':$(document).height(),
          'width':$(window).width()
          })
        .bind('click',function(){
          if(!settings.modal) $.prettyPhoto.close();
        });

      $('a.pp_close').bind('click',function(){ $.prettyPhoto.close(); return false; });


      if(settings.allow_expand) {
        $('a.pp_expand').bind('click',function(e){
          // Expand the image
          if($(this).hasClass('pp_expand')){
            $(this).removeClass('pp_expand').addClass('pp_contract');
            doresize = false;
          }else{
            $(this).removeClass('pp_contract').addClass('pp_expand');
            doresize = true;
          };
        
          _hideContent(function(){ $.prettyPhoto.open(); });
      
          return false;
        });
      }
    
      $pp_pic_holder.find('.pp_previous, .pp_nav .pp_arrow_previous').bind('click',function(){
        $.prettyPhoto.changePage('previous');
        $.prettyPhoto.stopSlideshow();
        return false;
      });
    
      $pp_pic_holder.find('.pp_next, .pp_nav .pp_arrow_next').bind('click',function(){
        $.prettyPhoto.changePage('next');
        $.prettyPhoto.stopSlideshow();
        return false;
      });
      
      _center_overlay(); // Center it
    };

    if(!pp_alreadyInitialized && getHashtag()){
      pp_alreadyInitialized = true;
      
      // Grab the rel index to trigger the click on the correct element
      hashIndex = getHashtag();
      hashRel = hashIndex;
      hashIndex = hashIndex.substring(hashIndex.indexOf('/')+1,hashIndex.length-1);
      hashRel = hashRel.substring(0,hashRel.indexOf('/'));

      // Little timeout to make sure all the prettyPhoto initialize scripts has been run.
      // Useful in the event the page contain several init scripts.
      setTimeout(function(){ $("a["+pp_settings.hook+"^='"+hashRel+"']:eq("+hashIndex+")").trigger('click'); },50);
    }
    
    return this.unbind('click.prettyphoto').bind('click.prettyphoto',$.prettyPhoto.initialize); // Return the jQuery object for chaining. The unbind method is used to avoid click conflict when the plugin is called more than once
  };
  
  function getHashtag(){
    var url = location.href;
    hashtag = (url.indexOf('#prettyPhoto') !== -1) ? decodeURI(url.substring(url.indexOf('#prettyPhoto')+1,url.length)) : false;

    return hashtag;
  };
  
  function setHashtag(){
    if(typeof theRel == 'undefined') return; // theRel is set on normal calls, it's impossible to deeplink using the API
    location.hash = theRel + '/'+rel_index+'/';
  };
  
  function clearHashtag(){
    if ( location.href.indexOf('#prettyPhoto') !== -1 ) location.hash = "prettyPhoto";
  }
  
  function getParam(name,url){
    name = name.replace(/[\[]/,"\\\[").replace(/[\]]/,"\\\]");
    var regexS = "[\\?&]"+name+"=([^&#]*)";
    var regex = new RegExp( regexS );
    var results = regex.exec( url );
    return ( results == null ) ? "" : results[1];
  }
  
})(jQuery);

var pp_alreadyInitialized = false; // Used for the deep linking to make sure not to call the same function several times.
