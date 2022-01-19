const gotCitiesCSV = "King's Landing,Braavos,Volantis,Old Valyria,Free Cities,Qarth,Meereen";

const lotrCitiesArray = ["Mordor","Gondor","Rohan","Beleriand","Mirkwood","Dead Marshes","Rhun","Harad"];

const bestThing = "The best thing about a boolean is even if you are wrong you are only off by a bit";

//let body = document.getElementsByTagName('body')[0];
//let title = document.createElement('h3');
//let newElement = document.createElement('p');


// daqui em diante é contigo
function kata1() {
    // implemente aqui o código
    let body = document.getElementsByTagName('body')[0];
    let title = document.createElement('h3');
    title.innerText = 'Kata 1'
    body.appendChild(title)

    const f = gotCitiesCSV.split(',')
    return document.write(f)
}
kata1();

function kata2(){
    let body = document.getElementsByTagName('body')[0];
    let title = document.createElement('h3');
    title.innerText = 'Kata 2'
    body.appendChild(title)

    const f = bestThing.split(' ')
    console.log(f)
    return document.write(f)
}
kata2();

function kata3(){
    let body = document.getElementsByTagName('body')[0];
    let title = document.createElement('h3');
    title.innerText = 'Kata 3'
    body.appendChild(title)

    let f = gotCitiesCSV.split(',').join('; ')
    console.log('Kata 3: '+f)
    return document.write(f)
}
kata3();

function kata4(){
    let body = document.getElementsByTagName('body')[0];
    let title = document.createElement('h3');
    title.innerText = 'Kata 4'
    body.appendChild(title)

    const f = lotrCitiesArray.join(', ')
    console.log('Kata 4: '+ f)
    return document.write(f)
}
kata4();

function kata5(){
    let body = document.getElementsByTagName('body')[0];
    let title = document.createElement('h3');
    title.innerText = 'Kata 5'
    body.appendChild(title)

    const s = lotrCitiesArray.slice(0,5);
    console.log(s)
    return document.write(s)
}
kata5();

function kata6(){
    let body = document.getElementsByTagName('body')[0];
    let title = document.createElement('h3');
    title.innerText = 'Kata 6'
    body.appendChild(title)

    const s = lotrCitiesArray.slice(-5)
    console.log(s)
    return document.write(s)
}
kata6();

function kata7(){
    let body = document.getElementsByTagName('body')[0];
    let title = document.createElement('h3');
    title.innerText = 'Kata 7'
    body.appendChild(title)

    const s = lotrCitiesArray.slice(2, 5)
    console.log(s)
    return document.write(s)
}
kata7();

function kata8(){
    let body = document.getElementsByTagName('body')[0];
    let title = document.createElement('h3');
    title.innerText = 'Kata 8'
    body.appendChild(title)

    const r = lotrCitiesArray.splice(2,1)
    console.log(lotrCitiesArray)
    return document.write(lotrCitiesArray)
}
kata8();

function kata9(){
    let body = document.getElementsByTagName('body')[0];
    let title = document.createElement('h3');
    title.innerText = 'Kata 9'
    body.appendChild(title)

    const r = lotrCitiesArray.splice(5, Number.MAX_VALUE)
    console.log(lotrCitiesArray)
    return document.write(lotrCitiesArray)
}
kata9();

function kata10(){
    let body = document.getElementsByTagName('body')[0];
    let title = document.createElement('h3');
    title.innerText = 'Kata 10'
    body.appendChild(title)

    let inset = lotrCitiesArray.splice(2,0, 'Rohan')
    console.log(lotrCitiesArray)
    return document.write(lotrCitiesArray)
}
kata10();

function kata11(){
    let body = document.getElementsByTagName('body')[0];
    let title = document.createElement('h3');
    title.innerText = 'Kata 11'
    body.appendChild(title)

    const rn = lotrCitiesArray.splice(5, 1, 'Deadest Marshes')
    console.log(lotrCitiesArray)
    return document.write(lotrCitiesArray)
}
kata11();

function kata12(){
    let body = document.getElementsByTagName('body')[0];
    let title = document.createElement('h3');
    title.innerText = 'Kata 12'
    body.appendChild(title)

    const sl = bestThing.slice(0,15)
    console.log(sl)
    return document.write(sl)
}
kata12();

function kata13(){
    let body = document.getElementsByTagName('body')[0];
    let title = document.createElement('h3');
    title.innerText = 'Kata 13'
    body.appendChild(title)

    const ultimoSlice = bestThing.slice(-12)
    console.log(ultimoSlice)
    return document.write(ultimoSlice)
}
kata13();

function kata14(){
    let body = document.getElementsByTagName('body')[0];
    let title = document.createElement('h3');
    title.innerText = 'Kata 14'
    body.appendChild(title)

    const meioString = bestThing.slice(23, 38)
    console.log(meioString)
    return document.write(meioString)
}
kata14();

function kata15(){
    let body = document.getElementsByTagName('body')[0];
    let title = document.createElement('h3');
    title.innerText = 'Kata 15'
    body.appendChild(title)

    const substring = bestThing.substring(bestThing.length-12);
    console.log(substring)
    return document.write(substring)
}
kata15();

function kata16(){
    let body = document.getElementsByTagName('body')[0];
    let title = document.createElement('h3');
    title.innerText = 'Kata 16'
    body.appendChild(title)

    const meioString = bestThing.substring(23,38)
    console.log(meioString)
    return document.write(meioString)
}
kata16();

function kata17(){
    let body = document.getElementsByTagName('body')[0];
    let title = document.createElement('h3');
    title.innerText = 'Kata 17'
    body.appendChild(title)

    const pop = lotrCitiesArray.pop()
    //console.log(lotrCitiesArray)
    return document.write(lotrCitiesArray)
}
kata17();

function kata18(){
    let body = document.getElementsByTagName('body')[0];
    let title = document.createElement('h3');
    title.innerText = 'Kata 18'
    body.appendChild(title)

    const push = lotrCitiesArray.push('Harad')
    console.log(lotrCitiesArray)
    return document.write(lotrCitiesArray)
}
kata18();

function kata19(){
    let body = document.getElementsByTagName('body')[0];
    let title = document.createElement('h3');
    title.innerText = 'Kata 19'
    body.appendChild(title)

    const removeFirstElement = lotrCitiesArray.shift()
    //console.log(lotrCitiesArray)
    return document.write(lotrCitiesArray);
}
kata19();

function kata20(){
    let body = document.getElementsByTagName('body')[0];
    let title = document.createElement('h3');
    title.innerText = 'Kata 20'
    body.appendChild(title)

    const putFirstElement = lotrCitiesArray.unshift('Mordor')
    console.log(lotrCitiesArray)
    return document.write(lotrCitiesArray)
}
kata20();