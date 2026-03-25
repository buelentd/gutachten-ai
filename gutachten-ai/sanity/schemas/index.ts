import blockContent from "./blockContent";
import post from "./post";
import author from "./author";
import homePage from "./homePage";
import funktionenPage from "./funktionenPage";
import ablaufPage from "./ablaufPage";
import kontaktPage from "./kontaktPage";
import navigation from "./navigation";
import impressum from "./impressum";

export const schemaTypes = [
  // Pages
  homePage,
  funktionenPage,
  ablaufPage,
  kontaktPage,
  navigation,
  impressum,
  // Blog
  post,
  author,
  blockContent,
];
