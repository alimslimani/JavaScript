import $ from 'jquery';
let form = document.getElementById('user-form');

form.addEventListener('submit', event=>{
    let user = form.elements['user'];
    let avatarFile = form.elements['avatar-file'];

    let posting = {
        user: user.value,
        avatarFile: avatarFile.value
    };

    let promise = $.post("http://5dc584600bbd050014fb8acf.mockapi.io/api/jsV1/user", posting);

    promise.then(
        data => console.log('Success: ',data),
        error => console.log('Error: ',error)
    );
    event.preventDefault();
});


/* form.addEventListener('submit',event=>{
    //event.preventDefault();
    let user = form.elements['user'];
    //let avatarFile = form.elements['avatar-file'];
    let userError = document.getElementById('user-error');
    //console.log(user.value,avatarFile.value);
    //event.preventDefault();
    if(user.value.length < 4){    
        userError.textContent   = 'Invalid entry';
        userError.style.color = 'red';
        user.style.border.color = 'red';
        user.focus();
        event.preventDefault();
    }
}); */