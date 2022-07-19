//make the member list sortable by clicking on the sort button with the class sortable and the id sort_members 
$(document).ready(function () {
    $("#sort_members").click(function () {
        $("#member_list").sortable({
            placeholder: "ui-state-highlight",
            update: function (event, ui) {
                var order = $("#member_list").sortable("serialize");
                $.post("/members/sort", order);
            }
        });
    });
});