module.exports = {
    secretkey :"ILOVEINDIA",

    dbconfig : {
        development: {
            //url to be used in link generation
            url: '',
            //mongodb connection settings
            database: {
                host: '127.0.0.1',
                port: '27017',
                db: 'nmux'
            },
            //server details
            server: {
                host: '127.0.0.1',
                port: '1300'
            }
        },
        production: {
            //url to be used in link generation
            url: '',
            //mongodb connection settings
            database: {
                HOST_PATH: '',
                HOST: '',
                PORT: '',
                MONGO_USERNAME: '',
                MONGO_PASSWORD: '',
                MONGO_PORT: 27017,
                MONGO_AUTH_DB: '',
                MONGO_DB: '',
            },
            //server details
            server: {
                host: '127.0.0.1',
                port: '1300'
            }
        }
    }
}
