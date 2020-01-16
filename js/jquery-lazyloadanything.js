  


<!DOCTYPE html>
<html>
  <head prefix="og: http://ogp.me/ns# fb: http://ogp.me/ns/fb# githubog: http://ogp.me/ns/fb/githubog#">
    <meta charset='utf-8'>
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <title>jquery-lazyloadanything/jquery-lazyloadanything.js at master · shrimpwagon/jquery-lazyloadanything · GitHub</title>
    <link rel="search" type="application/opensearchdescription+xml" href="/opensearch.xml" title="GitHub" />
    <link rel="fluid-icon" href="https://github.com/fluidicon.png" title="GitHub" />
    <link rel="apple-touch-icon" sizes="57x57" href="/apple-touch-icon-114.png" />
    <link rel="apple-touch-icon" sizes="114x114" href="/apple-touch-icon-114.png" />
    <link rel="apple-touch-icon" sizes="72x72" href="/apple-touch-icon-144.png" />
    <link rel="apple-touch-icon" sizes="144x144" href="/apple-touch-icon-144.png" />
    <link rel="logo" type="image/svg" href="http://github-media-downloads.s3.amazonaws.com/github-logo.svg" />
    <link rel="xhr-socket" href="/_sockets">
    <meta name="msapplication-TileImage" content="/windows-tile.png">
    <meta name="msapplication-TileColor" content="#ffffff">

    
    
    <link rel="icon" type="image/x-icon" href="/favicon.ico" />

    <meta content="authenticity_token" name="csrf-param" />
<meta content="ZEBbKzCZMZHcs/MW7rbOCKLL2QHkX/Jtj3VJEjq68vo=" name="csrf-token" />

    <link href="https://a248.e.akamai.net/assets.github.com/assets/github-202e33a586eb990be0ca930957d0d26c9d440e4b.css" media="all" rel="stylesheet" type="text/css" />
    <link href="https://a248.e.akamai.net/assets.github.com/assets/github2-54d5f0f93e4b5fa56548ac41e306faf4eec18a6c.css" media="all" rel="stylesheet" type="text/css" />
    


      <script src="https://a248.e.akamai.net/assets.github.com/assets/frameworks-92d138f450f2960501e28397a2f63b0f100590f0.js" type="text/javascript"></script>
      <script src="https://a248.e.akamai.net/assets.github.com/assets/github-79f2823dcb759d8be14a47cc3866f523e4e21124.js" type="text/javascript"></script>
      
      <meta http-equiv="x-pjax-version" content="6783c79a73bd54c60e70db0ff2be87db">

        <link data-pjax-transient rel='permalink' href='/shrimpwagon/jquery-lazyloadanything/blob/7e6998fd561160e9f8c2349ac51b2962bab17d0c/jquery-lazyloadanything.js'>
    <meta property="og:title" content="jquery-lazyloadanything"/>
    <meta property="og:type" content="githubog:gitrepository"/>
    <meta property="og:url" content="https://github.com/shrimpwagon/jquery-lazyloadanything"/>
    <meta property="og:image" content="https://secure.gravatar.com/avatar/38b42911484f66ee5aedadaa16846340?s=420&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png"/>
    <meta property="og:site_name" content="GitHub"/>
    <meta property="og:description" content="jquery-lazyloadanything - Lazy load (trigger events) when elements come into view"/>
    <meta property="twitter:card" content="summary"/>
    <meta property="twitter:site" content="@GitHub">
    <meta property="twitter:title" content="shrimpwagon/jquery-lazyloadanything"/>

    <meta name="description" content="jquery-lazyloadanything - Lazy load (trigger events) when elements come into view" />

  <link href="https://github.com/shrimpwagon/jquery-lazyloadanything/commits/master.atom" rel="alternate" title="Recent Commits to jquery-lazyloadanything:master" type="application/atom+xml" />

  </head>


  <body class="logged_out page-blob windows vis-public env-production  ">
    <div id="wrapper">

      

      
      
      

      
      <div class="header header-logged-out">
  <div class="container clearfix">

      <a class="header-logo-wordmark" href="https://github.com/">Github</a>

    <div class="header-actions">
        <a class="button primary" href="https://github.com/signup">Sign up for free</a>
      <a class="button" href="https://github.com/login?return_to=%2Fshrimpwagon%2Fjquery-lazyloadanything%2Fblob%2Fmaster%2Fjquery-lazyloadanything.js">Sign in</a>
    </div>

      <ul class="top-nav">
          <li class="explore"><a href="https://github.com/explore">Explore GitHub</a></li>
        <li class="search"><a href="https://github.com/search">Search</a></li>
        <li class="features"><a href="https://github.com/features">Features</a></li>
          <li class="blog"><a href="https://github.com/blog">Blog</a></li>
      </ul>

  </div>
</div>


      

      


            <div class="site hfeed" itemscope itemtype="http://schema.org/WebPage">
      <div class="hentry">
        
        <div class="pagehead repohead instapaper_ignore readability-menu ">
          <div class="container">
            <div class="title-actions-bar">
              


<ul class="pagehead-actions">



    <li>
      <a href="/login?return_to=%2Fshrimpwagon%2Fjquery-lazyloadanything"
        class="minibutton js-toggler-target star-button entice tooltipped upwards"
        title="You must be signed in to use this feature" rel="nofollow">
        <span class="mini-icon mini-icon-star"></span>Star
      </a>
      <a class="social-count js-social-count" href="/shrimpwagon/jquery-lazyloadanything/stargazers">
        3
      </a>
    </li>
    <li>
      <a href="/login?return_to=%2Fshrimpwagon%2Fjquery-lazyloadanything"
        class="minibutton js-toggler-target fork-button entice tooltipped upwards"
        title="You must be signed in to fork a repository" rel="nofollow">
        <span class="mini-icon mini-icon-fork"></span>Fork
      </a>
      <a href="/shrimpwagon/jquery-lazyloadanything/network" class="social-count">
        0
      </a>
    </li>
