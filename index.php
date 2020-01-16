<!DOCTYPE html>
<!--[if lt IE 7]>      <html class="no-js lt-ie9 lt-ie8 lt-ie7"> <![endif]-->
<!--[if IE 7]>         <html class="no-js lt-ie9 lt-ie8"> <![endif]-->
<!--[if IE 8]>         <html class="no-js lt-ie9"> <![endif]-->
<!--[if gt IE 8]><!--> <html class="no-js"> <!--<![endif]-->
    <head>
        <meta charset="utf-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
        <title>Coletivo do Porto</title>
        <meta name="description" content="" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />

        <!-- Place favicon.ico and apple-touch-icon.png in the root directory -->

        <!-- WebFonts   -->
        <link href='http://fonts.googleapis.com/css?family=PT+Sans' rel='stylesheet' type='text/css' />

        <!-- Revolution Banner CSS -->
        <link rel="stylesheet" href="./css/fullwidth.css" type="text/css" />
        <link rel="stylesheet" href="./css/settings.css" type="text/css" />
        
        <!-- Essential Stylesheets -->
        <link rel="stylesheet" href="./css/normalize.css" type="text/css" />
        <link rel="stylesheet" href="./css/main.css" type="text/css" />
        <link rel="stylesheet" href="./css/foundation.css" type="text/css" />
        <link rel="stylesheet" href="./css/jquery.bxslider.css" type="text/css" />
        <link rel="stylesheet" href="./css/mainStyles.css" type="text/css" />
        <link rel="stylesheet" href="./css/mediaqueries.css" type="text/css" />

        <!-- Modernizr -->
        <script src="./js/vendor/modernizr-2.6.2.min.js"></script>

        <!-- GOOGLE FONTS -->

        <!-- <link href='http://fonts.googleapis.com/css?family=Alef' rel='stylesheet' type='text/css'> -->
    </head>
    <body data-smooth-scrolling="1" id="homeActive">
       
        <?php include 'http://www.coletivodoporto.com.br/inc/topo.php'; ?>

        <?php include 'http://www.coletivodoporto.com.br/inc/banner_home.php'; ?>

        <div class="row services home_space ">
            <!-- Service 1 -->

            <div class="large-4 columns serviceHolder section_featured_texts animationStart">
                <div class="titulo1">Apenas teste Somos um pool de três empresas do setor criativo,<span> que compartilham espaço, ideias e experiências para criar soluções integradas em comunicação, marketing, desenvolvimento digital e projetos relacionados a inovação e design.<br> A formação multidisciplinar das equipes do <strong>Coletivo do Porto</strong> está entre os diferenciais que levam ao desenvolvimento de trabalhos de excelência em diversos setores de atuação.<br> A interação em um mesmo ambiente traz simbiose e sincronismo entre as diferentes equipes e garante projetos realmente coletivos.</span></div>
               
            </div>
            
            <!-- Service 2 -->
            <div class="large-4 columns serviceHolder section_featured_texts animationStart">
                <img src="img/bondinho.jpg">
                <div class="titulo1" style="margin-top:30px;">Estamos  localizados, estrategicamente,<span> no epicentro da área de maior processo de revitalização do Rio de Janeiro - o Porto Maravilha. Fomos uma das primeiras iniciativas da economia criativa a se instalar na região.</span></div>
            </div>

            <!-- Service 3 -->
            <div class="large-4 columns serviceHolder section_featured_texts margem_facebook animationStart">
                <iframe src="http://www.facebook.com/plugins/likebox.php?href=https%3A%2F%2Fwww.facebook.com%2FColetivoDoPorto&amp;width=360&amp;height=377&amp;show_faces=false&amp;colorscheme=light&amp;stream=true&amp;show_border=true&amp;header=true&amp;appId=446049445442273" scrolling="no" frameborder="0" class="facebook-style" allowTransparency="true"></iframe>
                <style type="text/css">.pluginConnectTextDark a {color: #333 !important;}</style>
            </div>

        </div>
        
        <?php include 'http://www.coletivodoporto.com.br/inc/rodape.php'; ?>

        <script>
            document.write('<script src=' +
            ('__proto__' in {} ? './js/vendor/zepto' : './js/vendor/jquery') +
            '.js><\/script>')
        </script>

        <script src="js/foundation/foundation.js"></script>
        
        <!--
          
          <script src="js/foundation/foundation.dropdown.js"></script>
          
          <script src="js/foundation/foundation.placeholder.js"></script>
          
          <script src="js/foundation/foundation.forms.js"></script>
          
          <script src="js/foundation/foundation.alerts.js"></script>
          
          <script src="js/foundation/foundation.magellan.js"></script>
          
          <script src="js/foundation/foundation.reveal.js"></script>
          
          <script src="js/foundation/foundation.tooltips.js"></script>
          
          <script src="js/foundation/foundation.clearing.js"></script>
          
          <script src="js/foundation/foundation.cookie.js"></script>
          
          <script src="js/foundation/foundation.joyride.js"></script>
          
          <script src="js/foundation/foundation.orbit.js"></script>
          
          <script src="js/foundation/foundation.section.js"></script>
          
          <script src="js/foundation/foundation.topbar.js"></script>
          
        -->

        <!-- Orbit Slider Foundation -->
        <script src="js/foundation/foundation.orbit.js"></script>
       
        <script>
          $(document).foundation();
        </script>
        

        <!-- jQuery Library -->
        <script src="js/jquery9.js"></script>

        <script src="js/jquery.bxslider.js" type="text/javascript"></script>
        <script type="text/javascript">
            $('.bxslider').bxSlider();
        </script>

        <!-- Nice Scroll Plugin 
        <script src="js/niceScroll.js" type="text/javascript"></script>-->

        <!-- Twitter Feed Script -->
        <script type="text/javascript">
            jQuery(function($){
                    $(".feed").tweet({
                      count: 2,
                      username: "smashingmag",
                      loading_text: "searching twitter..."
                    });

             });
        </script>

        <script src="js/common.js" type="text/javascript"></script>
        <script src="js/libs.js" type="text/javascript"></script>
        
        <!-- Essential Scripts -->
        <script src="js/plugins.js"></script>
        <script src="js/main.js"></script>

        <!-- jQuery KenBurn Slider  -->
        <script src="js/jquery.themepunch.plugins.min.js" type="text/javascript"></script>
        <script src="js/jquery.themepunch.revolution.js" type="text/javascript"></script>

        <!--
        ##############################
         - ACTIVATE THE BANNER HERE -
        ##############################
        -->
        <script type="text/javascript">

            var tpj=jQuery;
            tpj.noConflict();

            tpj(document).ready(function() {

            if (tpj.fn.cssOriginal!=undefined)
                tpj.fn.css = tpj.fn.cssOriginal;

                tpj('.fullwidthbanner').revolution(
                    {
                        delay:9000,
                        startwidth:960,
                        startheight:500,

                        onHoverStop:"on",                       // Stop Banner Timet at Hover on Slide on/off

                        thumbWidth:100,                         // Thumb With and Height and Amount (only if navigation Tyope set to thumb !)
                        thumbHeight:50,
                        thumbAmount:3,

                        hideThumbs:0,
                        navigationType:"bullet",                // bullet, thumb, none
                        navigationArrows:"solo",                // nexttobullets, solo (old name verticalcentered), none

                        navigationStyle:"round",                // round,square,navbar,round-old,square-old,navbar-old, or any from the list in the docu (choose between 50+ different item), custom


                        navigationHAlign:"center",              // Vertical Align top,center,bottom
                        navigationVAlign:"top",                 // Horizontal Align left,center,right
                        navigationHOffset:0,
                        navigationVOffset:20,

                        soloArrowLeftHalign:"left",
                        soloArrowLeftValign:"center",
                        soloArrowLeftHOffset:20,
                        soloArrowLeftVOffset:0,

                        soloArrowRightHalign:"right",
                        soloArrowRightValign:"center",
                        soloArrowRightHOffset:20,
                        soloArrowRightVOffset:0,

                        touchenabled:"on",                      // Enable Swipe Function : on/off

                        stopAtSlide:-1,                         // Stop Timer if Slide "x" has been Reached. If stopAfterLoops set to 0, then it stops already in the first Loop at slide X which defined. -1 means do not stop at any slide. stopAfterLoops has no sinn in this case.
                        stopAfterLoops:-1,                      // Stop Timer if All slides has been played "x" times. IT will stop at THe slide which is defined via stopAtSlide:x, if set to -1 slide never stop automatic

                        hideCaptionAtLimit:0,                   // It Defines if a caption should be shown under a Screen Resolution ( Basod on The Width of Browser)
                        hideAllCaptionAtLilmit:0,               // Hide all The Captions if Width of Browser is less then this value
                        hideSliderAtLimit:0,                    // Hide the whole slider, and stop also functions if Width of Browser is less than this value

                        fullWidth:"on",

                        shadow:0                                //0 = no Shadow, 1,2,3 = 3 Different Art of Shadows -  (No Shadow in Fullwidth Version !)

                    });

        });
        </script>
    </body>
</html>
