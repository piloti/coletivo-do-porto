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
       
    <script>
        (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
        (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
        m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
        })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

        ga('create', 'UA-22079211-4', 'coletivodoporto.com.br');
        ga('send', 'pageview');

    </script>

        <div id="header">
            <div class="row">

                <!-- Logo -->
                <div class="large-6 columns logoHolder">
                    <a href="index.php" title="Welcome to our Homepage"><img src="img/logo.png" alt="Coletivo do Porto Logo"></a>
                </div>
                
                <!-- Navigation -->
                <div class="large-6 columns navHolder hide-for-small nav-div">
                    <ul id="nav">
                        <li class="nav_home"><a class="margin_home" href="index.php"></a></li>
                        <li class="nav_somos" ><a href="nos_somos.php" class="animation">NÓS SOMOS</a></li>
                        <li class="nav_coletivo"><a href="o_coletivo.php" class="animation">O COLETIVO</a></li>
                        <li class="nav_porto"><a href="do_porto.php" class="animation">DO PORTO</a></li>
                        <li class="nav_contato"><a class="margin_contato" href="contato.php"></a></li>
                    </ul>
                </div>


                <!-- Select Navigation for Small Screens -->
                <select id="smallnav" class="hide-for-large-up show-for-small"> 
                    <option value="#" selected="selected">Menu</option> 
                    
                    <option value="index.php">HOME</option> 
                    <option value="nos_somos.php">NÓS SOMOS</option> 
                    <option value="o_coletivo.php">O COLETIVO</option> 
                    <option value="do_porto.php">DO PORTO</option> 
                    <option value="contato.php">CONTATO</option> 
                </select>

            </div>
        </div>
        <?php //include 'http://www.coletivodoporto.com.br/inc/topo.php'; ?>

        <!-- Future Slider Section -->
        <div class="fullwidthbanner-container">
                <div class="fullwidthbanner">
                    <ul>
                        <!-- THE FIRST SLIDE -->
                        <li style="position:relative" data-transition="slideleft" data-slotamount="1" data-masterspeed="300" data-thumb="images/thumbs/thumb6.jpg">
                                <img alt="" src="img/banner1.jpg" />

                                <div class="caption large_text centralizarY"
                                    data-x="center"
                                    data-y="100"
                                    data-speed="700"
                                    data-start="1000"
                                    data-easing="easeOutExpo"><img src="img/ico_coletivo.png"></div>

                                <div class="caption large_text sfl"
                                    data-x="center"
                                    data-y="250"
                                    data-speed="700"
                                    data-start="1500"
                                    data-easing="easeOutExpo">Soluções integradas <br>na indústria criativa
                                </div>
                        </li>
                        
                        <!-- THE SECOND SLIDE -->
                        <li style="position:relative"  data-transition="slideleft" data-slotamount="1" data-masterspeed="300" data-thumb="images/thumbs/thumb6.jpg">
                                <img alt="" src="img/banner2.jpg" />

                                <div class="caption large_text centralizarY"
                                    data-x="-50"
                                    data-y="120"
                                    data-speed="700"
                                    data-start="1000"
                                    data-easing="easeOutExpo"><img src="img/ico_interatividade.png"></div>

                                <div class="caption large_text sfl"
                                    data-x="-50"
                                    data-y="250"
                                    data-speed="700"
                                    data-start="1500"
                                    data-easing="easeOutExpo">Interatividade
                                </div>

                                <div class="caption large_text contactText sfl"
                                    data-x="-50"
                                    data-y="350"
                                    data-speed="700"
                                    data-start="1500"
                                    data-easing="easeOutExpo">Foco no cliente, onde quer que ele esteja! Falamos a língua dele,<br> seja nas redes sociais, no celular, na terra ou no mar...
                                </div>


                        </li>

                        <!-- THE SECOND SLIDE -->
                        <li style="position:relative"  data-transition="slideleft" data-slotamount="1" data-masterspeed="300" data-thumb="images/thumbs/thumb6.jpg">
                                <img alt="" src="img/banner2.jpg" />

                                <div class="caption large_text centralizarY"
                                    data-x="-50"
                                    data-y="120"
                                    data-speed="700"
                                    data-start="1000"
                                    data-easing="easeOutExpo"><img src="img/ico_comunicacao.png"></div>

                                <div class="caption large_text sfl"
                                    data-x="-50"
                                    data-y="250"
                                    data-speed="700"
                                    data-start="1500"
                                    data-easing="easeOutExpo">Comunicação
                                </div>

                                <div class="caption large_text contactText sfl"
                                    data-x="-50"
                                    data-y="350"
                                    data-speed="700"
                                    data-start="1500"
                                    data-easing="easeOutExpo">Ajuda para falar com seu público,com a imprensa, com o mundo? Deixa com a gente, vamos te guiar!
                                </div>


                        </li>

                        <!-- THE FIRST SLIDE -->
                        <li style="position:relative" data-transition="slideleft" data-slotamount="1" data-masterspeed="300" data-thumb="images/thumbs/thumb6.jpg">
                                <img alt="" src="img/banner3.jpg" />

                                
                                <div class="caption large_text centralizarY"
                                    data-x="-50"
                                    data-y="120"
                                    data-speed="700"
                                    data-start="1000"
                                    data-easing="easeOutExpo"><img src="img/ico_banner3.png"></div>

                                <div class="caption large_text sfl"
                                    data-x="-50"
                                    data-y="250"
                                    data-speed="700"
                                    data-start="1500"
                                    data-easing="easeOutExpo"><div class="banner_centralizado">Marketing<span><br>Planejamento de marketing, gestão de marca, relacionamento...
    Nós damos o Norte!</span>
                                </div>



                            

                        </li>

                        <!-- THE FIRST SLIDE -->
                        <li style="position:relative"  data-transition="slideleft" data-slotamount="1" data-masterspeed="300" data-thumb="images/thumbs/thumb6.jpg">
                                <img alt="" src="img/banner4.jpg" />

                                <div class="caption large_text centralizarY"
                                    data-x="-50"
                                    data-y="120"
                                    data-speed="700"
                                    data-start="1000"
                                    data-easing="easeOutExpo"><img src="img/ico_banner4.png"></div>

                                <div class="caption large_text sfl"
                                    data-x="-50"
                                    data-y="250"
                                    data-speed="700"
                                    data-start="1500"
                                    data-easing="easeOutExpo"><div class="banner_centralizado">Design related<br><span>Tem um projeto ligado a Design e Inovação?
                            Somos o radar que você precisa!</span></div></div>
                        </li>

                        <!-- THE FIRST SLIDE -->
                        <li style="position:relative"  data-transition="slideleft" data-slotamount="1" data-masterspeed="300" data-thumb="images/thumbs/thumb6.jpg">
                                <img alt="" src="img/banner5.jpg" />

                                <div class="caption large_text centralizarY"
                                    data-x="-50"
                                    data-y="120"
                                    data-speed="700"
                                    data-start="1000"
                                    data-easing="easeOutExpo"><img src="img/ico_banner2.png"></div>

                                <div class="caption large_text sfl"
                                    data-x="-50"
                                    data-y="250"
                                    data-speed="700"
                                    data-start="1500"
                                    data-easing="easeOutExpo"><div class="banner_centralizado">Digital<br><span>Nós temos as ferramentas para você navegar por bits e bytes 
                                com tranquilidade e segurança.
                                </span></div></div>
                            </li>

                        

                    </ul>
                    
                    <div class=".tp-bullets"></div>
                </div>
            </div>
        <?php //include 'http://www.coletivodoporto.com.br/inc/banner_home.php'; ?>

        <div class="row services home_space ">
            <!-- Service 1 -->

            <div class="large-4 columns serviceHolder section_featured_texts animationStart">
                <div class="titulo1">Somos um pool de três empresas do setor criativo,<span> que compartilham espaço, ideias e experiências para criar soluções integradas em comunicação, marketing, desenvolvimento digital e projetos relacionados a inovação e design.<br> A formação multidisciplinar das equipes do <strong>Coletivo do Porto</strong> está entre os diferenciais que levam ao desenvolvimento de trabalhos de excelência em diversos setores de atuação.<br> A interação em um mesmo ambiente traz simbiose e sincronismo entre as diferentes equipes e garante projetos realmente coletivos.</span></div>
               
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
        
            <!-- ROLAGEM SUAVE -->

            <script type="text/javascript" src="js/smooth.pack.js"></script>

    <div class="footerTop_logos">
                <div class="row Container">
                    <p class="coletivo">Nós somos o Coletivo do Porto</p>


                <ul class="logoscoletivos">
                    <li><a href="http://www.piloti.com.br" target="_blank"><img src="img/piloti.jpg" alt=""></a></li>
                    <li><a href="http://www.fguarana.com.br" target="_blank"><img src="img/guarana.jpg" alt=""></a></li>
                    <li><a href="http://www.ampliativo.com.br" target="_blank"><img src="img/ampliativo.jpg" alt=""></a></li>
                    <li class="ultimocoletivo"><a href="http://www.top5rio.com.br" target="_blank"><img src="img/top5riologo.png" alt=""></a></li>
                    <!-- <li ><a href="http://www.econecta.com.br" target="_blank"><img src="img/econecta.jpg" alt=""></a></li> -->
                </ul>




    <!-- 
                    <div class="lg_footer lg_primeira"><a href="http://www.piloti.com.br" target="_blank"><img src="img/piloti.jpg"></a> </div>
                    <div class="lg_footer"><a href="http://www.fguarana.com.br/" target="_blank"><img src=""></a></div>
                    <div class="lg_footer"><a href="http://www.filtramidias.com.br" target="_blank"><img src=""></a></div>
                    <div class="lg_footer"><a href="http://www.ampliativo.com.br" target="_blank"><img src="img/ampliativo.jpg"></a></div>
                    <div class="lg_footer lg_ultima"><a href="http://www.econecta.com.br/" target="_blank"><img src="img/econecta.jpg"></a></div> -->



    <!--                 <div class="piloti"><a href="http://www.piloti.com.br" target="_blank"><img src="img/piloti.jpg"></a> </div>
                    <div class="logos_footer"><a href="http://www.fguarana.com.br/" target="_blank"><img src="img/guarana.jpg"></a></div>
                    <div class="logos_footer"><a href="http://www.filtramidias.com.br" target="_blank"><img src="img/filtra.jpg"></a></div>
                    <div class="logos_footer"><a href="http://www.ampliativo.com.br" target="_blank"><img src="img/ampliativo.jpg"></a></div>
                    <div class="ultimo_logo"><a href="http://www.econecta.com.br/" target="_blank"><img src="img/econecta.jpg"></a></div> -->

                </div>
    </div>
            <!-- Footer Top Section -->
            <div class="footerTop">
                <div class="row Container">
                    <div id="logo_rodape"><a href="index.php"></a></div>

                    
                    <div class="rodape-infos">
                        <div id="endereco">
                            <p>Avenida Venezuela, 131 / grupo 411 Porto Maravilha, Rio de Janeiro, RJ,  <br>
        contato<span>@</span>coletivodoporto.com.br   /   <span>+55 21 3062 6095<!-- 2516 5248 -->  </span></p>
                        </div>

                        <div id="redes">
                            <div id="linkedin"><a href="#"></a></div>
                            <div id="like"><div id="fb-root"></div>
                                <script>(function(d, s, id) {
                                var js, fjs = d.getElementsByTagName(s)[0];
                                if (d.getElementById(id)) return;
                                js = d.createElement(s); js.id = id;
                                js.src = "//connect.facebook.net/pt_BR/all.js#xfbml=1&appId=446049445442273";
                                fjs.parentNode.insertBefore(js, fjs);
                                }(document, 'script', 'facebook-jssdk'));</script>
                                <div class="fb-like" data-href="http://www.facebook.com/coletivodoporto" data-send="true" data-width="380" data-show-faces="false" data-font="arial" data-colorscheme="light"></div>


                                
                            </div>
                        </div>

                    </div>

                    <div id="selo_verde"><p>SELO VERDE</p><br><a href="http://www.fazendamundonovo.eco.br/" target="_blank"><img src="img/selo_verde.png"></a></div>

                </div>
            </div>

            <!-- Footer Bottom Section -->
            <div class="footerBott">
                <div class="row">

                    <div class="large-5 columns footerMenu">
                        <ul id="footerNav">
                            <li><a href="index.php">HOME</a></li>
                            <li><a href="nos_somos.php">NÓS SOMOS</a></li>
                            <li><a href="o_coletivo.php">O COLETIVO</a></li>
                            <li><a href="do_porto.php">DO PORTO</a></li>
                            <li><a href="contato.php">CONTATO</a></li>
                        </ul>
                    </div>

                    <div class="large-3 columns copyright">
                    <p>Desenvolvido por  <a href="http://www.piloti.com.br">Piloti</a></p>
                    </div>

                </div>
            </div>
        <?php //include 'http://www.coletivodoporto.com.br/inc/rodape.php'; ?>

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
