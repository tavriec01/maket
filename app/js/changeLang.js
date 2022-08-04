 (function(){
        const langTabs = document.querySelectorAll('.header__change-lang-list-item');
        let langTabUp = document.querySelectorAll('.header__change-lang-list-item--up');
        let langTabDown = document.querySelectorAll('.header__change-lang-list-item--down');
        if(langTabs.length > 0) {
            langTabs.forEach((el) => {
                el.addEventListener('click', onChangeLangClick);
            })
        }
        function onChangeLangClick() {
            if (this.classList.contains("header__change-lang-list-item--up")) {
                if (this.classList.contains("header__change-lang-list-item--open")) {
                    this.classList.remove('header__change-lang-list-item--open');
                    for (let i = 0; i < langTabDown.length; i++) {
                        langTabDown[i].classList.add("visually-hidden");
                    }
                } else {
                    this.classList.add('header__change-lang-list-item--open');
                    for (let i = 0; i < langTabDown.length; i++) {
                        langTabDown[i].classList.remove("visually-hidden");
                    }
                }
            }
            if (this.classList.contains("header__change-lang-list-item--down")) {
                this.classList.add("header__change-lang-list-item--up");
                this.classList.remove("header__change-lang-list-item--down");
                for (let i = 0; i < langTabUp.length; i++) {
                    langTabUp[i].classList.add("header__change-lang-list-item--down");
                    langTabUp[i].classList.add("visually-hidden");
                    langTabUp[i].classList.remove("header__change-lang-list-item--up");
                    langTabUp[i].classList.remove("header__change-lang-list-item--open");
                }
            }
            langTabUp = document.querySelectorAll('.header__change-lang-list-item--up');
            langTabDown = document.querySelectorAll('.header__change-lang-list-item--down');
        }
    })();