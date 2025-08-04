export const personalInfo = {
  name: "Jeff Tientcheu",
  location: "Paris, France",
  email: "jefftientcheu@outlook.com",
  github: "https://github.com/jehryl",
  linkedin: "https://www.linkedin.com/in/jeff-tientcheu-073792211/",
};

export const workExperience = [
  {
    company: "Société Générale",
    location: "La Défense, France",
    position: "Ingénieur DevOps",
    period: "Sept 2024 - Présent",
    achievements: [
      "Gestion de la production et automatisation des workflows d'incidents (réduction de 50% du temps de résolution).",
      "Développement d’API REST pour gérer Kafka, Elastic, Kibana et les pipelines.",
      "Pilotage de pipelines d’ingestion avec stockage Druid (hot) et AWS S3 (cold).",
      "Migration CI/CD de Jenkins vers GitHub Actions, améliorant l'efficacité et la centralisation.",
    ],
  },
  {
    company: "Société Générale",
    location: "Paris, France",
    position: "Big Data Engineer (Alternance)",
    period: "Sept 2023 - Août 2024",
    achievements: [
      "Mise en place de dashboards Power BI selon les règles de Data Gouvernance.",
      "Création de pipelines ETL pour améliorer la qualité des données (50% de gain de temps manuel).",
      "Déploiement industrialisé avec tests unitaires, d’intégration et de non-régression.",
      "Rédaction de documentation technique pour assurer traçabilité et maintenabilité.",
    ],
  },
  {
    company: "INRAE",
    location: "Montpellier, France",
    position: "Ingénieur de recherche (Stage)",
    period: "Sept 2022 - Janv 2023",
    achievements: [
      "Analyse d’indices de végétation pour modéliser les comportements pastoraux.",
      "Rédaction d’un rapport scientifique complet avec méthodologie et résultats.",
    ],
  },
];

export const education = [
  {
    institution: "Université Technologique de Troyes (UTT)",
    location: "Paris, France",
    degree: "Mastère spécialisé : Expert Big Data Engineer",
    period: "2024",
    achievements: ["Spécialisation DevOps et automatisation"],
  },
  {
    institution: "EPF - École d'ingénieurs",
    location: "Montpellier, France",
    degree: "Diplôme d'ingénieur - Data Engineering & Data Science",
    period: "2023",
    achievements: ["Mention spéciale du jury", "Grade Bien"],
  },
];

export const skills = {
  programmingLanguages: ["Python", "SQL", "Terraform", "Java", "Bash"],
  bigData: [
    "Kafka",
    "Apache Airflow",
    "NIFI",
    "Databricks",
    "DBT",
    "ETL",
    "Druid",
  ],
  devOps: [
    "Docker",
    "Kubernetes",
    "Jenkins",
    "GitHub Actions",
    "Ansible",
    "OAuth",
    "CI/CD",
  ],
  cloudPlatforms: ["AWS", "Microsoft Azure", "GCP"],
  monitoringAndLogging: ["Grafana", "ELK Stack", "Sonar"],
  toolsAndBI: ["Power BI", "Looker"],
  databases: ["PostgreSQL"],
};

export const projects = [
  {
    title: "Portfolio personnel",
    github: "https://jefftientcheu-portfolio.github.io",
    description: [
      "Mise en avant des expériences, projets, compétences techniques et contact professionnel.",
      "Développé pour améliorer la visibilité personnelle et renforcer la marque professionnelle.",
    ],
  },
];

export const awards = [
  {
    name: "Migration DevOps réussie",
    issuer: "Société Générale",
    date: "2024",
    type: "Interne",
    position: "Amélioration de l'efficacité CI/CD de 30% via GitHub Actions",
  },
  {
    name: "Qualité des données",
    issuer: "Société Générale",
    date: "2024",
    type: "Interne",
    position: "Réduction de 50% du travail manuel via pipelines ETL",
  },
  {
    name: "Industrialisation des tests",
    issuer: "Société Générale",
    date: "2024",
    type: "Interne",
    position: "Réduction de 20% des erreurs systèmes grâce à tests automatisés",
  },
];
