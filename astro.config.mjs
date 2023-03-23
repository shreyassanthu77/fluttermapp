import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  site: "https://shreyassanthu77.github.io",
  base: "/fluttermapp",
  markdown: {
    syntaxHighlight: false,
    // Applied to .md and .mdx files
    remarkPlugins: [
      function () {
        return function (tree) {
          // add a class to every code block
          tree.children.forEach((node) => {
            if (node.type === "code") {
              const lang = node.lang || "";
              if (lang !== "dart") return;
              const value = node.value || "";

              node.value = `{$ begin main.dart $}
${value}
{$ end main.dart $}
{$ begin test.dart $}
void main() {
    final widget = MyWidget();
    final wrapWithScaffold = widget is! Scaffold;
    final isMaterialApp = widget is MaterialApp;
    
    try {
        runApp(
            isMaterialApp ? widget :            
                MaterialApp(
                    home: wrapWithScaffold ? Scaffold(
                        body: Center(
                            child: widget,
                        )
                    ) : widget,
                ),
        );
    } catch (e) {
        print(e);
    }
}
{$ end test.dart $}
`;

              node.data = node.data || {};
              node.data.hProperties = node.data.hProperties || {};
              node.data.hProperties.className =
                node.data.hProperties.className || [];
              node.data.hProperties.className.push(
                "language-run-dartpad:theme-dark:mode-flutter:null_safety-true"
              );
            }
          });
        };
      },
    ],
  },
  experimental: {
    assets: true,
  },
});
