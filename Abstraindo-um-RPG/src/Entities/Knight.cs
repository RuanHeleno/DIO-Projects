namespace AbstraindoUmRpg.src.Entities {
    
    public class Knight : Hero {

        public Knight(string Name, int Level, string HeroType, int Health, int Mana)
        {
            this.Name = Name;
            this.Level = Level;
            this.HeroType = HeroType;
            this.Health = Health;
            this.Mana = Mana;
        }
    }
}