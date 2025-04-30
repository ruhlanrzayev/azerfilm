document.addEventListener('DOMContentLoaded', function() {
    checkAuthStatus();
    
    const profileButton = document.getElementById('profileButton');
    const dropdownMenu = document.getElementById('dropdownMenu');
    
    if (profileButton && dropdownMenu) {
        profileButton.addEventListener('click', function(e) {
            e.stopPropagation();
            dropdownMenu.classList.toggle('hidden');
        });
        
        document.addEventListener('click', function() {
            dropdownMenu.classList.add('hidden');
        });
    }

    document.getElementById('logoutButton')?.addEventListener('click', logoutUser);
    document.getElementById('logoutButtonMobile')?.addEventListener('click', logoutUser);
    
    window.addEventListener('storage', function(event) {
        if (event.key === 'token' || event.key === 'user') {
            checkAuthStatus();
        }
    });
});

function checkAuthStatus() {
    const token = localStorage.getItem('token');
    const user = localStorage.getItem('user');
    
    try {
        if (token && user) {
            const userData = JSON.parse(user);
            
            document.getElementById('signInButton')?.classList.add('hidden');
            document.getElementById('profileDropdown')?.classList.remove('hidden');
            if (document.getElementById('usernameDisplay')) {
                document.getElementById('usernameDisplay').textContent = userData.username || userData.name;
            }
            
            document.getElementById('signInButtonMobile')?.classList.add('hidden');
            document.getElementById('profileInfoMobile')?.classList.remove('hidden');
            if (document.getElementById('usernameDisplayMobile')) {
                document.getElementById('usernameDisplayMobile').textContent = userData.username || userData.name;
            }
        } else {
            document.getElementById('signInButton')?.classList.remove('hidden');
            document.getElementById('profileDropdown')?.classList.add('hidden');
            
            document.getElementById('signInButtonMobile')?.classList.remove('hidden');
            document.getElementById('profileInfoMobile')?.classList.add('hidden');
        }
    } catch (error) {
        console.error('Auth check error:', error);
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        
        document.getElementById('signInButton')?.classList.remove('hidden');
        document.getElementById('profileDropdown')?.classList.add('hidden');
        
        document.getElementById('signInButtonMobile')?.classList.remove('hidden');
        document.getElementById('profileInfoMobile')?.classList.add('hidden');
    }
}

function logoutUser(e) {
    e.preventDefault();
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    
    window.location.href = '../index.htm';
    
}

function getCheck() {
    // Check if user is logged
    const token = localStorage.getItem('token');
    const user = localStorage.getItem('user');
    if (user && token) {
        window.location.href = 'html/films.htm'; 
    } else {
        window.location.href = 'html/login.htm';
    }
}

function getStartedWatch() {
    // Check if user is logged
    const token = localStorage.getItem('token');
    const user = localStorage.getItem('user');
    if(user && token) {
        window.location.href = 'html/films.htm';
    } else {
        window.location.href = 'html/login.htm';
    }
}