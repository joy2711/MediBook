function handleLogin(){
    ['email','password'].forEach(id=> {
        document.getElementById(id).classList.remove('error');
        document.getElementById(id+'Err').style.display='none';
    });
    document.getElementById('errAlert').style.display ='none';

    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value;
    let valid = true;

    if(!email) {showErr('email', 'Email is required');valid = false;}
    if(!password) {showErr('password','Password is required');valid = false;}
    if (!valid) return;

    const stored = JSON.parse(localStorage.getItem('currentUser')||'{}');
    const DEMO_EMAIL = 'patient@demo.com';

    if(email === stored.email || email === DEMO_EMAIL){
        document.getElementById('success alert').style.display = 'block';

        localStorage.setItem('session',JSON.stringify({email,role: 'patient'}));
        setTimeout(() => {window.location.href='patient-dashboard.html';},1200);
    }
    else{
        document.getElementById('errAlert').style.display= 'block';
    }
}
function showErr(ide, msg){
    document.getElementById(id).classList.add('error');
    const el=document.getElementById(id + 'Err');
    el.textContent = msg;
    el.style.display = 'block';
}
document.addEventListener('keydown', e => {if(e.key==='Enter') handleLogin();});