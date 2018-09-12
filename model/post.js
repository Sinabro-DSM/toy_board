const mongoose = require('mongoose');
const mongoose_auto_increment = require('mongoose-auto-increment');
const Schema = mongoose.Schema;
const postSchema = new Schema ({
    title:{
        type: String
    },
    content:{
        type: String
    },
    id:{
        type:String
    },
    Date:{
        type : Date,
        default: Date.now()
    }
});

//postSchema.plugin(mongoose_auto_increment.plugin,{model:'posts',field:'post_id',startAt:1});
module.exports=mongoose.model('posts', postSchema);