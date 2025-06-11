{ pkgs, lib, config, inputs, ... }:

{
  # https://devenv.sh/basics/

  # https://devenv.sh/packages/
  packages = with pkgs; [
    git
    mdbook
  ];

  # https://devenv.sh/languages/

  # https://devenv.sh/processes/

  # https://devenv.sh/services/

  # https://devenv.sh/scripts/

  # https://devenv.sh/tasks/

  # https://devenv.sh/tests/

  # https://devenv.sh/git-hooks/
  git-hooks.hooks.shellcheck.enable = true;

  # See full reference at https://devenv.sh/reference/options/
}
