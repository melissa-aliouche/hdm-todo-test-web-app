
# HDM Todo List - Test Technique

## 📌 Introduction
Ce projet consiste en une application de gestion de tâches (Todo List) développée en utilisant **React** pour le frontend et **NestJS** pour le backend. Le backend gère les opérations CRUD sur les tâches avec une base de données MySQL. L'interface utilisateur est développée en **React** avec la bibliothèque **Material-UI (MUI)** pour un design moderne et réactif.

L'objectif de ce test est de créer et d'éditer des tâches, ainsi que de supprimer une tâche. La communication entre le frontend et le backend se fait via des requêtes API REST.

---

### 2️⃣ **Stack technologique et choix techniques**

```md
## 💻 Stack technique

- **Frontend** : 
  - **React** : Choisi pour sa réactivité, son écosystème mature et sa capacité à créer des interfaces utilisateur dynamiques.
  - **Material-UI** : Utilisé pour un design rapide et réactif, offrant des composants modernes et personnalisables.

- **Backend** : 
  - **NestJS** : Un framework basé sur **Node.js** qui facilite la création d'applications backend en suivant une architecture modulaire et scalable. Utilisation de la syntaxe TypeScript pour la sécurité de type.
  - **Prisma** : ORM pour interagir avec la base de données MySQL, facilitant la gestion des migrations et des requêtes.

- **Base de données** : 
  - **MySQL** : Système de gestion de base de données relationnelle, choisi pour sa fiabilité et sa large utilisation dans les applications professionnelles.
  - **Docker** : Utilisé pour faciliter la mise en place de MySQL en conteneur, permettant une configuration rapide et un environnement reproductible.

---

### 3️⃣ **Explications sur les fonctionnalités principales**.

```md
## 🚀 Fonctionnalités principales

- **Gestion des tâches** : L'application permet de créer, éditer, et supprimer des tâches.
- **Création d'une tâche** : Lorsqu'un utilisateur saisit une tâche et clique sur "Ajouter", une requête POST est envoyée au backend pour enregistrer la nouvelle tâche dans la base de données.
- **Édition d'une tâche** : L'utilisateur peut éditer une tâche en modifiant son nom. Si le nom de la tâche est modifié, une requête PATCH est envoyée pour mettre à jour la tâche dans la base de données.
- **Suppression d'une tâche** : Lorsqu'un utilisateur clique sur l'icône de suppression, une requête DELETE est envoyée pour supprimer la tâche du backend et rafraîchir la liste des tâches.

---

### 4️⃣ **Problèmes rencontrés et solutions**

```md
## 🛠️ Problèmes rencontrés et solutions

1. **Gestion du bouton "Save"** :  
     Il y a une restriction qui dit que la tâche ne peut pas être mise à jour si le nom de la tâche n'a pas changé. Cela signifie qu'on doit contrôler l'état du bouton pour qu'il ne soit pas activé lorsque le texte de la tâche reste le même.
   **Solution** : En comparant task.name === editingTask[task.id] pour désactiver le bouton. C'est une bonne approche pour éviter des requêtes inutiles

2. **La mise à jour de la base de données MySQL** :  
   J'ai dû configurer correctement la base de données MySQL et m'assurer que toutes les migrations Prisma étaient exécutées correctement.  
   **Solution** : J'ai utilisé Docker pour démarrer rapidement un container MySQL et configuré la connexion via les variables d'environnement dans `.env`.

---

### 5️⃣ **Expérience d'exécution du projet**

```md
## 📝 Expérience d'exécution du projet

- **Environnement local** : L'installation des dépendances avec `yarn` a été simple, et la mise en place de Docker pour MySQL a été très pratique pour éviter d'installer directement MySQL sur la machine locale.
- **Connexion Frontend/Backend** : La gestion des API entre React et NestJS s'est bien déroulée grâce à l'utilisation de hooks personnalisés dans React et aux contrôleurs API dans NestJS.


---

### 7️⃣ **Lien vers la vidéo de démonstration **📽️


```md
 
[Lien vers la vidéo de démonstration](https://drive.google.com/file/d/1dmQN_YTJapzadumir9CkhVOUyiiQhieh/view?usp=sharing) 

Cette vidéo montre l'exécution de l'application avec la création, l'édition et la suppression des tâches.

---

### 8️⃣ **Améliorations possibles**

```md
## ⚙️ Améliorations possibles

- **Authentification des utilisateurs** : Ajouter une fonctionnalité d'authentification pour que chaque utilisateur ait ses propres tâches.
- **Gestion des priorités** : Intégrer un système de priorités pour chaque tâche, permettant à l'utilisateur de définir si la tâche est de **haute**, **moyenne**, ou **basse** priorité. Cela pourrait améliorer l'organisation et aider les utilisateurs à se concentrer sur les tâches les plus urgente.
- **Gestion des tâches complétées** : Ajouter une fonctionnalité permettant aux utilisateurs de marquer une tâche comme "complétée". Cela permettrait d'avoir une vue d'ensemble des tâches effectuées et des tâches restantes.
- **Gestion des erreurs et validation côté frontend** : Ajouter des messages d'erreur personnalisés pour informer l'utilisateur en cas d'échec lors de l'ajout, de l'édition ou de la suppression d'une tâche.
- **Test unitaire et d'intégration** : Ajouter des tests unitaires pour les fonctions de backend et de frontend pour garantir la stabilité de l'application.
- **Notifications et rappels** : Ajouter une fonctionnalité de notifications ou de rappels pour les tâches à venir, ce qui permettrait aux utilisateurs de ne pas oublier des tâches importantes.

---

### 9️⃣ **Conclusion**🎉


```md 

Ce test m'a permis de travailler sur un projet full-stack avec une architecture moderne, en utilisant des technologies populaires comme React, NestJS et MySQL. J'ai apprécié le processus de développement et de résolution de problèmes, et j'ai appris beaucoup sur la gestion des tâches, la communication entre frontend et backend, ainsi que sur l'utilisation de Prisma pour la gestion de base de données.
