{
  description = "CameronDugan.com utility flake";
  inputs = {
    nixpkgs.url = "github:nixos/nixpkgs";
    utils.url = "github:numtide/flake-utils";
  };
  outputs = { nixpkgs, utils, ... }: utils.lib.eachDefaultSystem (system:
    let
      pkgs = nixpkgs.legacyPackages.${system};
      mdbook-external-links = pkgs.rustPlatform.buildRustPackage {
        name = "mdbook-external-links";
        version = "0.1.2";
        src = pkgs.fetchCrate {
          pname = "mdbook-external-links";
          version = "0.1.2";
          hash = "sha256-cNYQu7aXN6s5FFzgT5I4q8qn6zT7zEWx3w0zUAX6LsQ=";
        };
        cargoHash = "sha256-4U3QkUwGD9SGBe1pJUTXUFkPnJpNpCJ6ozAPzbng9EY=";
      };
      mdbook-reading-time = pkgs.rustPlatform.buildRustPackage {
        name = "mdbook-reading-time";
        version = "0.1.2";
        src = pkgs.fetchCrate {
          pname = "mdbook-reading-time";
          version = "0.1.2";
          hash = "sha256-755yj8S3sAYYuVBK1HT9idtTeS1hMydtXQS5W+9S5jY=";
        };
        cargoHash = "sha256-vjihw5GzEo2e2jUMN2TXMvm0ioLjG09HQPoPHgL+ISY=";
      };
      mdbook-tiny = pkgs.rustPlatform.buildRustPackage {
        name = "mdbook-tiny";
        version = "0.1.3";
        src = pkgs.fetchFromGitHub{
          owner = "camerondugan";
          repo = "mdbook-tiny";
          tag = "0.14.0";
          hash = "sha256-cAFM/gdWXXHWXQr0NrLbd4DK9IEJnAzAR+pXFdxB1Ds=";
        };
        cargoHash = "sha256-mV2PA329m6ZK37L1HWvNUKNRFZH/kY+87LlHbvkOldo=";
        # src = pkgs.fetchCrate {
        #   pname = "mdbook-tiny";
        #   version = "0.1.3";
        #   hash = "sha256-8rPXfSK6gEJYlm05MoEGeWYO7kkHC9mgLaea3PeXY+0=";
        # };
        # cargoHash = "sha256-qbApH2/+0VJ4+byV0FjamfFEniSG3+YwuNcANRe7+j4=";
      };
      # mdbook-rss = pkgs.rustPlatform.buildRustPackage {
      #   name = "mdbook-rss";
      #   version = "0.1.0";
      #   src = pkgs.fetchCrate {
      #     pname = "mdbook-rss";
      #     version = "0.1.0";
      #     hash = "sha256-La/AEGnric5Aoa5jDrALkgLucjG27DgGTl/WVsbpgiE=";
      #   };
      #   cargoHash = "sha256-XlGWOhgbKGlEOekkldaS+uq8xIPkZibohx1QDwUgZ2E=";
      # };
    in
    {
      devShells.default = pkgs.mkShell {
        buildInputs = with pkgs; [
          git
          cargo
          rustc
          mdbook
          mdbook-linkcheck
          mdbook-external-links 
          mdbook-reading-time 
          mdbook-tiny 
          # mdbook-rss
        ];
        RUST_SRC_PATH = "${pkgs.rust.packages.stable.rustPlatform.rustLibSrc}";

        # mdbook-rss needs to be installed without respecting lock because lock is outdated and breaks build
        shellHook = ''
          cargo install mdbook-rss
        '';
      };
    }
  );
}
