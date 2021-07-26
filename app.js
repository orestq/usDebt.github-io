(function () {
    const clock = new debtClock
        (
            "totalDebt", "perCitizen", "perTaxpayer",
            "usFederal", "usFederalBudget",
            "usFederalActual", "usFederalBudgetActual",
            30
        )

})();

function debtClock
    (
        totalDebt, perCitizen, perTaxpayer,
        usFederal, usFedBudget,
        usFederalActual, usFederalBudgetActual,
        fps
    ) {
    // Line 1
    this.TOTAL_DEBT = totalDebt;
    this.PER_CITIZEN = perCitizen;
    this.PER_TAXPAYER = perTaxpayer;
    this.FPS_DELAY = fps ? 2000 / fps : 100;
    this.TOTAL_DECIMALS = 0;
    this.CITIZEN_DECIMALS = 3;
    this.TAXPAYER_DECIMALS = 3;
    this.START_DATE = new Date(2018, 6, 10);
    this.START_DEBT = 24000000000000;
    this.DEBT_PER_DAY = 24000000;
    this.CITIZENS = 300000000;
    this.TAXPAYER = 100000000;
    this.debtPerSecond = this.DEBT_PER_DAY / 24 / 60 / 60;

    // Line 2
    this.US_FEDERAL = usFederal;
    this.FEDERAL_DEBT = 20000;
    this.FEDERAL_DEBT_DECIMALS = 3;

    this.US_FEDERAL_BUDGET = usFedBudget;
    this.FED_BUDGET = 40000;
    this.FEDERAL_DEBT_BUDGET_DECIMALS = 3;

    // Line 3 
    this.US_FEDERAL_ACTUAL = usFederalActual;
    this.FEDERAL_DEBT_ACTUAL = 3800;
    this.FEDERAL_DEBT_ACTUAL_DECIMALS = 3;

    this.US_FEDERAL_BUDGET_ACTUAL = usFederalBudgetActual;
    this.FED_BUDGET_ACTUAL = 7600;
    this.FEDERAL_DEBT_BUDGET_ACTUAL_DECIMALS = 3;

    this.addCommas = function (str, numberOfDecimals) {
        str = String(str);
        let decimals = str.split(".")[1];
        decimals = decimals ? "," + decimals : "";
        decimals = decimals.substring(0, numberOfDecimals + 1);
        str = str.split(".")[0];
        let rgx = /(\d+)(\d{3})/;
        while (rgx.test(str)) {
            str = str.replace(rgx, '$1' + ',' + '$2');
        }
        if (numberOfDecimals > 0) {
            return str + decimals;
        } else {
            return str;
        }
    };

    this.updateOutput = function (id, value) {
        let output = document.getElementById(id);
        if (output != undefined) {
            output.innerHTML = "$" + value;
        }
    };

    this.update = function () {
        let now = new Date();
        let difference = now - this.START_DATE;
        difference /= 1000;

        // Line 1
        let total = ((difference * this.debtPerSecond));
        let perCitizen = (total / this.CITIZENS);
        let perTaxpayer = (total / this.TAXPAYER);

        // Line 2
        let usFederal = (total / this.FEDERAL_DEBT);
        let usFedBudget = (total / this.FED_BUDGET);

        // Line 3
        let usFederalActual = (total / this.FEDERAL_DEBT_ACTUAL);
        let usFederalBudgetActual = (total / this.FED_BUDGET_ACTUAL);

        // String
        let str;

        // Line 1
        str = this.addCommas(total, this.TOTAL_DECIMALS);
        this.updateOutput(this.TOTAL_DEBT, str);

        str = this.addCommas(perCitizen, this.CITIZEN_DECIMALS)
        this.updateOutput(this.PER_CITIZEN, str);

        str = this.addCommas(perTaxpayer, this.TAXPAYER_DECIMALS);
        this.updateOutput(this.PER_TAXPAYER, str);
        thisObj = this;

        str = this.addCommas(usFederal, this.FEDERAL_DEBT_DECIMALS);
        this.updateOutput(this.US_FEDERAL, str)

        str = this.addCommas(usFedBudget, this.FEDERAL_DEBT_BUDGET_DECIMALS);
        this.updateOutput(this.US_FEDERAL_BUDGET, str)


        // Line 2
        str = this.addCommas(usFederal, this.FEDERAL_DEBT_DECIMALS);
        this.updateOutput(this.US_FEDERAL, str)

        str = this.addCommas(usFedBudget, this.FEDERAL_DEBT_BUDGET_DECIMALS);
        this.updateOutput(this.US_FEDERAL_BUDGET, str)


        // Line 3
        str = this.addCommas(usFederalActual, this.FEDERAL_DEBT_ACTUAL_DECIMALS);
        this.updateOutput(this.US_FEDERAL_ACTUAL, str)

        str = this.addCommas(usFederalBudgetActual, this.FEDERAL_DEBT_BUDGET_ACTUAL_DECIMALS);
        this.updateOutput(this.US_FEDERAL_BUDGET_ACTUAL, str)

        window.setTimeout(function () {
            thisObj.update();
        }, this.FPS_DELAY)
    };
    this.update();
}


