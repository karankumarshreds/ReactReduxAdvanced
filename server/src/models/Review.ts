import mongoose from "mongoose";

interface ReviewAttrs {
  name: string;
  rating: number;
  comment: string;
  user: string;
}

interface ReviewDoc extends mongoose.Document {
  name: string;
  rating: number;
  comment: string;
  user: string;
  createdAt: Date;
}

interface ReviewModel extends mongoose.Model<ReviewDoc> {
  build: (attrs: ReviewAttrs) => ReviewDoc;
}

const reviewSchema = new mongoose.Schema({
  name: { type: String, required: true },
  rating: { type: Number, required: true },
  comment: { type: String, required: true },
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  createdAt: { type: Date, default: Date.now() },
});

reviewSchema.statics.build = (attrs: ReviewAttrs) => {
  return new Review(attrs);
};

const Review = mongoose.model<ReviewDoc, ReviewModel>("Review", reviewSchema);
