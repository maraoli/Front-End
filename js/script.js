var topicos =[
    quemSomos = {
        titulo: "Quem Somos1",
        texto: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati iste iusto cum velit officia quae, vero officiis quaerat est blanditiis quos ut eum in voluptate at ex ipsam reiciendis ipsum.",
    },
    quemSomos = {
        titulo: "Quem Somos2",
        texto: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati iste iusto cum velit officia quae, vero officiis quaerat est blanditiis quos ut eum in voluptate at ex ipsam reiciendis ipsum.",
    },
    quemSomos = {
        titulo: "Quem Somos3",
        texto: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati iste iusto cum velit officia quae, vero officiis quaerat est blanditiis quos ut eum in voluptate at ex ipsam reiciendis ipsum.",
    },
]

var secao = document.getElementById('sobre-nos');
var template = "";
for(var i = 0; i<topicos.length; i++){
    template += '<h2 class="titulo">'+topicos[i].titulo+'</h2>'+
                '<p class="texto">'+topicos[i].texto+'</p>';
    secao.innerHTML = template;
}