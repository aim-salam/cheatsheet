# Welcome to cheatsheet.cam 🎨

**cheatsheet.cam** is a full-stack cheatsheet that allows you to **visualize** and easily **copy-paste** the code snippets for your projects.
<br>
<br>
![Alt text](https://images.cheatsheet.cam/images/image-1729743402166.webp)

<br>

## 🌐 Production

Check out the live site: [cheatsheet.cam](https://cheatsheet.cam)

<br>
<br>

## 🖥️ Running Locally

### Steps to reproduce the project on your local machine:

1. **Fork the repository**
   Click on the Fork button in the top-right corner. This creates a copy of the repository in your GitHub account.
2. **Download the forked repository**:
   Open terminal.
   Change directory to Desktop or any where.
   Clone your forked repository to your local machine:

   ```bash
   git clone https://github.com/your-username/cheatsheet.git

   ```

3. **Visual Studio Code**:
   Open the repository in VS Code.

   ```bash
   cd cheatsheet
   code .
   ```

   #There are many ways to open a repository in VS Code.

4. **Install dependencies**:

   ```bash
   npm install

   ```

5. **Run the project**:

   ```bash
   npm run dev

   ```

   <img src="https://images.cheatsheet.cam/images/image-1729743402166.webp" alt="Logo" width="300" height="200">

   ### ⚠️ Attention:

   You may encounter different data for authentication and comments in production and development; this is because they have separate backends and databases.

<br>
   That's it! Your machine is running the web locally and successfully.
   
<br>
<br>

References:
[Fork](https://images.cheatsheet.cam/images/image-1729901983218.webp),
[npm i](https://images.cheatsheet.cam/images/image-1729903989708.webp)
<br>
<br>

## 🤝 Collaboration

1. **Issues**:

   - You can see all the issues that need to be fixed in the [Issues section](https://github.com/aim-salam/cheatsheet/issues).
   - Communicate within any issue to choose who will work on it. Preview

2. **Contribute**:

   - After you are assigned an issue, you are ready to contribute.
   - Before that, we need to make sure our local repository is linked with the forked remote repository:
     So, we can push our commit.
     ```bash
      git remote -v
     ```
     If everything is okay, we can now proceed.
   - Create a new branch in your local repository.
     ```bash
      git checkout -b update/example-db
     ```
   - **It's time to code.**.
   - Then, after making changes, stage, commit and push them to the new branch in your remote repository.

     ```bash
     git add .
     git commit -m "Updated ExampleDB : id exampleid"
     git push origin update/example-db
     ```

     ⚠️ If you have problem to push into your forked repository, please create an issue here. I'll help you learn how to fix Github credentials in your VS code.

   - Create a pull request to merge your changes into the production code.

   - Your pull request will be visible on this [site](https://github.com/aim-salam/cheatsheet/pulls). Please wait for my response. I will either approve your code and merge it into production, or provide feedback if changes are needed.
   - If your pull request is merged, you can delete the branch in both the local and remote repositories.

     ```bash
     git switch main
     git branch -D update/example-db
     git push origin --delete update/example-db
     ```

   - To contribute again, create a new branch.

<br>
<br>

References :
[git remote -v](https://images.cheatsheet.cam/images/image-1729901829368.webp),
[local new branch](https://images.cheatsheet.cam/images/image-1729903256572.webp),
[remote new branch](https://images.cheatsheet.cam/images/image-1729904868003.webp),
[pull request](https://images.cheatsheet.cam/images/image-1729904943743.webp)

<br>
<br>

3. **Synchronize**:

   - Every time you want to contribute, make sure your **main branch** is up-to-date before creating a new branch.
   - Remote main branch : Click **Sync fork** to synchronize your main remote repository with the production code.
   - Local main branch : In your local repository, switch to main branch. Then,
     `bash
      git switch main
      git pull
      `
     <br>
     <br>
     Thank you for contributing to cheatsheet.cam!
