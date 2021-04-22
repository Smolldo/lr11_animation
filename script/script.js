 
(() =>{
    let btn = document.querySelector('.start_btn');
    let back = document.querySelector('.is-hidden');
    let bg = document.querySelector('.bg');
    
    btn.addEventListener('click', close);
    
    function close(){
        document.querySelector('audio').play();
    
        back.classList.toggle('backdrop')
    
        btn.style.opacity = 0;
    
        bg.classList.toggle('final')
    
    }
    
    })();
    
    let vol = document.querySelector('audio');
    vol.volume = 0.6;
