<h1 align="center">Banco de Projetos</h1>
<p align="center">Trabalho de Conclusão de Curso, apresentado à disciplina de Projeto de Sistemas II do Curso Superior de Tecnologia em Análise e Desenvolvimento de Sistemas do Centro Universitário de Patos - UNIFIP</p>

## Sobre :pencil:

A aplicação terá como objetivo a criação de uma software para armazenar e listar ideias de alunos e professores, de forma documental. A implementação dessa software visa atender as necessidades acadêmicas. Ter um sistema que alunos e professores possam criar ideias e gerar engajamento entre o curso de Análise e Desenvolvimento de Sistemas - UNIFIP.
O impacto do problema é que o curso de ADS não possui hoje um sistema ou plataforma que alunos e professores possam contribuir com soluções e ideias de problemas. Uma solução bem sucedida incluiria o cadastro e a visualização dessas ideias um status sobre suas ideias sugeridas, e que elas sirvam para engajamento perante os alunos do curso e da visibilidade como divulgação da solução criada.

## Funcionalidades do sistema :computer:

<strong>CREATE, READ, UPDATE de Usuários:</strong> Permite ao usuário se cadastrar, ler, atualizar e deletar seus dados pessoais. Visando o controle sobre sua conta. Os usuários são divididos em: usuário comum com funcionalidades restritas para seu cadastro e usuário administrador(coordenador do curso) com acesso a algumas funcionalidades a mais do sistema.

<strong>COMUNICAR AO USUÁRIO POR EMAIL QUE A CONTA FOI CRIADO:</strong> Permite o envio de um email quando o usuário for cadastrado no sistema.

<strong>CREATE, READ, UPDATE, DELETE (CRUD) de Projetos:</strong> Permite ao usuário, desde que logado no sistema, cadastrar uma ideia, consultar e atualizar. O usuário comum, após cadastrar uma ideia, ela ficará disponível no feed como o status de “Em Análise”. O administrador terá acesso a todas as ideias criadas pelos usuários.

<strong>APROVAR E REPROVAR IDEIA:</strong> Permite que o administrador do sistema aprove ou reprove a ideia criada pelo professor. 

## Estrutura do sistema :books:

### Diagrama de caso de uso
 
![Caso de uso](https://user-images.githubusercontent.com/43589505/183808613-8fd9ba19-c3cb-4103-8f2e-481a04081f4e.png)

### Diagrama de classes

![Classes](https://user-images.githubusercontent.com/43589505/183809372-8e92496c-adc5-4598-a0ff-24a64999c5fb.png)

### Diagrama de atividades

![Ativividades](https://user-images.githubusercontent.com/43589505/183809382-cbec1983-4d59-4485-beb4-36a51200b6e2.png)

### Modelo entidade e relacionamento

![Modelo de Entidade e Relacionamento](https://user-images.githubusercontent.com/43589505/183809488-6f1487f7-a936-4f87-8551-4a8d751cb7fd.png)

## Tecnologias usadas :rocket:

- [Server 💻](./server):
  - [Express](https://expressjs.com/pt-br/)
  - [Typescript](https://www.typescriptlang.org/)
  - [TypeORM](https://typeorm.io/)
  - [Jest](https://jestjs.io/pt-BR/)
