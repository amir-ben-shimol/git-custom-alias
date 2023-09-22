git config --global --unset-all alias.update
git config --global --unset-all alias.custom-add
git config --global alias.update "!git git fetch && git pull && npm install"
git config --global alias.custom-add "!git git add ."