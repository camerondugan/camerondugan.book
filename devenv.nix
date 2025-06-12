{ pkgs, ... }:

{
  # https://devenv.sh/basics/
  # this is terrible i know, but we don't have crates in nix and idk how to specify versions
  enterShell = ''
    cargo install mdbook
    cargo install mdbook-external-links
  '';

  # https://devenv.sh/packages/
  packages = with pkgs; [
    git
  ];

  # https://devenv.sh/languages/

  # https://devenv.sh/processes/
  processes.mdbook.exec = "mdbook serve";

  # https://devenv.sh/services/

  # https://devenv.sh/scripts/

  # https://devenv.sh/tasks/

  # https://devenv.sh/tests/

  # https://devenv.sh/git-hooks/
  git-hooks.hooks.shellcheck.enable = true;
  git-hooks.hooks.build-mdbook = {
    name = "Build MDBook";
    enable = true;
    entry = "mdbook build";
    pass_filenames = false;
    files = "src/*";
  };

  # See full reference at https://devenv.sh/reference/options/
}
