import mongoose from 'mongoose';

const commentSchema = new mongoose.Schema(
    {
        text: {
            type: String,
        },
        userId: {
            type: mongoose.Types.ObjectId,
            ref: 'Auth',
            required: true,
        },
        productId: {
            type: mongoose.Types.ObjectId,
            ref: 'Product',
            required: true,
        },
        parentCommentId: {
            type: mongoose.Types.ObjectId,
            required: false,
            ref: 'Comment',
        },
    },
    {
        timestamps: true,
        versionKey: false,
    },
);

export default mongoose.model('Comment', commentSchema);
