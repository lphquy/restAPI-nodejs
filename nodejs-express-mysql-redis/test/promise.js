let fn_1 = (callback) => {
    setTimeout(() => {
        return callback(null, '123');
    }, 1e3);
}

let fn_2 = (callback) => {
    setTimeout(() => {
        return callback(null, '456');
    }, 1e3);
}

let fn_3 = (callback) => {
    setTimeout(() => {
        return callback(null, '789');
    }, 1e3);
}
function fn_4() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve({error: null, data: '123'});
        }, 1e3)
    })
}
function fn_5() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve({error: null, data: '456'});
        }, 1e3)
    })
}
function fn_6() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve({error: null, data: '789'});
        }, 1e3)
    })
}

fn_4().then((rs1) => {
    console.log(rs1.data);
}).then(fn_5)

// async function doAsync(a, b, cb) {
//     console.log(a);
//     let wait = await cb();

// }
// doAsync('begin', 'end', fn);