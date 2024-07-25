const mongoose = require('mongoose')

mongoose
  .connect(
    'mongodb+srv://rahulraj18sep200051:C7TNUmoqzObPKlYd@cluster0.ihqafnl.mongodb.net/'
  )
  .then(() => console.log('Database connected'))
  .catch((err) => console.log('Error:'))
const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    require: true,
    unique: true,
    lowercase: true,
    minLength: 5,
    maxLenght: 15,
    trim: true,
  },
  password: {
    type: String,
    require: true,
    trim: true,
    maxLenght: 15,
  },
  firstName: {
    type: String,
    require: true,
    trim: true,
    maxLenght: 20,
  },
  lastName: {
    type: String,
    require: true,
    trim: true,
    maxLenght: 20,
  },
})

const accountSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    require: true,
  },
  balance: {
    type: Number,
    require: true,
  },
})

const User = mongoose.model('User', UserSchema)
const Account = mongoose.model('Account', accountSchema)
module.exports = {
  User,
  Account,
}
