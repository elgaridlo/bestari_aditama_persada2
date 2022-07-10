const check = (bilangan) => {
    for (let i = 1; i <= bilangan; i++) {
        if (i % 7 === 0) {
            console.log('bestada')
        } else if (i === bilangan) {
            console.log('sukses')
        } else {
            console.log(`${i}`)
        }
    } 
}

check(15)