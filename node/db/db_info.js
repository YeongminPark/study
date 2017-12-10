module.exports = (function(){
   return {
       local: {
           host: 'localhost',
           port: '3306',
           user: 'root',
           password:'root',
           database:'test'
       },
       real: { // real server db info
          host: '',
          port: '',
          user: '',
          password: '',
          database: ''
       },
       dev: { // dev server db info
          host: '',
          port: '',
          user: '',
          password: '',
          database: ''
       }
   } 
})();