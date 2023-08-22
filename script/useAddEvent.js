export default function useAddEvent() {

    // SINGLE ELEMENT
    // const element = {
    //     className: '',
    //     id: '',
    //     event: '',
    //     callback: function () {

    //     },
    // }

    // ARRAY OF ELEMENTS
    // const arrayOfElements = [
    //     {
    //         className: '',
    //         id: '',
    //         event: '',
    //         callback: function () {

    //         },
    //     }
    // ];

    // ADD EVENT TO SINGLE ELEMENT
    function addEventToSingleElement({ id, event, callback }) {
        const element = document.getElementById(id);
        element.addEventListener(event = 'click', callback)
    }

    // ADD EVENT TO MULIPLE ELEMENTS
    function addEventToMultitpleElements(arrayOfElements = []) {

        arrayOfElements.forEach((item) => {

            const { className, id, event = 'click', callback } = item;

            if (!id && !className) {
                return;
            } 
            else if (className) {
                const elements = document.querySelectorAll(`.${className}`);
                elements.forEach((el) => {
                    el.addEventListener(event, callback);
                });
            } 
            else {
                const element = document.getElementById(id);
                element.addEventListener(event, callback);
            }
        })
    }

    return {
        addEventToSingleElement, addEventToMultitpleElements
    }
}