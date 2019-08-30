const { model, Schema } = require('mongoose')

const cardSchema = new Schema(
  {
    title: {
      type: String,
      required: true
    },
    number: {
      type: Number,
      required: true
    },
    date: {
      type: String,
      required: true
    }
  },
  {
    timestamps: {
      createdAt: "createdAt",
      updatedAt: "updatedAt"
    },
    versionKey: false
  }
)

module.exports = model('Card', cardSchema)