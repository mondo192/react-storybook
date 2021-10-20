import { merge } from "webpack-merge";
import { common } from "./webpack.common";

const production = merge(common, {
    mode: "production",
})

export default production;