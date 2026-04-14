# Step 1: Create project folder
mkdir my-github-project

# Step 2: Go to folder
cd my-github-project

# Step 3: Initialize local Git repository
git init

# Step 4: Create sample file
echo "Hello GitHub" > README.md

# Step 5: Add file
git add README.md

# Step 6: Commit file
git commit -m "Initial commit"

# Step 7: Link GitHub repository
git remote add origin https://github.com/your-username/your-repository.git

# Step 8: Rename branch to main
git branch -M main

# Step 9: Push code to GitHub
git push -u origin main
