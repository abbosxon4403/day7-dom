export function render(data) {
    // data.map;
}

export function createElement(id, isDone, text) {
    let LI = document.createElement("li");
    LI.dataset.id = id;
    LI.dataset.isDone = isDone;
    LI.className = "list-group-item d-flex align-items-center";

    let INPUT = document.createElement("input");
    INPUT.dataset.type = "check";
    INPUT.className = "form-check-input me-3";
    INPUT.setAttribute("type", "checkbox");
    LI.append(INPUT);

    let TEXT_DIV = document.createElement("div");
    TEXT_DIV.className = "text w-100";
    TEXT_DIV.textContent = text;
    LI.append(TEXT_DIV);

    let BTN_WRAPPER = document.createElement("div");
    BTN_WRAPPER.className = "d-flex gap-1";

    let EDIT_BTN = document.createElement("button");
    EDIT_BTN.dataset.type = "edit";
    EDIT_BTN.className = "btn btn-warning";
    EDIT_BTN.textContent = "edit";
    BTN_WRAPPER.append(EDIT_BTN);

    let DELETE_BTN = document.createElement("button");
    DELETE_BTN.dataset.type = "delete";
    DELETE_BTN.className = "btn btn-danger";
    DELETE_BTN.textContent = "delete";
    BTN_WRAPPER.append(DELETE_BTN);

    LI.append(BTN_WRAPPER);

    return LI;
}

export function todoObjectCreator(text) {
    return {
        id: new Date().getTime(),
        text,
        isDone: false,
    };
}

export function deleter(id) {}