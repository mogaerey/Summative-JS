


class BookComponent {
    constructor(id, title, image, description) {
        this.id = id
        this.title = title
        this.image = image
        this.description = description
        this.template = `
        <div class="card" style="width: 15rem;">
        <div class="row">
        <img class="card-img-top" src=" ${this.image}" alt="Card image cap">
        <div class="card-body">
          <h6 class="card-title">${this.title}</h6>
          <a href="#" class="btn btn-primary" id = "${id}">Show Description</a>
        </div>
     </div>
     </div>
       
        `

        document.addEventListener('click', function (e) {
            if (e.target && e.target.id == "1") {
                if (!document.getElementById("text").innerText) {
                    document.getElementById("text").innerText = "Oh, the Places You'll Go! is the story of your child—well, a boy in one fantastic pair of pajamas who Dr. Seuss uses as a stand-in for your child, who was just a twinkle in your eye when this book was actually written."
                    document.getElementById("1").innerText = "Hide Description"
                    e.target['storedColor'] = e.target.style.backgroundColor;
                    e.target.style.backgroundColor = 'red';
                } else {
                    document.getElementById("text").innerText = "";
                    document.getElementById("1").innerText = "Show Description"
                    e.target['storedColor'] = e.target.style.backgroundColor;
                    e.target.style.backgroundColor = '#007bff';
                }
            }
        });

        document.addEventListener('click', function (e) {
            if (e.target && e.target.id == "2") {
                if (!document.getElementById("text").innerText) {
                    document.getElementById("text").innerText = "A group of stories thought to have been written by Aesop, a Greek storyteller. The main characters in these stories are animals, and each story demonstrates a moral lesson."
                    document.getElementById("2").innerText = "Hide Description"
                    e.target['storedColor'] = e.target.style.backgroundColor;
                    e.target.style.backgroundColor = 'red';
                } else {
                    document.getElementById("text").innerText = "";
                    document.getElementById("2").innerText = "Show Description"
                    e.target['storedColor'] = e.target.style.backgroundColor;
                    e.target.style.backgroundColor = '#007bff';
                }
            }
        });

        document.addEventListener('click', function (e) {
            if (e.target && e.target.id == "3") {
                if (!document.getElementById("text").innerText) {
                    document.getElementById("text").innerText = "A Tale of Two Cities, which is one of two historical novels written by Charles Dickens, is set in London and in Paris and the French countryside at the time of the French Revolution. The book is sympathetic to the overthrow of the French aristocracy but highly critical of the reign of terror that followed."
                    document.getElementById("3").innerText = "Hide Description"
                    e.target['storedColor'] = e.target.style.backgroundColor;
                    e.target.style.backgroundColor = 'red';
                } else {
                    document.getElementById("text").innerText = "";
                    document.getElementById("3").innerText = "Show Description"
                    e.target['storedColor'] = e.target.style.backgroundColor;
                    e.target.style.backgroundColor = '#007bff';
                }
            }
        });

        document.addEventListener('click', function (e) {
            if (e.target && e.target.id == "4") {
                if (!document.getElementById("text").innerText) {
                    document.getElementById("text").innerText = "This selection of eleven stories and seven poems contains such famously chilling masterpieces of the storyteller’s art as “The Tell-tale Heart,” “The Fall of the House of Usher,” “The Cask of Amontillado,” and “The Pit and the Pendulum,” and such unforgettable poems as “The Raven,” “The Bells,” and “Annabel Lee.” Poe is widely credited with pioneering the detective story, represented here by “The Purloined Letter,” “The Mystery of Marie Roget,” and “The Murders in the Rue Morgue "
                    document.getElementById("4").innerText = "Hide Description"
                    e.target['storedColor'] = e.target.style.backgroundColor;
                    e.target.style.backgroundColor = 'red';
                } else {
                    document.getElementById("text").innerText = "";
                    document.getElementById("4").innerText = "Show Description"
                    e.target['storedColor'] = e.target.style.backgroundColor;
                    e.target.style.backgroundColor = '#007bff';
                }
            }
        });

        document.addEventListener('click', function (e) {
            if (e.target && e.target.id == "5") {
                if (!document.getElementById("text").innerText) {
                    document.getElementById("text").innerText = "The Stand by Stephen King takes place in a post-apocalyptic world triggered by the breakdown of society following the release of a biological weapon. The weapon is a virulent strain of influenza that decimates the population."
                    document.getElementById("5").innerText = "Hide Description"
                    e.target['storedColor'] = e.target.style.backgroundColor;
                    e.target.style.backgroundColor = 'red';
                } else {
                    document.getElementById("text").innerText = "";
                    document.getElementById("5").innerText = "Show Description"
                    e.target['storedColor'] = e.target.style.backgroundColor;
                    e.target.style.backgroundColor = '#007bff';
                }
            }
        });



    }
}

class BookListComponent {
    template = `
        <div>
            ${new BookComponent(1, "Oh The Places You'll Go!", "./assets/drSeuss.jpg").template}
            ${new BookComponent(2, "Aesop's Fables", "./assets/aesops.jpg").template}
            ${new BookComponent(3, " A Tale of Two Cities", "./assets/tale.jpg").template}
            ${new BookComponent(4, "Great Tales of Edgar Allan Poe", "./assets/poe.jpg").template}
            ${new BookComponent(5, "The Stand", "./assets/theStand.jpg").template}
        </div>`
}

document.getElementById("root").innerHTML = `${new BookListComponent().template}`




