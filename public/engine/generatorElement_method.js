function generatorElement(obj) {
    $("main .section-02 .figure-02 .table-01 tr").remove();
    for(let i = 0; i < obj.amount; i++) {
        $("main .section-02 .figure-02 .table-01").prepend(`
            <tr id="${obj.id[i]}">
                <td class="table-data-01">${obj.data[obj.id[i]].userName}</td>
                <td class="table-data-02">${obj.data[obj.id[i]].email}</td>
                <td class="table-data-03">${obj.data[obj.id[i]].regDate}
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