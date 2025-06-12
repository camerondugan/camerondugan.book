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
        this.innerHTML = '<ol class="chapter"><li class="chapter-item expanded "><a href="contact.html"><strong aria-hidden="true">1.</strong> Contact Me</a></li><li class="chapter-item expanded "><a href="projects.html"><strong aria-hidden="true">2.</strong> Projects</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="projects/2024-10-24-wizard-workshop-part-2.html"><strong aria-hidden="true">2.1.</strong> Wizard Workshop Part 2</a></li><li class="chapter-item expanded "><a href="projects/2024-10-15-wizard-workshop.html"><strong aria-hidden="true">2.2.</strong> Wizard Workshop</a></li><li class="chapter-item expanded "><a href="projects/2024-07-21-my-old-keyboard-is-basically-cheating.html"><strong aria-hidden="true">2.3.</strong> My Old Keyboard Is Basically Cheating</a></li><li class="chapter-item expanded "><a href="projects/2023-07-29-tiny-chess-engine.html"><strong aria-hidden="true">2.4.</strong> Tiny Chess Engine</a></li><li class="chapter-item expanded "><a href="projects/2023-06-01-vr-game.html"><strong aria-hidden="true">2.5.</strong> VR Game</a></li><li class="chapter-item expanded "><a href="projects/2022-11-21-chess-ai.html"><strong aria-hidden="true">2.6.</strong> Chess Ai</a></li><li class="chapter-item expanded "><a href="projects/2022-01-29-automated-light-switch.html"><strong aria-hidden="true">2.7.</strong> Automated Light Switch</a></li><li class="chapter-item expanded "><a href="projects/2021-12-02-arduinos.html"><strong aria-hidden="true">2.8.</strong> Arduinos</a></li><li class="chapter-item expanded "><a href="projects/2021-08-18-dream-bot.html"><strong aria-hidden="true">2.9.</strong> Dream Bot</a></li><li class="chapter-item expanded "><a href="projects/2021-08-11-arbidor.html"><strong aria-hidden="true">2.10.</strong> Arbidor</a></li><li class="chapter-item expanded "><a href="projects/2021-06-09-devlog-3.html"><strong aria-hidden="true">2.11.</strong> Devlog 3</a></li><li class="chapter-item expanded "><a href="projects/2021-06-07-devlog-2.html"><strong aria-hidden="true">2.12.</strong> Devlog 2</a></li><li class="chapter-item expanded "><a href="projects/2021-06-02-devlog-1.html"><strong aria-hidden="true">2.13.</strong> Devlog 1</a></li></ol></li><li class="chapter-item expanded "><li class="spacer"></li><li class="chapter-item expanded affix "><li class="part-title">Blog</li><li class="chapter-item expanded affix "><li class="part-title">2024</li><li class="chapter-item expanded "><a href="blog/2024-10-20-keyd.html"><strong aria-hidden="true">3.</strong> Keyd</a></li><li class="chapter-item expanded "><a href="blog/2024-09-24-devenv.html"><strong aria-hidden="true">4.</strong> Devenv</a></li><li class="chapter-item expanded "><a href="blog/2024-07-24-cosmic-desktop-is-awesome.html"><strong aria-hidden="true">5.</strong> Cosmic Desktop Is Awesome</a></li><li class="chapter-item expanded "><a href="blog/2024-07-21-nixos-is-awesome-pt1.html"><strong aria-hidden="true">6.</strong> Nixos Is Awesome Pt1</a></li><li class="chapter-item expanded "><a href="blog/2024-06-23-too-much-automation.html"><strong aria-hidden="true">7.</strong> Too Much Automation</a></li><li class="chapter-item expanded "><a href="blog/2024-05-01-the-point-of-formatters.html"><strong aria-hidden="true">8.</strong> The Point Of Formatters</a></li><li class="chapter-item expanded "><a href="blog/2024-04-23-config-habit.html"><strong aria-hidden="true">9.</strong> Config Habit</a></li><li class="chapter-item expanded "><a href="blog/2024-03-03-neovim.html"><strong aria-hidden="true">10.</strong> Neovim</a></li><li class="chapter-item expanded affix "><li class="spacer"></li><li class="chapter-item expanded affix "><li class="part-title">2023</li><li class="chapter-item expanded "><a href="blog/2023-05-24-neovim-setup.html"><strong aria-hidden="true">11.</strong> Neovim Setup</a></li><li class="chapter-item expanded "><a href="blog/2023-04-30-defaults.html"><strong aria-hidden="true">12.</strong> Defaults</a></li><li class="chapter-item expanded "><a href="blog/2023-03-12-bottles-stuck-fix.html"><strong aria-hidden="true">13.</strong> Bottles Stuck Fix</a></li><li class="chapter-item expanded "><a href="blog/2023-03-11-serverless-applications.html"><strong aria-hidden="true">14.</strong> Serverless Applications</a></li><li class="chapter-item expanded "><a href="blog/2023-03-05-the-slow-road.html"><strong aria-hidden="true">15.</strong> The Slow Road</a></li><li class="chapter-item expanded "><a href="blog/2023-02-22-you-are-not-a-clone.html"><strong aria-hidden="true">16.</strong> You Are Not A Clone</a></li><li class="chapter-item expanded affix "><li class="spacer"></li><li class="chapter-item expanded affix "><li class="part-title">2022</li><li class="chapter-item expanded "><a href="blog/2022-12-15-android-setup-2023.html"><strong aria-hidden="true">17.</strong> Android Setup 2023</a></li><li class="chapter-item expanded "><a href="blog/2022-08-16-godot-rant.html"><strong aria-hidden="true">18.</strong> Godot Rant</a></li><li class="chapter-item expanded "><a href="blog/2022-05-02-arch-raspbian.html"><strong aria-hidden="true">19.</strong> Arch Raspbian</a></li><li class="chapter-item expanded "><a href="blog/2022-04-28-wave-function-collapse.html"><strong aria-hidden="true">20.</strong> Wave Function Collapse</a></li><li class="chapter-item expanded "><a href="blog/2022-04-02-opposites.html"><strong aria-hidden="true">21.</strong> Opposites</a></li><li class="chapter-item expanded "><a href="blog/2022-03-29-people-dont-code.html"><strong aria-hidden="true">22.</strong> People Dont Code</a></li><li class="chapter-item expanded "><a href="blog/2022-02-28-op1.html"><strong aria-hidden="true">23.</strong> Op1</a></li><li class="chapter-item expanded "><a href="blog/2022-02-19-expectations.html"><strong aria-hidden="true">24.</strong> Expectations</a></li><li class="chapter-item expanded "><a href="blog/2022-02-12-i-found-it.html"><strong aria-hidden="true">25.</strong> I Found It</a></li><li class="chapter-item expanded "><a href="blog/2022-02-01-companion-databases.html"><strong aria-hidden="true">26.</strong> Companion Databases</a></li><li class="chapter-item expanded "><a href="blog/2022-01-25-end-of-thinking.html"><strong aria-hidden="true">27.</strong> End Of Thinking</a></li><li class="chapter-item expanded "><a href="blog/2022-01-23-qrcodes.html"><strong aria-hidden="true">28.</strong> Qrcodes</a></li><li class="chapter-item expanded "><a href="blog/2022-01-22-pine-phone.html"><strong aria-hidden="true">29.</strong> Pine Phone</a></li><li class="chapter-item expanded "><a href="blog/2022-01-21-quantum-internet.html"><strong aria-hidden="true">30.</strong> Quantum Internet</a></li><li class="chapter-item expanded "><a href="blog/2022-01-20-podcasts.html"><strong aria-hidden="true">31.</strong> Podcasts</a></li><li class="chapter-item expanded "><a href="blog/2022-01-16-website-improvements.html"><strong aria-hidden="true">32.</strong> Website Improvements</a></li><li class="chapter-item expanded "><a href="blog/2022-01-01-happy-new-year.html"><strong aria-hidden="true">33.</strong> Happy New Year</a></li><li class="chapter-item expanded affix "><li class="spacer"></li><li class="chapter-item expanded affix "><li class="part-title">2021</li><li class="chapter-item expanded "><a href="blog/2021-12-26-rss-mainstream.html"><strong aria-hidden="true">34.</strong> Rss Mainstream</a></li><li class="chapter-item expanded "><a href="blog/2021-12-20-linux-scripting.html"><strong aria-hidden="true">35.</strong> Linux Scripting</a></li><li class="chapter-item expanded "><a href="blog/2021-09-29-using-flutter.html"><strong aria-hidden="true">36.</strong> Using Flutter</a></li><li class="chapter-item expanded "><a href="blog/2021-08-23-weekly-challenge-2.html"><strong aria-hidden="true">37.</strong> Weekly Challenge 2</a></li><li class="chapter-item expanded "><a href="blog/2021-08-16-weekly-challenge-1.html"><strong aria-hidden="true">38.</strong> Weekly Challenge 1</a></li><li class="chapter-item expanded "><a href="blog/2021-08-16-costs-bot.html"><strong aria-hidden="true">39.</strong> Costs Bot</a></li><li class="chapter-item expanded "><a href="blog/2021-08-12-bee.html"><strong aria-hidden="true">40.</strong> Bee</a></li><li class="chapter-item expanded "><a href="blog/2021-08-09-weekly-challenge.html"><strong aria-hidden="true">41.</strong> Weekly Challenge</a></li><li class="chapter-item expanded "><a href="blog/2021-05-22-complexity.html"><strong aria-hidden="true">42.</strong> Complexity</a></li><li class="chapter-item expanded "><a href="blog/2021-05-21-hidden-costs.html"><strong aria-hidden="true">43.</strong> Hidden Costs</a></li><li class="chapter-item expanded "><a href="blog/2021-04-18-overwhelm.html"><strong aria-hidden="true">44.</strong> Overwhelm</a></li><li class="chapter-item expanded "><a href="blog/2021-04-17-procrastination.html"><strong aria-hidden="true">45.</strong> Procrastination</a></li><li class="chapter-item expanded "><a href="blog/2021-04-05-my-crypto-adventures.html"><strong aria-hidden="true">46.</strong> My Crypto Adventures</a></li></ol>';
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
