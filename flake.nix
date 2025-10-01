{
  description = "CameronDugan.com utility flake";
  inputs = {
    nixpkgs.url = "github:nixos/nixpkgs";
    utils.url = "github:numtide/flake-utils";
  };
  outputs = { self, nixpkgs, utils }: utils.lib.eachDefaultSystem (system:
    let
      pkgs = nixpkgs.legacyPackages.${system};
    in
    {
      devShells.default = pkgs.mkShell {
        buildInputs = with pkgs; [
          git
          cargo
          mdbook
          mdbook-linkcheck
        ];
        shellHook = ''
          cargo install mdbook-rss
          cargo install mdbook-external-links
          cargo install mdbook-reading-time
          cargo install mdbook-tiny
        '';
      };
    }
  );
}
