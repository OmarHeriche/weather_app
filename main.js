let button=document.querySelector(".button");
let inputValue=document.querySelector(".inputValue");
let hum=document.querySelector(".hum");
let cityName=document.querySelector(".cityName");
let desc=document.querySelector(".desc");
let temp=document.querySelector(".temp");
let body = document.querySelector("body");
let hedda = document.querySelector(".hedda");
let dat = document.querySelector(".date");
button.addEventListener("click",function() {
    fetch("https://api.openweathermap.org/data/2.5/weather?q="+inputValue.value+"&appid=d01034773896791d913a2da8ac7df505").then(
        response=>response.json()
    )
    .then(
        (data)=>{
            cityName.innerHTML = `city name : ${data.name}`;
            if(data.name===undefined){alert("rak 3mitha")}
            desc.innerHTML=`weather ki rahou hannouni : ${data.weather[0].description}`
            temp.innerHTML=`temperature : ${Math.ceil(data.main.temp- 273.15)}`
            hum.innerHTML=`humidity : ${data.main.humidity}`;
            dat.innerHTML=`Date : ${pilila.getDate()}/${pilila.getMonth()+1}/${pilila.getFullYear()}`;
            if(pilila.getMonth()<=10&& pilila.getMonth()>=8){hedda.innerHTML="i'ts autumn = hammam time :)";}
            else if(pilila.getMonth()<=7&& pilila.getMonth()>=5){hedda.innerHTML="i'ts summer"}
            else if(pilila.getMonth()===11|| pilila.getMonth()===0|| pilila.getMonth()===1){hedda.innerHTML="i'ts winter"}
            else {hedda.innerHTML="i'ts spring"}
        }
    )
})
let pilila = new Date();
console.log(pilila.getMonth())
if(pilila.getMonth()<=7&& pilila.getMonth()>=5){
    body.style.cssText="background-image: url(images/summer_backgruound.jpg);"
}else if(pilila.getMonth()===11|| pilila.getMonth()===0|| pilila.getMonth()===1){
    body.style.cssText="background-image: url(images/winter_background.jpg);"
}else if(pilila.getMonth()<=10&& pilila.getMonth()>=8){
    body.style.cssText="background-image: url(images/autumn_background.jpg);"
}else {
    body.style.cssText="background-image: url(images/spring_background.jpg);"
}