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
        },1e3);
    });
}

async function asyncCall() {
    console.log('begin');
    const rs1 = await fn_4();
    console.log(rs1.data);
    console.log('end');
}
// asyncCall();
// async function doAsync(a, b, cb) {
//     console.log(a);
//     let wait = await cb();

// }
// doAsync('begin', 'end', fn);

let asyncFn = async () => {
    return 10;
}
//console.log(asyncFn)

(async function () {
    let a = await fn_4();
    console.log(a);
})();