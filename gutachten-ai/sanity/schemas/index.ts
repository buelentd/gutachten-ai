import blockContent from "./blockContent";
import post from "./post";
import author from "./author";
import homePage from "./homePage";
import funktionenPage from "./funktionenPage";
import ablaufPage from "./ablaufPage";
import kontaktPage from "./kontaktPage";
import navigation from "./navigation";

export const schemaTypes = [
  // Pages
  homePage,
  funktionenPage,
  ablaufPage,
  kontaktPage,
  navigation,
  // Blog
  post,
  author,
  blockContent,
];
