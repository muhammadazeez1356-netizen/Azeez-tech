/* =========================================================
   @AZEEZTECH PORTFOLIO
   SPLASH SCREEN
========================================================= */

document.addEventListener("DOMContentLoaded", function () {

    const splashScreen = document.getElementById("splashScreen");
    const mainWebsite = document.getElementById("mainWebsite");


    /* =====================================================
       KEEP PAGE LOCKED WHILE SPLASH IS SHOWING
    ====================================================== */

    document.body.style.overflow = "hidden";


    /* =====================================================
       SHOW HOMEPAGE AFTER SPLASH
    ====================================================== */

    setTimeout(function () {

        if (splashScreen) {
            splashScreen.classList.add("hide");
        }

        if (mainWebsite) {
            mainWebsite.classList.add("show");
        }

        document.body.style.overflow = "auto";

    }, 3000);


});




/* =========================================================
   AZEEZTECH PORTFOLIO - MAIN JAVASCRIPT
========================================================= */

document.addEventListener("DOMContentLoaded", function () {

    /* =====================================================
       ELEMENTS
    ===================================================== */

    const portfolioHome = document.querySelector(".portfolio-home");

    const themeToggle = document.getElementById("themeToggle");
    const themeIcon = document.getElementById("themeIcon");

    const mobileMenuButton =
        document.getElementById("mobileMenuButton");

    const portfolioNav =
        document.getElementById("portfolioNav");

    const floatingMessage =
        document.getElementById("floatingMessage");

    const connectPanel =
        document.getElementById("connectPanel");

    const connectClose =
        document.getElementById("connectClose");


    /* =====================================================
       DARK / LIGHT MODE
    ===================================================== */

    if (portfolioHome && themeToggle) {

        const savedTheme =
            localStorage.getItem("azeezTechTheme");

        if (savedTheme === "light") {

            portfolioHome.classList.add("light-mode");

            if (themeIcon) {
                themeIcon.classList.remove("fa-moon");
                themeIcon.classList.add("fa-sun");
            }

        }


        themeToggle.addEventListener("click", function () {

            portfolioHome.classList.toggle("light-mode");

            const lightMode =
                portfolioHome.classList.contains("light-mode");


            if (lightMode) {

                localStorage.setItem(
                    "azeezTechTheme",
                    "light"
                );

                if (themeIcon) {
                    themeIcon.classList.remove("fa-moon");
                    themeIcon.classList.add("fa-sun");
                }

            } else {

                localStorage.setItem(
                    "azeezTechTheme",
                    "dark"
                );

                if (themeIcon) {
                    themeIcon.classList.remove("fa-sun");
                    themeIcon.classList.add("fa-moon");
                }

            }

        });

    }


    /* =====================================================
       MOBILE MENU
    ===================================================== */

    if (mobileMenuButton && portfolioNav) {

        mobileMenuButton.addEventListener(
            "click",
            function (event) {

                event.stopPropagation();

                portfolioNav.classList.toggle("show");

                const menuIcon =
                    mobileMenuButton.querySelector("i");

                if (menuIcon) {

                    if (
                        portfolioNav.classList.contains("show")
                    ) {

                        menuIcon.classList.remove("fa-bars");
                        menuIcon.classList.add("fa-xmark");

                    } else {

                        menuIcon.classList.remove("fa-xmark");
                        menuIcon.classList.add("fa-bars");

                    }

                }

            }
        );

    }


    /* =====================================================
       CLOSE MOBILE MENU WHEN LINK IS CLICKED
    ===================================================== */

    if (portfolioNav) {

        const menuLinks =
            portfolioNav.querySelectorAll("a");

        menuLinks.forEach(function (link) {

            link.addEventListener(
                "click",
                function () {

                    portfolioNav.classList.remove("show");

                    if (mobileMenuButton) {

                        const menuIcon =
                            mobileMenuButton.querySelector("i");

                        if (menuIcon) {

                            menuIcon.classList.remove(
                                "fa-xmark"
                            );

                            menuIcon.classList.add(
                                "fa-bars"
                            );

                        }

                    }

                }
            );

        });

    }


    /* =====================================================
       OPEN "LET'S CONNECT"
    ===================================================== */

    if (floatingMessage && connectPanel) {

        floatingMessage.addEventListener(
            "click",
            function (event) {

                event.stopPropagation();

                connectPanel.classList.add("show");

            }
        );

    }


    /* =====================================================
       CLOSE "LET'S CONNECT"
    ===================================================== */

    if (connectClose && connectPanel) {

        connectClose.addEventListener(
            "click",
            function (event) {

                event.stopPropagation();

                connectPanel.classList.remove("show");

            }
        );

    }


    /* =====================================================
       PREVENT PANEL CLICK FROM CLOSING IT
    ===================================================== */

    if (connectPanel) {

        connectPanel.addEventListener(
            "click",
            function (event) {

                event.stopPropagation();

            }
        );

    }


    /* =====================================================
       CLICK OUTSIDE CONNECT PANEL
    ===================================================== */

    document.addEventListener(
        "click",
        function (event) {

            if (
                connectPanel &&
                connectPanel.classList.contains("show")
            ) {

                if (
                    !connectPanel.contains(event.target) &&
                    !floatingMessage?.contains(event.target)
                ) {

                    connectPanel.classList.remove("show");

                }

            }

        }
    );


    /* =====================================================
       ESCAPE KEY
    ===================================================== */

    document.addEventListener(
        "keydown",
        function (event) {

            if (event.key !== "Escape") {
                return;
            }


            /* Close contact panel */

            if (connectPanel) {

                connectPanel.classList.remove("show");

            }


            /* Close mobile menu */

            if (portfolioNav) {

                portfolioNav.classList.remove("show");

            }


            /* Reset mobile menu icon */

            if (mobileMenuButton) {

                const menuIcon =
                    mobileMenuButton.querySelector("i");

                if (menuIcon) {

                    menuIcon.classList.remove("fa-xmark");

                    menuIcon.classList.add("fa-bars");

                }

            }

        }
    );


    /* =====================================================
       SMOOTH SCROLL
    ===================================================== */

    const internalLinks =
        document.querySelectorAll('a[href^="#"]');


    internalLinks.forEach(function (link) {

        link.addEventListener(
            "click",
            function (event) {

                const targetId =
                    link.getAttribute("href");


                if (
                    !targetId ||
                    targetId === "#"
                ) {

                    return;

                }


                const target =
                    document.querySelector(targetId);


                if (!target) {

                    return;

                }


                event.preventDefault();


                target.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });

            }
        );

    });


    /* =====================================================
       ACTIVE NAVIGATION
    ===================================================== */

    const navLinks =
        document.querySelectorAll(
            ".portfolio-nav .nav-link"
        );


    const pageSections =
        document.querySelectorAll(
            ".portfolio-home section[id]"
        );


    function updateActiveNavigation() {

        let currentSection = "home";

        const scrollPosition =
            window.scrollY + 180;


        pageSections.forEach(
            function (section) {

                if (
                    scrollPosition >= section.offsetTop
                ) {

                    currentSection =
                        section.getAttribute("id");

                }

            }
        );


        navLinks.forEach(
            function (link) {

                link.classList.remove("active");

                const linkTarget =
                    link.getAttribute("href");


                if (
                    linkTarget ===
                    "#" + currentSection
                ) {

                    link.classList.add("active");

                }

            }
        );

    }


    window.addEventListener(
        "scroll",
        updateActiveNavigation
    );


    updateActiveNavigation();


});