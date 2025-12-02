list:
    just --list
build:
    mdbook build
serve:
    xdg-open http://localhost:3000
    mdbook serve
tiny:
    echo "serving on http://localhost:1234"
    xdg-open http://localhost:1234
    cd src && watchexec "cd .. && mdbook build && cd - && nix run nixpkgs#static-web-server -- --root ../book/tiny --port 1234"
