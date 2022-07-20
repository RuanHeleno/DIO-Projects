using System;
using AbstraindoUmRpg.src.Entities;

namespace AbstraindoUmRPG
{
    class Program
    {
        static void Main(string[] args)
        {
            Knight arus = new Knight("Arus", 23, "Knight", 46, 23);
            Wizard jennica = new Wizard("Jennica", 23, "White Wizard", 23, 46);
            Enemy teste = new Enemy("Teste", 99, "Dark Sorcerer", 188, 188);

            Console.WriteLine(arus.Attack("Espada"));
            Console.WriteLine(jennica.Attack("Magia"));
            Console.WriteLine(teste.Attack("Magia Negra"));
        }
    }
}
