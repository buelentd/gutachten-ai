import blockContent from "./blockContent";
import post from "./post";
import author from "./author";
import homePage from "./homePage";
import funktionenPage from "./funktionenPage";
import ablaufPage from "./ablaufPage";
import kontaktPage from "./kontaktPage";
import impressum from "./impressum";

export const schemaTypes = [
  // Pages
  homePage,
  funktionenPage,
  ablaufPage,
  kontaktPage,
  impressum,
  // Blog
  post,
  author,
  blockContent,
];
