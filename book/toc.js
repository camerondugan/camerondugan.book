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
        this.innerHTML = '<ol class="chapter"><li class="chapter-item expanded "><a href="contact.html"><strong aria-hidden="true">1.</strong> Contact Me</a></li><li class="chapter-item expanded "><a href="projects.html"><strong aria-hidden="true">2.</strong> Projects</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="projects/wizard-workshop-part-2.html"><strong aria-hidden="true">2.1.</strong> Wizard Workshop Part 2</a></li><li class="chapter-item expanded "><a href="projects/wizard-workshop.html"><strong aria-hidden="true">2.2.</strong> Wizard Workshop</a></li><li class="chapter-item expanded "><a href="projects/my-old-keyboard-is-basically-cheating.html"><strong aria-hidden="true">2.3.</strong> My Old Keyboard Is Basically Cheating</a></li><li class="chapter-item expanded "><a href="projects/tiny-chess-engine.html"><strong aria-hidden="true">2.4.</strong> Tiny Chess Engine</a></li><li class="chapter-item expanded "><a href="projects/vr-game.html"><strong aria-hidden="true">2.5.</strong> VR Game</a></li><li class="chapter-item expanded "><a href="projects/chess-ai.html"><strong aria-hidden="true">2.6.</strong> Chess Ai</a></li><li class="chapter-item expanded "><a href="projects/automated-light-switch.html"><strong aria-hidden="true">2.7.</strong> Automated Light Switch</a></li><li class="chapter-item expanded "><a href="projects/arduinos.html"><strong aria-hidden="true">2.8.</strong> Arduinos</a></li><li class="chapter-item expanded "><a href="projects/dream-bot.html"><strong aria-hidden="true">2.9.</strong> Dream Bot</a></li><li class="chapter-item expanded "><a href="projects/arbidor.html"><strong aria-hidden="true">2.10.</strong> Arbidor</a></li><li class="chapter-item expanded "><a href="projects/devlog-3.html"><strong aria-hidden="true">2.11.</strong> Devlog 3</a></li><li class="chapter-item expanded "><a href="projects/devlog-2.html"><strong aria-hidden="true">2.12.</strong> Devlog 2</a></li><li class="chapter-item expanded "><a href="projects/devlog-1.html"><strong aria-hidden="true">2.13.</strong> Devlog 1</a></li></ol></li><li class="chapter-item expanded "><li class="spacer"></li><li class="chapter-item expanded affix "><li class="part-title">Blog</li><li class="chapter-item expanded affix "><li class="part-title">2024</li><li class="chapter-item expanded "><a href="blog/keyd.html"><strong aria-hidden="true">3.</strong> Keyd</a></li><li class="chapter-item expanded "><a href="blog/devenv.html"><strong aria-hidden="true">4.</strong> Devenv</a></li><li class="chapter-item expanded "><a href="blog/cosmic-desktop-is-awesome.html"><strong aria-hidden="true">5.</strong> Cosmic Desktop Is Awesome</a></li><li class="chapter-item expanded "><a href="blog/nixos-is-awesome-pt1.html"><strong aria-hidden="true">6.</strong> Nixos Is Awesome Pt1</a></li><li class="chapter-item expanded "><a href="blog/too-much-automation.html"><strong aria-hidden="true">7.</strong> Too Much Automation</a></li><li class="chapter-item expanded "><a href="blog/the-point-of-formatters.html"><strong aria-hidden="true">8.</strong> The Point Of Formatters</a></li><li class="chapter-item expanded "><a href="blog/why-i-learn-for-fun.html"><strong aria-hidden="true">9.</strong> Why I Learn For Fun</a></li><li class="chapter-item expanded "><a href="blog/config-habit.html"><strong aria-hidden="true">10.</strong> Config Habit</a></li><li class="chapter-item expanded "><a href="blog/neovim.html"><strong aria-hidden="true">11.</strong> Neovim</a></li><li class="chapter-item expanded affix "><li class="spacer"></li><li class="chapter-item expanded affix "><li class="part-title">2023</li><li class="chapter-item expanded "><a href="blog/neovim-setup.html"><strong aria-hidden="true">12.</strong> Neovim Setup</a></li><li class="chapter-item expanded "><a href="blog/defaults.html"><strong aria-hidden="true">13.</strong> Defaults</a></li><li class="chapter-item expanded "><a href="blog/bottles-stuck-fix.html"><strong aria-hidden="true">14.</strong> Bottles Stuck Fix</a></li><li class="chapter-item expanded "><a href="blog/serverless-applications.html"><strong aria-hidden="true">15.</strong> Serverless Applications</a></li><li class="chapter-item expanded "><a href="blog/the-slow-road.html"><strong aria-hidden="true">16.</strong> The Slow Road</a></li><li class="chapter-item expanded "><a href="blog/you-are-not-a-clone.html"><strong aria-hidden="true">17.</strong> You Are Not A Clone</a></li><li class="chapter-item expanded affix "><li class="spacer"></li><li class="chapter-item expanded affix "><li class="part-title">2022</li><li class="chapter-item expanded "><a href="blog/android-setup-2023.html"><strong aria-hidden="true">18.</strong> Android Setup 2023</a></li><li class="chapter-item expanded "><a href="blog/godot-rant.html"><strong aria-hidden="true">19.</strong> Godot Rant</a></li><li class="chapter-item expanded "><a href="blog/arch-raspbian.html"><strong aria-hidden="true">20.</strong> Arch Raspbian</a></li><li class="chapter-item expanded "><a href="blog/wave-function-collapse.html"><strong aria-hidden="true">21.</strong> Wave Function Collapse</a></li><li class="chapter-item expanded "><a href="blog/opposites.html"><strong aria-hidden="true">22.</strong> Opposites</a></li><li class="chapter-item expanded "><a href="blog/people-dont-code.html"><strong aria-hidden="true">23.</strong> People Dont Code</a></li><li class="chapter-item expanded "><a href="blog/op1.html"><strong aria-hidden="true">24.</strong> Op1</a></li><li class="chapter-item expanded "><a href="blog/expectations.html"><strong aria-hidden="true">25.</strong> Expectations</a></li><li class="chapter-item expanded "><a href="blog/i-found-it.html"><strong aria-hidden="true">26.</strong> I Found It</a></li><li class="chapter-item expanded "><a href="blog/companion-databases.html"><strong aria-hidden="true">27.</strong> Companion Databases</a></li><li class="chapter-item expanded "><a href="blog/end-of-thinking.html"><strong aria-hidden="true">28.</strong> End Of Thinking</a></li><li class="chapter-item expanded "><a href="blog/qrcodes.html"><strong aria-hidden="true">29.</strong> Qrcodes</a></li><li class="chapter-item expanded "><a href="blog/pine-phone.html"><strong aria-hidden="true">30.</strong> Pine Phone</a></li><li class="chapter-item expanded "><a href="blog/quantum-internet.html"><strong aria-hidden="true">31.</strong> Quantum Internet</a></li><li class="chapter-item expanded "><a href="blog/podcasts.html"><strong aria-hidden="true">32.</strong> Podcasts</a></li><li class="chapter-item expanded "><a href="blog/website-improvements.html"><strong aria-hidden="true">33.</strong> Website Improvements</a></li><li class="chapter-item expanded "><a href="blog/happy-new-year.html"><strong aria-hidden="true">34.</strong> Happy New Year</a></li><li class="chapter-item expanded affix "><li class="spacer"></li><li class="chapter-item expanded affix "><li class="part-title">2021</li><li class="chapter-item expanded "><a href="blog/rss-mainstream.html"><strong aria-hidden="true">35.</strong> Rss Mainstream</a></li><li class="chapter-item expanded "><a href="blog/linux-scripting.html"><strong aria-hidden="true">36.</strong> Linux Scripting</a></li><li class="chapter-item expanded "><a href="blog/using-flutter.html"><strong aria-hidden="true">37.</strong> Using Flutter</a></li><li class="chapter-item expanded "><a href="blog/weekly-challenge-2.html"><strong aria-hidden="true">38.</strong> Weekly Challenge 2</a></li><li class="chapter-item expanded "><a href="blog/weekly-challenge-1.html"><strong aria-hidden="true">39.</strong> Weekly Challenge 1</a></li><li class="chapter-item expanded "><a href="blog/costs-bot.html"><strong aria-hidden="true">40.</strong> Costs Bot</a></li><li class="chapter-item expanded "><a href="blog/bee.html"><strong aria-hidden="true">41.</strong> Bee</a></li><li class="chapter-item expanded "><a href="blog/weekly-challenge.html"><strong aria-hidden="true">42.</strong> Weekly Challenge</a></li><li class="chapter-item expanded "><a href="blog/complexity.html"><strong aria-hidden="true">43.</strong> Complexity</a></li><li class="chapter-item expanded "><a href="blog/hidden-costs.html"><strong aria-hidden="true">44.</strong> Hidden Costs</a></li><li class="chapter-item expanded "><a href="blog/overwhelm.html"><strong aria-hidden="true">45.</strong> Overwhelm</a></li><li class="chapter-item expanded "><a href="blog/procrastination.html"><strong aria-hidden="true">46.</strong> Procrastination</a></li><li class="chapter-item expanded "><a href="blog/my-crypto-adventures.html"><strong aria-hidden="true">47.</strong> My Crypto Adventures</a></li></ol>';
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
