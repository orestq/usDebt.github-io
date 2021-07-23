const data1 = [{
    id: 1,
    usDebt: 300000000000,
    usDebt1: 10000,
},
{
    id: 2,
    usDebt: 210000000000,
    usDebt1: 16000000000,
},
{
    id: 3,
    usDebt: 120000000000,
    usDebt1: 3000,
},
{
    id: 4,
    usDebt: 190000000000,
    usDebt1: 130000000000,
},
{
    id: 5,
    usDebt: 30000000000,
    usDebt1: 660000000,
},
{
    id: 6,
    usDebt: 20000000000,
    usDebt1: 6000,
},
{
    id: 7,
    usDebt: 22000000000,
},
{
    id: 8,
    usDebt: 10000000000,
},
{
    id: 9,
    rate: 100,
},
{
    id: 10,
    rate: 100,

},

];

var debt3 = document.getElementById('debt3')

function getStatus() {
    data1.filter(function (item) {
        return Object.keys(item).some(function (key) {
            let test = item;
            createListEl(test);
            return (item[key] === item.id);
        })
    })
};

getStatus();

function createListEl(test) {
    const items = document.createElement('div');
    items.textContent = `${test.usDebt}`;
    items.setAttribute('class', 'l');
    const layer = document.querySelectorAll('.l');
    for (i = 0; i < layer.length; i++) {
        layer[i].id = 'layer' + i
    }
    debt3.append(items);
    changeDebt()
}

function changeDebt() {
    let test1 = debt3.children[0];
    let test2 = debt3.children[1];
    if (test1 = test1.textContent) {
        setDebt(test1);
    }
}

function setDebt(test1) {
    interval = setInterval(function () {
        test1++;
        let str_count = test1.toLocaleString("en-US");
        debt3.children[0].textContent = '$' + str_count;
    }, 200);
}


const data = [{
    id: 1,
    usDebt: 24000000,
    usDebt1: 12000,
},
{
    id: 2,
    usDebt: 1500000,
    usDebt1: 10000,
},
{
    id: 3,
    usDebt: 7000000000,
    usDebt1: 8000,
},
{
    id: 4,
    usDebt: 1300000,
    usDebt1: 6000,
},
{
    id: 5,
    usDebt: 1200000,
    usDebt1: 4000,
},
{
    id: 6,
    usDebt: 1000000,
    usDebt1: 2000,
},
{
    id: 7,
    usDebt: '',
    usDebt1: '',
},
];

var debt1 = document.getElementById('debt1')
var debt2 = document.getElementById('debt2')

const listDebt = () => {
    data.forEach((items) => {
        for (key in items) {
            if (key == 'usDebt') {
                const items = document.createElement('div');
                items.setAttribute('class', 'l');
                const layer = document.querySelectorAll('.l');

                for (i = 0; i < layer.length; i++) {
                    layer[i].id = 'layer' + i
                }

                debt1.append(items)
                let count1 = debt1.children[0];
                let count2 = debt1.children[1];
                let count3 = debt1.children[2];
                let count4 = debt1.children[3];

                // console.log(count1);
                if (count1 = 24000000) {
                    interval = setInterval(function () {
                        count1++;
                        let str_count = count1.toLocaleString("en-US");
                        debt1.children[0].textContent = '$' + str_count;
                    });
                }
                if (count2 = 1500000) {
                    set = setInterval(function () {
                        let str_count = count2.toLocaleString("en-US");
                        debt1.children[1].textContent = '$' + str_count;
                    })
                    interval = setInterval(function () {
                        count2++;
                        let str_count = count2.toLocaleString("en-US");
                        debt1.children[1].textContent = '$' + str_count;
                    }, 1100)
                }
                if (count3 = 7000000000) {
                    set = setInterval(function () {
                        let str_count = count3.toLocaleString("en-US");
                        debt1.children[2].textContent = '$' + str_count;
                    })
                    interval = setInterval(function () {
                        count3++;
                        let str_count = count3.toLocaleString("en-US");
                        debt1.children[2].textContent = '$' + str_count;
                    }, 500)
                }
                if (count4 = 1300000) {
                    set = setInterval(function () {
                        let str_count = count4.toLocaleString("en-US");
                        debt1.children[3].textContent = '$' + str_count;
                    })
                    interval = setInterval(function () {
                        count4++;
                        let str_count = count4.toLocaleString("en-US");
                        debt1.children[3].textContent = '$' + str_count;
                    }, 200)
                }
            } else if (key == 'usDebt1') {
                const items = document.createElement('div');
                items.setAttribute('class', 'l');
                const layer = document.querySelectorAll('.l');
                for (i = 0; i < layer.length; i++) {
                    layer[i].id = 'layer' + i
                }
                debt2.append(items)
                let count1 = debt2.children[0];
                let count2 = debt2.children[1];
                let count3 = debt2.children[2];
                // console.log(count2);
                if (count1 = 12000) {
                    set = setInterval(function () {
                        let str_count = count1.toLocaleString("en-US");
                        debt2.children[0].textContent = '$' + str_count;
                    })
                    const str_count = count1.toLocaleString("en-US");
                    debt2.children[0].textContent = '$' + str_count;
                    interval = setInterval(function () {
                        count1++;
                        const str_count = count1.toLocaleString("en-US");
                        debt2.children[0].textContent = '$' + str_count;
                    }, 11000);
                }
                if (count2 = 10000) {
                    set = setInterval(function () {
                        let str_count = count2.toLocaleString("en-US");
                        debt2.children[1].textContent = '$' + str_count;
                    })
                    interval = setInterval(function () {
                        count2++;
                        let str_count = count2.toLocaleString("en-US");
                        debt2.children[1].textContent = '$' + str_count;
                    }, 700)
                }
                if (count3 = 8000) {
                    set = setInterval(function () {
                        let str_count = count3.toLocaleString("en-US");
                        debt2.children[2].textContent = '$' + str_count;
                    })
                    interval = setInterval(function () {
                        count3++;
                        let str_count = count3.toLocaleString("en-US");
                        debt2.children[2].textContent = '$' + str_count;
                    }, 9000)
                }

            }
        };
    });
};