</ul>

              <h1 itemscope itemtype="http://data-vocabulary.org/Breadcrumb" class="entry-title public">
                <span class="repo-label"><span>public</span></span>
                <span class="mega-icon mega-icon-public-repo"></span>
                <span class="author vcard">
                  <a href="/shrimpwagon" class="url fn" itemprop="url" rel="author">
                  <span itemprop="title">shrimpwagon</span>
                  </a></span> /
                <strong><a href="/shrimpwagon/jquery-lazyloadanything" class="js-current-repository">jquery-lazyloadanything</a></strong>
              </h1>
            </div>

            
  <ul class="tabs">
      <li class="pulse-nav"><a href="/shrimpwagon/jquery-lazyloadanything/pulse" highlight="pulse" rel="nofollow"><span class="mini-icon mini-icon-pulse"></span></a></li>
    <li><a href="/shrimpwagon/jquery-lazyloadanything" class="selected" highlight="repo_source repo_downloads repo_commits repo_tags repo_branches">Code</a></li>
    <li><a href="/shrimpwagon/jquery-lazyloadanything/network" highlight="repo_network">Network</a></li>
    <li><a href="/shrimpwagon/jquery-lazyloadanything/pulls" highlight="repo_pulls">Pull Requests <span class='counter'>0</span></a></li>

      <li><a href="/shrimpwagon/jquery-lazyloadanything/issues" highlight="repo_issues">Issues <span class='counter'>0</span></a></li>



    <li><a href="/shrimpwagon/jquery-lazyloadanything/graphs" highlight="repo_graphs repo_contributors">Graphs</a></li>


  </ul>
  
<div class="tabnav">

  <span class="tabnav-right">
    <ul class="tabnav-tabs">
          <li><a href="/shrimpwagon/jquery-lazyloadanything/tags" class="tabnav-tab" highlight="repo_tags">Tags <span class="counter blank">0</span></a></li>
    </ul>
    
  </span>

  <div class="tabnav-widget scope">


    <div class="select-menu js-menu-container js-select-menu js-branch-menu">
      <a class="minibutton select-menu-button js-menu-target" data-hotkey="w" data-ref="master">
        <span class="mini-icon mini-icon-branch"></span>
        <i>branch:</i>
        <span class="js-select-button">master</span>
      </a>

      <div class="select-menu-modal-holder js-menu-content js-navigation-container">

        <div class="select-menu-modal">
          <div class="select-menu-header">
            <span class="select-menu-title">Switch branches/tags</span>
            <span class="mini-icon mini-icon-remove-close js-menu-close"></span>
          </div> <!-- /.select-menu-header -->

          <div class="select-menu-filters">
            <div class="select-menu-text-filter">
              <input type="text" id="commitish-filter-field" class="js-filterable-field js-navigation-enable" placeholder="Filter branches/tags">
            </div>
            <div class="select-menu-tabs">
              <ul>
                <li class="select-menu-tab">
                  <a href="#" data-tab-filter="branches" class="js-select-menu-tab">Branches</a>
                </li>
                <li class="select-menu-tab">
                  <a href="#" data-tab-filter="tags" class="js-select-menu-tab">Tags</a>
                </li>
              </ul>
            </div><!-- /.select-menu-tabs -->
          </div><!-- /.select-menu-filters -->

          <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket css-truncate" data-tab-filter="branches">

            <div data-filterable-for="commitish-filter-field" data-filterable-type="substring">

                <div class="select-menu-item js-navigation-item js-navigation-target selected">
                  <span class="select-menu-item-icon mini-icon mini-icon-confirm"></span>
                  <a href="/shrimpwagon/jquery-lazyloadanything/blob/master/jquery-lazyloadanything.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="master" rel="nofollow" title="master">master</a>
                </div> <!-- /.select-menu-item -->
            </div>

              <div class="select-menu-no-results">Nothing to show</div>
          </div> <!-- /.select-menu-list -->


          <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket css-truncate" data-tab-filter="tags">
            <div data-filterable-for="commitish-filter-field" data-filterable-type="substring">

            </div>

            <div class="select-menu-no-results">Nothing to show</div>

          </div> <!-- /.select-menu-list -->

        </div> <!-- /.select-menu-modal -->
      </div> <!-- /.select-menu-modal-holder -->
    </div> <!-- /.select-menu -->

  </div> <!-- /.scope -->

  <ul class="tabnav-tabs">
    <li><a href="/shrimpwagon/jquery-lazyloadanything" class="selected tabnav-tab" highlight="repo_source">Files</a></li>
    <li><a href="/shrimpwagon/jquery-lazyloadanything/commits/master" class="tabnav-tab" highlight="repo_commits">Commits</a></li>
    <li><a href="/shrimpwagon/jquery-lazyloadanything/branches" class="tabnav-tab" highlight="repo_branches" rel="nofollow">Branches <span class="counter ">1</span></a></li>
  </ul>

</div>

  
  
  


            
          </div>
        </div><!-- /.repohead -->

        <div id="js-repo-pjax-container" class="container context-loader-container" data-pjax-container>
          


<!-- blob contrib key: blob_contributors:v21:a53467c441ec8e54063d2b8b39bcc22d -->
<!-- blob contrib frag key: views10/v8/blob_contributors:v21:a53467c441ec8e54063d2b8b39bcc22d -->


