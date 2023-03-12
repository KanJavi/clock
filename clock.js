function clock() {
    let today = new Date();
    let time = today.getHours()+":"+today.getMinutes()+":"+today.getSeconds();
    document.getElementById("clock").innerHTML=time


}
setInterval(clock,1000)