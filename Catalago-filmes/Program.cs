using System;
using DIOSeries.classes;

namespace DIOSeries
{
    class Program
    {
        static SerieRepositorio repositorioSerie = new SerieRepositorio();
        static FilmeRepositorio repositorioFilme = new FilmeRepositorio();
        static string tipo;

        static void Main(string[] args)
        {
            Menu();
        }

        private static void Menu()
        {
            Console.WriteLine();

            Console.WriteLine("DIO Series e Filmes a seu dispor!");
            Console.WriteLine("Informe a opção desejada");

            Console.WriteLine("F - Filmes");
            Console.WriteLine("S - Séries");
            Console.WriteLine("C - Limpar Tela");
            Console.WriteLine("A - Sair");
            Console.WriteLine();

            Opcao(Console.ReadLine().ToUpper());
        }

        private static void FilmesESeries()
        {
            Console.WriteLine();
            if (tipo == "F")
            {
                Console.WriteLine("1 - Listar filmes");
                Console.WriteLine("2 - Inserir filme");
                Console.WriteLine("3 - Atualizar filme");
                Console.WriteLine("4 - Excluir filme");
                Console.WriteLine("5 - Visualizar filme");
            }
            else
            {
                Console.WriteLine("1 - Listar séries");
                Console.WriteLine("2 - Inserir série");
                Console.WriteLine("3 - Atualizar série");
                Console.WriteLine("4 - Excluir série");
                Console.WriteLine("5 - Visualizar série");
            }
            Console.WriteLine("Z - Voltar");
            Console.WriteLine();

            Opcao(Console.ReadLine().ToUpper());
        }

        private static void Opcao(string opt)
        {
            switch (opt)
            {
                case "F":
                case "S":
                    tipo = opt;
                    FilmesESeries();
                    break;
                case "1":
                    Listar();
                    break;
                case "2":
                    Inserir();
                    break;
                case "3":
                    Atualizar();
                    break;
                case "4":
                    Excluir();
                    break;
                case "5":
                    Visualizar();
                    break;
                case "C":
                    Console.Clear();
                    break;
                case "Z":
                    Menu();
                    break;
                default:
                    throw new ArgumentException("Sessão encerrada");
            }
            Console.ReadLine();
            Console.WriteLine();
        }

        private static void Listar()
        {
            Console.WriteLine();
            if (tipo == "F")
            {
                Console.WriteLine("Listar filmes");

                var lista = repositorioFilme.Lista();

                if (lista.Count == 0)
                {
                    Console.WriteLine("Nenhum filme cadastrado");
                    FilmesESeries();
                    return;
                }
                foreach (var filme in lista)
                {
                    var excluido = filme.retornaExcluido();
                    if (!excluido) Console.WriteLine("#ID {0}: - {1}", filme.retornaId(), filme.retornaTitulo());
                    else Console.WriteLine("#ID {0}: - {1} - {2}", filme.retornaId(),
                            filme.retornaTitulo(), excluido ? "Excluído" : "");
                }
            }
            else
            {
                Console.WriteLine("Listar series");

                var lista = repositorioSerie.Lista();

                if (lista.Count == 0)
                {
                    Console.WriteLine("Nenhuma série cadastrada");
                    FilmesESeries();
                    return;
                }
                foreach (var serie in lista)
                {
                    var excluido = serie.retornaExcluido();
                    if (!excluido) Console.WriteLine("#ID {0}: - {1}", serie.retornaId(), serie.retornaTitulo());
                    else Console.WriteLine("#ID {0}: - {1} - {2}", serie.retornaId(),
                            serie.retornaTitulo(), excluido ? "Excluído" : "");
                }
            }
            FilmesESeries();
        }

        private static void Inserir()
        {
            Console.WriteLine();
            if (tipo == "F")
            {
                Console.WriteLine("Inserir novo filme");

                foreach (int i in Enum.GetValues(typeof(Genero)))
                {
                    Console.WriteLine("{0}-{1}", i, Enum.GetName(typeof(Genero), i));
                }
                Console.Write("Digite o gênero entre as opções acima: ");
                int entradaGenero = int.Parse(Console.ReadLine());

                Console.Write("Digite o Título do filme: ");
                string entradaTitulo = Console.ReadLine();

                Console.Write("Digite o Ano do filme: ");
                int entradaAno = int.Parse(Console.ReadLine());

                Console.Write("Digite a descrição do filme: ");
                string entradaDescricao = Console.ReadLine();

                Filme novoFilme = new Filme(id: repositorioFilme.ProximoId(),
                                            genero: (Genero)entradaGenero,
                                            titulo: entradaTitulo,
                                            ano: entradaAno,
                                            descricao: entradaDescricao);
                repositorioFilme.Insere(novoFilme);
            }
            else
            {
                Console.WriteLine("Inserir nova série");

                foreach (int i in Enum.GetValues(typeof(Genero)))
                {
                    Console.WriteLine("{0}-{1}", i, Enum.GetName(typeof(Genero), i));
                }
                Console.Write("Digite o gênero entre as opções acima: ");
                int entradaGenero = int.Parse(Console.ReadLine());

                Console.Write("Digite o Título da Série: ");
                string entradaTitulo = Console.ReadLine();

                Console.Write("Digite o Ano de inicío da série: ");
                int entradaAno = int.Parse(Console.ReadLine());

                Console.Write("Digite a descrição da série: ");
                string entradaDescricao = Console.ReadLine();

                Serie novaSerie = new Serie(id: repositorioSerie.ProximoId(),
                                            genero: (Genero)entradaGenero,
                                            titulo: entradaTitulo,
                                            ano: entradaAno,
                                            descricao: entradaDescricao);
                repositorioSerie.Insere(novaSerie);
            }
            FilmesESeries();
        }

