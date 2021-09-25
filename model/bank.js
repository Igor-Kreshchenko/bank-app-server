const { Schema, model } = require("mongoose");

const bankSchema = Schema(
  {
    name: {
      type: String,
      required: [true, "Set name for bank"],
    },
    interestRate: {
      type: Number,
      min: 0,
      max: 100,
      required: [true, "Set interest rate"],
    },
    maxLoan: {
      type: Number,
      min: 0,
      required: [true, "Set maximum loan"],
    },
    minDownPayment: {
      type: Number,
      min: 0,
      max: 100,
      required: [true, "Set minimum down payment"],
    },
    loanTerm: {
      type: Number,
      min: 0,
      required: [true, "Set loan term"],
    },
  },
  {
    versionKey: false,
    timestamps: true,
    toJSON: {
      virtuals: true,
      transform: function (doc, ret) {
        delete ret._id;
        return ret;
      },
    },
    toObject: { virtuals: true },
  }
);

const Bank = model("bank", bankSchema);

module.exports = Bank;
