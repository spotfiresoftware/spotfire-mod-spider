import path from "node:path";
import { fileURLToPath } from "node:url";
import CopyPlugin from "copy-webpack-plugin";

const root = path.dirname(fileURLToPath(import.meta.url));

export default {
    mode: "development",
    entry: "./src/main.ts",
    output: {
        path: path.resolve(root, "dist"),
        filename: "bundle.js"
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: {
                    loader: "ts-loader",
                    options: {
                        compilerOptions: {
                            noEmit: false,
                            module: "ESNext"
                        }
                    }
                },
                exclude: /node_modules/
            }
        ]
    },
    resolve: {
        extensions: [".tsx", ".ts", ".js"],
        symlinks: true
    },
    plugins: [
        new CopyPlugin({ patterns: [{ from: "static" }] })
    ],
    devtool: "inline-source-map",
    performance: {
        maxEntrypointSize: 800000,
        maxAssetSize: 800000
    }
};
