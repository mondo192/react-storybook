import { merge } from "webpack-merge";
import { common } from "./webpack.common";

const development = merge(common, {
    mode: "development",
    stats: "errors-warnings",
    devtool: "inline-source-map",
    devServer: {
        port: 3000,
        historyApiFallback: true
    }    
});

export default development;