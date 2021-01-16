import mongoose from "mongoose";

interface UserAttrs {
  name: string;
  email: string;
  password: string;
}

interface UserDoc extends mongoose.Document {
  name: string;
  email: string;
  password: string;
  isAdmin: Boolean;
  createdAt: Date;
}

interface UserModel extends mongoose.Model<UserDoc> {
  build: (attrs: UserAttrs) => UserDoc;
}

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    isAdmin: { type: Boolean, default: false },
    createdAt: { type: Date, default: Date.now() },
  },
  {
    toJSON: {
      transform(doc, ret) {
        doc.id = doc._id;
        delete doc._id;
        delete doc.isAdmin;
      },
    },
  }
);

userSchema.statics.build = (attrs: UserAttrs) => {
  return new User(attrs);
};

const User = mongoose.model<UserDoc, UserModel>("User", userSchema);
export { User };
