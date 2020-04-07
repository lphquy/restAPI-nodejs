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

function donow_callback(cb1) {
    console.log('begin');
    cb1((rs1, rs2) => {
        console.log(rs2);
        fn_2((rs3, rs4) => {
            console.log(rs4);
            fn_3((rs5, rs6) => {
                console.log(rs6);
                console.log('end');
            })
        })
    })
}














// function donow_callback(cb1) {
//     console.log('begin');
//     cb1((value1, value2) => {
//         console.log(value2);
//         fn_2((value3, value4) => {
//             console.log(value4);
//             fn_3((value5, value6) => {
//                 console.log(value6);
//                 console.log('end');
//             })
//         })
//     })
// };

console.log(1);
donow_callback(fn_1);
console.log(10);


// async function doAsync(a, b, cb) {
//     console.log(a);
//     let wait = await cb();

// }
// doAsync('begin', 'end', fn);