        private static void Atualizar()
        {
            Console.WriteLine();
            if (tipo == "F")
            {
                var lista = repositorioFilme.Lista();

                if (lista.Count == 0)
                {
                    Console.WriteLine("Nenhum filme cadastrado");
                    FilmesESeries();
                    return;
                }

                Console.WriteLine("Digite o id do filme: ");
                int indiceFilme = int.Parse(Console.ReadLine());

                foreach (int i in Enum.GetValues(typeof(Genero)))
                {
                    Console.WriteLine("{0}-{1}", i, Enum.GetName(typeof(Genero), i));
                }
                Console.Write("Digite o gênero entre as opções acima: ");
                int entradaGenero = int.Parse(Console.ReadLine());

                Console.Write("Digite o Título do filme: ");
                string entradaTitulo = Console.ReadLine();

                Console.Write("Digite o Ano de inicío do filme: ");
                int entradaAno = int.Parse(Console.ReadLine());

                Console.Write("Digite a descrição do filme: ");
                string entradaDescricao = Console.ReadLine();

                Filme atualizaFilme = new Filme(id: indiceFilme,
                                            genero: (Genero)entradaGenero,
                                            titulo: entradaTitulo,
                                            ano: entradaAno,
                                            descricao: entradaDescricao);
                repositorioFilme.Atualiza(indiceFilme, atualizaFilme);
            }
            else
            {
                var lista = repositorioSerie.Lista();

                if (lista.Count == 0)
                {
                    Console.WriteLine("Nenhuma série cadastrada");
                    FilmesESeries();
                    return;
                }

                Console.WriteLine("Digite o id do filme: ");
                int indiceFilme = int.Parse(Console.ReadLine());

                foreach (int i in Enum.GetValues(typeof(Genero)))
                {
                    Console.WriteLine("{0}-{1}", i, Enum.GetName(typeof(Genero), i));
                }
                Console.Write("Digite o gênero entre as opções acima: ");
                int entradaGenero = int.Parse(Console.ReadLine());

                Console.Write("Digite o Título do filme: ");
                string entradaTitulo = Console.ReadLine();

                Console.Write("Digite o Ano de inicío do filme: ");
                int entradaAno = int.Parse(Console.ReadLine());

                Console.Write("Digite a descrição do filme: ");
                string entradaDescricao = Console.ReadLine();

                Serie atualizaFilme = new Serie(id: indiceFilme,
                                            genero: (Genero)entradaGenero,
                                            titulo: entradaTitulo,
                                            ano: entradaAno,
                                            descricao: entradaDescricao);
                repositorioSerie.Atualiza(indiceFilme, atualizaFilme);
            }
            FilmesESeries();
        }

        private static void Excluir()
        {
            Console.WriteLine();
            if (tipo == "F")
            {
                var lista = repositorioFilme.Lista();

                if (lista.Count == 0)
                {
                    Console.WriteLine("Nenhum filme cadastrado");
                    FilmesESeries();
                    return;
                }

                Console.Write("Digite o id do filme: ");
                int indiceFilme = int.Parse(Console.ReadLine());

                repositorioFilme.Exclui(indiceFilme);
            }
            else
            {
                var lista = repositorioSerie.Lista();

                if (lista.Count == 0)
                {
                    Console.WriteLine("Nenhuma série cadastrada");
                    FilmesESeries();
                    return;
                }

                Console.Write("Digite o id da série: ");
                int indiceSerie = int.Parse(Console.ReadLine());

                repositorioSerie.Exclui(indiceSerie);
            }
            FilmesESeries();
        }

        private static void Visualizar()
        {
            Console.WriteLine();
            if (tipo == "F")
            {
                var lista = repositorioFilme.Lista();

                if (lista.Count == 0)
                {
                    Console.WriteLine("Nenhum filme cadastrado");
                    FilmesESeries();
                    return;
                }

                Console.Write("Digite o id do filme: ");
                int indiceFilme = int.Parse(Console.ReadLine());

                var filme = repositorioFilme.RetornaPorId(indiceFilme);
                Console.WriteLine(filme);
            }
            else
            {
                var lista = repositorioSerie.Lista();

                if (lista.Count == 0)
                {
                    Console.WriteLine("Nenhuma série cadastrada");
                    FilmesESeries();
                    return;
                }
                
                Console.Write("Digite o id da série: ");
                int indiceSerie = int.Parse(Console.ReadLine());

                var serie = repositorioSerie.RetornaPorId(indiceSerie);
                Console.WriteLine(serie);
            }
            FilmesESeries();
        }
    }
}