<div id="slider">
    <div class="frame-meta">

      <p title="This is a placeholder element" class="js-history-link-replace hidden"></p>

        <div class="breadcrumb">
          <span class='bold'><span itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/shrimpwagon/jquery-lazyloadanything" class="js-slide-to" data-branch="master" data-direction="back" itemscope="url"><span itemprop="title">jquery-lazyloadanything</span></a></span></span><span class="separator"> / </span><strong class="final-path">jquery-lazyloadanything.js</strong> <span class="js-zeroclipboard zeroclipboard-button" data-clipboard-text="jquery-lazyloadanything.js" data-copied-hint="copied!" title="copy to clipboard"><span class="mini-icon mini-icon-clipboard"></span></span>
        </div>

      <a href="/shrimpwagon/jquery-lazyloadanything/find/master" class="js-slide-to" data-hotkey="t" style="display:none">Show File Finder</a>


        
  <div class="commit file-history-tease">
    <img class="main-avatar" height="24" src="https://secure.gravatar.com/avatar/6838cadfd25f6b981d0ae72f1c9f9b02?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="24" />
    <span class="author"><span rel="author">Programmer</span></span>
    <time class="js-relative-date" datetime="2013-03-04T08:49:15-08:00" title="2013-03-04 08:49:15">March 04, 2013</time>
    <div class="commit-title">
        <a href="/shrimpwagon/jquery-lazyloadanything/commit/c0484de98dc5cb681db8d03bcfde9a2620986554" class="message">First commit, first version</a>
    </div>

    <div class="participation">
      <p class="quickstat"><a href="#blob_contributors_box" rel="facebox"><strong>0</strong> contributors</a></p>
      
    </div>
    <div id="blob_contributors_box" style="display:none">
      <h2>Users on GitHub who have contributed to this file</h2>
      <ul class="facebox-user-list">
      </ul>
    </div>
  </div>


    </div><!-- ./.frame-meta -->

    <div class="frames">
      <div class="frame" data-permalink-url="/shrimpwagon/jquery-lazyloadanything/blob/7e6998fd561160e9f8c2349ac51b2962bab17d0c/jquery-lazyloadanything.js" data-title="jquery-lazyloadanything/jquery-lazyloadanything.js at master · shrimpwagon/jquery-lazyloadanything · GitHub" data-type="blob">

        <div id="files" class="bubble">
          <div class="file">
            <div class="meta">
              <div class="info">
                <span class="icon"><b class="mini-icon mini-icon-text-file"></b></span>
                <span class="mode" title="File Mode">file</span>
                  <span>175 lines (124 sloc)</span>
                <span>4.306 kb</span>
              </div>
              <div class="actions">
                <div class="button-group">
                      <a class="minibutton js-entice" href=""
                         data-entice="You must be signed in and on a branch to make or propose changes">Edit</a>
                  <a href="/shrimpwagon/jquery-lazyloadanything/raw/master/jquery-lazyloadanything.js" class="button minibutton " id="raw-url">Raw</a>
                    <a href="/shrimpwagon/jquery-lazyloadanything/blame/master/jquery-lazyloadanything.js" class="button minibutton ">Blame</a>
                  <a href="/shrimpwagon/jquery-lazyloadanything/commits/master/jquery-lazyloadanything.js" class="button minibutton " rel="nofollow">History</a>
                </div><!-- /.button-group -->
              </div><!-- /.actions -->

            </div>
                <div class="blob-wrapper data type-javascript js-blob-data">
      <table class="file-code file-diff">
        <tr class="file-code-line">
          <td class="blob-line-nums">
            <span id="L1" rel="#L1">1</span>
