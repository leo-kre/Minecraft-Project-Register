import Header from "../components/Header";
import TextBox from "../components/TextBox";

export default function Help() {
      return (
            <main className="min-h-screen flex flex-col items-center">
                  <Header></Header>

                  <div className="mx-3 md:mx-16 mb-24 flex flex-col gap-5">
                        <TextBox title="Worum geht es in Civilization?" description="Minecraft Civilization ist ein fesselndes Spielformat, bei dem Spieler in verschiedene Nationen aufgeteilt werden, die jeweils auf einer eigenen Insel angesiedelt sind. Jede Nation hat ihre eigene Kultur, Ressourcen und Herausforderungen. Die Spieler müssen zusammenarbeiten, um ihre Zivilisation aufzubauen und zu entwickeln, indem sie beeindruckende Gebäude errichten, Nahrung anbauen, Handel treiben und Kriege führen. Das Ziel des Spiels ist es, die eigene Zivilisation zu einer mächtigen Nation zu entwickeln und die anderen Nationen zu dominieren. Die Spieler können dies erreichen, indem sie ihre Ressourcen klug nutzen, Allianzen schmieden und strategische Entscheidungen treffen. Es gibt viele Möglichkeiten, das Spiel zu spielen, und jede Entscheidung kann den Verlauf der Geschichte verändern."></TextBox>
                        <TextBox title="Welche Inseln gibt es?" description="Es gibt vier einzigartige Inseln: Plains, Jungle, Desert und Snow. Diese repräsentieren ihr jeweiliges Minecraft-Biom mit all ihren Vor- und Nachteilen. Diese Nachteile beinhalten Nahrung, Rohstoffe, Witterung, Tiere und Monster sowie Naturkatastrophen."></TextBox>
                        <TextBox title="Wann beginnt das Projekt und wie lange dauert es?" description="Damit es für alle fair ist, wird es geregelte Spielzeiten geben, in welchen man den Server betreten kann. Das Projekt wird sich über 7 spannende Tage erstrecken und tägliche Uhrzeiten werden über Abstimmungen festgelegt."></TextBox>
                        <TextBox title="Wie trete ich dem Server bei?" description="Um dem Server beizutreten musst du die Minecraft Java Edition starten, auf “Multiplayer” klicken und dann “Server hinzufügen” auswählen. Gib dem Server einen Namen und füge die Server-Adresse leokre.de ein. Der Server sollte nun in deiner Serverliste erscheinen. Wähle ihn aus und klicke auf “Beitreten”, um dem Server beizutreten"></TextBox>
                  </div>
            </main>
      );
}
