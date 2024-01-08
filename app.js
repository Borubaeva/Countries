const ulTag=document.querySelector('ul')
const btns=document.querySelectorAll('button')
const input=document.querySelector('input')
const _url='https://restcountries.com/v3.1/all'


function getCountry(){
    fetch(_url)
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            showCountry(data)
        })
}

function showCountry(arr){
    ulTag.innerHTML=''
    for (const obj of arr){
        ulTag.innerHTML+=`
            <li>
                ${obj.name.common}
                <br>
                ${obj.capital}
                <br>
                ${obj.area}
            </li>`
    }
}

btns[0].onclick=()=>{
    ulTag.innerHTML=''
    getCountry()
};

btns[1].onclick = () => {
    ulTag.innerHTML=''
    // input.onchange=()=>{
    const filterCountry=data.filter(el=>el.common.toLowerCase()=input.value.toLowerCase())

    if (filterCountry.length>0){
        getCountryountry(filterCountry)
    } else {
        ulTag.innerHTML=`<li><h1>Sorry, we don't have information for ${input.value}</h1></li>`
    }

// }
    input.value=''
}