<span id="L2" rel="#L2">2</span>
<span id="L3" rel="#L3">3</span>
<span id="L4" rel="#L4">4</span>
<span id="L5" rel="#L5">5</span>
<span id="L6" rel="#L6">6</span>
<span id="L7" rel="#L7">7</span>
<span id="L8" rel="#L8">8</span>
<span id="L9" rel="#L9">9</span>
<span id="L10" rel="#L10">10</span>
<span id="L11" rel="#L11">11</span>
<span id="L12" rel="#L12">12</span>
<span id="L13" rel="#L13">13</span>
<span id="L14" rel="#L14">14</span>
<span id="L15" rel="#L15">15</span>
<span id="L16" rel="#L16">16</span>
<span id="L17" rel="#L17">17</span>
<span id="L18" rel="#L18">18</span>
<span id="L19" rel="#L19">19</span>
<span id="L20" rel="#L20">20</span>
<span id="L21" rel="#L21">21</span>
<span id="L22" rel="#L22">22</span>
<span id="L23" rel="#L23">23</span>
<span id="L24" rel="#L24">24</span>
<span id="L25" rel="#L25">25</span>
<span id="L26" rel="#L26">26</span>
<span id="L27" rel="#L27">27</span>
<span id="L28" rel="#L28">28</span>
<span id="L29" rel="#L29">29</span>
<span id="L30" rel="#L30">30</span>
<span id="L31" rel="#L31">31</span>
<span id="L32" rel="#L32">32</span>
<span id="L33" rel="#L33">33</span>
<span id="L34" rel="#L34">34</span>
<span id="L35" rel="#L35">35</span>
<span id="L36" rel="#L36">36</span>
<span id="L37" rel="#L37">37</span>
<span id="L38" rel="#L38">38</span>
<span id="L39" rel="#L39">39</span>
<span id="L40" rel="#L40">40</span>
<span id="L41" rel="#L41">41</span>
<span id="L42" rel="#L42">42</span>
<span id="L43" rel="#L43">43</span>
<span id="L44" rel="#L44">44</span>
<span id="L45" rel="#L45">45</span>
<span id="L46" rel="#L46">46</span>
<span id="L47" rel="#L47">47</span>
<span id="L48" rel="#L48">48</span>
<span id="L49" rel="#L49">49</span>
<span id="L50" rel="#L50">50</span>
<span id="L51" rel="#L51">51</span>
<span id="L52" rel="#L52">52</span>
<span id="L53" rel="#L53">53</span>
<span id="L54" rel="#L54">54</span>
<span id="L55" rel="#L55">55</span>
<span id="L56" rel="#L56">56</span>
<span id="L57" rel="#L57">57</span>
<span id="L58" rel="#L58">58</span>
<span id="L59" rel="#L59">59</span>
<span id="L60" rel="#L60">60</span>
<span id="L61" rel="#L61">61</span>
<span id="L62" rel="#L62">62</span>
<span id="L63" rel="#L63">63</span>
<span id="L64" rel="#L64">64</span>
<span id="L65" rel="#L65">65</span>
<span id="L66" rel="#L66">66</span>
<span id="L67" rel="#L67">67</span>
<span id="L68" rel="#L68">68</span>
<span id="L69" rel="#L69">69</span>
<span id="L70" rel="#L70">70</span>
<span id="L71" rel="#L71">71</span>
<span id="L72" rel="#L72">72</span>
<span id="L73" rel="#L73">73</span>
<span id="L74" rel="#L74">74</span>
<span id="L75" rel="#L75">75</span>
<span id="L76" rel="#L76">76</span>
<span id="L77" rel="#L77">77</span>
<span id="L78" rel="#L78">78</span>
<span id="L79" rel="#L79">79</span>
<span id="L80" rel="#L80">80</span>
<span id="L81" rel="#L81">81</span>
<span id="L82" rel="#L82">82</span>
<span id="L83" rel="#L83">83</span>
<span id="L84" rel="#L84">84</span>
<span id="L85" rel="#L85">85</span>
<span id="L86" rel="#L86">86</span>
<span id="L87" rel="#L87">87</span>
<span id="L88" rel="#L88">88</span>
<span id="L89" rel="#L89">89</span>
<span id="L90" rel="#L90">90</span>
<span id="L91" rel="#L91">91</span>
<span id="L92" rel="#L92">92</span>
<span id="L93" rel="#L93">93</span>
<span id="L94" rel="#L94">94</span>
<span id="L95" rel="#L95">95</span>
<span id="L96" rel="#L96">96</span>
<span id="L97" rel="#L97">97</span>
<span id="L98" rel="#L98">98</span>
<span id="L99" rel="#L99">99</span>
<span id="L100" rel="#L100">100</span>
<span id="L101" rel="#L101">101</span>
<span id="L102" rel="#L102">102</span>
<span id="L103" rel="#L103">103</span>
<span id="L104" rel="#L104">104</span>
<span id="L105" rel="#L105">105</span>
<span id="L106" rel="#L106">106</span>
<span id="L107" rel="#L107">107</span>
<span id="L108" rel="#L108">108</span>
<span id="L109" rel="#L109">109</span>
<span id="L110" rel="#L110">110</span>
<span id="L111" rel="#L111">111</span>
<span id="L112" rel="#L112">112</span>
<span id="L113" rel="#L113">113</span>
<span id="L114" rel="#L114">114</span>
<span id="L115" rel="#L115">115</span>
<span id="L116" rel="#L116">116</span>
<span id="L117" rel="#L117">117</span>
<span id="L118" rel="#L118">118</span>
<span id="L119" rel="#L119">119</span>
<span id="L120" rel="#L120">120</span>
<span id="L121" rel="#L121">121</span>
<span id="L122" rel="#L122">122</span>
<span id="L123" rel="#L123">123</span>
<span id="L124" rel="#L124">124</span>
<span id="L125" rel="#L125">125</span>
<span id="L126" rel="#L126">126</span>
<span id="L127" rel="#L127">127</span>
<span id="L128" rel="#L128">128</span>
<span id="L129" rel="#L129">129</span>
<span id="L130" rel="#L130">130</span>
<span id="L131" rel="#L131">131</span>
<span id="L132" rel="#L132">132</span>
<span id="L133" rel="#L133">133</span>
<span id="L134" rel="#L134">134</span>
<span id="L135" rel="#L135">135</span>
<span id="L136" rel="#L136">136</span>
<span id="L137" rel="#L137">137</span>
<span id="L138" rel="#L138">138</span>
<span id="L139" rel="#L139">139</span>
<span id="L140" rel="#L140">140</span>
<span id="L141" rel="#L141">141</span>
<span id="L142" rel="#L142">142</span>
<span id="L143" rel="#L143">143</span>
<span id="L144" rel="#L144">144</span>
<span id="L145" rel="#L145">145</span>
<span id="L146" rel="#L146">146</span>
<span id="L147" rel="#L147">147</span>
<span id="L148" rel="#L148">148</span>
<span id="L149" rel="#L149">149</span>
<span id="L150" rel="#L150">150</span>
<span id="L151" rel="#L151">151</span>
<span id="L152" rel="#L152">152</span>
<span id="L153" rel="#L153">153</span>
<span id="L154" rel="#L154">154</span>
<span id="L155" rel="#L155">155</span>
<span id="L156" rel="#L156">156</span>
<span id="L157" rel="#L157">157</span>
<span id="L158" rel="#L158">158</span>
<span id="L159" rel="#L159">159</span>
<span id="L160" rel="#L160">160</span>
<span id="L161" rel="#L161">161</span>
<span id="L162" rel="#L162">162</span>
<span id="L163" rel="#L163">163</span>
<span id="L164" rel="#L164">164</span>
<span id="L165" rel="#L165">165</span>
<span id="L166" rel="#L166">166</span>
<span id="L167" rel="#L167">167</span>
<span id="L168" rel="#L168">168</span>
<span id="L169" rel="#L169">169</span>
<span id="L170" rel="#L170">170</span>
<span id="L171" rel="#L171">171</span>
<span id="L172" rel="#L172">172</span>
<span id="L173" rel="#L173">173</span>
<span id="L174" rel="#L174">174</span>

          </td>
          <td class="blob-line-code">
                  <div class="highlight"><pre><div class='line' id='LC1'><span class="cm">/*!</span></div><div class='line' id='LC2'><span class="cm">	jQuery LazyLoadAnything - 2013-03-04</span></div><div class='line' id='LC3'><span class="cm">	(c) 2013 Shawn Welch http://shrimpwagon.wordpress.com/jquery-lazyloadanything</span></div><div class='line' id='LC4'><span class="cm">	license: http://www.opensource.org/licenses/mit-license.php</span></div><div class='line' id='LC5'><span class="cm">*/</span></div><div class='line' id='LC6'><span class="p">(</span><span class="kd">function</span><span class="p">(</span> <span class="nx">$</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC7'><br/></div><div class='line' id='LC8'>	<span class="c1">// Cache jQuery window</span></div><div class='line' id='LC9'>	<span class="kd">var</span> <span class="nx">$window</span> <span class="o">=</span> <span class="nx">$</span><span class="p">(</span><span class="nb">window</span><span class="p">);</span></div><div class='line' id='LC10'><br/></div><div class='line' id='LC11'>	<span class="c1">// Force load flag</span></div><div class='line' id='LC12'>	<span class="kd">var</span> <span class="nx">force_load_flag</span> <span class="o">=</span> <span class="kc">false</span><span class="p">;</span></div><div class='line' id='LC13'><br/></div><div class='line' id='LC14'>	<span class="c1">// Plugin methods</span></div><div class='line' id='LC15'>	<span class="kd">var</span> <span class="nx">methods</span> <span class="o">=</span> <span class="p">{</span></div><div class='line' id='LC16'><br/></div><div class='line' id='LC17'>		<span class="s1">&#39;init&#39;</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">options</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC18'><br/></div><div class='line' id='LC19'>			<span class="kd">var</span> <span class="nx">defaults</span> <span class="o">=</span> <span class="p">{</span></div><div class='line' id='LC20'>				<span class="s1">&#39;auto&#39;</span><span class="o">:</span> <span class="kc">true</span><span class="p">,</span></div><div class='line' id='LC21'>				<span class="s1">&#39;cache&#39;</span><span class="o">:</span> <span class="kc">false</span><span class="p">,</span></div><div class='line' id='LC22'>				<span class="s1">&#39;timeout&#39;</span><span class="o">:</span> <span class="mi">1000</span><span class="p">,</span></div><div class='line' id='LC23'>				<span class="s1">&#39;includeMargin&#39;</span><span class="o">:</span> <span class="kc">false</span><span class="p">,</span></div><div class='line' id='LC24'>				<span class="s1">&#39;repeatLoad&#39;</span><span class="o">:</span> <span class="kc">false</span><span class="p">,</span></div><div class='line' id='LC25'>				<span class="s1">&#39;onLoadingStart&#39;</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">e</span><span class="p">,</span> <span class="nx">llelements</span><span class="p">,</span> <span class="nx">indexes</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC26'>					<span class="k">return</span> <span class="kc">true</span><span class="p">;</span></div><div class='line' id='LC27'>				<span class="p">},</span></div><div class='line' id='LC28'>				<span class="s1">&#39;onLoad&#39;</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">e</span><span class="p">,</span> <span class="nx">llelement</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC29'>					<span class="k">return</span> <span class="kc">true</span><span class="p">;</span></div><div class='line' id='LC30'>				<span class="p">},</span></div><div class='line' id='LC31'>				<span class="s1">&#39;onLoadingComplete&#39;</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">e</span><span class="p">,</span> <span class="nx">llelements</span><span class="p">,</span> <span class="nx">indexes</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC32'>					<span class="k">return</span> <span class="kc">true</span><span class="p">;</span></div><div class='line' id='LC33'>				<span class="p">}</span></div><div class='line' id='LC34'>			<span class="p">}</span></div><div class='line' id='LC35'><br/></div><div class='line' id='LC36'>			<span class="kd">var</span> <span class="nx">settings</span> <span class="o">=</span> <span class="nx">$</span><span class="p">.</span><span class="nx">extend</span><span class="p">({},</span> <span class="nx">defaults</span><span class="p">,</span> <span class="nx">options</span><span class="p">);</span></div><div class='line' id='LC37'>			<span class="kd">var</span> <span class="nx">timeout</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span></div><div class='line' id='LC38'>			<span class="kd">var</span> <span class="nx">llelements</span> <span class="o">=</span> <span class="p">[];</span></div><div class='line' id='LC39'>			<span class="kd">var</span> <span class="nx">$selector</span> <span class="o">=</span> <span class="k">this</span><span class="p">;</span></div><div class='line' id='LC40'><br/></div><div class='line' id='LC41'>			<span class="c1">// Scroll listener</span></div><div class='line' id='LC42'>			<span class="nx">$window</span><span class="p">.</span><span class="nx">bind</span><span class="p">(</span><span class="s1">&#39;scroll.lla&#39;</span><span class="p">,</span> <span class="kd">function</span><span class="p">(</span><span class="nx">e</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC43'><br/></div><div class='line' id='LC44'>				<span class="c1">// Check for manually/auto load</span></div><div class='line' id='LC45'>				<span class="k">if</span><span class="p">(</span><span class="o">!</span><span class="nx">force_load_flag</span> <span class="o">&amp;&amp;</span> <span class="o">!</span><span class="nx">settings</span><span class="p">.</span><span class="nx">auto</span><span class="p">)</span> <span class="k">return</span> <span class="kc">false</span><span class="p">;</span></div><div class='line' id='LC46'>				<span class="nx">force_load_flag</span> <span class="o">=</span> <span class="kc">false</span><span class="p">;</span></div><div class='line' id='LC47'><br/></div><div class='line' id='LC48'>				<span class="c1">// Clear timeout if scrolling continues</span></div><div class='line' id='LC49'>				<span class="nx">clearTimeout</span><span class="p">(</span><span class="nx">timeout</span><span class="p">);</span></div><div class='line' id='LC50'><br/></div><div class='line' id='LC51'>				<span class="c1">// Set the timeout for onLoad</span></div><div class='line' id='LC52'>				<span class="nx">timeout</span> <span class="o">=</span> <span class="nx">setTimeout</span><span class="p">(</span><span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC53'><br/></div><div class='line' id='LC54'>					<span class="kd">var</span> <span class="nx">load_elements</span> <span class="o">=</span> <span class="p">[];</span></div><div class='line' id='LC55'>					<span class="kd">var</span> <span class="nx">windowScrollTop</span> <span class="o">=</span> <span class="nx">$</span><span class="p">(</span><span class="nb">window</span><span class="p">).</span><span class="nx">scrollTop</span><span class="p">();</span></div><div class='line' id='LC56'>					<span class="kd">var</span> <span class="nx">windowScrollBottom</span> <span class="o">=</span> <span class="nx">windowScrollTop</span> <span class="o">+</span> <span class="nx">$</span><span class="p">(</span><span class="nb">window</span><span class="p">).</span><span class="nx">height</span><span class="p">();</span></div><div class='line' id='LC57'>					<span class="kd">var</span> <span class="nx">i</span><span class="p">,</span> <span class="nx">llelem_top</span><span class="p">,</span> <span class="nx">llelem_bottom</span><span class="p">;</span></div><div class='line' id='LC58'><br/></div><div class='line' id='LC59'>					<span class="c1">// Cycle through llelements and check if they are within viewpane</span></div><div class='line' id='LC60'>					<span class="k">for</span><span class="p">(</span><span class="nx">i</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span> <span class="nx">i</span> <span class="o">&lt;</span> <span class="nx">llelements</span><span class="p">.</span><span class="nx">length</span><span class="p">;</span> <span class="nx">i</span><span class="o">++</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC61'><br/></div><div class='line' id='LC62'>						<span class="c1">// Get top and bottom of llelem</span></div><div class='line' id='LC63'>						<span class="nx">llelem_top</span> <span class="o">=</span> <span class="nx">llelements</span><span class="p">[</span><span class="nx">i</span><span class="p">].</span><span class="nx">getTop</span><span class="p">();</span></div><div class='line' id='LC64'>						<span class="nx">llelem_bottom</span> <span class="o">=</span> <span class="nx">llelements</span><span class="p">[</span><span class="nx">i</span><span class="p">].</span><span class="nx">getBottom</span><span class="p">();</span></div><div class='line' id='LC65'><br/></div><div class='line' id='LC66'>						<span class="k">if</span><span class="p">(</span></div><div class='line' id='LC67'><br/></div><div class='line' id='LC68'>						<span class="c1">// Top edge						</span></div><div class='line' id='LC69'>						<span class="p">(</span><span class="nx">llelem_top</span> <span class="o">&gt;=</span> <span class="nx">windowScrollTop</span> <span class="o">&amp;&amp;</span> <span class="nx">llelem_top</span> <span class="o">&lt;=</span> <span class="nx">windowScrollBottom</span><span class="p">)</span> <span class="o">||</span></div><div class='line' id='LC70'><br/></div><div class='line' id='LC71'>						<span class="c1">// Bottom edge</span></div><div class='line' id='LC72'>						<span class="p">(</span><span class="nx">llelem_bottom</span> <span class="o">&gt;=</span> <span class="nx">windowScrollTop</span> <span class="o">&amp;&amp;</span> <span class="nx">llelem_bottom</span> <span class="o">&lt;=</span> <span class="nx">windowScrollBottom</span><span class="p">)</span> <span class="o">||</span></div><div class='line' id='LC73'><br/></div><div class='line' id='LC74'>						<span class="c1">// In full view</span></div><div class='line' id='LC75'>						<span class="p">(</span><span class="nx">llelem_top</span> <span class="o">&lt;=</span> <span class="nx">windowScrollTop</span> <span class="o">&amp;&amp;</span> <span class="nx">llelem_bottom</span> <span class="o">&gt;=</span> <span class="nx">windowScrollBottom</span><span class="p">))</span> <span class="p">{</span></div><div class='line' id='LC76'><br/></div><div class='line' id='LC77'>							<span class="c1">// Grab index of llelements that will be loaded</span></div><div class='line' id='LC78'>							<span class="k">if</span><span class="p">(</span><span class="nx">settings</span><span class="p">.</span><span class="nx">repeatLoad</span> <span class="o">||</span> <span class="o">!</span><span class="nx">llelements</span><span class="p">[</span><span class="nx">i</span><span class="p">].</span><span class="nx">loaded</span><span class="p">)</span> <span class="nx">load_elements</span><span class="p">.</span><span class="nx">push</span><span class="p">(</span><span class="nx">i</span><span class="p">);</span></div><div class='line' id='LC79'><br/></div><div class='line' id='LC80'>						<span class="p">}</span></div><div class='line' id='LC81'>					<span class="p">}</span></div><div class='line' id='LC82'><br/></div><div class='line' id='LC83'>					<span class="c1">// Call onLoadingStart event</span></div><div class='line' id='LC84'>					<span class="k">if</span><span class="p">(</span><span class="nx">settings</span><span class="p">.</span><span class="nx">onLoadingStart</span><span class="p">.</span><span class="nx">call</span><span class="p">(</span><span class="kc">undefined</span><span class="p">,</span> <span class="nx">e</span><span class="p">,</span> <span class="nx">llelements</span><span class="p">,</span> <span class="nx">load_elements</span><span class="p">))</span> <span class="p">{</span></div><div class='line' id='LC85'><br/></div><div class='line' id='LC86'>						<span class="c1">// Cycle through array of indexes that will be loaded</span></div><div class='line' id='LC87'>						<span class="k">for</span><span class="p">(</span><span class="nx">i</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span> <span class="nx">i</span> <span class="o">&lt;</span> <span class="nx">load_elements</span><span class="p">.</span><span class="nx">length</span><span class="p">;</span> <span class="nx">i</span><span class="o">++</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC88'><br/></div><div class='line' id='LC89'>							<span class="c1">// Set loaded flag</span></div><div class='line' id='LC90'>							<span class="nx">llelements</span><span class="p">[</span><span class="nx">load_elements</span><span class="p">[</span><span class="nx">i</span><span class="p">]].</span><span class="nx">loaded</span> <span class="o">=</span> <span class="kc">true</span><span class="p">;</span></div><div class='line' id='LC91'><br/></div><div class='line' id='LC92'>							<span class="c1">// Call the individual element onLoad</span></div><div class='line' id='LC93'>							<span class="k">if</span><span class="p">(</span><span class="nx">settings</span><span class="p">.</span><span class="nx">onLoad</span><span class="p">.</span><span class="nx">call</span><span class="p">(</span><span class="kc">undefined</span><span class="p">,</span> <span class="nx">e</span><span class="p">,</span> <span class="nx">llelements</span><span class="p">[</span><span class="nx">load_elements</span><span class="p">[</span><span class="nx">i</span><span class="p">]])</span> <span class="o">===</span> <span class="kc">false</span><span class="p">)</span> <span class="k">break</span><span class="p">;</span></div><div class='line' id='LC94'><br/></div><div class='line' id='LC95'>						<span class="p">}</span></div><div class='line' id='LC96'><br/></div><div class='line' id='LC97'>						<span class="c1">// Call onLoadingComplete event</span></div><div class='line' id='LC98'>						<span class="nx">settings</span><span class="p">.</span><span class="nx">onLoadingComplete</span><span class="p">.</span><span class="nx">call</span><span class="p">(</span><span class="kc">undefined</span><span class="p">,</span> <span class="nx">e</span><span class="p">,</span> <span class="nx">llelements</span><span class="p">,</span> <span class="nx">load_elements</span><span class="p">);</span></div><div class='line' id='LC99'><br/></div><div class='line' id='LC100'>					<span class="p">}</span></div><div class='line' id='LC101'><br/></div><div class='line' id='LC102'>				<span class="p">},</span> <span class="nx">settings</span><span class="p">.</span><span class="nx">timeout</span><span class="p">);</span></div><div class='line' id='LC103'><br/></div><div class='line' id='LC104'>			<span class="p">});</span></div><div class='line' id='LC105'><br/></div><div class='line' id='LC106'>			<span class="c1">// LazyLoadElement class</span></div><div class='line' id='LC107'>			<span class="kd">function</span> <span class="nx">LazyLoadElement</span><span class="p">(</span><span class="nx">$element</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC108'><br/></div><div class='line' id='LC109'>				<span class="kd">var</span> <span class="nx">self</span> <span class="o">=</span> <span class="k">this</span><span class="p">;</span></div><div class='line' id='LC110'><br/></div><div class='line' id='LC111'>				<span class="k">this</span><span class="p">.</span><span class="nx">loaded</span> <span class="o">=</span> <span class="kc">false</span><span class="p">;</span></div><div class='line' id='LC112'>				<span class="k">this</span><span class="p">.</span><span class="nx">$element</span> <span class="o">=</span> <span class="nx">$element</span><span class="p">;</span></div><div class='line' id='LC113'>				<span class="k">this</span><span class="p">.</span><span class="nx">top</span> <span class="o">=</span> <span class="kc">undefined</span><span class="p">;</span></div><div class='line' id='LC114'>				<span class="k">this</span><span class="p">.</span><span class="nx">bottom</span> <span class="o">=</span> <span class="kc">undefined</span><span class="p">;</span></div><div class='line' id='LC115'><br/></div><div class='line' id='LC116'>				<span class="k">this</span><span class="p">.</span><span class="nx">getTop</span> <span class="o">=</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC117'>					<span class="k">if</span><span class="p">(</span><span class="nx">self</span><span class="p">.</span><span class="nx">top</span><span class="p">)</span> <span class="k">return</span> <span class="nx">self</span><span class="p">.</span><span class="nx">top</span><span class="p">;</span></div><div class='line' id='LC118'><br/></div><div class='line' id='LC119'>					<span class="k">return</span> <span class="nx">self</span><span class="p">.</span><span class="nx">$element</span><span class="p">.</span><span class="nx">offset</span><span class="p">().</span><span class="nx">top</span><span class="p">;</span></div><div class='line' id='LC120'>				<span class="p">}</span></div><div class='line' id='LC121'><br/></div><div class='line' id='LC122'>				<span class="k">this</span><span class="p">.</span><span class="nx">getBottom</span> <span class="o">=</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC123'>					<span class="k">if</span><span class="p">(</span><span class="nx">self</span><span class="p">.</span><span class="nx">bottom</span><span class="p">)</span> <span class="k">return</span> <span class="nx">self</span><span class="p">.</span><span class="nx">bottom</span><span class="p">;</span></div><div class='line' id='LC124'><br/></div><div class='line' id='LC125'>					<span class="kd">var</span> <span class="nx">top</span> <span class="o">=</span> <span class="p">(</span><span class="nx">self</span><span class="p">.</span><span class="nx">top</span><span class="p">)</span> <span class="o">?</span> <span class="nx">self</span><span class="p">.</span><span class="nx">top</span> <span class="o">:</span> <span class="k">this</span><span class="p">.</span><span class="nx">getTop</span><span class="p">();</span></div><div class='line' id='LC126'>					<span class="k">return</span> <span class="nx">top</span> <span class="o">+</span> <span class="nx">self</span><span class="p">.</span><span class="nx">$element</span><span class="p">.</span><span class="nx">outerHeight</span><span class="p">(</span><span class="nx">settings</span><span class="p">.</span><span class="nx">includeMargin</span><span class="p">);</span></div><div class='line' id='LC127'>				<span class="p">}</span></div><div class='line' id='LC128'><br/></div><div class='line' id='LC129'>				<span class="c1">// Cache the top and bottom of set</span></div><div class='line' id='LC130'>				<span class="k">if</span><span class="p">(</span><span class="nx">settings</span><span class="p">.</span><span class="nx">cache</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC131'>					<span class="k">this</span><span class="p">.</span><span class="nx">top</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">getTop</span><span class="p">();</span></div><div class='line' id='LC132'>					<span class="k">this</span><span class="p">.</span><span class="nx">bottom</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">getBottom</span><span class="p">();</span></div><div class='line' id='LC133'>				<span class="p">}</span></div><div class='line' id='LC134'><br/></div><div class='line' id='LC135'>			<span class="p">}</span></div><div class='line' id='LC136'><br/></div><div class='line' id='LC137'>			<span class="c1">// Cycle throught the selector(s)</span></div><div class='line' id='LC138'>			<span class="kd">var</span> <span class="nx">chain</span> <span class="o">=</span> <span class="nx">$selector</span><span class="p">.</span><span class="nx">each</span><span class="p">(</span><span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC139'><br/></div><div class='line' id='LC140'>				<span class="c1">// Add LazyLoadElement classes to the main array</span></div><div class='line' id='LC141'>				<span class="nx">llelements</span><span class="p">.</span><span class="nx">push</span><span class="p">(</span><span class="k">new</span> <span class="nx">LazyLoadElement</span><span class="p">(</span><span class="nx">$</span><span class="p">(</span><span class="k">this</span><span class="p">)));</span></div><div class='line' id='LC142'><br/></div><div class='line' id='LC143'>			<span class="p">});</span></div><div class='line' id='LC144'><br/></div><div class='line' id='LC145'>			<span class="k">return</span> <span class="nx">chain</span><span class="p">;</span></div><div class='line' id='LC146'>		<span class="p">},</span></div><div class='line' id='LC147'><br/></div><div class='line' id='LC148'>		<span class="s1">&#39;destroy&#39;</span><span class="o">:</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC149'>			<span class="nx">$window</span><span class="p">.</span><span class="nx">unbind</span><span class="p">(</span><span class="s1">&#39;scroll.lla&#39;</span><span class="p">);</span></div><div class='line' id='LC150'>		<span class="p">},</span></div><div class='line' id='LC151'><br/></div><div class='line' id='LC152'>		<span class="s1">&#39;load&#39;</span><span class="o">:</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC153'>			<span class="nx">force_load_flag</span> <span class="o">=</span> <span class="kc">true</span><span class="p">;</span></div><div class='line' id='LC154'>			<span class="nx">$window</span><span class="p">.</span><span class="nx">trigger</span><span class="p">(</span><span class="s1">&#39;scroll.lla&#39;</span><span class="p">);</span></div><div class='line' id='LC155'>		<span class="p">}</span></div><div class='line' id='LC156'><br/></div><div class='line' id='LC157'>	<span class="p">}</span></div><div class='line' id='LC158'><br/></div><div class='line' id='LC159'>	<span class="nx">$</span><span class="p">.</span><span class="nx">fn</span><span class="p">.</span><span class="nx">lazyloadanything</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">method</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC160'><br/></div><div class='line' id='LC161'>		<span class="c1">// Method calling logic</span></div><div class='line' id='LC162'>		<span class="k">if</span> <span class="p">(</span><span class="nx">methods</span><span class="p">[</span><span class="nx">method</span><span class="p">])</span> <span class="p">{</span></div><div class='line' id='LC163'>			<span class="k">return</span> <span class="nx">methods</span><span class="p">[</span><span class="nx">method</span><span class="p">].</span><span class="nx">apply</span><span class="p">(</span> <span class="k">this</span><span class="p">,</span> <span class="nb">Array</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">slice</span><span class="p">.</span><span class="nx">call</span><span class="p">(</span> <span class="nx">arguments</span><span class="p">,</span> <span class="mi">1</span> <span class="p">));</span></div><div class='line' id='LC164'><br/></div><div class='line' id='LC165'>		<span class="p">}</span> <span class="k">else</span> <span class="k">if</span> <span class="p">(</span><span class="k">typeof</span> <span class="nx">method</span> <span class="o">===</span> <span class="s1">&#39;object&#39;</span> <span class="o">||</span> <span class="o">!</span> <span class="nx">method</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC166'>			<span class="k">return</span> <span class="nx">methods</span><span class="p">.</span><span class="nx">init</span><span class="p">.</span><span class="nx">apply</span><span class="p">(</span><span class="k">this</span><span class="p">,</span> <span class="nx">arguments</span><span class="p">);</span></div><div class='line' id='LC167'><br/></div><div class='line' id='LC168'>		<span class="p">}</span> <span class="k">else</span> <span class="p">{</span></div><div class='line' id='LC169'>			<span class="nx">$</span><span class="p">.</span><span class="nx">error</span><span class="p">(</span><span class="s1">&#39;Method &#39;</span> <span class="o">+</span>  <span class="nx">method</span> <span class="o">+</span> <span class="s1">&#39; does not exist on jQuery.lazyloadanything&#39;</span><span class="p">);</span></div><div class='line' id='LC170'>		<span class="p">}</span></div><div class='line' id='LC171'><br/></div><div class='line' id='LC172'>	<span class="p">};</span></div><div class='line' id='LC173'><br/></div><div class='line' id='LC174'><span class="p">})(</span> <span class="nx">jQuery</span> <span class="p">);</span></div></pre></div>
          </td>
        </tr>
      </table>
  </div>

          </div>
        </div>

        <a href="#jump-to-line" rel="facebox" data-hotkey="l" class="js-jump-to-line" style="display:none">Jump to Line</a>
        <div id="jump-to-line" style="display:none">
          <h2>Jump to Line</h2>
          <form accept-charset="UTF-8" class="js-jump-to-line-form">
            <input class="textfield js-jump-to-line-field" type="text">
            <div class="full-button">
              <button type="submit" class="button">Go</button>
            </div>
          </form>
        </div>

      </div>
    </div>
</div>

<div id="js-frame-loading-template" class="frame frame-loading large-loading-area" style="display:none;">
  <img class="js-frame-loading-spinner" src="https://a248.e.akamai.net/assets.github.com/images/spinners/octocat-spinner-128.gif?1347543529" height="64" width="64">
</div>


        </div>
      </div>
      <div class="context-overlay"></div>
    </div>

      <div id="footer-push"></div><!-- hack for sticky footer -->
    </div><!-- end of wrapper - hack for sticky footer -->

      <!-- footer -->
      <div id="footer">
  <div class="container clearfix">

      <dl class="footer_nav">
        <dt>GitHub</dt>
        <dd><a href="https://github.com/about">About us</a></dd>
        <dd><a href="https://github.com/blog">Blog</a></dd>
        <dd><a href="https://github.com/contact">Contact &amp; support</a></dd>
        <dd><a href="http://enterprise.github.com/">GitHub Enterprise</a></dd>
        <dd><a href="http://status.github.com/">Site status</a></dd>
      </dl>

      <dl class="footer_nav">
        <dt>Applications</dt>
        <dd><a href="http://mac.github.com/">GitHub for Mac</a></dd>
        <dd><a href="http://windows.github.com/">GitHub for Windows</a></dd>
        <dd><a href="http://eclipse.github.com/">GitHub for Eclipse</a></dd>
        <dd><a href="http://mobile.github.com/">GitHub mobile apps</a></dd>
      </dl>

      <dl class="footer_nav">
        <dt>Services</dt>
        <dd><a href="http://get.gaug.es/">Gauges: Web analytics</a></dd>
        <dd><a href="http://speakerdeck.com">Speaker Deck: Presentations</a></dd>
        <dd><a href="https://gist.github.com">Gist: Code snippets</a></dd>
        <dd><a href="http://jobs.github.com/">Job board</a></dd>
      </dl>

      <dl class="footer_nav">
        <dt>Documentation</dt>
        <dd><a href="http://help.github.com/">GitHub Help</a></dd>
        <dd><a href="http://developer.github.com/">Developer API</a></dd>
        <dd><a href="http://github.github.com/github-flavored-markdown/">GitHub Flavored Markdown</a></dd>
        <dd><a href="http://pages.github.com/">GitHub Pages</a></dd>
      </dl>

      <dl class="footer_nav">
        <dt>More</dt>
        <dd><a href="http://training.github.com/">Training</a></dd>
        <dd><a href="https://github.com/edu">Students &amp; teachers</a></dd>
        <dd><a href="http://shop.github.com">The Shop</a></dd>
        <dd><a href="/plans">Plans &amp; pricing</a></dd>
        <dd><a href="http://octodex.github.com/">The Octodex</a></dd>
      </dl>

      <hr class="footer-divider">


    <p class="right">&copy; 2013 <span title="0.04799s from fe13.rs.github.com">GitHub</span>, Inc. All rights reserved.</p>
    <a class="left" href="https://github.com/">
      <span class="mega-icon mega-icon-invertocat"></span>
    </a>
    <ul id="legal">
        <li><a href="https://github.com/site/terms">Terms of Service</a></li>
        <li><a href="https://github.com/site/privacy">Privacy</a></li>
        <li><a href="https://github.com/security">Security</a></li>
    </ul>

  </div><!-- /.container -->

</div><!-- /.#footer -->


    <div class="fullscreen-overlay js-fullscreen-overlay" id="fullscreen_overlay">
  <div class="fullscreen-container js-fullscreen-container">
    <div class="textarea-wrap">
      <textarea name="fullscreen-contents" id="fullscreen-contents" class="js-fullscreen-contents" placeholder="" data-suggester="fullscreen_suggester"></textarea>
          <div class="suggester-container">
              <div class="suggester fullscreen-suggester js-navigation-container" id="fullscreen_suggester"
                 data-url="/shrimpwagon/jquery-lazyloadanything/suggestions/commit">
              </div>
          </div>
    </div>
  </div>
  <div class="fullscreen-sidebar">
    <a href="#" class="exit-fullscreen js-exit-fullscreen tooltipped leftwards" title="Exit Zen Mode">
      <span class="mega-icon mega-icon-normalscreen"></span>
    </a>
    <a href="#" class="theme-switcher js-theme-switcher tooltipped leftwards"
      title="Switch themes">
      <span class="mini-icon mini-icon-brightness"></span>
    </a>
  </div>
</div>



    <div id="ajax-error-message" class="flash flash-error">
      <span class="mini-icon mini-icon-exclamation"></span>
      Something went wrong with that request. Please try again.
      <a href="#" class="mini-icon mini-icon-remove-close ajax-error-dismiss"></a>
    </div>

    
    
    <span id='server_response_time' data-time='0.04845' data-host='fe13'></span>
    
  </body>
</html>

