{
    console.log(A); //  Cannot access 'A' before initialization
    console.log(B); // Cannot access 'B' before initialization
    console.log(C); // undefined

    let A = 'APPLE'
    const B = 'BOLL'
    var C = 'CAT'

    console.log(A); // APPLE
    console.log(B); // BOLL
    console.log(C); // CAT
}