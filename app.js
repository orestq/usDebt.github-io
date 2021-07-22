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
        persent: 100,
    },
    {
        id: 10,
        persent: 100,

    },

];

var debt3 = document.getElementById('debt3')

function getStatus() {
    data1.filter(function(item) {
        return Object.keys(item).some(function(key) {
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
    interval = setInterval(function() {
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
                    interval = setInterval(function() {
                        count1++;
                        let str_count = count1.toLocaleString("en-US");
                        debt1.children[0].textContent = '$' + str_count;
                    });
                }
                if (count2 = 1500000) {
                    set = setInterval(function() {
                        let str_count = count2.toLocaleString("en-US");
                        debt1.children[1].textContent = '$' + str_count;
                    })
                    interval = setInterval(function() {
                        count2++;
                        let str_count = count2.toLocaleString("en-US");
                        debt1.children[1].textContent = '$' + str_count;
                    }, 1100)
                }
                if (count3 = 7000000000) {
                    set = setInterval(function() {
                        let str_count = count3.toLocaleString("en-US");
                        debt1.children[2].textContent = '$' + str_count;
                    })
                    interval = setInterval(function() {
                        count3++;
                        let str_count = count3.toLocaleString("en-US");
                        debt1.children[2].textContent = '$' + str_count;
                    }, 500)
                }
                if (count4 = 1300000) {
                    set = setInterval(function() {
                        let str_count = count4.toLocaleString("en-US");
                        debt1.children[3].textContent = '$' + str_count;
                    })
                    interval = setInterval(function() {
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
                    set = setInterval(function() {
                        let str_count = count1.toLocaleString("en-US");
                        debt2.children[0].textContent = '$' + str_count;
                    })
                    const str_count = count1.toLocaleString("en-US");
                    debt2.children[0].textContent = '$' + str_count;
                    interval = setInterval(function() {
                        count1++;
                        const str_count = count1.toLocaleString("en-US");
                        debt2.children[0].textContent = '$' + str_count;
                    }, 11000);
                }
                if (count2 = 10000) {
                    set = setInterval(function() {
                        let str_count = count2.toLocaleString("en-US");
                        debt2.children[1].textContent = '$' + str_count;
                    })
                    interval = setInterval(function() {
                        count2++;
                        let str_count = count2.toLocaleString("en-US");
                        debt2.children[1].textContent = '$' + str_count;
                    }, 700)
                }
                if (count3 = 8000) {
                    set = setInterval(function() {
                        let str_count = count3.toLocaleString("en-US");
                        debt2.children[2].textContent = '$' + str_count;
                    })
                    interval = setInterval(function() {
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