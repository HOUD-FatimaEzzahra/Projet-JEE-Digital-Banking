# Projet de Fin de Module - Digital Banking
Ce dépôt contient le code source du projet de fin de module "Digital Banking". L'objectif de ce projet est de développer une application de gestion de services bancaires numériques, offrant aux clients la possibilité de gérer leurs comptes, d'effectuer des transactions, de visualiser l'historique des opérations et bien plus encore. L'application est développée dans le cadre du module de formation "Digital Banking" et vise à mettre en pratique les compétences acquises dans le domaine des technologies web et des services bancaires.

## Technologies utilisées
L'application est développée en utilisant les technologies suivantes :

- Backend : Java, Spring Boot, Spring Data JPA, Spring Security, JWT.
- Frontend : Angular, HTML, CSS, TypeScript.
- Base de données : MySQL.
- Outils de développement : Maven, Git.

## Architecture

L'architecture de l'application de gestion de comptes bancaires suit le modèle MVC (Modèle-Vue-Contrôleur) avec Spring et Angular, et utilise une base de données MySQL pour le stockage des données.

![Architecture](https://github.com/HOUD-FatimaEzzahra/Projet-JEE-Digital-Banking/blob/main/Conception/architecture.png)

L'architecture se divise en plusieurs couches principales :

- **Couche Frontend (Vue) :** Cette couche est responsable de l'interface utilisateur de l'application. Elle est développée en utilisant le framework Angular, qui permet de créer une interface utilisateur dynamique et réactive. Les composants Angular interagissent avec la couche Backend pour récupérer les données et effectuer les opérations nécessaires.

- **Couche Backend (Contrôleur) :** Cette couche contient la logique métier de l'application. Elle est développée en utilisant le framework Spring Boot, qui facilite le développement d'applications Java robustes. Les contrôleurs Spring Boot exposent des API REST qui sont utilisées par le frontend pour interagir avec les données et effectuer des opérations.

- **Couche DAO (Modèle) :** Cette couche est responsable de l'accès aux données et de la communication avec la base de données. Elle utilise Spring Data JPA pour simplifier les opérations de persistance des données. Les entités JPA sont utilisées pour représenter les objets métier et les interfaces JPA Repository permettent d'effectuer les opérations CRUD sur la base de données.

- **Base de données MySQL :** La base de données MySQL est utilisée pour stocker les informations relatives aux clients, aux comptes bancaires et aux opérations. Elle offre une structure relationnelle pour la persistance des données.

L'architecture adoptée permet une séparation claire des responsabilités et favorise la modularité et la maintenabilité de l'application. Elle permet également une évolutivité future en ajoutant de nouvelles fonctionnalités ou en intégrant d'autres systèmes.
