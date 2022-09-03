$( document ).ready(function()
{
    $("#carrossel img:eq(0)").addClass("banner-ativo").show();

    setInterval(slide, 2000)

    function slide()
    {
        if( $(".banner-ativo").next().length )
        {
            $(".banner-ativo").removeClass("banner-ativo").hide().next().addClass("banner-ativo").show();
        }

        else
        {
            $(".banner-ativo").removeClass().hide();

            $("#carrossel img:eq(0)").addClass("banner-ativo").show();
        }
    }

    $("#bars").click(function()
    {
        if($('#menu').hasClass("menu-ativo"))
        {
            $("#menu").removeClass("menu-ativo");
        }

        else
        {
            $("#menu").addClass("menu-ativo");
        }
    })
})