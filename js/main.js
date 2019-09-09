(function(document, $) {

    function markLink(elem) {
        let hostname = $('<a>').prop('href', elem.attr('href')).prop('hostname');

        if(hostname && hostname.length && !hostname.includes('atlassian.net')) {
            elem.attr('target', '_blank');
            elem.attr('rel', 'noreferrer');
        }
    }

    $(document).ready(function() {
        $("a").each(function() {
            markLink($(this));
        })
    });


    $(document).arrive("a", function() {
        markLink($(this));
    });

})(document, jQuery);