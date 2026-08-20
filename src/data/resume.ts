export const profile = {
  name: "Ganesh M",
  title: "AWS DevOps Engineer",
  credential: "AWS Certified Solutions Architect",
  email: "ganeshmkumar.smmkg@gmail.com",
  phone: "+91 8015 147 595",
  linkedin: "https://www.linkedin.com/in/ganesh-m-devops",
  location: "Chennai, India",
  yearsTotal: "10+",
  yearsDevOps: "6.5+",
};

export const summary =
  "Ten years in enterprise IT, six and a half of them spent building and operating AWS platforms — pipelines, infrastructure-as-code, container orchestration, and the observability that keeps it all honest. I've carried that discipline through insurance, banking, and retail workloads for Direct Line Group, MUFG Bank, and Home Depot, standardizing how infrastructure gets shipped and how incidents get seen before they become outages.";

export const achievements = [
  {
    metric: "30%",
    label: "Faster deployments",
    detail:
      "Designed and optimized multi-stage AWS CodePipeline CI/CD workflows for Direct Line Group (UK), cutting deployment cycle time and removing manual release bottlenecks.",
  },
  {
    metric: "99.9%+",
    label: "Infrastructure uptime",
    detail:
      "Implemented CloudWatch observability with custom alarms, dashboards, and automated incident runbooks across production environments.",
  },
  {
    metric: "100%",
    label: "Infrastructure as code",
    detail:
      "Automated all AWS infrastructure provisioning with Terraform, eliminating configuration drift and enabling repeatable, version-controlled deployments.",
  },
  {
    metric: "12",
    label: "Grafana dashboards shipped",
    detail:
      "Built production Grafana on Amazon EKS for Translink (Northern Ireland), reducing Mean Time to Resolution across infrastructure and application layers.",
  },
  {
    metric: "60%",
    label: "Less manual toil",
    detail:
      "Automated cloud operations with AWS Systems Manager Run Command and State Manager, reducing manual operational work for Direct Line Group.",
  },
  {
    metric: "OWASP Top 10",
    label: "Threats mitigated",
    detail:
      "Deployed AWS WAF with custom WebACL rule groups on Application Load Balancers, protecting against SQL injection, XSS, and DDoS vectors.",
  },
];

export type SkillGroup = {
  category: string;
  blurb: string;
  items: string[];
};

export const skills: SkillGroup[] = [
  {
    category: "Cloud — AWS",
    blurb: "Core platform, six and a half years hands-on",
    items: [
      "EC2", "VPC", "IAM", "S3", "Lambda", "ECS", "EKS", "ECR", "RDS",
      "Route 53", "CloudFront", "SNS", "SQS", "CloudFormation", "SSM",
      "MWAA (Airflow)", "EventBridge", "WAF / WebACL", "Glue", "ElastiCache",
    ],
  },
  {
    category: "Infrastructure as Code",
    blurb: "Version-controlled, drift-free environments",
    items: ["Terraform (modules, workspaces, remote state)", "Terragrunt", "CloudFormation (nested stacks, StackSets)", "Ansible"],
  },
  {
    category: "CI/CD & GitOps",
    blurb: "Pipelines that ship without babysitting",
    items: ["Jenkins", "AWS CodePipeline", "CodeBuild", "CodeDeploy", "CodeCommit", "GitHub Actions", "GitLab CI", "ArgoCD (familiar)", "SonarQube (SAST)"],
  },
  {
    category: "Containers & Orchestration",
    blurb: "Production Kubernetes at client scale",
    items: ["Kubernetes / EKS", "Helm", "RBAC", "HPA", "Docker (multi-stage builds)", "Amazon ECS (Fargate & EC2)"],
  },
  {
    category: "Observability",
    blurb: "Seeing incidents before they page someone",
    items: ["Grafana", "Prometheus", "AWS CloudWatch", "CloudTrail", "AppDynamics APM", "ELK Stack (familiar)"],
  },
  {
    category: "Security & Networking",
    blurb: "Least-privilege by default",
    items: ["IAM least-privilege", "AWS WAF", "SSL/TLS management", "VPC design & peering", "Transit Gateway", "ALB / NLB", "API Gateway"],
  },
  {
    category: "Automation & Scripting",
    blurb: "The glue between systems",
    items: ["Python (Boto3, Lambda)", "Bash / Shell", "HCL", "YAML", "JSON"],
  },
  {
    category: "Platforms & Collaboration",
    blurb: "Where the work gets tracked and reviewed",
    items: ["MuleSoft Anypoint", "Linux (Ubuntu, Amazon Linux 2, RHEL)", "Windows Server", "Jira", "Confluence", "GitHub", "Agile / Scrum", "ITIL"],
  },
];

