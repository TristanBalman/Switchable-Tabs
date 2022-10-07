function setupTabs () {
    document.querySelectorAll(".tabs__button").forEach(button => {
        button.addEventListener("click", () => {
            const sideBar = button.parentElement;
            const tabsContainer = sideBar.parentElement;
            // button.dataset.forTab is referring to the data-for-tab numbers in the HTML.
            const tabNumber = button.dataset.forTab;
            // tabToActivate refers to the tab number and the relevant content in which to make active.
            const tabToActivate = tabsContainer.querySelector(`.tabs__content[data-tab="${tabNumber}"]`)
            
            //Removing the active state of the tab that's not currently in focus.
            sideBar.querySelectorAll(".tabs__button").forEach(button => {
                button.classList.remove("tabs__button--active");
            });

            tabsContainer.querySelectorAll(".tabs__content").forEach(tab => {
                tab.classList.remove("tabs__content--active");
            });

            //Adding the active state of the tab that's currently in focus.
            button.classList.add("tabs__button--active");
            tabToActivate.classList.add("tabs__content--active");
        });
    });
}

document.addEventListener("DOMContentLoaded", () => {
    setupTabs();

    document.querySelectorAll(".tabs").forEach(tabsContainer => {
        tabsContainer.querySelector(".tabs__sidebar .tabs__button").click();
    });
});