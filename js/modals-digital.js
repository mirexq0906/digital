document.addEventListener('DOMContentLoaded', function(){
    // form sign
    document.getElementById('sign-close').addEventListener('click', function() {
        document.getElementById('sign').classList.remove('modal-log-active')
        document.querySelector('.modal-background').classList.remove('modal-background-active')
    })
    document.getElementById('log-btn').addEventListener('click', function() {
        document.getElementById('sign').classList.add('modal-log-active')
        document.querySelector('.modal-background').classList.add('modal-background-active')
    })
    // form create
    document.getElementById('create-close').addEventListener('click', function() {
        document.getElementById('create').classList.remove('modal-log-active')
        document.querySelector('.modal-background').classList.remove('modal-background-active')
    })
    document.querySelector('.modal-log__registration-link').addEventListener('click', function() {
        document.getElementById('sign').classList.remove('modal-log-active')
        document.getElementById('create').classList.add('modal-log-active')
    })
    // form reset
    document.getElementById('reset-close').addEventListener('click', function() {
        document.getElementById('reset').classList.remove('modal-log-active')
        document.querySelector('.modal-background').classList.remove('modal-background-active')
    })
    document.querySelector('.modal-log__recover').addEventListener('click', function() {
        document.getElementById('sign').classList.remove('modal-log-active')
        document.getElementById('reset').classList.add('modal-log-active')
    })
    document.getElementById('reset-back').addEventListener('click', function() {
        document.getElementById('reset').classList.remove('modal-log-active')
        document.getElementById('sign').classList.add('modal-log-active')
    })
    // request guests
    document.getElementById('guests-close').addEventListener('click', function() {
        document.getElementById('request-guests').classList.remove('modal-log-active')
        document.querySelector('.modal-background').classList.remove('modal-background-active')
    })
    document.getElementById('guests-btn').addEventListener('click', function() {
        document.getElementById('request-guests').classList.add('modal-log-active')
        document.querySelector('.modal-background').classList.add('modal-background-active')
    })

    // Input

    let inputs = document.querySelectorAll('.modal-log__input')
    inputs.forEach(function(input) {
        input.addEventListener('input', function(inputClick) {
            const target = inputClick.currentTarget.dataset.path
            if (input.value != 0) {
                document.querySelector(`[data-target="${target}"]`).classList.add('modal-log__label-active');
                input.classList.add('modal-log__input-active');
            } else {
                document.querySelector(`[data-target="${target}"]`).classList.remove('modal-log__label-active');
                input.classList.remove('modal-log__input-active');
            }
        })
    })

    // vadidation

    const singForm = new JustValidate('#form-sign');
        singForm
        .addField('#email', [
            {
            rule: 'required',
            errorMessage: 'Поле обязательно для заполнения',
            },
            {
            rule: 'email',
            errorMessage: 'Неправильный email!',
            },
        ])
        .addField('#password', [
            {
            rule: 'required',
            errorMessage: 'Поле обязательно для заполнения',
            },
            {
            rule: 'minLength',
            value: 5,
            errorMessage: 'Пароль слишком короткий',
            },
        ]);

        const createForm = new JustValidate('#form-create');
        createForm
        .addField('#email-create', [
            {
            rule: 'required',
            errorMessage: 'Поле обязательно для заполнения',
            },
            {
            rule: 'email',
            errorMessage: 'Неправильный email!',
            },
        ])
        .addField('#password-create', [
            {
            rule: 'required',
            errorMessage: 'Поле обязательно для заполнения',
            },
            {
            rule: 'minLength',
            value: 5,
            errorMessage: 'Пароль слишком короткий',
            },
        ])
        .addField('#confirm-create', [
            {
            rule: 'required',
            errorMessage: 'Поле обязательно для заполнения',
            },
            {
                validator: (value, fields) => {
                      if (
                        fields['#password-create'] &&
                        fields['#password-create'].elem
                      ) {
                        const repeatPasswordValue =
                          fields['#password-create'].elem.value;

                        return value === repeatPasswordValue;
                      }

                      return true;
                    },
                    errorMessage: 'Пароль не совпадает',
                },        
            ])
        .addField('#checkbox-create', [
            {
            rule: 'required',
            },
        ]);
        
        const resetForm = new JustValidate('#form-reset');
        resetForm
        .addField('#email-reset', [
            {
            rule: 'required',
            errorMessage: 'Поле обязательно для заполнения',
            },
            {
            rule: 'email',
            errorMessage: 'Неправильный email!',
            },
        ]);
        const guestsform = new JustValidate('#form-guests');
        guestsform
        .addField('#name-guests', [
            {
            rule: 'required',
            errorMessage: 'Поле обязательно для заполнения',
            },
        ])
        .addField('#email-guests', [
            {
            rule: 'required',
            errorMessage: 'Поле обязательно для заполнения',
            },
            {
            rule: 'email',
            errorMessage: 'Неправильный email!',
            },
        ])
        .addField('#checkbox-guests', [
            {
            rule: 'required',
            },
        ])
        .addField('#instagram-guests', [
            {
            rule: 'required',
            errorMessage: 'Поле обязательно для заполнения',
            },
        ])
        .addField('#channel-guests', [
            {
            rule: 'required',
            errorMessage: 'Поле обязательно для заполнения',
            },
        ])
})