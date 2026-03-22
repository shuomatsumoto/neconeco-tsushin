import { defineConfig } from "astro/config";

const isProd = process.env.NODE_ENV === "production";

function softBreaksAsBr() {
  function transform(node) {
    if (!node || !Array.isArray(node.children)) return;

    node.children = node.children.flatMap((child) => {
      if (child?.type !== "text" || typeof child.value !== "string" || !child.value.includes("\n")) {
        return [child];
      }

      const parts = child.value.split("\n");
      const out = [];

      for (let i = 0; i < parts.length; i += 1) {
        if (parts[i]) out.push({ ...child, value: parts[i] });
        if (i < parts.length - 1) out.push({ type: "break" });
      }

      return out;
    });

    for (const child of node.children) transform(child);
  }

  return (tree) => {
    transform(tree);
  };
}

export default defineConfig({
  site: "https://shuomatsumoto.github.io",
  base: isProd ? "/neconeco-tsushin" : "/",
  markdown: {
    remarkPlugins: [softBreaksAsBr],
  },
});
