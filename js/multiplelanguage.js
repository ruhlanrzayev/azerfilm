function googleTranslateElementInit() {
    // Check language
    var currentLang = getLanguageFromURL() || 'en';
    
    new google.translate.TranslateElement({
        pageLanguage: 'en',
        includedLanguages: 'en,tr',
        layout: google.translate.TranslateElement.InlineLayout.HORIZONTAL
    }, 'google_translate_element');
    
    document.getElementById('langChangePC').value = currentLang;
    document.getElementById('langChangeMobile').value = currentLang;
    
    // Update URL
    updateURLWithLanguage(currentLang);
}

// Get Language Function
function getLanguageFromURL() {
    var urlParams = new URLSearchParams(window.location.search);
    return urlParams.get('lang');
}

// Change Lang Function
function changeLanguage(lang) {
    if (typeof google.translate.TranslateElement !== 'undefined') {
        var select = document.querySelector('.goog-te-combo');
        if (select) {
            select.value = lang;
            select.dispatchEvent(new Event('change'));
        }
    }
    
    // Save language on localstorage
    localStorage.setItem('google_translate_lang', lang);
    
    // Uupdate language
    updateURLWithLanguage(lang);
}

// Update URL
function updateURLWithLanguage(lang) {
    var currentURL = window.location.href.split('?')[0]; 
    var newURL = currentURL + (currentURL.indexOf('?') === -1 ? '?' : '&') + 'lang=' + lang;
    
    // Save URL
    history.pushState(null, '', newURL);
}

document.getElementById('langChangePC').addEventListener('change', function() {
    changeLanguage(this.value);
});

document.getElementById('langChangeMobile').addEventListener('change', function() {
    changeLanguage(this.value);
});

// Load API
function loadGoogleTranslate() {
    var script = document.createElement('script');
    script.src = '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
    document.body.appendChild(script);
}

window.addEventListener('DOMContentLoaded', loadGoogleTranslate); 