# Extension Firefox: declarimpot2086

/!\ Attention! les scripts et extension proposés ici sont à utliser à vos risques et périls. /!\

Ils ont été fait rapidement, il y a de quoi largement les améliorer. Ne vous faites pas prier!

## 1. Générer sur waltio.co

Générez le fichier `Annexe de déclaration annuelle des plus-values.xlsx` sur waltio.co

## 2. Convertir en csv

Convertissez le fichier `Annexe de déclaration annuelle des plus-values.xlsx` en csv avec comme delimiteur `;`

## 3. Générer le JSON

Modifiez dans le script `external_scripts/csv2jsonWaltio.js`, la ligne `const fileStream = fs.createReadStream('impots2021.csv');` pour y mettre votre csv.
la sortie de ce script est du JSON.

## 4. copier le JSON dans l'extension

Copiez ce JSON dans la premiere ligne de `content_scripts/fillup.js`: `const data = ...`

## 5. Charger l'extension

Dans firefox ouvrez la page `about:debugging` selectionnee `This Firefox` puis `Load Temporary Add-on...` et finalement selectionnee le fichier `declarimpot2086/manifest.json`.

## 6. Remplissez vos impots

Sur le formulaire de l'annexe 2086:
1. Cliquez sur l'extension (cela remplira les cessions une à une)
2. Verifiez les informations saisies
3. Cliquez sur suivant
4. Cliquez sur l'extension (cela remplira les cessions une à une)
5. Verifiez les informations saisies
6. Cliquez sur suivant
7. Cliquez sur l'extension (cela remplira les cessions une à une)
8. Verifiez les informations saisies
9. Cliquez sur suivant
10. Ok, je pense que vous avez compris l'idée... ;)