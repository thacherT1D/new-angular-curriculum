# Unit Overview

The lessons in this section all relate to the the following standard:

> Build an Angular application (W0044)

## Assessment

By the end of this unit you should be able to build [an interactive Angular 1 app](99 - Assessment: Reddit Clone.md) using Components.

## Setup

You'll probably want to clone 2 separate repos:

### Angular Examples

Clone https://github.com/gSchool/angular-examples (no need to fork).

This repo contains a number of reference applications.  While you _could_ look at them online, you may want to run them locally and play around with them, so take a moment and get these examples setup now.

### Angular Drills

- Fork and clone https://github.com/gSchool/angular-drills
- Add the upstream

  ```
  git remote add upstream git@github.com:gSchool/angular-drills.git
  ```

Some lessons will ask you to complete challenges from this repo.  

For every challenge, do the following:

```
git checkout master
git fetch upstream
git rebase upstream/master
git checkout -b challenge-name
git push -u origin challenge-name
```

After you complete a challenge, run the tests to make sure they pass, then `git push` your code.

This way, you always get the latest versions of the challenges.

Bonus points if you build a shell script to automate this 😉

## How to proceed

We think the best way for you master Angular 1 fundamentals is to follow the lessons sequentially.

However, if you already know some Angular, or if you'd like to see how far you can go on your own, feel free to attempt [the Reddit Clone assessment](99 - Assessment: Reddit Clone.md).

If you are super ambitious and/or have a project that you'd like to build to add to your portfolio, you can build your own app as long as it satisfies the criteria above.  The process for doing that is:

- Make a quick list of stories / wireframes (nothing fancy, whiteboard picture is fine)
- Ask an instructor if the app is complex enough / on par with the Reddit clone
