// Populate the sidebar
//
// This is a script, and not included directly in the page, to control the total size of the book.
// The TOC contains an entry for each page, so if each page includes a copy of the TOC,
// the total size of the page becomes O(n**2).
class MDBookSidebarScrollbox extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        this.innerHTML = '<ol class="chapter"><li class="chapter-item expanded "><a href="getting-started.html">Getting Started</a></li><li class="chapter-item expanded "><a href="contact.html">Contact Me</a></li><li class="chapter-item expanded affix "><li class="spacer"></li><li class="chapter-item expanded "><a href="projects.html">Projects</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="projects/gleaderboard.html">Gleaderboard</a></li><li class="chapter-item expanded "><a href="projects/wizard-workshop-part-2.html">Wizard Workshop Part 2</a></li><li class="chapter-item expanded "><a href="projects/wizard-workshop.html">Wizard Workshop</a></li><li class="chapter-item expanded "><a href="projects/my-old-keyboard-is-basically-cheating.html">My Old Keyboard Is Basically Cheating</a></li><li class="chapter-item expanded "><a href="projects/tiny-chess-engine.html">Tiny Chess Engine</a></li><li class="chapter-item expanded "><a href="projects/vr-game.html">VR Game</a></li><li class="chapter-item expanded "><a href="projects/chess-ai.html">Chess Ai</a></li><li class="chapter-item expanded "><a href="projects/automated-light-switch.html">Automated Light Switch</a></li><li class="chapter-item expanded "><a href="projects/arduinos.html">Arduinos</a></li><li class="chapter-item expanded "><a href="projects/dream-bot.html">Dream Bot</a></li><li class="chapter-item expanded "><a href="projects/arbidor.html">Arbidor</a></li><li class="chapter-item expanded "><a href="projects/devlog-3.html">Devlog 3</a></li><li class="chapter-item expanded "><a href="projects/devlog-2.html">Devlog 2</a></li><li class="chapter-item expanded "><a href="projects/devlog-1.html">Devlog 1</a></li></ol></li><li class="chapter-item expanded "><li class="spacer"></li><li class="chapter-item expanded "><a href="blog.html">Blog</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="2026.html">2026</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="blog/mörk-borg.html">MÖRK BORG</a></li></ol></li><li class="chapter-item expanded "><a href="2025.html">2025</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="blog/false-dichotomies.html">False Dichotomies</a></li><li class="chapter-item expanded "><a href="blog/helix.html">Helix</a></li><li class="chapter-item expanded "><a href="blog/charachorder2.1.html">CharaChorder 2 Update 1</a></li><li class="chapter-item expanded "><a href="blog/charachorder2.html">CharaChorder 2</a></li><li class="chapter-item expanded "><a href="blog/savage-worlds.html">Savage Worlds</a></li></ol></li><li class="chapter-item expanded "><a href="2024.html">2024</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="blog/keyd.html">Keyd</a></li><li class="chapter-item expanded "><a href="blog/devenv.html">Devenv</a></li><li class="chapter-item expanded "><a href="blog/cosmic-desktop-is-awesome.html">Cosmic Desktop Is Awesome</a></li><li class="chapter-item expanded "><a href="blog/nixos-is-awesome-pt1.html">Nixos Is Awesome Pt1</a></li><li class="chapter-item expanded "><a href="blog/too-much-automation.html">Too Much Automation</a></li><li class="chapter-item expanded "><a href="blog/the-point-of-formatters.html">The Point Of Formatters</a></li><li class="chapter-item expanded "><a href="blog/why-i-learn-for-fun.html">Why I Learn For Fun :)</a></li><li class="chapter-item expanded "><a href="blog/config-habit.html">Baking Configs</a></li><li class="chapter-item expanded "><a href="blog/neovim.html">Simple NeoVim Config</a></li></ol></li><li class="chapter-item expanded "><a href="2023.html">2023</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="blog/neovim-setup.html">Neovim Setup</a></li><li class="chapter-item expanded "><a href="blog/defaults.html">Defaults</a></li><li class="chapter-item expanded "><a href="blog/bottles-stuck-fix.html">Bottles Stuck Fix</a></li><li class="chapter-item expanded "><a href="blog/serverless-applications.html">Serverless Applications</a></li><li class="chapter-item expanded "><a href="blog/the-slow-road.html">The Slow Road</a></li><li class="chapter-item expanded "><a href="blog/you-are-not-a-clone.html">You Are Not A Clone</a></li></ol></li><li class="chapter-item expanded "><a href="2022.html">2022</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="blog/android-setup-2023.html">Android Setup 2023</a></li><li class="chapter-item expanded "><a href="blog/godot-rant.html">Godot Rant</a></li><li class="chapter-item expanded "><a href="blog/arch-raspbian.html">Being An Arch User</a></li><li class="chapter-item expanded "><a href="blog/wave-function-collapse.html">Wave Function Collapse</a></li><li class="chapter-item expanded "><a href="blog/opposites.html">Things Lead to Their Opposites</a></li><li class="chapter-item expanded "><a href="blog/people-dont-code.html">Why Don&#39;t People Code</a></li><li class="chapter-item expanded "><a href="blog/op1.html">Op1 Mini Synthesizer</a></li><li class="chapter-item expanded "><a href="blog/expectations.html">Expectations</a></li><li class="chapter-item expanded "><a href="blog/i-found-it.html">I&#39;ve Found It</a></li><li class="chapter-item expanded "><a href="blog/companion-databases.html">Companion Databases</a></li><li class="chapter-item expanded "><a href="blog/end-of-thinking.html">End Of Thinking</a></li><li class="chapter-item expanded "><a href="blog/qrcodes.html">QR Codes</a></li><li class="chapter-item expanded "><a href="blog/pine-phone.html">Pine Phone</a></li><li class="chapter-item expanded "><a href="blog/quantum-internet.html">Quantum Internet</a></li><li class="chapter-item expanded "><a href="blog/podcasts.html">Podcasts</a></li><li class="chapter-item expanded "><a href="blog/website-improvements.html">Website Improvements</a></li><li class="chapter-item expanded "><a href="blog/happy-new-year.html">Happy New Year</a></li></ol></li><li class="chapter-item expanded "><a href="2021.html">2021</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="blog/rss-mainstream.html">Why isn&#39;t RSS Mainstream</a></li><li class="chapter-item expanded "><a href="blog/linux-scripting.html">Linux Scripting</a></li><li class="chapter-item expanded "><a href="blog/using-flutter.html">Using Flutter</a></li><li class="chapter-item expanded "><a href="blog/weekly-challenge-2.html">Weekly Challenge 2</a></li><li class="chapter-item expanded "><a href="blog/weekly-challenge-1.html">Weekly Challenge 1</a></li><li class="chapter-item expanded "><a href="blog/costs-bot.html">Costs Bot</a></li><li class="chapter-item expanded "><a href="blog/bee.html">Bee</a></li><li class="chapter-item expanded "><a href="blog/weekly-challenge.html">Weekly Challenge</a></li><li class="chapter-item expanded "><a href="blog/complexity.html">Complexity</a></li><li class="chapter-item expanded "><a href="blog/hidden-costs.html">Hidden Costs</a></li><li class="chapter-item expanded "><a href="blog/overwhelm.html">Overwhelm</a></li><li class="chapter-item expanded "><a href="blog/procrastination.html">Procrastination</a></li><li class="chapter-item expanded "><a href="blog/my-crypto-adventures.html">My Crypto Adventures</a></li></ol></li></ol></li></ol>';
        // Set the current, active page, and reveal it if it's hidden
        let current_page = document.location.href.toString().split("#")[0].split("?")[0];
        if (current_page.endsWith("/")) {
            current_page += "index.html";
        }
        var links = Array.prototype.slice.call(this.querySelectorAll("a"));
        var l = links.length;
        for (var i = 0; i < l; ++i) {
            var link = links[i];
            var href = link.getAttribute("href");
            if (href && !href.startsWith("#") && !/^(?:[a-z+]+:)?\/\//.test(href)) {
                link.href = path_to_root + href;
            }
            // The "index" page is supposed to alias the first chapter in the book.
            if (link.href === current_page || (i === 0 && path_to_root === "" && current_page.endsWith("/index.html"))) {
                link.classList.add("active");
                var parent = link.parentElement;
                if (parent && parent.classList.contains("chapter-item")) {
                    parent.classList.add("expanded");
                }
                while (parent) {
                    if (parent.tagName === "LI" && parent.previousElementSibling) {
                        if (parent.previousElementSibling.classList.contains("chapter-item")) {
                            parent.previousElementSibling.classList.add("expanded");
                        }
                    }
                    parent = parent.parentElement;
                }
            }
        }
        // Track and set sidebar scroll position
        this.addEventListener('click', function(e) {
            if (e.target.tagName === 'A') {
                sessionStorage.setItem('sidebar-scroll', this.scrollTop);
            }
        }, { passive: true });
        var sidebarScrollTop = sessionStorage.getItem('sidebar-scroll');
        sessionStorage.removeItem('sidebar-scroll');
        if (sidebarScrollTop) {
            // preserve sidebar scroll position when navigating via links within sidebar
            this.scrollTop = sidebarScrollTop;
        } else {
            // scroll sidebar to current active section when navigating via "next/previous chapter" buttons
            var activeSection = document.querySelector('#sidebar .active');
            if (activeSection) {
                activeSection.scrollIntoView({ block: 'center' });
            }
        }
        // Toggle buttons
        var sidebarAnchorToggles = document.querySelectorAll('#sidebar a.toggle');
        function toggleSection(ev) {
            ev.currentTarget.parentElement.classList.toggle('expanded');
        }
        Array.from(sidebarAnchorToggles).forEach(function (el) {
            el.addEventListener('click', toggleSection);
        });
    }
}
window.customElements.define("mdbook-sidebar-scrollbox", MDBookSidebarScrollbox);
