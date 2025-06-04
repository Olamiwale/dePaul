In GitHub Actions, when you enclose values in square brackets [], it means you're listing multiple items (an array). When you don’t use brackets, it’s a shorthand for a single value.

✅ Examples:
Without brackets (shorthand for one item)
branches: - main = branches: [main]


With brackets (array of multiple branches)

branches: [main, dev, staging]
This means the workflow will trigger on any of those three branches.