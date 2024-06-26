# TodoList avec NestJS 😊

Participant à ce projet : Hakim CHOURA, Sashtiga SASIRAJAH

## Etapes du projet :

Premièrement, comme demandé nous avons fait un fork de votre projet :

![fork](https://github.com/Hakimisme/nestjs-final-test/assets/71923414/f19ac7dc-a7d7-49e9-9407-18441312a5cc)


Par la suite nous nous sommes rendu sur VS CODE et avons fait un git clone de notre repository
![gitclone](https://github.com/Hakimisme/nestjs-final-test/assets/71923414/05b85866-f1ff-4f55-887d-a49f3e34a8e5)

On a par la suite installer toutes les dépendances :
![dependance](https://github.com/Hakimisme/nestjs-final-test/assets/71923414/7ceeb34d-bdf0-42a4-a885-1889e6f35134)

On a lancer la commande suivante dans le terminal : 



## Objectif 🎯
Le but de ce projet est de démontrer la maîtrise du framework NestJS en implémentant les fonctionnalités nécessaires pour passer tous les tests automatisés inclus.

## Fonctionnalités Implémentées ✅
- **Création d'un utilisateur**
- **Création d'une tâche**
- **Gestion des erreurs**

## Critères de Réussite 📈

### Fonctionnalité du Projet 🛠️
- Le projet fonctionne sans erreurs au runtime et au compile time.

### Utilisation d'une Base de Données 🗄️
- Une base de données relationnelle ou noSQL est utilisée.
- Un ORM est configuré et utilisé.

### Propreté du Code 🧹
- Le code est propre, compréhensible et correctement segmenté.
- Les noms des classes, méthodes et variables sont appropriés.
- Les commentaires inutiles sont évités.
- Les contrôleurs se concentrent sur la validation/HTTP.
- Les services se concentrent sur la logique métier.

### Configuration Minimale 🔧
- `npm ci` fonctionne sans problème.
- Aucun besoin de configuration supplémentaire.
- Les scripts npm pour lancer les tests et le serveur sont clairement indiqués.

## Installation et Configuration 🛠️

### Prérequis 📋
- [Node.js](https://nodejs.org/)
- [Docker Desktop](https://www.docker.com/products/docker-desktop)

### Étapes d'Installation 📦
1. Clonez le repository :
    ```bash
    git clone <URL_DU_REPOSITORY>
    cd <NOM_DU_REPOSITORY>
    ```
2. Installez les dépendances :
    ```bash
    npm ci
    ```

### Base de Données 💾
Deux SGBD sont contenairisés via Docker :
- PostgreSQL
- MongoDB

Pour utiliser ces bases de données :
1. Lancez Docker Desktop.
2. Utilisez les scripts npm pour démarrer le serveur avec la base de données de votre choix :
    ```bash
    npm run start:mongodb
    ```
    ou
    ```bash
    npm run start:postgres
    ```

Attention : en fonction de votre système les scripts peuvent variées. merci de rajouter ```bash :votre_systeme ``` à la fin des scripts précédentes. (ex : si vous utilisez Windows -> ```bash npm run start:mongodb:windows```) Par défaut, les scripts précédentes fonctionnent pour Windows.

### Configuration de l'ORM ⚙️
L'ORM choisi pour ce projet est [TypeORM/Mongoose/Sequelize/MikroORM/Prisma]. (Choisissez celui que vous avez utilisé)
Nous avons utilisé Prisma.

## Lancement des Tests 🧪
Pour lancer les tests end-to-end (e2e) :
```bash
npm run test:e2e:mongodb
```
ou
```bash
npm run test:e2e:postgres
```

Attention : en fonction de votre système les scripts peuvent variées. merci de rajouter ```bash :votre_systeme ``` à la fin des scripts précédentes. (ex : si vous utilisez Windows -> ```bash npm run test:e2e:mongodb:windows```) Par défaut, les scripts précédentes fonctionnent pour Windows.

## Commandes Utiles 🚀
- **Installer les dépendances :** `npm ci`
- **Lancer le serveur avec MongoDB sur Windows :** `npm run start:mongodb`
- **Lancer le serveur avec PostgreSQL sur Windows :** `npm run start:postgres`
- **Lancer les tests e2e avec MongoDB sur Windows:** `npm run test:e2e:mongodb`
- **Lancer les tests e2e avec PostgreSQL sur Windows :** `npm run test:e2e:postgres`

---

Merci d'avoir pris le temps d'évaluer notre projet. N'hésitez pas à nous contacter si vous avez des questions ou des remarques. 📧
