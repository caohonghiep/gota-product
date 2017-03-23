async function main() {
    let a = await ping();
    console.log('hello ' +a);
}

async function ping() {
    for (var i = 0; i < 4; i++) {
        let j;
        try {
            j = await delay(300);
        }catch (e){
            console.log('err '+e);
        }
        console.log('ping'+j);
    }

    return 123456;
}

function delay(ms: number) {
    return new Promise((resolve, reject) => setTimeout(reject(ms), ms));
}

main();