import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    starbucks,
    tesla,
    shopify,
    carrent,
    threejs,
    front,
    back,
    react,
    IMC,
    dockeer,
    locad,
    json,
    protifas,
    spring,
    variacao,

  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "Sobre",
    },
    {
      id: "work",
      title: "Trabalhos",
    },
    {
      id: "contact",
      title: "Contatos",
    },
  ];
  
  const services = [
    {
      title: "Desenvolvedor Web",
      icon: front,
    },
    {
      title: "Desenvolvedor React",
      icon: react,
    },
    {
      title: "Desenvolvedor Backend",
      icon: back,
    },
    {
      title: "Ferramenta de Design",
      icon: figma,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },

    {
      name: "React JS",
      icon: reactjs,
    },
 
 
    {
      name: "Node JS",
      icon: nodejs,
    },
   
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
  
  
  ];
  
  const experiences = [
    {
      title: "Analista de Sustentação",
      company_name: "NAVA - Technology for Business",
      icon: starbucks,
      iconBg: "#000000",
      date: "Dez 2022 - Nov 2023",
      points: [
        "Responsável por dar suporte às soluções implementadas em uma empresa, garantindo o seu funcionamento e resolvendo eventuais problemas.",
        "Colaborar em conjunto a uma equipe interna, para ilustrar novas ideias e a viabilidade de projetos. ",
        "Certificar de que o design está responsivo e testar compatibilidade entre navegadores.",
        "Participar de Code Reviews e providenciar o feedback para os desenvolvedores.",
      ],
    },
    {
      title: "Analista de suporte jr",
      company_name: "Algar Tech",
      icon: tesla,
      iconBg: "#E6DEDD",
      date: "Ago 2022 - Dez 2022",
      points: [
        "responsável por fornecer suporte técnico aos usuários de sistemas, hardware e software. ",
        "identificar e resolver problemas, instalar softwares e atualizações, além de prestar atendimento aos usuários por telefone, chat ou e-mail.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Responsável pela manutenção preventiva de equipamentos e pela criação de documentação de suporte e procedimentos técnicos.",
      ],
    },
    
  ];
  
  
  
  const projects = [
    {
      name: "Projeto-After",
      description:
        "Desenvolvi um site full-stack no universo pop-punk chamado After-Midnight,incluindo recursos como venda de ingressos, produtos e integração com MongoDB para validação de usuários e processamento de pagamentos via API. Destaco a ênfase na responsividade para ampliar o alcance do público, demonstrando minha habilidade em solucionar desafios complexos. ",
      tags: [
        {
          name: "JavaScript",
          color: "yellow-text-gradient",
        },
        {
          name: "Nodejs",
          color: "green-text-gradient",
        },
        {
          name: "CSS",
          color: "blue-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/Dantas206x/projeto-after",
    },
    {
      name: "Calculadora de Peso",
      description:
        "uma aplicação simples desenvolvida em JavaScript para ajudar você a converter e calcular diferentes unidades de peso de maneira rápida e eficiente.",
      tags: [
        {
          name: "JavaScript",
          color: "yellow-text-gradient",
        },
      
      ],
      image: IMC,
      source_code_link: "https://github.com/Dantas206x/calculadora-de-peso",
    },
    {
      name: "Teste de variação",
      description:
        "um teste em C# que realiza uma consulta no banco de dados procurando os pregoes nos ultimos 30 dias, calculando a abtida a cada dia e retornando o resultado.",
      tags: [
    
        {
          name: " Csharp",
          color: "green-text-gradient",
        },
  
      ],
      image: variacao,
      source_code_link: "https://github.com/Dantas206x/teste-variacao",
    },
    {
      name: "Api-Kognit",
      description:
        "uma solução poderosa para notificações em tempo real, projetada para consumir dados em formato JSON e entregá-los eficientemente à sua aplicação web. Desenvolvida com foco na simplicidade e desempenho, esta API fornece uma ponte robusta entre fontes de dados externas e sua aplicação web, permitindo uma integração suave.",
      tags: [
        {
          name: "JavaScript",
          color: "yellow-text-gradient",
        },
        {
          name: "F#",
          color: "purple-text-gradient",
        },
        {
          name: "CSS",
          color: "blue-text-gradient",
        },
        {
          name: "Csharp",
          color: "green-text-gradient",
        },
        {
          name: "HTML",
          color: "pink-text-gradient",
        },
      ],
      image: json,
      source_code_link: "https://github.com/Dantas206x/api-kognit",
    },
    {
      name: "Teste-kognit",
      description:
        "backend com a flexibilidade e modernidade do React@mui no frontend. Este sistema consome uma API em C#, utilizando React@mui para criar uma elegante Navbar, enriquecida com ícones intuitivos.",
      tags: [
        {
          name: "JavaScript",
          color: "yellow-text-gradient",
        },
        {
          name: "CSS",
          color: "blue-text-gradient",
        },
        {
          name: "HTML",
          color: "pink-text-gradient",
        },
      ],
      image: json,
      source_code_link: "https://github.com/Dantas206x/Teste-kognit",
    },
    {
      name: "AntonioDev Portifolio",
      description:
        "Este portfólio web moderno e funcional foi construído com JavaScript, CSS e HTML, utilizando a tecnologia THREEJS para uma experiência imersiva. Destaco meu melhor trabalho e projetos com navegação intuitiva, oferecendo uma estética agradável e usabilidade. Explore para inspirar-se em meus desenvolvimentos.",
      tags: [
        {
          name: "JavaScript",
          color: "yellow-text-gradient",
        },
        {
          name: "NodeJS",
          color: "green-text-gradient",
        },
        {
          name: "HTML",
          color: "pink-text-gradient",
        },
      ],
      image: protifas,
      source_code_link: "https://github.com/Dantas206x/AntonioDev-Portifolio",
    },
    {
      name: "Tabela-java-spring",
      description:
        "Tabela Spring usando Spring tool Suite e Postman para construir um pequeno sistema ( API Rest ) de desenvolvimento moderno relacional objeto json",
      tags: [
     
        {
          name: "Java",
          color: "pink-text-gradient",
        },
      ],
      image: spring,
      source_code_link: "https://github.com/Dantas206x/Tabela-java-spring",
    },
    {
      name: "desafio-docker-compose",
      description:
        "Apenas um desafio de docker compose",
      tags: [
        {
          name: "Docker",
          color: "blue-text-gradient",
        },
       
      ],
      image: dockeer,
      source_code_link: "https://github.com/Dantas206x/desafio-docker-compose",
    },
    {
      name: "Login e Cadastro",
      description:
        "Uma aplicação criada para registrar minha experiencia utilizando design inteligente e scrum, usando principalmente kotlin, java e css",
      tags: [
        {
          name: "CSS",
          color: "blue-text-gradient",
        },
        {
          name: "Kotlin",
          color: "green-text-gradient",
        },
        {
          name: "Java",
          color: "pink-text-gradient",
        },
      ],
      image: locad,
      source_code_link: "https://github.com/Dantas206x/Ui-Lover",
    },
  ];
  
  export { services, technologies, experiences,  projects };