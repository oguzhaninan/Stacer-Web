var youtube = document.getElementById('youtube');

youtube.addEventListener('click', function() {
    var iframe_url = "https://www.youtube.com/embed/gOUbCjUH47s?autoplay=1&autohide=1&rel=0&start=4&modestbranding=1&showinfo=0&controls=0&hd=hd720";

    var iframe = `<iframe frameborder="0" class="cast-shadow" src="${iframe_url}"
        style="width: ${youtube.offsetWidth}px; height: ${youtube.offsetHeight}px;"></iframe>`; 

    youtube.innerHTML = iframe;
});