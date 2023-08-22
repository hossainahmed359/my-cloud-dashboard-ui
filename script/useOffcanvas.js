import useAddEvent from "./useAddEvent";

const { addEventToSingleElement } = useAddEvent();

export default function useOffcanvas() {

    // Offcanvas
    const offcanvas = document.getElementById('ef-offcanvas');

    // SHOW OFFCANVAS
    function handleOffcanvasShow() {
        offcanvas.classList.remove('d-none');
        offcanvas.classList.remove('slide-out-right');
        offcanvas.classList.add('slide-in-left');
    }

    // HIDE OFFCANVAS
    function handleOffcanvasClose() {
        offcanvas.classList.remove('slide-in-left');
        offcanvas.classList.add('slide-out-right');
        setTimeout(function () {
            offcanvas.classList.remove('slide-out-right');
            offcanvas.classList.add('d-none');
        }, [200]);
    }

    // CREATE OFFCANVAS MENU LIST HTML || NEED TO WORK ON THIS CODES LATER
    function createOffcanvasMenuListHtml(menuList = []) {

        const offcanvasBody = document.getElementById('offcanvas-menu-list');

        menuList.forEach(item => {
            const listItem = document.createElement('li');
            listItem.id = item.id;
            listItem.className = `offcanvas__body__list__item ${item.submenuList ? 'has-sublist' : ''} w-100`;

            const button = document.createElement('button');
            button.className = 'offcanvas__body__list__item__btn';
            button.textContent = item.name;

            if (item.submenuList) {
                const arrowSpan = document.createElement('span');
                arrowSpan.className = 'right-arrow-icon';
                button.appendChild(arrowSpan);
            }

            listItem.appendChild(button);

            offcanvasBody.appendChild(listItem);

            addEventToSingleElement({
                id: item.id,
                event: 'click',
                callback: function () {
                    console.log(item.id, '===========')
                },
            })
        });

    }

    // FIND THE LAST PARENT CHILDS || NEED TO WORK ON THIS CODES LATER
    function findLastParentChilds(lastParentId, menuList = []) {

        if (!lastParentId) return menuList;

        let lastParentClildList = [];

        menuList.forEach((item) => {
            if (item.id === lastParentId) {
                lastParentClildList = item.submenuList;
                return;
            } else {
                if (item.submenuList?.length > 0)
                    findLastParentChilds(lastParentId, item.submenuList);
            }
        })

        return lastParentClildList

    }


    // let showingParent = true;

    const menuListContainer = document.getElementById('offcanvas-menu-list');
    const submenuListContainer = document.getElementById('offcanvas-submenu-list');
    const parentListBtn = document.getElementById('show-parent-list-btn');

    addEventToSingleElement({id:'show-parent-list-btn', event:'click', callback: () => {
        showParentMenuList();
        hideParentListBtn();
    } })

    function showParentMenuList() {
        submenuListContainer.classList.add('d-none');
        submenuListContainer.classList.remove('scale-in-hor-right');
        menuListContainer.classList.add('scale-in-hor-left');
        menuListContainer.classList.remove('d-none');

        // showingParent = true;
    }

    function showChildMenuList() {
        menuListContainer.classList.add('d-none');
        submenuListContainer.classList.add('scale-in-hor-right');
        submenuListContainer.classList.remove('d-none');

        // showingParent = false;
    }

    function showParentListBtn () {
        parentListBtn.classList.remove('d-none');
    }

    function hideParentListBtn () {
        parentListBtn.classList.add('d-none');
    }


    return {
        showParentListBtn, hideParentListBtn, showParentMenuList, showChildMenuList, handleOffcanvasShow, handleOffcanvasClose
    }
}

// NEED TO WORK ON THIS CODES LATER

// const menuList = [
//     {
//         id: 'trending',
//         name: 'Trending'
//     },
//     {
//         id: 'pc',
//         name: 'pc',
//         submenuList: [
//             {
//                 id: 'platforms',
//                 name: 'Platforms',
//                 submenuList: [
//                     {
//                         id: 'x-box',
//                         name: 'X-Box'
//                     },
//                     {
//                         id: 'playstation',
//                         name: 'Playstation'
//                     },
//                 ]
//             },
//             {
//                 id: 'dummy-two',
//                 name: 'Dummy Two'
//             },
//         ]
//     },
//     {
//         id: 'dummy',
//         name: 'Dummy'
//     },
// ]

// const memorizeParentIds = ['platforms'];


// const lastParent = memorizeParentIds[memorizeParentIds.length - 1];