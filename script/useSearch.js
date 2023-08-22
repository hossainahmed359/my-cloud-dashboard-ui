export default function useSearch() {

    // Desktop Search
    const navMenu = document.getElementById('nav-bottom-menu');

    function handleSearchOn() {
        navMenu.classList.add('search-active');
    }

    function handleSearchClose() {
        navMenu.classList.remove('search-active');
    }


    // Mobile Search
    const mobileSearchElement = document.getElementById('mobile-search');

    function handleMoblieSearchOn() {
        mobileSearchElement.classList.remove('d-none');
        mobileSearchElement.classList.add('slide-in-top');
    }

    function handleMobileSearchClose() {
        mobileSearchElement.classList.add('slide-out-top');
        mobileSearchElement.classList.remove('slide-in-top');

        setTimeout(function () {
            mobileSearchElement.classList.remove('slide-out-top');
            mobileSearchElement.classList.add('d-none');
        }, [300]);
    }

    return {
        handleSearchOn, handleSearchClose, handleMoblieSearchOn, handleMobileSearchClose
    }
}