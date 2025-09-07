{pkgs, ...}: {
  # https://devenv.sh/basics/
  # this is terrible i know, but we don't have crates in nix and idk how to specify versions
  enterShell = ''
    cargo install mdbook
    cargo install mdbook-rss
    cargo install mdbook-external-links
    cargo install mdbook-linkcheck
    cargo install mdbook-reading-time
  '';

  # https://devenv.sh/packages/
  packages = with pkgs; [
    git
    pre-commit
  ];

  # https://devenv.sh/languages/

  # https://devenv.sh/processes/
  processes.mdbook.exec = "mdbook serve";

  # https://devenv.sh/services/

  # https://devenv.sh/scripts/

  # https://devenv.sh/tasks/

  # https://devenv.sh/tests/

  # See full reference at https://devenv.sh/reference/options/
}
