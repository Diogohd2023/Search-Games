function search() {
    // Busca o elemento HTML com o ID "resultados-pesquisa" para inserir os resultados
    let section = document.getElementById("resultados-pesquisa");
    console.log(section); // Para fins de depuração, verifica se o elemento foi encontrado

    let campoPesquisa = document.getElementById("campo-pesquisa").value

    //Se campoPesquisa for uma string sem nada
    if (!campoPesquisa){

      section.innerHTML = "<p> Nenhum jogo encontrado </p> "
      return 
    }

    campoPesquisa == campoPesquisa.toLowerCase()


  
    // Inicializa uma string vazia para armazenar os resultados da busca
    let resultados = "";
    let nome = "";
    let descriçao = "";
    let tags = "";
  
    // Itera sobre cada jogo no array de jogos
    for (let jogo of jogos) {

      nome = jogo.nome.toLowerCase()
      descriçao = jogo.descriçao.toLowerCase()
      tags = jogo.tags.toLowerCase()

      //Se titulo includes campoPesquisa
      if (nome.includes(campoPesquisa)  || descriçao.includes(campoPesquisa)  || tags.includes(campoPesquisa) ) {
        //Cria um novo elemento
        resultados += `
        <div class="item-resultado">
          <h2>
            <a href="#" target="_blank">${jogo.nome}</a>
          </h2>
          <p class="descricao-meta">${jogo.descriçao}</p>
          <a href=${jogo.link} target="_blank">Saiba mais</a>
        </div>
      `;
      }   
    }

    if (!resultados){
      resultados = " <p> Nenhum jogo encontrado </p> "
    }
  
    // Insere o HTML gerado no elemento "resultados-pesquisa"
    section.innerHTML = resultados;
  }

  let jogos = [
    {
        nome: 'Grand Theft Auto V (GTA V)',
        descriçao: 'Grand Theft Auto V é um dos jogos mais populares e aclamados da história, oferecendo uma experiência imersiva em um mundo aberto repleto de possibilidades. A trama gira em torno de três personagens principais: Michael, um ladrão de bancos aposentado; Trevor, um psicopata imprevisível; e Franklin, um jovem em busca de oportunidades no submundo do crime. A história acompanha a vida desses três criminosos enquanto eles realizam grandes roubos e se envolvem em diversos conflitos, tanto entre si quanto com outras facções criminosas.',
        generos: 'Ação-aventura , Tiro em terceira pessoa , Condução , Simulação ',
        link: 'https://gta.fandom.com/pt/wiki/Grand_Theft_Auto_V',
        tags: 'tiro em primeira pessoa tiro tiroteio '
    },
    {
        nome: 'Red Dead Redemption 2',
        descriçao: 'Red Dead Redemption 2 é uma obra-prima da Rockstar Games que nos transporta para o final do século XIX, no auge do declínio do Velho Oeste. Acompanhamos Arthur Morgan, um fora da lei membro da gangue Van der Linde, em uma jornada épica repleta de ação, drama e decisões morais. O jogo se destaca por seu mundo aberto imenso e detalhado, onde cada canto parece respirar vida. A ambientação rica e realista, a trilha sonora envolvente e a história complexa e emocionante fazem de Red Dead Redemption 2 uma experiência única e inesquecível. Além da campanha principal, o modo online oferece um mundo persistente onde os jogadores podem interagir, formar gangues e construir suas próprias histórias nesse universo selvagem e impiedoso.',
        generos: 'Mundo aberto , RPG , Simulação , Ação , Açao-aventura ',
        link: 'https://reddead.fandom.com/wiki/Red_Dead_Redemption_2',
        tags: 'velho oeste cavalo tiro'
    },
    {
        nome: 'Watch Dogs 2',
        descriçao: 'Mergulhe no mundo cibernético de San Francisco em Watch Dogs 2. Hackee sistemas, controle drones e manipule a cidade para seus próprios fins. Uma aventura de ação e suspense com uma narrativa envolvente.',
        generos: 'Mundo aberto , Hackear , Ação , Infiltração , Multiplayer',
        link: 'https://www.ubisoft.com/en-us/game/watch-dogs/watch-dogs-2',
        tags: 'hack hackear tiro'
    },
    {
        nome: 'Fallout 4',
        descriçao: 'Explore um mundo pós-apocalíptico devastado por uma guerra nuclear. Construa seu próprio abrigo, lute contra mutantes e sobreviva em um ambiente hostil. Escolha seu próprio caminho e molda o futuro de Boston.',
        generos: 'RPG , Ação , Mundo aberto , Construção , Narrativa , Exploração ',
        link: 'https://fallout.bethesda.net/pt',
        tags: 'apocalipse criaturas tiro'
    },
    {
        nome: 'DayZ',
        descriçao: 'Uma experiência de sobrevivência em mundo aberto onde cada jogador é um potencial inimigo. Lute pela sua vida contra outros sobreviventes, zumbis e os elementos da natureza. A fome, a sede e a radiação são apenas alguns dos desafios que você enfrentará.',
        generos: 'Mundo aberto , Sobrevivência , Multijogador , Zumbis , Realismo',
        link: 'https://www.dayz.com/',
        tags: 'survival zumbis tiro'
    },
    {
        nome: 'GTA San Andreas',
        descriçao: 'Retorne a Los Santos, San Fierro e Las Venturas em um dos jogos mais icônicos da série Grand Theft Auto. Viva a vida de um gangster em ascensão e explore um mundo aberto vasto e detalhado.',
        generos: 'Mundo aberto , Ação , Aventura , RPG , Simulação ',
        link: 'https://www.rockstargames.com/games/sanandreas',
        tags: 'Cj Big Smoke Rider'
    },
    {
        nome: 'Skate 3',
        descriçao: 'Domine as ruas com manobras incríveis e crie seus próprios parques em Skate 3. Personalize seu skatista, forme uma equipe e participe de competições épicas.',
        generos: 'Esporte , Ação , Simulação , Mundo aberto , Multiplayer ',
        link: 'https://www.ea.com/pt-br/games/skate/skate-3',
        tags: 'manobras back flip 360 '
    },
    {
      nome: ' PUBG Battlegrounds',
        descriçao: 'PUBG, abreviação de PlayerUnknown Battlegrounds, é um jogo eletrônico multiplayer que popularizou o gênero Battle Royale. Nele, um grande número de jogadores (geralmente 100) são largados em uma ilha remota, desarmados e sem equipamentos, com o objetivo de ser o último sobrevivente.',
        generos: 'Grande numero de jogadores , Mapa em constante mudança , Loot , Sobrevivencia ',
        link: 'https://pt.wikipedia.org/wiki/PlayerUnknown%27s_Battlegrounds',
        tags: 'survival tiro tiroteio '
    },
    {
      nome: 'The Elder Scrolls V: Skyrim',
        descriçao: 'Skyrim é um jogo de RPG de ação em mundo aberto, desenvolvido pela Bethesda Game Studios e lançado em 2011. É o quinto título principal da aclamada série The Elder Scrolls, conhecida por seus vastos mundos e liberdade de escolha. Em Skyrim, você assume o papel do Dragonborn, um personagem com a capacidade de absorver as almas dos dragões e utilizar seus poderes. A história se passa na província de Skyrim, um local frio e montanhoso, onde você irá explorar cidades, masmorras, florestas e montanhas, enfrentando dragões, criaturas míticas e diversos inimigos.',
        generos: 'Fantasia , RPG , Ação , Mundo aberto , Personalizaçao ',
        link:'https://elderscrolls.fandom.com/wiki/Skyrim',
        tags: 'magia dragoes batalhas'
    },
    {
          nome: 'Last Oasis',
          descriçao: 'Last Oasis é um MMO de sobrevivência que nos transporta para um futuro onde a Terra parou de girar. A consequência? Um mundo dividido em faixas climáticas extremas, com um pequeno trecho habitável entre o calor escaldante do sol e o frio intenso do espaço. Os sobreviventes da humanidade vivem em um mundo nômade, constantemente em movimento para encontrar recursos e escapar das faixas climáticas extremas. Em Last Oasis, você controla um nômade que deve construir e personalizar seu próprio veículo, coletar recursos, enfrentar outros jogadores e construir sua própria história. ', 
          generos: 'MMO , Sobrevivencia , Nomade , Ação ',
          link: 'https://www.exemplo.com/lastoasis',
          tags: 'pós-apocalipse, veículos, deserto'
      },
      {
            nome: 'Constrói e Destrói',
            descriçao: 'Mergulhe no mundo da construção civil! Planeje e execute projetos de construção, desde pequenas reformas até arranha-céus. Experimente a emoção de operar máquinas pesadas e gerenciar equipes de trabalhadores. Enfrente desafios como prazos apertados e imprevistos.',
            generos: 'Simulação, Construção, Gerenciamento',
            link: 'https://www.exemplo.com/constroi-e-destrói',
            tags: 'construção civil, máquinas pesadas, gerenciamento de projetos'
        },
        {
              nome: 'Pixel Jump',
              descriçao: 'Uma aventura nostálgica em um mundo pixelado! Controle um pequeno herói em sua jornada para salvar o reino dos monstros. Pule de plataforma em plataforma, evite obstáculos e derrote inimigos em um estilo clássico de plataforma 2D. Descubra segredos escondidos e desbloqueie novas habilidades.',
              generos: 'Plataforma, Indie, Ação, Retro',
              link: 'https://www.exemplo.com/pixeljump',
              tags: 'pixel art, plataforma 2D, retrô, aventura'
          },      
          {
                nome: 'Explosão de Cores',
                descriçao: 'Relaxe e divirta-se combinando cores vibrantes neste jogo casual viciante! Troque as peças coloridas para criar combinações de três ou mais e eliminar o tabuleiro. Desafie seus amigos para ver quem consegue a pontuação mais alta!',
                generos: 'Casual, Puzzle, Match-3',
                link: 'https://www.exemplo.com/explosao-de-cores',
                tags: 'combinação de cores, quebra-cabeça, relaxante'
            },
            {
                  nome: 'Zona Zero',
                  descriçao: 'Caia em uma ilha remota e lute contra outros jogadores para ser o último sobrevivente! Explore o mapa, encontre armas e equipamentos, e elimine seus adversários em batalhas intensas. A zona de jogo se contrai com o tempo, forçando os jogadores a se enfrentarem em áreas cada vez menores.',
                  generos: 'Battle Royale, Tiro em primeira pessoa, Multiplayer online',
                  link: 'https://www.exemplo.com/zona-zero',
                  tags: 'sobrevivência, battle royale, multiplayer, tiro'
              },
              {
                    nome: 'Aurora Boreal',
                    descriçao: "Mergulhe em uma batalha épica em um mundo pós-apocalíptico congelado. Caia de paraquedas em uma vasta ilha coberta de neve e gelo, encontre armas e equipamentos para sobreviver. A tempestade de neve se aproxima, diminuindo a zona segura a cada minuto. Seja o último sobrevivente!",
                    generos: 'Battle Royale, Tiro em primeira pessoa, Sobrevivência',
                    link: 'https://www.exemplo.com/aurora-boreal',
                    tags: 'batalha real, inverno, neve, sobrevivência, multiplayer'
                },
                {
                      nome: 'Nexus Infinito',
                      descriçao: 'Formem equipes de cinco heróis e enfrentem outros jogadores em batalhas épicas para destruir o Nexus inimigo. Escolha entre uma variedade de personagens com habilidades únicas e trabalhem em equipe para dominar o campo de batalha. Desbloqueie novos heróis, personalizem seus equipamentos e subam de nível para se tornar o melhor jogador!',
                      generos: 'MOBA, Ação, Estratégia, Multiplayer online',
                      link: 'https://www.exemplo.com/nexus-infinito',
                      tags: 'MOBA, heróis, equipe, estratégia, online'
                },
                {
                        nome: 'Elden Ring: As Cinzas da Eternidade',
                        descriçao: 'Mergulhe em um mundo fantástico de fantasia sombria, repleto de perigos e mistérios. Crie seu próprio personagem e explore um mundo aberto vasto e interconectado, cheio de criaturas mitológicas e castelos imponentes. Enfrente desafios épicos, descubra segredos ancestrais e domine um sistema de combate profundo e estratégico.',
                        generos: 'RPG, Ação, Mundo aberto, Fantasia',
                        link: 'https://www.eldenring.com/',
                        tags: 'soulslike, desafio, mundo aberto, fantasia, rpg'
                  },
                  {
                        nome: 'Fortnite',
                        descriçao: 'Fortnite é um jogo online gratuito que combina elementos de construção, tiro e sobrevivência. Caia de um ônibus espacial em uma ilha gigante e lute contra outros jogadores para ser o último sobrevivente. Construa fortalezas, encontre armas e equipamentos, e use sua criatividade para eliminar seus inimigos.',
                        generos: 'Battle Royale, Ação, Construção, Multiplayer online',
                        link: 'https://www.epicgames.com/fortnite/',
                        tags: 'gratuito, battle royale, construção, multiplayer, online'
                    },
                    {
                          nome: 'FIFA',
                          descriçao: 'A franquia FIFA é uma das mais populares no mundo dos esportes, oferecendo a experiência mais autêntica de futebol. Crie seu time dos sonhos, dispute campeonatos, e viva a emoção de marcar gols e conquistar títulos. Com gráficos realistas e jogabilidade fluida, FIFA é a escolha perfeita para os amantes de futebol.',
                          generos: 'Esporte, Futebol, Simulação',
                          link: 'https://www.ea.com/pt-br/games/fifa',
                          tags: 'futebol, esporte, simulador, online'
                      },
                      {
                            nome: 'The Legend of Zelda: Breath of the Wild',
                            descriçao: 'Um novo capítulo na lendária série The Legend of Zelda, Breath of the Wild oferece um mundo aberto vasto e interconectado para explorar. Assuma o papel de Link e embarque em uma jornada para salvar Hyrule de uma antiga ameaça. Utilize diversas ferramentas e habilidades para resolver puzzles, derrotar inimigos e desvendar os segredos do mundo.',
                            generos: 'Aventura, RPG, Mundo aberto, Ação',
                            link: 'https://www.zelda.com/breath-of-the-wild/',
                            tags: 'mundo aberto, aventura, zelda, nintendo switch'
                        }
                    ];
                

              



          

     
      






