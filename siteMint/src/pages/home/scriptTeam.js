

    const populateTeam = async () => {
        //API DOS DADOS DO TEAM
        // https://mocki.io/v1/a4761070-03b9-48c7-b69f-7b77becdec1c

        var respostaApiDados = await fetch("https://mocki.io/v1/a4761070-03b9-48c7-b69f-7b77becdec1c");
        var dadosResposta1 = await respostaApiDados.json();

        var usuarios = ["Alexandre","Briza","Dill","Fabio","Franz","RodFox"];

        usuarios = usuarios.reverse();
       
        for (let i =0; i<usuarios.length;i++){

            dadosResposta1.map( item => {

                if(item.usuario == usuarios[i] ){
                    var card =
                    `
                        <div class="col-lg-4 col-md-6 d-flex align-items-center">
                        <div class="member">
                        <img class="imgMember" src="./src/img/team/team-${item.id}.png" alt="">
                        <h4>${item.usuario}</h4>
                        <span>${item.cargo}</span>
                        <p>
                            ${item.descricao}
                        </p>
                        <div class="social">
                            <a href=${item.twitter}><i class="bi bi-twitter"></i></a>
                            <a href=${item.face}><i class="bi bi-facebook"></i></a>
                            <a href=${item.insta}><i class="bi bi-instagram"></i></a>
                            <a href=""><i class="bi bi-linkedin"></i></a>
                        </div>
                        </div>
                     </div>
                    `
                     document.getElementById("painelTeam").insertAdjacentHTML('afterbegin', card)
                }
            })



        }    
    }

    populateTeam();
