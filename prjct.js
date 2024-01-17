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

        img.setAttribute('src', 'https://cdn.europosters.eu/image/750/posters/pink-floyd-dark-side-i30715.jpg')


    }

    else {
        img.setAttribute('src', 'https://i.pinimg.com/564x/d8/04/b5/d804b5ff21ea9f55412cc10c2672c41a.jpg')
    }
    
    const alt = document.querySelector('#profile img')
    
    if (html.classList.contains('light'))
    img.setAttribute('alt', 'example')

    else {
        img.setAttribute('alt', 'text')
    }

}