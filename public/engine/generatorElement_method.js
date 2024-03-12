function generatorElement(content) {
    $("main .section-02 .figure-02 .table-01 tr").remove();
    for(let i = 0; i < content.length; i++) {
        $("main .section-02 .figure-02 .table-01").prepend(`
            <tr id="${content[i].id}">
                <td class="table-data-01">${content[i].name}</td>
                <td class="table-data-02">${content[i].email}</td>
                <td class="table-data-03">${content[i].regDate}
                    <figure class="button-container">
                        <button class="button-01 deleteButton">Delete</button>
                        <a class="editButton" href="/form">Edit</a>
                    </figure>
                </td>
            </tr>
        `);
    }
}

export {generatorElement};