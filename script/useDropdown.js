export default function useDropdown() {

    // Dropdown
    const dropdownMenu = document.getElementById('dropdown-menu');

    function handleDropdownShow() {
        dropdownMenu.classList.remove('d-none');
        dropdownMenu.classList.remove('slide-out-top');
        dropdownMenu.classList.add('slide-in-top');
    }

    function handleDropdownClose() {
        dropdownMenu.classList.remove('slide-in-top');
        dropdownMenu.classList.add('slide-out-top');
        setTimeout(function () {
            dropdownMenu.classList.add('d-none');
        }, [300])
    }

    return {
        handleDropdownShow, handleDropdownClose
    }
}