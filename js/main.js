var title = document.querySelector('.title')
var inp1 = document.querySelector('.inpf')
var btn1 = document.querySelector('.btn1')
var frm = document.querySelector('.frm')
frm.addEventListener('submit', (e)=>{
    var radio = document.querySelectorAll('.inp1')
    var title = document.querySelector('.title')
    var inp1 = document.querySelector('.inpf')
    var inp2 = document.querySelector('.inpf1')
    var tinp1 = document.querySelector('.inp1')
    var tinp2 = document.querySelector('.inp2')
    var tinp3 = document.querySelector('.inp3')
    var tinp4 = document.querySelector('.inp4')
    e.preventDefault()
tinp1.addEventListener('change', function(){
    if(tinp1.checked && inp2.value >= 3 && inp2.value <= 10){
        let soat = inp1.value / inp2.value
        let minut = soat * 60
        title.textContent = tinp1.value + ' '
        title.textContent += Math.floor(inp1.value / inp2.value) + ' soat '
        title.textContent += Math.floor(minut % 60) + ' minut'
    }
    else if(inp2.value <= 3){
        title.textContent = 'Piyoda minimum 3km/soat yuradi'
    }
    else{
        console.log('ishlamadi');
        title.textContent = 'Piyodalar buncha tezlikda yura olmaydi'
    }
})
    tinp2.addEventListener('change', function(){
        if(tinp2.checked && inp2.value >= 15 && inp2.value <= 40){
            let soat1 = inp1.value / inp2.value
            let minut1 = soat1 * 60

            title.textContent = tinp2.value + ' '
            title.textContent += Math.floor(inp1.value / inp2.value) + ' soat '
            title.textContent += Math.floor(minut1 % 60) + ' minut'
        }
        else if(inp2.value <= 15){
            title.textContent = 'Velosiped minimum 15km/soat yuradi'
        }
        else{
            console.log('ishlamadi');
            title.textContent = 'Velosiped buncha tezlikda yura olmaydi'
        }
    })
tinp3.addEventListener('change',function(){
    if(tinp3.checked && inp2.value >= 35 && inp2.value <= 90){
        let soat2 = inp1.value / inp2.value
        let minut2 = soat2 * 60
        title.textContent = tinp3.value + ' '
        title.textContent += Math.floor(inp1.value / inp2.value) + ' soat '
        title.textContent += Math.floor(minut2 % 60) + ' minut'
    }
    else if(inp2.value <= 35){
        title.textContent = 'Mashina minimum 35km/soat yuradi'
    }
    else{
        console.log('ishlamadi');
        title.textContent = 'Mashina buncha tezlikda yura olmaydi'
    }
})
tinp4.addEventListener('change', function(){
    if(tinp4.checked && inp2.value >= 200 && inp2.value <= 800){
        let soat3 = inp1.value / inp2.value
        let minut3 = soat3 * 60
        title.textContent = tinp4.value + ' '
        title.textContent += Math.floor(inp1.value / inp2.value) + ' soat '
        title.textContent += Math.floor(minut3 % 60) + ' minut'
    }
    else if(inp2.value <= 200){
        title.textContent = 'Samolyot minimum 200km/soat yuradi'
    }
    else{
        console.log('ishlamadi');
        title.textContent = 'Samolyot buncha tezlikda yura olmaydi'
    }
})
})
var btn3 = document.querySelector('.btn3')
btn3.addEventListener('clcik', function(evt){
    evt.preventDefault()
    btn3 = alert('Birinchi masofa kiriting keyin tezligingizni kiriting va passtdagi Kettik buttonini bosing va hohlagan transportingizni tanlang')
})
