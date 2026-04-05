list:
    just --list
build:
    mdbook build
serve:
    xdg-open http://localhost:3000
    mdbook serve
serve-tiny:
    echo "serving on http://localhost:1234"
    xdg-open http://localhost:1234
    nix run nixpkgs#static-web-server -- --root ./book/tiny --port 1234
tiny arg="n/a":
    cd src && watchexec "cd .. && mdbook build" 
    if [ "{{arg}}" = "-s" ]; then serve:=true; just serve-tiny; fi
    if [ "{{arg}}" = "--serve" ]; then serve:=true; just serve-tiny; fi
