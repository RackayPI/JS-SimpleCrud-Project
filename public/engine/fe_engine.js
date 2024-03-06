$("main .section-02 .figure-02 .table-01").on("mouseover", "tr", function (event) {
    let id = $(this).attr("id");
    $(`#${id} .table-data-03 .button-container`).addClass("onMouse");
});

$("main .section-02 .figure-02 .table-01").on("mouseout", "tr", function (event) {
    let id = $(this).attr("id");
    $(`#${id} .table-data-03 .button-container`).removeClass("onMouse");
});

let count = [];
$(document).on("click", function (event) {
    let id = $((event.target).closest("tr")).attr("id");

    $(`main .section-02 .figure-02 .table-01 #${id} .table-data-03 .button-container`).addClass("onClick");

    count.push(id);
    if (count[0] !== count[count.length - 1]) {
        $(`main .section-02 .figure-02 .table-01 #${count[0]} .table-data-03 .button-container`).removeClass("onClick");
        count = [id];
    }
});