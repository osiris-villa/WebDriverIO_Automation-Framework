module.exports = {

    credentials: {
        userName: 'tomsmith',
        badUserName: 'osi',
        password: 'SuperSecretPassword!',
        badPassword: 'badpass123'
    },

    validations: {
        login: {
            header: 'Login Page',
            incorrectUsername: 'Your username is invalid!',
            incorrectPassword: 'Your password is invalid!',
            logout: 'You logged out of the secure area!'
        },
        secure: {
            success: 'You logged into a secure area!'
        },
        add_remove_elements: {
            header: 'Add/Remove Elements'
        }
    }

}