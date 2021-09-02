const git = require("simple-git");
const path = "docs/.vuepress/dist";
const repo = "git@github.com:AlienGao/palestInk.git";

git(path)
  .init()
  .add("./*")
  .commit("public")
  .addRemote("origin", repo)
  // .push(["-f", "origin", "master"], () => {
  //   console.log("Push to master success");
  // })
  .checkoutLocalBranch("gh-pages", () => {
    console.log("Checkout to branch gh-pages");
  })
  .push(["-f", "origin", "gh-pages"])
  .checkout("master", () => {
    console.log("Finish public, back to branch master.");
  });