// bai 1
document.getElementById("bai1").addEventListener("click", function(){
    var a = +document.getElementById("day").value
    document.getElementById("result1").innerText = a*100+".000VND"
})


//bai2
document.getElementById("bai2").addEventListener("click",function(){
    var a = +document.getElementById("so1").value
    var b = +document.getElementById("so2").value
    var c = +document.getElementById("so3").value
    var d = +document.getElementById("so4").value
    var e = +document.getElementById("so5").value
    document.getElementById("result2").innerText = (a+b+c+d+e)/5
})

//bai3

document.getElementById("bai3").addEventListener("click",function(){
    var a = +document.getElementById("money").value
    document.getElementById("result3").innerText = a * 23.500 +".000VND"
})

//bai4


document.getElementById("bai4").addEventListener("click",function(){
    var a = +document.getElementById("chieuDai").value
    var b = +document.getElementById("chieuRong").value
    document.getElementById("result4").innerText = (a+b)*2
    document.getElementById("result5").innerText = a*b
})

//bai 5

document.getElementById("bai5").addEventListener("click",function(){
    var a = +document.getElementById("numbera").value
    document.getElementById("result6").innerText = Math.floor((a % 10 ) + (a/ 10));

})