/* =========================================
   MOBILE MENU
========================================= */

const menuButton = document.getElementById("menuButton");
const navMenu = document.getElementById("navMenu");

menuButton.addEventListener("click", () => {

    navMenu.classList.toggle("open");

});


/* Close mobile menu after clicking a link */

document.querySelectorAll("#navMenu a").forEach(link => {

    link.addEventListener("click", () => {

        navMenu.classList.remove("open");

    });

});



/* =========================================
   COURSE FILTER
========================================= */

const filters = document.querySelectorAll(".filter");
const courseCards = document.querySelectorAll(".course-card");

filters.forEach(filter => {

    filter.addEventListener("click", () => {

        filters.forEach(btn => {
            btn.classList.remove("active");
        });

        filter.classList.add("active");

        const selectedCategory =
            filter.getAttribute("data-filter");


        courseCards.forEach(card => {

            const category =
                card.getAttribute("data-category");


            if (
                selectedCategory === "all" ||
                category === selectedCategory
            ) {

                card.classList.remove("hidden");

            } else {

                card.classList.add("hidden");

            }

        });

    });

});



/* =========================================
   ENQUIRY MODAL
========================================= */

const enquiryModal =
    document.getElementById("enquiryModal");

const selectedCourse =
    document.getElementById("selectedCourse");


function openEnquiry(courseName) {

    selectedCourse.textContent =
        courseName;

    enquiryModal.classList.add("show");

}


function closeEnquiry() {

    enquiryModal.classList.remove("show");

}


/* Close modal by clicking outside */

enquiryModal.addEventListener("click", function(event) {

    if (event.target === enquiryModal) {

        closeEnquiry();

    }

});


/* =========================================
   MODAL SUBMIT
========================================= */

function submitEnquiry() {

    const name =
        document.getElementById("modalName").value.trim();

    const phone =
        document.getElementById("modalPhone").value.trim();


    if (name === "" || phone === "") {

        alert("Please enter your name and mobile number.");

        return;

    }


    if (!/^[0-9]{10}$/.test(phone)) {

        alert("Please enter a valid 10-digit mobile number.");

        return;

    }


    alert(
        "Thank you, " +
        name +
        "! Your enquiry for " +
        selectedCourse.textContent +
        " has been submitted."
    );


    document.getElementById("modalName").value = "";
    document.getElementById("modalPhone").value = "";

    closeEnquiry();

}



/* =========================================
   DEMO FORM
========================================= */

const demoForm =
    document.getElementById("demoForm");


demoForm.addEventListener("submit", function(event) {

    event.preventDefault();


    const name =
        document.getElementById("name").value.trim();

    const phone =
        document.getElementById("phone").value.trim();

    const email =
        document.getElementById("email").value.trim();

    const course =
        document.getElementById("course").value;


    if (
        name === "" ||
        phone === "" ||
        email === "" ||
        course === ""
    ) {

        alert("Please fill all required fields.");

        return;

    }


    if (!/^[0-9]{10}$/.test(phone)) {

        alert(
            "Please enter a valid 10-digit mobile number."
        );

        return;

    }


    alert(
        "Thank you, " +
        name +
        "!\n\n" +
        "Your free demo request for " +
        course +
        " has been received."
    );


    demoForm.reset();

});



/* =========================================
   FAQ ACCORDION
========================================= */

const faqQuestions =
    document.querySelectorAll(".faq-question");


faqQuestions.forEach(question => {

    question.addEventListener("click", () => {

        const currentItem =
            question.parentElement;


        document.querySelectorAll(".faq-item")
            .forEach(item => {

                if (item !== currentItem) {

                    item.classList.remove("open");

                    item.querySelector(".faq-question span")
                        .textContent = "+";

                }

            });


        currentItem.classList.toggle("open");


        const icon =
            question.querySelector("span");


        if (currentItem.classList.contains("open")) {

            icon.textContent = "−";

        } else {

            icon.textContent = "+";

        }

    });

});



/* =========================================
   SCROLL ANIMATION
========================================= */

const observer =
    new IntersectionObserver(

        entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.style.opacity = "1";

                    entry.target.style.transform =
                        "translateY(0)";

                }

            });

        },

        {
            threshold: 0.1
        }

    );


document.querySelectorAll(
    ".course-card, .program-card, .placement-card, .branch-card"
).forEach(element => {

    element.style.opacity = "0";

    element.style.transform =
        "translateY(20px)";

    element.style.transition =
        "opacity .6s ease, transform .6s ease";

    observer.observe(element);

});



/* =========================================
   ACTIVE NAVIGATION
========================================= */

const sections =
    document.querySelectorAll("section[id]");

const navigationLinks =
    document.querySelectorAll("nav a");


window.addEventListener("scroll", () => {

    let currentSection = "";

    sections.forEach(section => {

        const sectionTop =
            section.offsetTop - 150;

        if (window.scrollY >= sectionTop) {

            currentSection =
                section.getAttribute("id");

        }

    });


    navigationLinks.forEach(link => {

        link.style.color = "";

        if (
            link.getAttribute("href") ===
            "#" + currentSection
        ) {

            link.style.color =
                "#155eef";

        }

    });

});



/* =========================================
   CURRENT YEAR
========================================= */

console.log(
    "Kiran Academy website loaded successfully."
);