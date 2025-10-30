serve:
	nix develop --command mdbook serve -o
build:
	nix develop --command mdbook build -o
tiny:
	nix develop --command mdbook build && nix run nixpkgs#static-web-server -- --root ./book/tiny --port 3001
