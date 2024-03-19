import {generatorElement} from "./generatorElement_method.js";

// Sending ID Of Specific Data (.editButton Activate)
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

// Sending Command For New Data (a[value = "New"] Activate)
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

// Sending Keyword For Search Data (#searchBar Activate)
$("#searchBar").keyup(function (event) { 
    const data = {
        key: $("#searchBar").val().replace(/\s+/g, " ").trim(),
    }

    fetch("/search", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data)
    })
    .then((res) => res.json())
    .then((content) => {
        generatorElement(content);
    });
});

// Trimming White Space For Search Bar Value
$("#searchBar").focusout(function (event) { 
    $(this).val($(this).val().replace(/\s+/g, " ").trim());
});

// Sending Command ID For Delete a Specific Data (.deleteButton Activate)
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

// Saving Data (#saveButton Activate)
$("#saveButton").on("click", function (event) {
    const data = {
        name: $("#userName").val().replace(/\s+/g, " ").trim(),
        email: $("#emailAddress").val().toLowerCase().replace(/\s+/g, ""),
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

            $("#saveButton").off("click");
            window.location.href = "/";
        }
    });
});

// Trimming White Space For (#userName) Value
$("#userName").focusout(function (event) { 
    $(this).val($(this).val().replace(/\s+/g, " ").trim());
});

// Trimming White Space For (#userName) Value
$("#emailAddress").focusout(function (event) { 
    $(this).val($(this).val().replace(/\s+/g, ""));
});

// Displaying All Data
$(document).ready(function (event) {
    if(window.location.pathname === "/") {
        fetch("/", {
            method: "POST"
        })
        .then((res) => res.json())
        .then((content) => {
            generatorElement(content);
        });
    }
});
