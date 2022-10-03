const LocalStrategy = require('passport-local').Strategy
const bcrypt =require('bcrypt')

function initialize(passport, getUserByEmail){
  const authenticateUser= async (email, passport, done) =>{
 const user = getUserByEmail(email)
 if (user ==null) {
  return done(null, false,{message: 'no user with that email'})
 }

 try{
if(await bcrypt.compare(password, user.password)){
return done(null, user)
}else{
  return done*(null, false,{ massage: 'password incorrect'})
}
 }catch(e){
  return done(e)

 }
  }
passport.use(new LocalStrategy({usernameFields: 'email'}),
authenticateUser)
passport.serializeUser((user, done) => {  })
passport.serializeUser((id, done) => {  })

}

module.exports = initialize