/**
 * Declaração das variaveis que selecionam elementos HTML pela classe ou id;
 * A varíavel 'link' possui um método para selecionar todos os elementos 'a'.
 */
let langs = document.querySelector(".langs"),
    link = document.querySelectorAll("a"),

    contactInfoTitle = document.querySelector("#contactInfoTitle"),
    skillsTitle = document.querySelector("#skillsTitle"),
    languagesTitle = document.querySelector("#languagesTitle"),
    lang1 = document.querySelector("#lang1"),
    lang2 = document.querySelector("#lang2"),
    aboutMeTitle = document.querySelector("#aboutMeTitle"),
    aboutMeText = document.querySelector("#aboutMeText"),
    educationTitle = document.querySelector("#educationTitle"),
    courseTitle1 = document.querySelector("#courseTitle1"),
    courseTitle2 = document.querySelector("#courseTitle2"),
    extraCourseTitle = document.querySelector("#extraCourseTitle"),
    extraCourseTime = document.querySelector("#extraCourseTime"),
    extraCourse1 = document.querySelector("#extraCourse1"),
    mainProjectsTitle = document.querySelector("#mainProjectsTitle"),
    projectDate1 = document.querySelector("#projectDate1"),
    projectDesc1 = document.querySelector("#projectDesc1"),
    projectDate2 = document.querySelector("#projectDate2"),
    projectDesc2 = document.querySelector("#projectDesc2"),
    projectDate3 = document.querySelector("#projectDate3"),
    projectDesc3 = document.querySelector("#projectDesc3")

    
    
/**
 * Loop para adicionar um evento de clique para cada elemento 'a'. Quando um dos elementos 'a' é clicado, a classe 'active' é removida do elemento anterior e adiciona a classe ao elemento clicado.
 */
link.forEach(el=>{
    el.addEventListener("click", ()=>{
        langs.querySelector(".active").classList.remove("active")
        el.classList.add("active");

        /**
         * O valor do atributo 'language' é utilizado para selecionar as informações corretas do objeto 'data'.
         */
        let attr = el.getAttribute("language")

        /**
         * A propriedade textContent atualiza o conteúdo dos elementos amazenados no objeto 'data';
         * A varíavel attr é utilizada como chave para encontrar a informação correta de cada elemento.
         */
        contactInfoTitle.textContent = data[attr].contactInfoTitle
        skillsTitle.textContent = data[attr].skillsTitle
        languagesTitle.textContent = data[attr].languagesTitle
        lang1.textContent = data[attr].lang1
        lang2.textContent = data[attr].lang2
        aboutMeTitle.textContent = data[attr].aboutMeTitle
        aboutMeText.textContent = data[attr].aboutMeText
        educationTitle.textContent = data[attr].educationTitle
        courseTitle1.textContent = data[attr].courseTitle1
        courseTitle2.textContent = data[attr].courseTitle2
        extraCourseTitle.textContent = data[attr].extraCourseTitle
        extraCourseTime.textContent = data[attr].extraCourseTime
        extraCourse1.textContent = data[attr].extraCourse1
        mainProjectsTitle.textContent = data[attr].mainProjectsTitle
        projectDate1.textContent = data[attr].projectDate1
        projectDesc1.textContent = data[attr].projectDesc1
        projectDate2.textContent = data[attr].projectDate2
        projectDesc2.textContent = data[attr].projectDesc2
        projectDate3.textContent = data[attr].projectDate3
        projectDesc3.textContent = data[attr].projectDesc3
    })
})

/**
 * O objeto 'data' é uma estrutura de dados que armazena todas as informações do site que podem ser trocadas para outro idioma;
 * Cada idioma é representado como uma chave.
 */
let data = {
    portuguese: {
        contactInfoTitle: "Informações pessoais",
        skillsTitle: "Conhecimentos",
        languagesTitle: "Idiomas",
        lang1: "Português",
        lang2: "Inglês",
        aboutMeTitle: "Sobre mim",
        aboutMeText: "Olá, estou atualmente cursando o Bacharelado em Ciência da Computação. Embora eu ainda não tenha experiência profissional na área de TI, estou muito motivado a aprender e crescer como desenvolvedor de software. Desde que comecei a faculdade, tenho me dedicado muito ao estudo da tecnologia e suas tendências, além de buscar aprimorar meu conhecimento da língua inglesa, fundamental para acompanhar a evolução do mercado global de TI.",
        educationTitle: "Formação acadêmica",
        courseTitle1: "Bacharelado em Ciência da Computação",
        courseTitle2: "Técnico em Desenvolvimento de Sistemas",
        extraCourseTitle: "Cursos extras",
        extraCourseTime: "2019 - Presente",
        extraCourse1: "Língua Inglesa",
        mainProjectsTitle: "Projetos principais",
        projectDate1: "Março, 2023",
        projectDesc1: "Primeira atividade Mobile, do curso de Ciência da Computação.",
        projectDate2: "Novembro, 2022",
        projectDesc2: "Um clone da página principal do youtube.com, feito em HTML e CSS.",
        projectDate3: "Agosto, 2022",
        projectDesc3: "Esse é o projeto final de Programação de Soluções Computacionais, do Curso de Ciência da Computação."
    },
    english: {
        contactInfoTitle: "Contact info",
        skillsTitle: "Skills",
        languagesTitle: "Languages",
        lang1: "Portuguese",
        lang2: "English",
        aboutMeTitle: "About me",
        aboutMeText: "Hello, I'm currently studying Computer Science Bachelor's degree. Although I don't have any professional experience in the IT field yet, I'm very motivated to learn and grow as a software developer. Since I started college, I have dedicated myself to studying technology and its trends, as well as improving my English language skills, which are essential to keep up with the global IT market's evolution.",
        educationTitle: "Education",
        courseTitle1: "Bachelor of Science in Computer Science",
        courseTitle2: "Systems Development Technician",
        extraCourseTitle: "Extra Courses",
        extraCourseTime: "2019 - Present",
        extraCourse1: "English Language",
        mainProjectsTitle: "Main projects",
        projectDate1: "March, 2023",
        projectDesc1: "First Mobile activity, from the Computer Science course.",
        projectDate2: "November, 2022",
        projectDesc2: "A clone of the youtube.com home page, made in HTML and CSS.",
        projectDate3: "August, 2022",
        projectDesc3: "That is the final project of the A3 of Programming of Computational Solutions of the Computer Science Course."
    }
}