// Add comment
const addBtns = document.querySelectorAll('.add-btn:not(.solid)');
const saveItemBtns = document.querySelectorAll('.solid');
const addItemContainers = document.querySelectorAll('.add-container');
const addItems = document.querySelectorAll('.add-item');
const textComment = document.getElementById('text-comment')
// Item Lists
const listColumns = document.querySelectorAll('.drag-item-list');
const commentlogListEl = document.getElementById('comment-list');

const myForm = document.getElementById('myForm');
const btnConfirm = document.getElementById('btnConfirm');
const btnCloseAuth = document.getElementById('closeAuth');
const btnCloseForm = document.getElementById('closeForm');
const incorrect = document.querySelector('.incorrect');
const formAuth = document.getElementById('formAuth');
const fieldEmpty = document.querySelector('.field-empty')
const email = document.getElementById('email');
const password = document.getElementById('password');

let updatedOnLoad = false;
let commentlogListArray = [];

function getSavedColumns() {
    if (localStorage.getItem('commentlogItems')) {
        commentlogListArray = JSON.parse(localStorage.commentlogItems);
    } else {
        commentlogListArray = [];
    }
}

function updateSavedColumns() {
    listArrays = [commentlogListArray];
    const arrayNames = ['commentlog'];
    arrayNames.forEach((arrayName, index) => {
        localStorage.setItem(`${arrayName}Items`, JSON.stringify(listArrays[index]));
    });
}

function createItemEl(columnEl, column, item, index) {
    const listEl = document.createElement('li');
    listEl.textContent = item;
    listEl.classList.add('drag-item');
    columnEl.appendChild(listEl);
}

function updateDOM() {
    if (!updatedOnLoad) {
        getSavedColumns();
    }
    commentlogListEl.textContent = '';
    commentlogListArray.forEach((commentlogItem, index) => {
        createItemEl(commentlogListEl, 0, commentlogItem, index);
    });
    updatedOnLoad = true;
    updateSavedColumns();
}

function addToColumn(column) {

    const itemText = addItems[column].textContent;
    const selectedArray = listArrays[column];
    selectedArray.push(itemText);
    addItems[column].textContent = '';
    updateDOM(column);
}

function showInputBox() {
    myForm.classList.add('b-show')
    myForm.classList.remove('hide')
}

function closeForm() {
    myForm.classList.remove('b-show')
    myForm.classList.add('hide')
}

function closeAuth() {
    formAuth.classList.add('hide');
    formAuth.classList.remove('b-show');
};

function showForm() {
    formAuth.classList.add('b-show');
    formAuth.classList.remove('hide')
}

const dataAuth = {
    email: 'quality-geek@gmail.com',
    password: 123456
}

function validFieldsAuth(column) {
    if (email.value === dataAuth.email && password.value == dataAuth.password) {
        addToColumn(column);
        reset();
    } else {
        incorrect.hidden = false;
        console.log('false');
    }
}
function reset() {
    myForm.classList.remove('b-show');
    formAuth.classList.remove('b-show');
    incorrect.hidden = true;
    fieldEmpty.hidden = true;
    resetTextarea();
}

function resetTextarea() {
    document.getElementById('email').value = '';
    document.getElementById('password').value = '';
}
function validField(column) {
    if (addItems[column].textContent.trim() !== '') {
        showForm()
    } else {
        console.log('pusto');
        fieldEmpty.hidden = false
    }
}

btnCloseForm.addEventListener('click', closeForm);
btnCloseAuth.addEventListener('click', closeAuth)

function hideInputBox(column) {
    validField(column)
}
updateDOM();

