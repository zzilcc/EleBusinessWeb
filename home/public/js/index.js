$(function(){
    // 我的酒仙的下拉框
    $('.main-right .myjiuxian').mouseenter(function(){
        $(this).find('.myjiuxian-icon').css({'transform':'rotate(180deg)','margin-left':'0px','margin-top':'10px'});
        $(this).find('.myjiuxian-top').css({'background':'#fff'});
        $(this).find('.myjiuxian-dropdown').show();
    });
    $('.main-right .myjiuxian').mouseleave(function(){
        $(this).find('.myjiuxian-icon').css({'transform':'rotate(0deg)','margin-left':'5px','margin-top':'2px'});
        $(this).find('.myjiuxsian-top').css({'background':'#f2f2f2'});
        $(this).find('.myjiuxian-dropdown').hide();
    });

    // 顶部导航栏客户服务
    $('.main-right .server').mouseenter(function(){
        $(this).find('.server-icon').css({'transform':'rotate(180deg)','margin-left':'0px','margin-top':'10px'});
        $(this).find('.server-top').css({'background':'#fff'});
        $(this).find('.server-dropdown').show();
    });
    $('.main-right .server').mouseleave(function(){
        $(this).find('.server-icon').css({'transform':'rotate(0deg)','margin-left':'5px','margin-top':'2px'});
        $(this).find('.server-top').css({'background':'#f2f2f2'});
        $(this).find('.server-dropdown').hide();
    });

    //左部导航
    $('.ppt .div2 li').mouseenter(function(){
        $(this).css({'background':'#eee'});
        $(this).find('span').css({'color':'#c00'});
        $('.ppt .div2 li').not($(this)).css({'background':'#fff'});

        $(this).find('.right').show();
        $('.right').not($(this).find('.right')).hide();
    });

    $('.ppt .div2 li').mouseleave(function(){
        $(this).find('.right').hide();
        $(this).find('span').css({'color':'#c00'});
        $(this).css({'background':'#fff'});
    });

    //首部幻灯片设计
    $(".paging").show();
    $(".paging a:first").addClass("active");
    num=$(".paging a:first").attr('rel');
    arr=[1,2,3,4,5,6,7,8,9];
    imgs=arr.slice((num-1)*3,num*3);
    for(i=0;i<imgs.length;i++)
    {
        $('.'+imgs[i]).show();
    }

    var imageWidth = $(".window").width();
    var imageSum = $(".image_reel img").size();
    var imageReelWidth = imageWidth * imageSum;

    $(".image-reel").css({'width':imageReelWidth});

    rotate = function(end){
        if(end){
            var triggerID = imageSum - 1;
            var image_reelPosition = triggerID * imageWidth;

            $(".paging a").removeClass('active');
            $active.addClass('active');

            $(".image_reel").animate({
                left:-image_reelPosition
            },500 ,function(){
                $(this).css({'left':'0px'});
            });
        }else{
            var triggerID = $active.attr("rel")-1;
            var image_reelPosition = triggerID * imageWidth;

            $(".paging a").removeClass('active');
            $active.addClass('active');

            $(".image_reel").animate({
                left: -image_reelPosition
            }, 500);
        }
        act=$('.paging a.active').attr('rel');

        imgs=arr.slice((act-1)*3,act*3);

        for(i=0;i<imgs.length;i++)
        {
            $('.'+imgs[i]).show();
        }


    };
    rotateSwitch = function(){
        play = setInterval(function(){
            $('.img').hide();
            $active = $('.paging a.active').next();
            rel=$('.paging a.active').attr('rel');
            // document.title=rel;

            if(rel==3)
            {
                $active = $('.paging a:first');
                end=true;
            }else {
                end=false;
            }
            rotate(end);
        },2000);
    };
    rotateSwitch();

    $(".image_reel a").hover(function(){
        clearInterval(play);
    },function(){
        rotateSwitch();
    });

    $(".paging a").click(function(){
        $('.img').hide();
        $active = $(this);

        act=$(this).attr('rel');

        imgs=arr.slice((act-1)*3,act*3);

        for(i=0;i<imgs.length;i++)
        {
            $('.'+imgs[i]).show();
        }
        clearInterval(play);
        rotate(false);
        rotateSwitch();
        return false;
    });

});
