module.exports = {
    "*.{ts,tsx}": ["eslint --cache --fix", () =>"tsc --noEmit"],
    "*.--write": "prettier --write"
    
}