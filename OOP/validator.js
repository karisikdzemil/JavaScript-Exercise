class Validator {
    constructor(config) {
        this.elementsConfig = config;
        this.errors = {};

        this.generateErrorsObject();
        this.inputListener();
    }

    generateErrorsObject() {
        for (let field in this.elementsConfig) {
            this.errors[field] = [];
        }
    }

    inputListener() {
        let inputSelector = this.elementsConfig;

        for (let field in inputSelector) {
            let el = document.querySelector(`input[name="${field}"]`);

            el.addEventListener("input", this.validate.bind(this));
        }
    }

    validate(e) {
        let elFields = this.elementsConfig;

        let field = e.target;
        let fieldName = field.getAttribute("name");
        let fieldValue = field.value;

        this.errors[fieldName] = [];

        // Required field validation
        if (elFields[fieldName].required) {
            if (fieldValue === "") {
                this.errors[fieldName].push("Polje je prazno");
            }
        }

        // Email validation
        if (elFields[fieldName].email) {
            if (!this.validateEmail(fieldValue)) {
                this.errors[fieldName].push("Neispravna email adresa");
            }
        }

        // Minlength and maxlength validation
        if (
            fieldValue.length < elFields[fieldName].minlength ||
            fieldValue.length > elFields[fieldName].maxlength
        ) {
            this.errors[fieldName].push(
                `Polje mora imati minimalno ${elFields[fieldName].minlength} i maksimalno ${elFields[fieldName].maxlength} karaktera`
            );
        }

        // Matching fields validation
        if (elFields[fieldName].matching) {
            let matchingEl = document.querySelector(
                `input[name="${elFields[fieldName].matching}"]`
            );

            if (fieldValue !== matchingEl.value) {
                this.errors[fieldName].push("Lozinke se ne poklapaju");
                this.errors[elFields[fieldName].matching] = [
                    "Lozinke se ne poklapaju",
                ];
            } else {
                this.errors[elFields[fieldName].matching] = [];
            }
        }

        this.populateErrors();
    }

    populateErrors() {
        // Clear previous error messages
        for (const elem of document.querySelectorAll("ul")) {
            elem.remove();
        }

        // Display new error messages
        for (let key of Object.keys(this.errors)) {
            let parentElement = document.querySelector(
                `input[name="${key}"]`
            ).parentElement;
            let errorsElement = document.createElement("ul");
            parentElement.appendChild(errorsElement);

            this.errors[key].forEach((error) => {
                let li = document.createElement("li");
                li.innerText = error;

                errorsElement.appendChild(li);
            });
        }
    }

    validateEmail(email) {
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return emailRegex.test(email);
    }
}
