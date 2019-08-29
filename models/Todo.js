const { model, Schema } = require('mongoose')

const todoSchema = new Schema(
  {
    title: {
      type: String,
      required: true
    },
    date: {
      type: String,
      required: true
    },
    hour: {
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

module.exports = model('Todo', todoSchema)