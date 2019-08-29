
(function($) {
    $(function () {
        $('.sub_menu').on('click', function (e) {
            e.preventDefault();
            var $subNav = $('.sub_menu_nav', this);
            if ($subNav.css("display") === "none") {
                $(this).addClass('is-active');
                $subNav.velocity('slideDown', {duration: 400});
            } else {
                $(this).removeClass('is-active');
                $subNav.velocity('slideUp', {duration: 400});
            }
        });
    });
})(jQuery);
</script>
