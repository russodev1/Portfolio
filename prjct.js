function toggleMode() {
    const html = document.documentElement

    // if (html.classList.contains('light')) {
    //     html.classList.remove('light')
    
    //  } else { 
    //     html.classList.add('light')
    // }
    
    html.classList.toggle('light')

    const img = document.querySelector ('#profile img');
    if (html.classList.contains('light')) {

        img.setAttribute('src', './assets/foto1.jpg')


    }

    else {
        img.setAttribute('src', './assets/foto2.jpg')
    }
    
    const alt = document.querySelector('#profile img')
    
    if (html.classList.contains('light'))
    img.setAttribute('alt', 'example')

    else {
        img.setAttribute('alt', 'text')
    }

}