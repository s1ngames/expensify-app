//entry point is - kick off of app - src/app.js
//bundle file - where to put
const path = require('path');


module.exports = {
    //must have
entry:'./src/app.js',
output:{
    path:path.join(__dirname,'public'),
    filename:'bundle.js'
},
module:{
    rules:[{
        loader:'babel-loader',
        test:/\.js$/,
        exclude: /node_modules/
    },{
        test:/\.s?css$/,
        use:[
            'style-loader',
            'css-loader',
            'sass-loader'
        ]
    }]
},
devtool:'cheap-module-eval-source-map',
devServer:{
    contentBase:path.join(__dirname,'public'),
    historyApiFallback:true
}
};