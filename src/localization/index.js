import I18n from "react-native-i18n";
import en from "./en";
import uk from "./uk";

I18n.fallbacks = true;

I18n.translations = {
  en,
  uk
};

export default I18n;
