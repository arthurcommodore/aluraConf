function scroll(selector) {
    $(selector).click(function(e) {
        e.preventDefault()
        const target = $(this).attr('href')

        console.log('teste')

        $('html, body').animate({
            scrollTop: $(target).offset().top
        }, 1500)
    })
}

scroll('a[href*=panel-about]')
scroll('a[href*=panel-speakers]')
scroll('a[href*=panel-form]')
scroll('.button')
