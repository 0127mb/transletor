let inp = document.querySelector('.inp1'); // birinchi textarea
let btn = document.querySelector('.btn1');
let select2 = document.querySelector('#language2');
let select1 = document.querySelector('#language');
let inp2 = document.querySelector('.inp2');
let btn1 = document.querySelector('.button');
let btn2 = document.querySelector('.button1');

btn.addEventListener('click', () => {
    fetch(`https://api.mymemory.translated.net/get?q=${encodeURIComponent(inp.value)}&langpair=${select1.value}|${select2.value}`)
        .then(response => response.json())
        .then(data => {
            inp2.value = data.responseData.translatedText;

            // Tarjimalangan matnni ovoz chiqarish
         
        });

    // inp.value = '';
}); btn1.addEventListener('click', () => { 
let speech = new SpeechSynthesisUtterance(inp.value);
speech.lang = select1.value;
    speechSynthesis.speak(speech);
})
btn2.addEventListener('click',()=>{
       let speech = new SpeechSynthesisUtterance(inp2.value);
            speech.lang = select2.value;
            speechSynthesis.speak(speech);
})
