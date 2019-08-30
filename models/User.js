const { model, Schema } = require('mongoose')
const passportLocalMongoose = require('passport-local-mongoose')

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true
    },
    todos: [
      {
        type: Schema.Types.ObjectId,
        ref: "Todo"
      }
    ],
    cards: [
      {
        type: Schema.Types.ObjectId,
        ref: "Card"
      }
    ]
  },
  {
    timestamps: {
      createdAt: "createdAt",
      updatedAt: "updatedAt"
    },
    versionKey: false
  }
)

userSchema.plugin(passportLocalMongoose)

module.exports = model('User', userSchema)