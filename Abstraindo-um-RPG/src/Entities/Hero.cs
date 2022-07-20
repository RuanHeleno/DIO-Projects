namespace AbstraindoUmRpg.src.Entities {
    public class Hero {
        
        public string Name { get; set; }
        public int Level { get; set; }
        public string HeroType { get; set; }
        public int Health { get; set; }
        public int Mana { get; set; }

        //Chamada padrão
        public override string ToString() {
            return "Nome: " + this.Name + " \nLevel: " + this.Level + " \nClasse: " + this.HeroType;
        }

        public string Attack(string Weapon) {
            return this.Name + " Atacou com o(a) seu(sua) " + Weapon;
        }
    }
}