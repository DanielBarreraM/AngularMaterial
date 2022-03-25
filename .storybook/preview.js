import { setCompodocJson } from "@storybook/addon-docs/angular";
import docJson from "../documentation.json";
import '../src/app/components/emergency-list/emergency-list.component.css';
setCompodocJson(docJson);

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  docs: { inlineStories: true },
  theme: {
    selector: ".your-selector",
    dataAttr: "data-your-attribute",
  },
};
