# odin-prMe  
This is for odin-projects  

# workflow explained  
  
If you're contributing, make sure to do the following:  
1. ALWAYS pull before you start contributing  
2. Create a branch for your contributions  
3. Setup your local repository with that branch and work solely on it,  
 making sure to keep main branch updated in your local workspace  
4. If you want to add that feature, submit a pull request for comparison with main before merging   
5. If all's well, you can merge your changes after pulling to your local main then push to main.  
6. You can continue working on your branch afterwards.  
  
Hints:  
  
1. To branch main:  
 ```Shell  
$git checkout main   $git branch {yourBranchName}  
```  
2. To move from branch to branch:  
```Shell  
$git checkout {branchName}  
```  
3. To "Publish" or "Push" your branch to the repository from local:  
```Shell  
$git push -u origin {yourBranchName}  
```


## For bgby:

### Cloning this.

1. git clone (url)
   1. Easiest is https, but that requires quite some password back and forth, vscode can handle that.
   2. Now tokens are required, so you can basically encrypt that and use it for transfers
2. More custom: ssh
   1. Requires git bash, which comes with the git install
   2. Next follow [odinproject](https://www.theodinproject.com/paths/foundations/courses/foundations/lessons/setting-up-git)'s guide (this is linux centric so keychain won't work, should be good all the way till there, then all you'd have to do is initiate vscode by logging into your ssh on startup) note: No need to use a real email address. Security is paramount

### Growing cheatsheet:
Remote: a git repository that does not exist in the current directory and one is linked to. One can create a link to a remote locally using the git remote command but usually it's to github. 

1. git branch {branchname}
   1. Creates a new branch for independent work from main.
2. git branch -A
   1. Lists the branches present locally and remotely - useful to check if you're able to push as when that is properly setup you should have an extra branch for each of your local ones for pushing to github
3. git add -A
   1. Used to add all your changes to git's staging area
   2. If you want to reset that, you can use git reset, 
   3. Tip: this is simplified by vscode so you can pick what changes to stage in the gui
4. git commit
   1. This requires setting up a custom commit message file so you can write long commits - Again, this can be done on vscode so you can skip. It's a 50-72-72..rule for characters on lines in commit messages. (check .gitmessage for more details)
5. git checkout (branchName)
   1. used to move from one project branch to another for working on
6. git push -u origin main
   1. That was a mouthfull. basically, origin is the name you gave the remote repository locally (can be custom like bgbyStarts)
   2. main is the branch we want to push to (or publish in this case) again, vscode makes it easy as branches that don't track remote can be published by clicking the button next to the name
   3. So the command should actually be:
      1. git push -u origin {branch To Setup For Pushing To Github}
   4. That publishes your branches or sets them up for push and pull from github

That's all for custom setup.

### tldr of it all;
after having git configured (this includes custom commit message setting in .gitmessage.txt):
- note: folders for folders of repos.

1. git clone https://something.github.com
2. git branch newFeature
3. changess...
4. git status (view if changes were recorded)
5. git add -A
6. git commit
7. git push -u origin newFeature

Subsequently:
1. git status (check if on newFeature branch, else git checkout newFeature)
2. changes...
3. git status
4. git add -A
5. git commit
6. git push

That's the whole up and down about git 

The whole branching is to avoid changes clashing and having to review each pull cuz of merge conflicts.

generally, merging of branches with the main production branch and pull requests will be done on github so gui there.

When stuck , 
git command --help

nice docs on chrome open.

If you would like to create a repo locally then track remote repo (or you started work locally and now want to publish to empty git repo - emphasis on the empty , no initial commits so one does not have merge conflicts):
1. git init
2. git status (all's good, branch main is all good)
3. required changes for first push...
4. git add -A
  
git commit -m "initial commit" (no need to be verbose since it's a first commit)
  
Note: sort of branched off to initialising on local, this entire commit process could be done a multiple number of times like one is working normally, then the next step can be carried out. The main the main is to ensure github repo has no commits  

5. git remote add RemoteName(usually origin) {url}
6. git remote -v (check to see if github remote url has shown)
7. assuming origin was used...
8.  git push -u origin main (publishes main branch to empty github repo)
Note:
If multiiple repos, use git checkout to navigate to them and run 10 on them respectively, replacing main with the branchname


And that's it. 
All your locals now track remote and you can git it on!