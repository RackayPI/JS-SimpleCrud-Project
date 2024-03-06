import {generatorElement} from "./generatorElement_method.js";

$("main .section-02 .figure-02 .table-01").on("click", ".editButton", function (event) {
    const data = {
        id: $(event.target).closest("tr").attr("id"),
    }

    fetch("/asset01", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data)
    });
});

$("main .section-01 .figure-01 a").on("click", function (event) {
    const data = {
        id: "new"
    }

    fetch("/asset01", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data)
    });
});

// Under Construction
$("#searchBar").keyup(function (event) { 
    const data = {
        key: $("#searchBar").val()
    }

    fetch("/display", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data)
    })
    .then((res) => res.json())
    .then((obj) => {
        generatorElement(obj);
    });
});

$("main .section-02 .figure-02 .table-01").on("click", ".deleteButton", function (event) {
    const data = {
        id: $(event.target).closest("tr").attr("id"),
    }

    fetch("/deleting", {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data)
    });

    window.location.reload();
});

$("#saveButton").on("click", function (event) {
    const data = {
        userName: $("#userName").val(),
        email: $("#emailAddress").val().toLowerCase(),
        regDate: $("#registrationDate").val()
    }

    fetch("/saving", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data)
    })
    .then((res) => res.json())
    .then((data) => {
        if(data.condition) {
            $("main .section-02 .figure-04").addClass("on");
        } else {
            $("main .section-02 .figure-04").removeClass("on");

            window.location.href = "/";
        }
    });

    $("#saveButton").off("click");
});

$(document).ready(function (event) {
    if(window.location.pathname === "/form") {
        fetch("/form", {
            method: "POST"
        })
        .then((res) => res.json())
        .then((data) => {
            $("#userName").val(data.userName);
            $("#emailAddress").val(data.email);
            $("#registrationDate").val(data.regDate);
        });
    } else if(window.location.pathname === "/") {
        fetch("/", {
            method: "POST"
        })
        .then((res) => res.json())
        .then((obj) => {
            generatorElement(obj);
        });
    }
});