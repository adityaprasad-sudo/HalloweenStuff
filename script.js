const scene = document.getElementById('scene')
        const forestBg = document.getElementById('forestBg')
        const roomimg = document.getElementById('roomimg')
        const bulbimg = document.getElementById('bulbimg')
        const lever = document.getElementById('lever')
        const happyguy = document.querySelector('.happyguy')
       let shiton =false;
       window.addEventListener('mousemove', (e) =>{
        const x = e.clientX / window.innerWidth - 0.5
        const y = e.clientY / window.innerHeight - 0.5
        scene.style.transform = `rotateX(${y * 15}deg) rotateY(${x * 15}deg)`
        forestBg.style.transform = `rotateX(${y * 15}deg) rotateY(${x * 15}deg)`
        roomimg.style.transform = `rotateX(${y * 15}deg) rotateY(${x * 15}deg)`
       })
       lever.addEventListener('click', () =>{
        shiton = !shiton
        lever.classList.add('puller')
        setTimeout(() => 
            lever.classList.remove('puller'), 250
        )
        roomimg.classList.remove('flickering')
        void roomimg.offsetWidth
        roomimg.classList.add('flickering')
        setTimeout(() => {
            document.body.classList.toggle('horrorshit', shiton)
            roomimg.src = shiton ? 'assests/bgdark2.png' : 'assests/bg.png'
            bulbimg.src = shiton ? 'assests/blubdark.png' : 'assests/blub.png'
            happyguy.src = shiton ? 'assests/ee.png' : 'assests/happyguy.png'
        })
       })