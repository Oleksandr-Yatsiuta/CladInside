let area = document.querySelector(".search-area");
let search = document.querySelector(".search");
let icon = document.getElementById("search-icon");
let noResults = document.querySelector(".no-results");

// Функція для відкриття пошуку
function openSearch() {
    if (area) {
        area.style.display = "flex";
        // Показуємо всі елементи по замовчуванню
        let elasticItems = document.querySelectorAll(".elastic li");
        elasticItems.forEach(function (elem) {
            elem.classList.remove("hide");
        });
        // Приховуємо повідомлення про відсутність результатів
        if (noResults) {
            noResults.classList.add("hide");
        }
    }
}

// Функція для закриття пошуку
function closeSearch() {
    if (area) {
        area.style.display = "none";
    }
}

// Відкриття пошуку при кліку на іконку
if (icon) {
    icon.onclick = function () {
        openSearch();
    }
}

// Відкриття пошуку при кліку на поле вводу
if (search) {
    search.onclick = function () {
        openSearch();
    }
}

// Закриття пошуку при кліку на документ (поза областю пошуку)
document.addEventListener('click', function(event) {
    if (area && area.style.display === "flex") {
        // Перевіряємо, чи клік був поза областю пошуку
        if (!area.contains(event.target) && 
            !search.contains(event.target) && 
            !icon.contains(event.target)) {
            search.classList.remove("active");
            closeSearch();
			search.value = "";
            search.blur();
        }
    }
});

// Закриття пошуку при натисканні Escape
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        closeSearch();
        search.classList.remove("active");
        if (search) {
            search.value = "";
            search.blur();
        }
    }
});

// Фільтрація результатів пошуку
let elasticInput = document.querySelector("#elastic");
if (elasticInput) {
    elasticInput.oninput = function () {
        let val = this.value.trim();
        let elasticItems = document.querySelectorAll(".elastic li");
        let visibleItems = 0;
        
        if (val != '') {
            elasticItems.forEach(function (elem) {
                if (elem.innerText.toLowerCase().search(val.toLowerCase()) == -1) {
                    elem.classList.add("hide");
                }
                else {
                    elem.classList.remove("hide");
                    visibleItems++;
                }
            });
            
            // Показуємо або приховуємо повідомлення про відсутність результатів
            if (noResults) {
                if (visibleItems === 0) {
                    noResults.classList.remove("hide");
                } else {
                    noResults.classList.add("hide");
                }
            }
        }
        else {
            elasticItems.forEach(function (elem) {
                elem.classList.remove("hide");
            });
            
            // Приховуємо повідомлення про відсутність результатів, коли поле порожнє
            if (noResults) {
                noResults.classList.add("hide");
            }
        }
    }
}

icon.addEventListener("click", () => {
    search.classList.toggle("active");

    if (search.classList.contains("active")) {
        search.focus();
    } else {
        search.blur();
        search.value = "";
    }
});
  