listDebt();

const myModal = document.getElementById('myModal');
const btnComment = document.getElementById('btn-comment');

const sendComment = document.getElementById('sendComment');
const btnClose = document.getElementById('closeModal');
const inputComment = document.getElementById('inputComment');

const myForm = document.getElementById('myForm');
const btnConfirm = document.getElementById('btnConfirm');
const btnCloseForm = document.getElementById('closeForm');

const email = document.getElementById('email');
const password = document.getElementById('password');

const fieldEmpty = document.querySelector('.field-empty');
const incorrect = document.querySelector('.incorrect');

const svgShape = document.getElementById('Shape');

function showBlock() {
    myModal.classList.add('b-show');
}

btnComment.addEventListener('click', showBlock);

function changeColor() {
    var doc = document.getElementById("Shape");
    var color = ["#f5516f", "#086fc9", "#b816e0", "#08c93f"];
    doc.style.fill = color[i];
    i = (i + 1) % color.length;
    svgShape.classList.add('b-show');
}

function setColor() {
    setTimeout(changeColor, 1000);
}

setInterval(setColor, 800);

function showModal() {
    myModal.classList.add('b-show');
    myModal.classList.remove('hide');
}

function closeModal() {
    myModal.classList.add('hide');
    myModal.classList.remove('b-show');
};

function validField() {
    if (inputComment.value.trim() !== '') {
        showForm();
    } else {
        console.log('pusto');
        fieldEmpty.hidden = false
    }
}

function closeForm() {
    myForm.classList.add('hide');
    myForm.classList.remove('b-show');
};

function showForm() {
    myForm.classList.add('b-show');
    myForm.classList.remove('hide')
}

const dataAuth = {
    email: 'quality-geek@gmail.com',
    password: 123456
}

function validFieldsAuth() {
    if (email.value === dataAuth.email && password.value == dataAuth.password) {
        console.log(dataAuth.email);
        console.log(inputComment.value.trim());
        savedComment = {
            login: email.value,
            password: password.value,
            comment: inputComment.value.trim()
        };
        localStorage.setItem('comment', JSON.stringify(savedComment));
        reset();
    } else {
        incorrect.hidden = false;
    }
}

function reset() {
    myForm.classList.remove('b-show');
    myModal.classList.remove('b-show');
    incorrect.hidden = true;
    fieldEmpty.hidden = true;
    resetTextarea();
}


function resetTextarea() {
    document.getElementById('inputComment').value = '';
    document.getElementById('email').value = '';
    document.getElementById('password').value = '';
}

btnConfirm.addEventListener('click', validFieldsAuth);

btnComment.addEventListener('click', showModal);
btnClose.addEventListener('click', closeModal);

btnCloseForm.addEventListener('click', closeForm)
sendComment.addEventListener('click', validField);
