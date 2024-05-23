# TodoList avec NestJS 😊

Participant à ce projet : Hakim Choura, Sashtiga

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

### Configuration de l'ORM ⚙️
L'ORM choisi pour ce projet est [TypeORM/Mongoose/Sequelize/MikroORM/Prisma]. (Choisissez celui que vous avez utilisé)

## Lancement des Tests 🧪
Pour lancer les tests end-to-end (e2e) :
```bash
npm run test:e2e:mongodb
```
ou
```bash
npm run test:e2e:postgres
```

## Commandes Utiles 🚀
- **Installer les dépendances :** `npm ci`
- **Lancer le serveur avec MongoDB :** `npm run start:mongodb`
- **Lancer le serveur avec PostgreSQL :** `npm run start:postgres`
- **Lancer les tests e2e avec MongoDB :** `npm run test:e2e:mongodb`
- **Lancer les tests e2e avec PostgreSQL :** `npm run test:e2e:postgres`

---

Merci d'avoir pris le temps d'évaluer notre projet. N'hésitez pas à nous contacter si vous avez des questions ou des remarques. 📧
