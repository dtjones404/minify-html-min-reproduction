import * as esbuild from "esbuild";
import { minifyHTMLLiteralsPlugin } from "esbuild-plugin-minify-html-literals";

const ESBUILD_CONFIG = {
  bundle: true,
  charset: "utf8",
  entryPoints: [
    {
      out: `main`,
      in: "src/index.ts",
    },
  ],
  format: "iife",
  legalComments: "linked",
  minify: false,
  outdir: "dist",
  plugins: [minifyHTMLLiteralsPlugin()],
  tsconfig: "./tsconfig.json",
};

const args = process.argv.slice(2);
const watching = args.includes("--watch");
const context = await esbuild.context(ESBUILD_CONFIG);

if (watching) {
  console.log("Running in watch mode");
  await context.watch();
} else {
  await context.rebuild();
  context.dispose();
}
