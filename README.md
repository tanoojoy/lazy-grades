## How to Contribute

Want to help make **lazy-grades** even lazier (in the best way possible)? Here's how you can jump in:

### Step-by-Step Guide

1. **Fork the Repo**
   - Hit that **Fork** button on the top right of this page. This creates your own copy of the project.

2. **Clone Your Fork**
   - Open your terminal and run:
     ```bash
     git clone https://github.com/your-username/lazy-grades.git
     cd lazy-grades
     ```

3. **Create a New Branch**
   - Let's keep things organized:
     ```bash
     git checkout -b feature/your-awesome-feature
     ```

4. **Make Your Changes**
   - Code your magic! Whether it's fixing bugs, adding features, or improving docs. Commands to set up a development build, in that order:
   - `cd lazy-grades`
   - `npm install`
   - `npm run dev`
   - Saving changes to code will auto refresh your localhost

5. **Commit Your Changes**
   - Save your work with meaningful messages:
     ```bash
     git add .
     git commit -m "Add: Your concise commit message here"
     ```

6. **Push to Your Fork**
   - Send your changes to GitHub:
     ```bash
     git push origin feature/your-awesome-feature
     ```

7. **Create a Pull Request**
   - Go to your forked repo on GitHub.
   - Click on **Compare & pull request**.
   - Fill in the details and submit!

### Tips for a Smooth PR

- **Be Descriptive**: Clearly explain what your PR does.
- **Link Issues**: If you're addressing an issue, mention it like `Closes #issue-number`.
- **Keep It Focused**: One PR per feature or fix.
- **Stay Updated**: If the main repo updates, sync your fork to avoid conflicts.

### After Submission

- We'll review your PR ASAP.
- Be open to feedback and ready to make tweaks.
- Once approved, your changes will be merged!
