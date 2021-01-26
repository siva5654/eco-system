       $('.parent-drop').click(function(){
            $(this).toggleClass('active')
         })
       $('.mobile-view-btn').click(function(){
             $('#overlay').addClass('active')
            $('.eg-navmenu').addClass('open')
        })
        $('#overlay , .close-button').click(function(){
            $('#overlay').removeClass('active')
            $('.eg-navmenu').removeClass('open')
        })
        

        $('.grid_view').click(function(){
           var parentHeight = $(this).height();
           $(this).parent().parent().toggleClass('dep-active');
           $(this).parent().parent().siblings().addClass('eg-heiAuto');
           $(this).parent().parent().toggleClass('eg-heiAuto');
           $(this).parent().parent().siblings().removeClass('dep-active')
           $(this).siblings().toggleClass('open');
           $(this).parent().parent().siblings().children().children().removeClass('open')
           var childHeight =$(this).siblings('.full-cont').height();
           var total = parentHeight + childHeight +50;
           $(this).parent().parent('.dep-active').css('height', total+'px');
           $(this).parent().parent('.dept-list-group').siblings().css('height', 'auto');
        })

         $(window).scroll(function(){
              if($(window).scrollTop() >200) {
                $(".scrollbar").addClass('scroll-open');
              }
              else {
                $(".scrollbar").removeClass('scroll-open');
                }
          })
            
           $('.scrollbar').click(function(){
               $("html, body").animate({ scrollTop: 0 }, 500);
               return false;
           });