export type Role = {
  company: string;
  client?: string;
  clientContext?: string;
  title: string;
  dates: string;
  location: string;
  stack: string[];
  points: string[];
  current?: boolean;
};

export const roles: Role[] = [
  {
    company: "Fractal Analytics",
    title: "AWS DevOps Engineer",
    dates: "Jun 2023 — Present",
    location: "Chennai, India",
    current: true,
    client: "Direct Line Group (UK) & Translink (Northern Ireland)",
    clientContext: "Insurance and public transport, on two concurrent accounts",
    stack: ["Terraform", "AWS CodePipeline", "EKS", "Grafana", "CloudWatch", "MuleSoft", "AppDynamics", "AWS WAF"],
    points: [
      "Own end-to-end AWS infrastructure (EC2, S3, RDS, VPC) for a Tier 1 UK insurer, holding 99.9%+ uptime SLAs.",
      "Designed multi-stage CodePipeline/CodeBuild/CodeDeploy workflows, cutting deployment cycle time by 30%.",
      "Authored the Terraform modules — VPC, EC2, RDS, IAM — that provision dev, staging, and production identically.",
      "Automated operational tasks with SSM Run Command and State Manager, reducing manual toil by 60%.",
      "Built Lambda-to-Teams alerting on pipeline failures, shortening engineering response time.",
      "Installed and configured MuleSoft Anypoint for enterprise API integration across internal and third-party systems.",
      "Used AppDynamics APM to trace and resolve three critical Java heap bottlenecks, cutting P99 latency by 25%.",
      "Deployed and ran production Grafana on EKS for Translink, surfacing 50+ KPIs; built 12 dashboards from scratch.",
      "Implemented EKS workloads — Deployments, RBAC, HPA — managing 20+ containerized services.",
      "Cut environment spin-up from days to under 30 minutes with Terraform workspaces per environment.",
    ],
  },
  {
    company: "Tata Consultancy Services",
    title: "DevOps Engineer",
    dates: "Apr 2022 — Jun 2023",
    location: "India",
    client: "MUFG Bank",
    clientContext: "Global financial institution, APAC & EMEA",
    stack: ["Jenkins", "SonarQube", "Ansible", "Terraform", "Docker", "ECS"],
    points: [
      "Owned Jenkins declarative pipelines for a banking application serving millions of users across two regions.",
      "Integrated SonarQube SAST into pipelines as a quality gate, cutting code vulnerability findings by 40%.",
      "Governed GitFlow branching across 15+ repositories — feature, release, hotfix, and merge review workflows.",
      "Wrote Ansible playbooks provisioning and configuring 30+ development and staging servers.",
      "Built AWS infrastructure with Terraform — VPC, subnets, security groups, Auto Scaling, RDS — for dev and UAT.",
      "Migrated legacy Java workloads from on-premise to AWS using Docker and ECS.",
      "Resolved 95%+ of pipeline failures within SLA, diagnosing build and environment inconsistencies.",
    ],
  },
  {
    company: "Groupon Shared Services",
    title: "Cloud & DevOps Engineer",
    dates: "Jul 2020 — Mar 2022",
    location: "India",
    client: "Home Depot (USA)",
    clientContext: "Retail & e-commerce, high-traffic delivery platform",
    stack: ["EC2 Auto Scaling", "Route 53", "CloudWatch", "Apache/Tomcat"],
    points: [
      "Architected a three-tier AWS stack (web, app, data) for a high-traffic food ordering and delivery platform.",
      "Ran multi-region Route 53 routing with weighted and failover policies, holding 99.95% availability at peak.",
      "Built event-driven alerting with CloudWatch, SNS, and SQS for real-time anomaly notification to on-call.",
      "Managed Apache/Tomcat — virtual hosts, SSL termination, JVM tuning — and shipped Spring Boot microservices with zero-downtime rolling deployments.",
    ],
  },
  {
    company: "Teleperformance India",
    title: "Network Support Engineer",
    dates: "Aug 2017 — Sep 2019",
    location: "India",
    client: "Magento (UK)",
    clientContext: "E-commerce platform, 24×7 production support",
    stack: ["ITIL", "GitHub access control", "SSL/TLS"],
    points: [
      "Provided L1/L2 network and application support for a UK e-commerce client in a 24×7 environment.",
      "Handled incident, change, and service requests through ITIL-aligned ticketing.",
      "Managed user access, repository permissions, and branch protection policies in GitHub.",
      "Supported SSL/TLS certificate renewals and baseline server configuration.",
    ],
  },
  {
    company: "Solartis Technology",
    title: "IT Support Engineer",
    dates: "May 2015 — Apr 2017",
    location: "India",
    stack: ["Linux administration", "Windows Server"],
    points: [
      "Administered Linux (Ubuntu) and Windows Server environments — accounts, storage, performance, and OS hardening.",
    ],
  },
];

