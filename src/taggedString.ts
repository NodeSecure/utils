export function taggedString(chaines: TemplateStringsArray, ...cles: (number | string)[]) {
  return function cur(...valeurs: (string | number | {[key: string]: any})[]) {
    const lastVal = valeurs[valeurs.length - 1];
    const dict = typeof lastVal === "object" && lastVal !== null ? lastVal : {};
    const resultat = [chaines[0]];
    cles.forEach((cle, index) => {
      resultat.push(
        typeof cle === "number" ? valeurs[cle] : dict[cle],
        chaines[index + 1]
      );
    });

    return resultat.join("");
  };
}
