import { SearchPlugin } from "vitepress-plugin-search";
import { defineConfig, PluginOption } from "vite";

let flexSearchIndexOptions = {};
let options = {
  ...flexSearchIndexOptions,
  previewLength: 62,
  buttonLabel: "Search",
  placeholder: "Search docs",
};

export default defineConfig({
  plugins: [SearchPlugin(options) as PluginOption],
});
