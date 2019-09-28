function createNavBar() {
    var images = ['icon.png', 'icon.png', 'icon.png', 'icon.png', 'icon.png']
    var titles = ['認識石虎', '石虎危機', '搶救石虎', '專家訪談', '工作團隊'];
    var urls = ['introduction.html', 'dangerous.html', 'rescue.html', 'interview.html', 'team.html'];
    var text = '';
    var htmlName = location.pathname.replace('/', '');

    for (i = 0; i < titles.length; i++) {
        var urlClass = urls[i] == htmlName ? '"nav-link active disabled"' : '"nav-link"';
        text += '<li class="nav-item">\
                    <a class=' + urlClass + 'href="' + urls[i] + '">\
                        <img src="images/' + images[i] + '" alt="石虎">' + titles[i] +
                    '</a>\
                </li>';
    }

    document.getElementById('nav-bar').innerHTML = text;
}

createNavBar();