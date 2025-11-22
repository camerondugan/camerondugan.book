list:
    just --list
build:
    mdbook build
serve:
    mdbook serve    
tiny:
    echo "serving on http://localhost:1200"
    nix run nixpkgs#static-web-server -- --root ./book/tiny --port 1200