export type Project = {
  name: string;
  client: string;
  role: string;
  problem: string;
  engineering: string[];
  stack: string[];
  impact: string[];
};

export const projects: Project[] = [
  {
    name: "Zero-drift release pipeline",
    client: "Direct Line Group — UK insurance",
    role: "Fractal Analytics · AWS DevOps Engineer",
    problem:
      "Releases for a Tier 1 UK insurer went out through manual, inconsistent steps, which slowed delivery and left environments prone to configuration drift.",
    engineering: [
      "Designed multi-stage AWS CodePipeline workflows spanning CodeBuild and CodeDeploy.",
      "Authored the full Terraform module set — VPC, EC2, RDS, IAM — as the single source of truth for every environment.",
      "Wired Lambda functions into the pipeline to push deployment status and failures straight to Microsoft Teams.",
      "Automated operational tasks with SSM Run Command and State Manager.",
    ],
    stack: ["Terraform", "AWS CodePipeline", "CodeBuild", "CodeDeploy", "Lambda", "SSM"],
    impact: [
      "30% faster deployment cycles, manual release steps eliminated.",
      "60% less manual operational toil across the account.",
      "Version-controlled, repeatable environments from dev to production.",
    ],
  },
  {
    name: "Observability for a 50+ KPI transit platform",
    client: "Translink — Northern Ireland public transport",
    role: "Fractal Analytics · AWS DevOps Engineer",
    problem:
      "Infrastructure and application health across a growing set of EKS workloads was hard to see in one place, slowing incident response for operations teams.",
    engineering: [
      "Deployed and operated production Grafana on Amazon EKS, integrated with CloudWatch and custom Lambda-published metrics.",
      "Built 12 Grafana dashboards from scratch covering infrastructure health, deployment frequency, error rates, and SLO tracking.",
      "Implemented EKS Deployments, Services, ConfigMaps, Secrets, RBAC, and Horizontal Pod Autoscalers across 20+ workloads.",
      "Layered AWS WAF with custom WebACL rules on the ALBs in front of these services.",
    ],
    stack: ["Grafana", "Amazon EKS", "CloudWatch", "Lambda", "AWS WAF", "Docker", "ECS Fargate"],
    impact: [
      "Real-time visibility into 50+ KPIs across infrastructure and application layers.",
      "Reduced Mean Time to Resolution for operations teams.",
      "SQL injection, XSS, and rate-limit attack vectors mitigated at the edge.",
    ],
  },
  {
    name: "CI/CD and configuration governance for a global bank",
    client: "MUFG Bank — APAC & EMEA",
    role: "Tata Consultancy Services · DevOps Engineer",
    problem:
      "A critical banking application serving millions of users across two regions needed a disciplined pipeline and configuration process spanning 15+ repositories.",
    engineering: [
      "Ran Jenkins declarative pipelines end-to-end for the application's full release lifecycle.",
      "Integrated SonarQube SAST as an enforced quality gate.",
      "Governed GitFlow branching and merge review across 15+ repositories.",
      "Wrote Ansible playbooks and roles provisioning 30+ development and staging servers.",
      "Migrated legacy Java workloads from on-premise to AWS with Docker and ECS.",
    ],
    stack: ["Jenkins", "SonarQube", "Ansible", "Terraform", "Docker", "Amazon ECS"],
    impact: [
      "40% fewer code vulnerability findings after SAST gating.",
      "95%+ of pipeline failures resolved within SLA.",
      "Legacy workloads re-platformed to cloud-native AWS infrastructure.",
    ],
  },
];

export const certifications = [
  {
    name: "AWS Certified Solutions Architect – Associate",
    issuer: "Amazon Web Services",
    date: "June 2024 – June 2027",
    status: "active" as const,
  },
  {
    name: "AWS Certified DevOps Engineer – Professional",
    issuer: "Amazon Web Services",
    date: "In progress",
    status: "planned" as const,
  },
  {
    name: "Certified Kubernetes Administrator (CKA)",
    issuer: "The Linux Foundation / CNCF",
    date: "Planned",
    status: "planned" as const,
  },
];

export const pipelineStages = [
  "Developer",
  "Git",
  "CI/CD",
  "Terraform",
  "AWS",
  "Monitoring",
  "Alerting",
];

export const education = {
  degree: "Bachelor of Computer Application (BCA)",
  school: "A.M. Jain College, Chennai, Tamil Nadu",
  dates: "2012 — 2015",
};
