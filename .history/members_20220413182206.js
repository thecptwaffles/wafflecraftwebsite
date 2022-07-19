//make the member list sortable
$(document).ready(function () {
    $("#memberlist").sortable({
        update: function (event, ui) {
            var order = $(this).sortable('serialize');
            $.post('/members/sort', order);
        }
    });
    $("#memberlist").disableSelection();
});