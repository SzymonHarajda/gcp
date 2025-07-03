const flashcards = [
  {
    question:
      "Your company, SnapRide, operates a ride-hailing app that runs on servers in its own data center. The app needs to access important data stored in Cloud Storage. However, SnapRide's security policies prohibit public IP addresses and restrict internet access for the servers hosting the app. You want to follow Google’s recommended best practices to securely provide the app with access to Cloud Storage. What should you do?",
    answer:
      "D.\n1. Establish a VPN or Interconnect tunnel to a VPC in Google Cloud. [ 6]\n2. Use Cloud Router to advertise the custom route 199.36.153.4/30. [ 6]\n3. Configure your on-premises DNS server to resolve *.googleapis.com as a CNAME pointing to restricted.googleapis.com, and announce the network via the VPN tunnel. [ 7]",
  },
  {
    question:
      "Your company, TechFlow Solutions, has a web application that relies on Google Cloud's infrastructure. The operations team is responsible for managing and maintaining a large number of Compute Engine instances that power this application. Each operations team member needs administrative access to these instances, while the security team wants to ensure that credentials are managed efficiently and that access to the instances can be tracked to individual team members. What should you do to meet these requirements?",
    answer:
      'C.\n- Have each team member generate an SSH key pair and add the public key to their Google account. [ 13] \n- Grant the "compute.osAdminLogin" role to the Google group corresponding to the operations team. [ 13]',
  },
  {
    question:
      "Several team members at your company, Snackify, have been developing new projects on the Cloud Platform and using their personal credit cards to cover costs, which the company then reimburses. The company now wants to streamline billing by consolidating all projects under a single billing account. What should you do?",
    answer:
      "D.  In the Google Cloud Platform Console, create a new billing account and set up a payment method. [ 20]",
  },
  {
    question:
      "GreenWorks, a new startup, is launching an eco-friendly marketplace app that must serve a large number of users quickly. To ensure minimal latency for their site, they want to set up a single HTTP reverse proxy with caching capabilities. The reverse proxy will use almost no CPU, but they require 30 GB of in-memory cache, with an additional 2 GB of memory for other processes. They are also looking to keep costs as low as possible. How should they set up this reverse proxy on Google Cloud Platform?",
    answer:
      "B. Run it on Compute Engine, and choose a custom instance type with 6 vCPUs and 32 GB of memory. [ 25]",
  },
  {
    question:
      "Imagine you are managing multiple environments for a new ride-sharing app called QuickRide, where each environment has its own Kubernetes Engine cluster setup. You need to check the Kubernetes cluster configuration of one of the inactive environments with minimal steps. What should you do?",
    answer:
      "D. Use “kubectl config use-context” and “kubectl config view” to review the output. [ 31]",
  },
  {
    question:
      "Your company, an online education platform named Learnly, has an existing GCP organization with hundreds of projects and a billing account. Recently, Learnly acquired a virtual tutoring startup, TutorVerse, which also has hundreds of projects and its own billing account. To streamline operations, you would like to consolidate all GCP costs from both organizations onto a single invoice. You want to achieve this consolidation as of tomorrow. What should you do?",
    answer: "A. Link TutorVerse's projects to Learnly's billing account. [ 35]",
  },
  {
    question:
      "Your company, SnapDojo runs a social media platform where users can upload images. These images need to be processed by converting them to an internal optimized binary format and stored afterward. You want to choose the most efficient and cost-effective approach for handling this task. What should you do?",
    answer:
      "D.\n- Upload images to a Cloud Storage bucket and monitor the bucket for new uploads. [ 46] \n- Trigger a Cloud Function to convert the images and store them back in a Cloud Storage bucket. [ 46]",
  },
  {
    question:
      "You are working on a new ride-sharing app called SwiftRides. You have already set up a development project with appropriate IAM roles for your development team. Now, you're launching the production version of the app and need to apply the same IAM roles to your production project with the fewest possible steps. What should you do?",
    answer:
      "A. Use “gcloud iam roles copy” and specify the production project as the destination project. [ 51]",
  },
  {
    question:
      "NovaTech Solutions is planning to launch a new web application, and they need to create a custom VPC with a single subnet. The application’s subnet should have the largest possible IP address range to accommodate future scaling. Which range should they choose for the subnet?",
    answer: "B. 10.0.0.0/8 [ 57]",
  },
  {
    question:
      "You are working at ByteShift, a company that provides a ride-sharing app called RideRunner. You are tasked with deploying a Google Kubernetes Engine (GKE) cluster to handle the app’s back-end services. As part of this deployment, you also need to ensure that a DaemonSet runs in the kube-system namespace of the GKE cluster to monitor the nodes. You want to accomplish this in the simplest way possible using the fewest services. What should you do?",
    answer:
      "A. Add the cluster's API as a new Type Provider in Deployment Manager, and use the new type to create the DaemonSet.",
  },
  {
    question:
      "VegaTech, a startup that creates personalized stargazing apps, is looking to deploy its new web application. The app, packaged in a container image, provides a virtual telescope through an HTTP endpoint but currently receives very few daily users. They want to deploy the app in a cost-efficient manner. What should they do?",
    answer: "A. Deploy the container on Cloud Run. [ 67]",
  },
  {
    question:
      "Your company, StellarApps, runs a distributed mobile application that relies on multiple backend services deployed on Compute Engine instances. For performance and security analysis, you need to collect and send all the logs from these instances to a BigQuery dataset called app-logs for further analysis. You've already ensured that the Cloud Logging agent is installed on all the instances. Since cost efficiency is a priority, you're looking for the best approach to achieve this. What should you do?",
    answer:
      "C.\n1. In Cloud Logging, create a filter to display only Compute Engine logs. [ 75]\n2. Click Create Export. [ 75]\n3. Select BigQuery as the Sink Service and the app-logs dataset as the Sink Destination. [ 75]",
  },
  {
    question:
      "Your organization runs a social media platform that needs to store user activity log files for 3 years. Your platform manages hundreds of Google Cloud projects. You need to implement a cost-effective solution for retaining these log files. (Note: Stackdriver is now called 'Google Cloud's Operation Suite')",
    answer:
      "B. Create an export to the sink that saves logs from Cloud Audit to a Coldline Storage bucket. [ 82]",
  },
  {
    question:
      "Your organization, TrendyTech Solutions, runs an app that stores critical data backups for disaster recovery on Google Cloud Storage. To ensure you adhere to Google's best practices, which storage class should you select for long-term backup retention?",
    answer: "D. Coldline Storage [ 88]",
  },
  {
    question:
      "You are managing a new microservices-based application for a social media platform called SnapWave, which allows users to upload and share audio clips. You want to deploy a service on Cloud Run that processes user activity messages from a Cloud Pub/Sub topic. You aim to follow Google's recommended best practices. What should you do?",
    answer:
      "C.\n1. Create a service account. [ 94]\n2. Give the Cloud Run Invoker role to that service account for your SnapWave application. [ 95]\n3. Create a Cloud Pub/Sub subscription that uses that service account and uses your SnapWave application as the push endpoint. [ 95]",
  },
  {
    question:
      'A startup called "Artify" is developing an AI-driven digital art platform that requires a licensing server for its proprietary image rendering software. This software is configured to look for its licensing server at the IP address 10.194.3.41. Artify wants to deploy this licensing server on Google Compute Engine but does not want to modify the existing software configuration. How can they ensure that the application continues to reach the licensing server at the specified IP?',
    answer:
      "A. Reserve the IP 10.194.3.41 as a static internal IP address using gcloud and assign it to the licensing server. [ 101]",
  },
  {
    question:
      "Your company, ByteDrop, hosts large media files on a public platform using an Apache web server that runs on a Compute Engine instance. However, the Apache web server is just one of many applications running in the ByteDrop infrastructure. The team wants to receive an email notification when the egress network costs for the Apache server exceed $100 for the current month, as reported by Google Cloud. What should you do?",
    answer:
      "C.\n- Export the billing data to BigQuery. [ 107] \n- Create a Cloud Function that uses BigQuery to sum the egress network costs of the exported billing data for the Apache web server for the current month and send an email if it is over 100 dollars. [ 107] \n- Schedule the Cloud Function using Cloud Scheduler to run hourly. [ 108]",
  },
  {
    question:
      "You are tasked with setting up autohealing for the backend systems of a popular multi-regional e-commerce website, ShopEase, that operates on multiple Compute Engine instances. The goal is to ensure that if any backend server becomes unresponsive, it is automatically re-created after failing 2 consecutive health checks, each with a 8-second interval. You want to achieve this with the minimum number of steps. What should you do?",
    answer:
      "C.\n- Create a managed instance group. [ 116] \n- Set the Autohealing health check to healthy (HTTP) [ 116]",
  },
  {
    question:
      "Your startup, TechFuze, has developed a new social media platform that consists of multiple microservices. You are planning to deploy this platform to Google Kubernetes Engine (GKE) and want to ensure that the GKE cluster can scale automatically as more features and microservices are added in the future. To minimize manual configuration each time a new feature is deployed, what should you do?",
    answer:
      "C.\n- Create a GKE cluster with autoscaling enabled on the node pool. [ 123] \n- Set a minimum and maximum for the size of the node pool. [ 123]",
  },
  {
    question:
      "You are working for a startup called SkyStream, which has developed a new video-streaming app. You've been tasked with setting up infrastructure on Google Cloud using the gcloud command line interface (CLI). You've already created a new project and linked a billing account. Now, you need to create a Compute Engine instance using the CLI. What are the prerequisite steps you need to take?",
    answer: "C. Enable the compute googleapis.com API. [ 129]",
  },
  {
    question:
      'Imagine you are deploying a food delivery application called "QuickBites" to App Engine. The app experiences varying request rates throughout the day, and you want to ensure that it always has the capacity to handle sudden increases in traffic. To achieve this, you need to maintain at least 4 unoccupied instances ready at all times, while allowing the number of instances to scale according to the number of incoming requests. Which scaling type should you use?',
    answer: "D. Automatic Scaling with min_idle_instances set to 4. [ 135]",
  },
  {
    question:
      "Your company, PixaShare, operates a photo-sharing application where users upload images that are stored on Cloud Storage using the Standard Storage class. The app only requires access to images uploaded within the last 30 days. You want to minimize costs by automatically managing older images that are no longer needed by the application in the near future. What should you do?",
    answer:
      "A. Create an object lifecycle on the storage bucket to change the storage class to Archive Storage for objects older than 30 days.",
  },
  {
    question:
      "You are the lead developer for a new social networking app, “Chatville”, which allows users to share posts and comments. Your team needs to select a cost-effective solution for storing a small set of operational relational data, all hosted in a single geographic region. The solution must also support point-in-time recovery for user data in case of accidental deletions or changes. What should you do?",
    answer:
      "A.\n- Select Cloud SQL (MySQL). [ 146] \n- Verify that the enable binary logging option is selected. [ 147]",
  },
  {
    question:
      "Your company, EasyRetail, is transitioning from a traditional data center to Google Cloud. The development teams use Cassandra environments as backend databases for different microservices. Each team requires an isolated development environment for testing, and you want to complete the migration quickly while minimizing support and operational overhead. What should you do?",
    answer:
      "B.\n1. Instruct your developers to visit the Cloud Marketplace. [ 155]\n2. Ask them to launch a pre-configured Cassandra image for their development needs. [ 155]",
  },
  {
    question:
      "The content management team has a project named Content Analytics Hub that has the ID zephyr-analytics-hub. You need to set up similar Google Cloud resources for the design team, but their resources must be organized independently of the content management team. What should you do?",
    answer:
      "C. Create another project with the ID zephyr-design-hub for the design team and deploy the resources there. [ 162]",
  },
  {
    question:
      'Imagine you are managing a virtual machine for a startup called "BrightLight Media" that runs a popular video streaming service. This virtual machine is crucial for the service\'s performance. You want to ensure that you are notified if the server’s CPU usage exceeds 90% using Google Cloud tools for monitoring and alerting. What steps would you take to set this up?',
    answer:
      "B.\n1. Set up a Cloud Monitoring Workspace and link it to your Google Cloud Platform (GCP) project. [ 169]\n2. Create a Cloud Monitoring Alerting Policy with a 90% CPU threshold. [ 169]\n3. Add your email address to the notification channel. [ 169]",
  },
  {
    question:
      "You are managing a restaurant review app hosted on Google Cloud that uses Cloud Spanner to store reviews and restaurant data. Your operations team is responsible for monitoring the app’s environment, but they should not be able to access any review or restaurant details in the database. You want to set up the right permissions for your operations team while following Google-recommended best practices. (Note: Stackdriver is now called 'Google Cloud's Operation Suite')",
    answer:
      "A. Add the operations team group to the roles/monitoring.viewer role [ 177]",
  },
  {
    question:
      "Your company runs an online recipe-sharing platform, RecipeBox, which uses Cloud Spanner as the backend database. The platform experiences predictable traffic spikes during meal times. You want to ensure that the number of Spanner nodes automatically scales up or down based on user traffic. What should you do?",
    answer:
      "D.\n- Create a Cloud Monitoring alerting policy to send an alert to a webhook when Cloud Spanner CPU is above or below your threshold. [ 184] \n- Set up a Cloud Function that listens for HTTP requests and resizes the Spanner resources automatically. [ 185]",
  },
  {
    question:
      "VentureNow, a new tech startup, is onboarding a group of new employees to their cloud infrastructure. Some of the employees already have personal Google accounts that might overlap with their work email addresses. VentureNow wants to adhere to Google's best practices and avoid any potential account conflicts during the setup process. What should the team do?",
    answer:
      "A. Invite the employee to transfer their existing Google account. [ 189]",
  },
  {
    question:
      "You manage a web application called DataVizPro that aggregates and visualizes data from BigQuery. The app is hosted on App Engine using the default App Engine service account for authentication. The dataset you need to visualize is stored in a separate project, which is controlled by a different team. You do not currently have access to this external project, but you need your app to be able to read the data from the BigQuery dataset in that project. What action should you take?",
    answer:
      "B. Ask the other team to grant your default App Engine service account the BigQuery Data Viewer role.",
  },
  {
    question:
      "Your company, MovieMagic Productions, is building an AI-driven platform that runs in your local data center. The platform leverages Google Cloud Platform (GCP) services, such as AutoML, to analyze user-submitted video content. You have created a service account with the necessary permissions to access AutoML. Now, you need to ensure that your on-premises application can authenticate and connect to GCP APIs. What should you do?",
    answer:
      "B. Use gcloud to create a key file for the service account that has appropriate permissions. [ 200]",
  },
  {
    question:
      "Your startup, GreenLeaf Solutions, is looking to move its existing infrastructure to Google Cloud. The current setup is mentioned below. The goal is to minimize operational expenses while adhering to Google's recommended best practices for serverless architecture. How should you migrate these components?\n- A Flask-based customer dashboard\n- A backend API that powers mobile applications\n- A periodic data processing task for analytics and reporting",
    answer:
      "B.\n- Migrate the customer dashboard to App Engine and the backend API to Cloud Run. [ 207] \n- Use Cloud Tasks to schedule the data processing task on Cloud Run. [ 207]",
  },
  {
    question:
      "You're managing the infrastructure for a new social media platform called SnapTag, which allows users to share real-time photo and video updates. As part of your setup, you need to establish a Google Kubernetes Engine (GKE) cluster. It's essential that node identity and integrity are verifiable, and the nodes should not be accessible from the public internet. Additionally, you want to minimize operational overhead and adhere to best practices recommended by Google. What approach should you take?",
    answer: "A. Deploy a private autopilot cluster. [ 214]",
  },
  {
    question:
      "You are responsible for managing the database performance of an online education platform called EduPrime, which uses Cloud Spanner to handle student data and course materials. The platform operates in a single Google Cloud region, and you need to enhance the query performance in the shortest possible time. You aim to adhere to Google’s recommended practices for configuring services. What should you do?",
    answer:
      "C.\n- Create an alert in Cloud Monitoring to notify you when high-priority CPU utilization reaches 65%. [ 222] \n- If this threshold is exceeded, add more nodes to your Cloud Spanner instance. [ 222]",
  },
  {
    question:
      "Your team at a growing tech startup, Techlyfe Solutions, has designed a new application infrastructure using various Google Cloud products. The team has asked you to estimate the monthly cost of running this solution. You need to calculate an accurate estimate for the monthly total cost of the infrastructure. What should you do?",
    answer:
      "A.\n- For each Google Cloud product used in the solution, review the pricing details on the product’s pricing page. [ 228] \n- Use the pricing calculator to total the monthly costs for each Google Cloud product. [ 228]",
  },
  {
    question:
      "NovaPayments, a fictional online invoicing platform, is planning to migrate its invoice records from its local data center to Cloud Storage. The invoices have specific requirements as mentioned below. NovaPayments wants to adopt Google's best practices to reduce operational and development costs. What should they do?\n- The invoices must be retained for a minimum of five years. [ 236] \n- Up to five versions of the same invoice need to be saved, in case any corrections or updates are made. [ 237] \n- Invoices that are older than one year should be transferred to a lower-cost storage tier. [ 237]",
    answer:
      "D.\n- Enable object versioning on the Cloud Storage bucket [ 242] \n- Configure lifecycle conditions to adjust the storage classes [ 242] \n- Specify the number of versions, and delete outdated invoices. [ 242]",
  },
  {
    question:
      "The technical team at a growing fintech startup, CloudLedger, manages a data processing application that runs on a Dataproc cluster within a Virtual Private Cloud (VPC) network. This network operates in a single subnet with the IP range 10.0.2.0/25. Due to IP address exhaustion in the current VPC network, no private IP addresses are available for further use. You need to introduce new VMs that will communicate with the Dataproc cluster while minimizing the complexity and number of steps required. What is the best course of action?",
    answer: "A. Modify the existing subnet range to 10.0.2.0/24. [ 246]",
  },
  {
    question:
      "You are responsible for managing a social media app's backend infrastructure, specifically a Google Kubernetes Engine (GKE) cluster called \"chat-prod\" hosted on Google Cloud. You want to configure your command line interface (CLI) to always target this GKE cluster by default for any future commands. You've just installed the Cloud SDK, and now you want to ensure that any future CLI operations are set to focus on this specific cluster. What should you do?",
    answer:
      "A. Use the command “gcloud config set container/cluster chat-prod”. [ 254]",
  },
  {
    question:
      "Imagine you are running a photo-sharing website called SnapBucket, where users upload and view high-resolution images. The site is hosted on a general-purpose Compute Engine instance, and it's experiencing excessive disk read throttling on its Zonal SSD Persistent Disk. SnapBucket primarily reads large image files from the disk. The current disk size is 350 GB. Your goal is to provide the maximum amount of throughput for these read operations while minimizing costs. What should you do?",
    answer: "C. Migrate to use a Local SSD on the instance. [ 260]",
  },
  {
    question:
      'The technical team at "EcoGrow Solutions," a startup that provides smart irrigation systems, has asked you to deploy a new workload to their Kubernetes cluster. You are uncertain about the workload\'s exact resource needs because they may vary based on different usage patterns, such as weather data inputs, varying customer activity, and external API responses. You need to implement a solution that offers cost-effective suggestions for CPU and memory, ensuring the workload remains stable in all conditions. Following the best practices recommended by Google Cloud, what approach should you take?',
    answer:
      "B.\n- Configure the Horizontal Pod Autoscaler for availability [ 265] \n- Configure the Vertical Pod Autoscaler recommendations for suggestions. [ 266]",
  },
  {
    question:
      "You are managing a third-party photo editing application that will run on a Compute Engine instance for a fictional company called \"PixelPro\". Other Compute Engine instances running for PixelPro are using default configurations. The application's installation files are stored in Cloud Storage. You need to ensure that the new instance can access these installation files without allowing other virtual machines (VMs) in PixelPro's network to access them. What should you do?",
    answer:
      "C.\n- Create a new service account and assign this service account to the new instance. [ 275] \n- Grant the service account permissions on Cloud Storage. [ 275]",
  },
  {
    question:
      "Your company, StellarClimb, is running a three-tier social media platform on virtual machines that use a MySQL database. You need to estimate the total cost of cloud infrastructure to run this application on Google Cloud instances and Cloud SQL. What should you do?",
    answer:
      "D.\n- Use the Google Cloud Pricing Calculator to determine the cost of every Google Cloud resource you expect to use. [ 283] \n- Use similar size instances for the web server, and use your current on-premises machines as a comparison for Cloud SQL. [ 284]",
  },
  {
    question:
      "You are tasked with setting up the most cost-efficient storage solution for a fictional app called DataFlow Insights, which processes large datasets continuously for critical analytics tasks. These datasets are accessed regularly by teams based in Boston, MA (United States). The goal is to ensure minimal storage costs while maintaining optimal access speeds for this high-importance pipeline. What should you do?",
    answer:
      "B.\n- Configure regional storage for the region closest to the users. [ 289] \n- Configure a Standard storage class. [ 289]",
  },
  {
    question:
      "You are managing a web platform for an online food delivery service called QuickEats, which operates on the Google Cloud Platform. As part of your update strategy, you want to test new features with a small portion of live traffic to gather feedback, while most of the users should continue to interact with the stable version of the platform. What approach should you take?",
    answer:
      "A.\n- Deploy the platform on App Engine. For each update, create a new version of the same service. [ 296] \n- Configure traffic splitting to send a small percentage of traffic to the new version. [ 296]",
  },
  {
    question:
      "Your company, SolarTech Solutions, has an internal app that uses a Bigtable instance with three nodes, storing sensitive customer data, including personally identifiable information (PII). The security team has requested that you log all read and write operations, including metadata and configuration reads, and send these logs to your company’s Security Information and Event Management (SIEM) system. What should you do?",
    answer:
      "C.\n- Navigate to the Audit Logs page in the Google Cloud console, and enable Data Read, Data Write, and Admin Read logs for the Bigtable instance. [ 306] \n- Create a Pub/Sub topic as a Cloud Logging sink destination, and add your SIEM as a subscriber to the topic. [ 306]",
  },
  {
    question:
      "Your company, SwiftOrder Solutions, has an internal app that handles order processing for a single warehouse facility. The app is designed specifically for employees working on-site. It needs strong consistency, and quick queries, and supports ACID transactions for complex multi-table updates. Currently, the app runs on PostgreSQL, and you are looking to migrate it to the cloud with minimal changes to the existing codebase. Which cloud database service would best suit this application?",
    answer: "B. Cloud SQL",
  },
  {
    question:
      "A software development company, SwiftData Solutions, has created two separate environments on Google Cloud Kubernetes (GKE) for its application as mentioned below. You have used the kubectl get nodes command but are only able to view the nodes from the prod-environment. What commands should you execute to verify the node status for the dev-environment?\n- prod-environment, set up as a standard cluster. [ 317] \n- dev-environment, which is an auto-pilot cluster. [ 318]",
    answer:
      "A.\n1. gcloud container clusters get-credentials dev-environment [ 319] \n2. kubectl get nodes [ 319]",
  },
  {
    question:
      "Your team at ByteDome, a fast-growing app development company specializing in personalized game experiences, has noticed that developers frequently use multiple service account keys in their projects. To improve security and standardize practices, you need to implement a temporary solution while working on a long-term fix. Your requirements are mentioned below. You aim to implement a Google-recommended approach that is cost-effective and adheres to these requirements. What should you do?\n- Creating all service accounts requiring keys in a centralized project named game-sa-hub. [ 326] \n- Ensuring that any service account keys issued are valid for only one day. [ 326]",
    answer:
      "C.\n- Enforce an organization policy constraint that limits the lifetime of service account keys to 24 hours. [ 329] \n- Additionally, enforce an organization policy constraint that denies service account key creation, with an exception for game-sa-hub. [ 329]",
  },
  {
    question:
      "Your startup, DevWorks, is transitioning its app deployment process to run on Compute Engine instances. The CI/CD pipeline will now manage your cloud infrastructure entirely through infrastructure-as-code. How can you make sure the pipeline has the correct permissions while following security best practices?",
    answer:
      "D.\n- Create multiple service accounts, one for each pipeline, with the appropriate minimal IAM permissions. [ 338] \n- Use a secret management service to store the key files of these service accounts. [ 339] \n- Allow the CI/CD pipeline to request the necessary secrets during execution. [ 339]",
  },
  {
    question:
      "You manage a video streaming platform called StreamSphere that receives SSL-encrypted TCP traffic on port 443. Users from various regions across the globe connect to the platform. To ensure a seamless streaming experience, you want to minimize latency for these users. Which load-balancing solution would be the best choice?",
    answer: "C. SSL Proxy Load Balancer [ 344]",
  },
  {
    question:
      "Your team at CoderGen, a startup focused on mobile app development, needs a new build automation server for their latest project. The team has decided to use Jenkins, and you are tasked with setting up the server with minimal effort. What approach should you take?",
    answer:
      "D. Use GCP Marketplace to launch a pre-configured Jenkins solution. [ 350]",
  },
  {
    question:
      "ByteCrafters, a company that develops an e-commerce platform called ShopStream, needs to update the configuration of its infrastructure using Deployment Manager. They want to ensure that there is no downtime for any resources while performing the update. Which command should their DevOps team use to achieve this?",
    answer:
      "B. gcloud deployment-manager deployments update --config <deployment-config-path>",
  },
  {
    question:
      "A tech startup called TechSpire has developed a performance-monitoring app that needs to run on Google Cloud Platform. The app is a single binary application, and they want to automatically scale it based on the CPU usage of the underlying infrastructure. Due to their company policies, they are required to directly use virtual machines. TechSpire wants to ensure that the scaling process is operationally efficient and happens as quickly as possible. What should they do?",
    answer:
      "B. Create an instance template, and use the template in a managed instance group with autoscaling configured.",
  },
  {
    question:
      "You have a virtual Linux server for an online education platform that needs to connect to a Cloud SQL database. You have created a service account with the necessary permissions. Now, you need to ensure that this virtual machine uses the custom service account instead of the default one assigned by Compute Engine. What should you do?",
    answer:
      "A. When creating the VM via the web console specify the service account under the 'Identity and API Access' section.",
  },
  {
    question:
      "Imagine that you’re testing a new feature for a website called BookshelfHub, a platform that connects book lovers and independent bookstores. You’ve created an instance of SQL Server 2017 on Compute Engine to try out some database updates specific to the latest version. Now, you want to connect to this SQL Server instance on Compute Engine using the simplest and quickest setup. What should you do?",
    answer:
      "D.\n- Set a Windows username and password in the GCP Console. [ 377] \n- Confirm that a firewall rule for port 3389 is in place. [ 377] \n- Click the RDP button in the GCP Console to log in using those credentials. [ 377]",
  },
  {
    question:
      "Your company, ByteFrame Solutions, has a dedicated project for storing container images in the Artifact Registry. In a separate project, you are setting up a new GKE cluster for a web application you're deploying. You need to ensure that the Kubernetes cluster can pull container images from the Artifact Registry in the other project. What steps should you take?",
    answer:
      "A. In the project where the container images are stored, assign the Artifact Registry Reader IAM role to the service account used by the Kubernetes nodes. [ 381]",
  },
  {
    question:
      "You are setting up a Windows virtual machine for ByteSpace, a fictional app that analyzes large datasets in the cloud. You want to ensure that your team can log in to the VM via Remote Desktop Protocol (RDP). What is the best approach?",
    answer:
      "B. After the VM has been created, use “gcloud compute reset-windows-password” to retrieve the login credentials for the VM.",
  },
  {
    question:
      "A startup called RepliNet needs a scalable solution to automatically provision virtual machines (VMs) on Google Compute Engine. The configuration for these VMs, including specifications like CPU, memory, and storage, is stored in a separate configuration file. They want to use a method that aligns with Google's best practices. Which method should RepliNet use?",
    answer: "A. Deployment Manager [ 392]",
  },
  {
    question:
      "You are developing a new version of a popular task management app called TaskMaster, hosted on App Engine. You want to roll out the new version to just 1% of users initially, allowing you to monitor its performance before fully switching over to this new version for all users. What approach should you take?",
    answer:
      "D. Deploy the new version of TaskMaster in App Engine, then go to App Engine settings in GCP Console and split the traffic between the current version and the new version. [ 399]",
  },
  {
    question:
      "Your company, VideoStreamCo, manages a popular video-sharing platform where users upload their videos to a specific Cloud Storage Regional bucket. To optimize storage costs, you need to implement a policy that moves videos to Coldline storage after 90 days and deletes them after one year from their creation date. How should you configure this policy?",
    answer:
      "B.\n- Use Cloud Storage Object Lifecycle Management with Age conditions, setting the actions to SetStorageClass and Delete. [ 404] \n- Configure the SetStorageClass action to 90 days and the Delete action to 365 days. [ 405]",
  },
  {
    question:
      "You are a developer at a company called TechHive, and you've been assigned to deploy a newly built containerized application on Kubernetes Engine. The app has been containerized using a Dockerfile. What steps should you follow to ensure a successful deployment?",
    answer:
      "C.\n- Create a docker image from the Dockerfile and upload it to the Container Registry. [ 411]\n- Create a Deployment YAML file to point to that image. Use kubectl to create the deployment with that file. [ 411]",
  },
  {
    question:
      "You've been hired by a new tech startup, SpaceyMedia, to manage their cloud infrastructure on Google Cloud. One of your tasks is to produce a list of all the enabled Google Cloud Platform APIs for their GCP project. The project name is spacey-media-app. You need to use the gcloud command line within Cloud Shell to get this information. How do you proceed?",
    answer:
      "A. Run “gcloud projects list” to get the project ID, and then run “gcloud services list --project <project ID>”. [ 417]",
  },
  {
    question:
      "You are managing expenses for three different departments within your company’s online fitness platform. You need to create accurate cost estimates for various cloud services, broken down by service type, on a daily and monthly basis for the upcoming six months. The goal is to use standard query syntax for this analysis. What should you do?",
    answer:
      "D. Export your bill to a BigQuery dataset, and then write time window-based SQL queries for analysis. [ 423]",
  },
  {
    question:
      "You are managing the infrastructure for a new social media platform called SnapChirp, which allows users to share short audio clips. The platform is hosted on Google Kubernetes Engine with autoscaling enabled to handle fluctuating user traffic. You now need to expose SnapChirp's frontend application to the public, using HTTPS on a public IP address. What steps should you take?",
    answer:
      "A. Create a Kubernetes Service of type NodePort for your application, and a Kubernetes Ingress to expose this Service via a Cloud Load Balancer. [ 427]",
  },
  {
    question:
      'A startup called "EcoScan" is building an app that tracks and analyzes environmental data across multiple locations. They want to add a new team member, an auditor, who needs access to review all aspects of the project but should not have permission to make changes to any of the data or settings. How should EcoScan configure the auditor\'s permissions?',
    answer:
      "C.\n- Select the built-in IAM project Viewer role. [ 437] \n- Add the auditor's account to this role. [ 437]",
  },
  {
    question:
      "A popular social media app, PicFlare, is preparing for an increase in user traffic following the acquisition of another platform. To ensure their infrastructure can handle the surge, they need to create and deploy copies of their existing Compute Engine virtual machine (VM), which already has a custom image available, and to scale effectively. What should the team at PicFlare do?",
    answer:
      "D.\n- Create a custom Compute Engine image from a snapshot. [ 446] \n- Create your instances from that image. [ 446]",
  },
  {
    question:
      "Your company, TechStream Solutions, has deployed a custom web application called TaskFlow on a single Compute Engine instance. TaskFlow is designed to help users manage their daily tasks and project workflows. The application writes detailed logs to the local disk for tracking errors and system activities. Recently, users have started reporting issues when trying to submit tasks through the platform. You need to investigate and diagnose the cause of these errors to resolve the problem. What should you do?",
    answer:
      "D. Install and configure the Cloud Logging Agent and view the logs from Cloud Logging.",
  },
  {
    question:
      "A food delivery service called MealMetrics generates daily order reports on a Compute Engine virtual machine (VM). This VM resides in the project mealmetrics-reports. Your team works solely within the project mealmetrics-central-data and needs access to these daily reports, which are stored in the bucket mealmetrics-central-bucket. You want to configure the system so that the reports generated by the VM are automatically available in the bucket mealmetrics-central-bucket while using as few steps as possible and following Google-recommended best practices. What should you do?",
    answer:
      "B. Grant the VM Service Account the role Storage Object Creator on mealmetrics-central-bucket. [ 458]",
  },
  {
    question:
      "You are responsible for connecting two different teams within your organization that manage two distinct applications. Each application is running on its own group of Compute Engine instances across two separate GCP projects. Each group of instances resides in its own VPC, and now these instances need to communicate with each other. What should you do?",
    answer:
      "B.\n- Verify that both projects are part of a GCP Organization. [ 465] \n- Share the VPC from one project and allow the Compute Engine instances in the other project to use this shared VPC. [ 465]",
  },
  {
    question:
      "You are tasked with providing a cost estimate for a cloud-based logistics tracking system that runs on a Kubernetes cluster using the GCP pricing calculator. The system handles real-time data processing and requires high IOPs, along with the need for disk snapshots for backups. You begin by entering the number of nodes, the average hours of operation per day, and the number of active days per month. What should you do next?",
    answer:
      "A.\n- Fill in local SSD. [ 472] \n- Fill in persistent disk storage and snapshot storage. [ 472]",
  },
  {
    question:
      "You are part of a team at a new travel app startup that helps users book eco-friendly travel options. Your team is testing out different Kubernetes YAML configurations for one of the microservices in the app. You've run the below command. It was noticed that one of the pods is stuck in a PENDING state. You’ve been assigned to troubleshoot the issue. What should you do next?\n$ kubectl get pods -l app=travelbooking",
    answer:
      "C. Inspect the pending pod travelbooking-deployment-x2y3z4-lm89d and look for warning messages. [ 480]",
  },
  {
    question:
      "You are managing the infrastructure for an e-commerce website called ShopVerse, and you need to configure secure SSH access to a single Compute Engine instance for developers in the dev1 team. This particular instance hosts a microservice, and it is the only resource in this ShopVerse GCP project that the dev1 developers need to access. What should you do?",
    answer:
      "A.\n- Set metadata to enable-oslogin=true for the instance. [ 485] \n- Grant the dev1 team the compute.osLogin role. [ 485] \n- Instruct them to use the Cloud Shell to SSH into the instance. [ 486]",
  },
  {
    question:
      "You need to launch a new virtual machine for a website called NoveltyExpress, but the project for this website hasn't been set up yet. What steps should you take?",
    answer:
      "A. Using the Cloud SDK, create a new project, enable the Compute Engine API in that project, and then create the instance specifying your new project. [ 494]",
  },
  {
    question:
      "A startup called SparkThreads runs a complex data processing task on an on-premises server that takes about 40 hours to complete. This task is performed monthly, can run without user interaction, and must restart if interrupted. SparkThreads wants to move this workload to the cloud while keeping costs as low as possible. What approach should they take?",
    answer:
      "C.\n- Migrate the workload to a Compute Engine VM. [ 501] \n- Start and stop the instance as needed. [ 501]",
  },
  {
    question:
      "Your company runs a platform that rents out specialized drones to agricultural businesses for monitoring crop health and irrigation needs. Each drone is equipped with multiple sensors that transmit event data every few seconds. The data includes information such as flight status, distance covered, battery level, and camera feeds. Customers are charged based on the metrics collected by these sensors. You anticipate high throughput, with thousands of events being generated every hour by each drone. You need to retrieve consistent data based on the event's timestamp, and each signal update should be atomic. How should you handle this?",
    answer:
      "D. Ingest the data into Cloud Bigtable and create a row key based on the event's timestamp. [ 508]",
  },
  {
    question:
      'You work for a growing e-commerce platform, "ShopZen," which uses BigQuery to analyze customer behavior and sales trends. You are about to run an important query to understand customer purchase patterns, but you expect the query to return a large number of records. Since ShopZen is using on-demand pricing, you want to figure out how much running the query will cost. What should you do?',
    answer:
      "B.\n- Use the command line to run a dry run query to estimate the number of bytes read. [ 514] \n- Then convert that bytes estimate to dollars using the Pricing Calculator. [ 514]",
  },
  {
    question:
      'A company called "QuickFoodz" has developed a food delivery application that is packaged into a Docker image. They want to deploy this Docker image as a workload on Google Kubernetes Engine. What steps should they take?',
    answer:
      "D. Upload the image to the Container Registry and create a Kubernetes Deployment referencing the image. [ 522]",
  },
  {
    question:
      "Techventure Corp, a startup developing a new social networking app, has asked you to set up the billing configuration for their newly adopted Google Cloud environment. They want to ensure that resources with similar access and permission settings can be easily managed together. How should you approach this?",
    answer:
      "B. Use folders to group resources that share common IAM policies. [ 526]",
  },
  {
    question:
      'You are managing the infrastructure for a new application called "Taskify" which helps users organize their daily to-do lists. You\'ve deployed several Linux-based virtual machines on Compute Engine to run backend services for Taskify. Over the next few weeks, you plan to expand and add more instances. You need to ensure that you can connect to all these instances securely via SSH from your local machine, but without exposing public IP addresses for any of the Compute Engine instances. What should you do?',
    answer: "B. Configure Cloud Identity-Aware Proxy for SSH and TCP resources",
  },
  {
    question:
      "The fictional company “StellarWeb Solutions” has three projects: Apollo, Luna, and Nova. They need to set up monitoring for application performance on these projects as a unified view. The team wants to track metrics such as CPU, memory, and disk usage across all three projects. What is the best course of action?",
    answer:
      "D. Enable the API, create a workspace under Apollo, and add Luna and Nova projects to it. [ 537]",
  },
  {
    question:
      "You are managing a group of services in a Kubernetes Engine cluster for a fictional mobile app called PixelMagic. One of the services is responsible for processing high-resolution images for users, which requires a large amount of CPU but not as much memory. The other services handle routine tasks such as account management and notifications and are optimized for n1-standard machine types. You want to make sure all of these services are using resources efficiently to keep your infrastructure costs down while maintaining performance. What should you do?",
    answer:
      "B.\n- Create a node pool with compute-optimized machine type nodes for the image processing service. [ 541] \n- Use the node pool with general-purpose machine type nodes for the other services. [ 542]",
  },
  {
    question:
      "A growing tech startup, WebTech Solutions, has developed a cloud-based collaboration app called CollabHub. The team has decided to create a secure and reliable Virtual Private Network (VPN) connection between their new Virtual Private Cloud (VPC) and an external data center. Key considerations include using dynamic routing, working with an IP address range of 10.108.0.1/22, and ensuring that no extra tunnels are set up during failover. The company wants to follow Google's best practices to ensure high availability for the Cloud VPN. What steps should they take?",
    answer:
      "C.\n- Use a custom mode VPC network [ 551] \n- Use Cloud Router border gateway protocol (BGP) routes [ 551] \n- Use active/passive routing. [ 551]",
  },
  {
    question:
      "You have developed a new mobile app called EcoShop, which integrates with several Google Cloud services. The app works seamlessly on your local development environment using Application Default Credentials for authentication. Now, you plan to move EcoShop to a Compute Engine virtual machine (VM) and want to configure authentication using Google-recommended practices while making minimal changes. What should you do?",
    answer:
      "A. Assign appropriate access for Google services to the service account used by the Compute Engine VM.",
  },
  {
    question:
      'You are managing a dashboard for a fictional online marketplace app, "ShopSmart", that uses Data Studio to visualize sales data from a data warehouse built on top of BigQuery. Throughout the day, new transactions are appended to the data warehouse, and at night, the summary table of daily sales is recalculated and overwritten. You recently noticed that the sales charts on your dashboard have stopped displaying properly, and you need to investigate the issue. What should you do?',
    answer:
      "B. Use the BigQuery interface to review the nightly job and look for any errors. [ 564]",
  },
  {
    question:
      "You are developing a global e-learning platform that tracks user progress and stores course completion data in a database. As the platform grows in popularity, you're concerned about ensuring consistent performance. You need to provide an optimal learning experience for users worldwide while keeping management tasks simple. What should you do?",
    answer:
      "B. Use Cloud Spanner to store user data associated with their course completion progress. [ 570]",
  },
  {
    question:
      "You've set up the CloudCLI tool for managing the infrastructure of a new e-commerce platform, ByteMart, and you’ve also configured a proxy for secure communication. However, you’re concerned that your proxy credentials might be logged in the CLI tool’s logs, and you want to ensure that sensitive information remains secure. How can you prevent your proxy credentials from being logged?",
    answer:
      "D. Set the CLOUDSDK_PROXY_USERNAME and CLOUDSDK_PROXY_PASSWORD properties using environment variables in your system's command line tool. [ 576]",
  },
  {
    question:
      'Your company has built an online food delivery platform called "QuickEats" which runs on Google Kubernetes Engine. Some microservices, like recommendation engines, can tolerate downtime, while others, such as order processing, must remain available at all times. You are tasked with configuring a Google Kubernetes Engine (GKE) cluster in a cost-efficient way. What should you do?',
    answer:
      "D.\n- Create a cluster with both a Spot VM node pool and a node pool using standard VMs. [ 583] \n- Deploy the critical deployments on the node pool using standard VMs and the fault-tolerant deployments on the Spot VM node pool. [ 584]",
  },
  {
    question:
      "You are managing a popular e-learning platform called LearnMate. You want to deploy a new version of the platform’s backend using serverless technology in Google Cloud. However, before fully rolling it out, you want to test this new version with a small percentage of your production users to ensure it functions as expected. What should you do?",
    answer:
      "A.\n- Deploy the application to Cloud Run. [ 588] \n- Use gradual rollouts for traffic splitting. [ 589]",
  },
  {
    question:
      "Your company, EverGlow Apps, has a critical online marketplace application running on a specific Compute Engine instance within your Google Cloud project. As part of EverGlow Apps' security vulnerability management policy, a security team member needs to have visibility into potential vulnerabilities and other OS metadata for this instance. You need to ensure that the policy is correctly implemented to maintain the security of the application. What should you take?",
    answer:
      "C.\n- Ensure that the OS Config agent is installed on the Compute Engine instance. [ 599] \n- Provide the security team member roles/osconfig.vulnerabilityReportViewer permission. [ 599]",
  },
  {
    question:
      'You are working for a fictional e-commerce platform called "ShopEase" that provides a seamless shopping experience to customers worldwide. Your development team is preparing to deploy new features to an existing Cloud Run service that powers the platform\'s product recommendation engine. To reduce risks associated with the deployment of a new revision, you want to minimize the number of customers affected by potential outages, while ensuring there are no additional costs for your customers. You also want to adhere to Google-recommended practices for managing service revisions. What should you do?',
    answer:
      "B. Gradually roll out the new revision and split customer traffic between the revisions to allow rollback in case a problem occurs. [ 605]",
  },
  {
    question:
      "You are developing a fitness tracking app called FitPulse, which stores relational data from users such as workout sessions, health stats, and personal profiles. Users from all over the world will be using this app, but the potential size of the user base is unpredictable. The CTO is concerned about the app’s ability to scale efficiently without requiring significant configuration updates as more users join. You need to choose a database solution that can grow seamlessly with your app’s increasing user base. Which storage solution would be the most appropriate?",
    answer: "C. Cloud Spanner",
  },
  {
    question:
      "A company called BrightTech has deployed a web application on a Compute Engine instance. An external contractor needs access to the Linux-based instance to perform maintenance tasks. The contractor is connected to BrightTech's corporate network through a VPN, but they do not have a Google account. What should you do?",
    answer:
      "C.\n- Instruct the external contractor to generate an SSH key pair, and request the public key from the contractor. [ 616] \n- Add the public key to the instance yourself, and have the contractor access the instance through SSH with their private key. [ 617]",
  },
  {
    question:
      "After a recent breach of its mobile shopping platform, your fictional company, SnapShop, is seeking better visibility into activity within its Google Cloud environment. Specifically, they want to monitor any unexpected changes to firewall rules and the creation of new virtual machines. SnapShop favors straightforward and uncomplicated solutions. What should you do?",
    answer:
      "B.\n- Use Cloud Logging filters to create log-based metrics for firewall and instance actions. [ 623] \n- Monitor the changes and set up reasonable alerts. [ 623]",
  },
  {
    question:
      "Your company, FinTechGuru, has developed a financial data processing application running on a managed instance group in Compute Engine. This application handles TCP traffic on port 389 and needs to ensure that the original IP address of clients sending requests is preserved. You plan to make this application accessible to the internet through a load balancer. What should you do?",
    answer:
      "A. Expose the application by using an external TCP Network Load Balancer.",
  },
  {
    question:
      'You are setting up service accounts for a new mobile app called "QuickServe" that spans across multiple projects. Virtual machines (VMs) operating within the "QuickServe-frontend" project need access to BigQuery datasets stored in the "QuickServe-database" project. To adhere to Google-recommended best practices, how should you configure access for the service account in the "QuickServe-frontend" project?',
    answer:
      "D. Grant roles/bigquery.dataViewer role to QuickServe-database and appropriate roles to QuickServe-frontend. [ 636]",
  },
  {
    question:
      'Your startup, "DataStream Analytics," operates a data processing platform on a single Virtual Private Cloud (VPC) network within a single subnetwork that has a range of 10.18.20.128/25. The subnetwork has no available private IP addresses. You need to add new virtual machines (VMs) that will be able to communicate with your existing platform’s cluster while using the minimum number of steps. What should you do?',
    answer: "A. Modify the existing subnet range to 10.18.20.0/24. [ 640]",
  },
  {
    question:
      "You have developed a fitness tracking app called FitPulse, and you manage the backend using Google Cloud's Compute Engine. Most of the virtual machines supporting FitPulse are hosted in the europe-west1-d zone. You've installed and authenticated the gcloud CLI to manage these instances, but you'd like to avoid manually specifying the zone every time you run a command to manage your VMs. What should you do?",
    answer:
      "A. Set the europe-west1-d zone as the default zone using the gcloud config subcommand. [ 647]",
  },
  {
    question:
      'You are developing a new social media platform for food enthusiasts called "TasteShare." You are looking for a Jenkins installation to build and deploy your platform\'s code. To streamline this process, you want to automate the Jenkins installation as quickly and easily as possible. What should you do?',
    answer: "A. Deploy Jenkins through the Google Cloud Marketplace. [ 652]",
  },
  {
    question:
      "Your company, SwiftMedia Solutions, operates several different apps on Google Cloud across various departments. The Marketing department has launched a new app called AdWave, and you need to ensure that the Marketing team is billed only for the Google Cloud services they use for this app. What should you do?",
    answer:
      "A.\n1. Verify that you are assigned the Billing Administrator IAM role for SwiftMedia's Google Cloud Project related to the Marketing department. [ 660]\n2. Link the new project for AdWave to a Marketing Billing Account. [ 660]",
  },
  {
    question:
      "You are building a backend service for a ride-sharing app that will store trip and fare data from mobile and web users. Once the app is launched, you anticipate a high volume of rides and transactions worldwide. Your analytics team needs to run SQL queries to gain insights from this data. You need to implement a data store that is highly available and scalable to meet these demands. What should you do?",
    answer:
      "A. Create a multi-region Cloud Spanner instance with an optimized schema. [ 669]",
  },
  {
    question:
      'You have made extensive changes to the infrastructure automation script for your company’s event ticketing app "EventHorizon," which uses Deployment Manager for provisioning resources on GCP. Before committing the changes, you want to verify that all resource dependencies are correctly defined. You need the quickest possible validation. What should you do?',
    answer:
      'D. Use the "--preview" flag to execute the Deployment Manager template in the same project, then review the status of dependent resources. [ 675]',
  },
  {
    question:
      "Your company is an A.C manufacturer. You are head of a research and development project and looking to build a mobile app to remotely access the A.C. For this, it is essential to build a pipeline to process time-series data. Given that services in boxes '2' & '3' are used for 'Storage' & 'Analytics' purposes respectively. Which Google Cloud Platform services should you put in boxes 1, 2, and 3?",
    answer:
      "D.\n1. Cloud Dataflow [ 684]\n2. Cloud Bigtable [ 685]\n3. BigQuery [ 685]",
  },
  {
    question:
      'The fictional company "DataHaven" runs a large analytics platform using BigQuery, and they\'ve hired an external auditing firm to review their data access logs. As part of their security audit, DataHaven wants to ensure proper IAM access audit logging is configured for the external auditors, following Google-recommended practices. What should DataHaven do?',
    answer:
      "A. Add the auditors group to the 'logging.viewer' and 'bigquery.dataViewer' predefined IAM roles. [ 690]",
  },
  {
    question:
      "You are tasked with setting up permissions for a fleet of virtual machines used by GreenTech's environmental data analysis app. These machines need to write sensor data into a specific Cloud Storage bucket. You want to follow Google-recommended practices for this setup. What should you do?",
    answer:
      "C. Create a service account and add it to the IAM role 'storage.objectCreator' for that bucket. [ 697]",
  },
  {
    question:
      "Imagine you run a fictional company called SnapTech, which manages a popular photo-sharing app. SnapTech stores sensitive user photos in three separate Cloud Storage buckets. You've enabled data access logging to keep track of all interactions with the stored photos. Now, you need to investigate the activities of a specific employee related to these buckets. Specifically, you want to verify which photos this employee has viewed and whether they've added or modified any metadata labels on the photos while using the fewest possible steps. (Note: Stackdriver is now called 'Google Cloud's Operation Suite')",
    answer:
      "A. Using the GCP Console, filter the Activity log to view the information. [ 702]",
  },
  {
    question:
      "You are part of a team that manages an e-commerce platform called ShopFlare. You need to share a report containing sensitive transaction data with a third-party analytics company. The company does not use Google accounts, so you cannot assign user-based access. You want to ensure the data is only accessible for four hours and is securely shared with the fewest steps. What should you do?",
    answer:
      "A. Create a signed URL with a four-hour expiration and share the URL with the company. [ 707]",
  },
  {
    question:
      "Your company, Arcadia FinTech, has recently expanded its operations, and you are tasked with confirming when a new service account was created in the cloud infrastructure. The service account is critical for automated transactions across the platform, and you need to verify the exact creation time. What steps should you take?",
    answer:
      "A.\n- Filter the Activity log to view the Configuration category. [ 714] \n- Filter the Resource type to Service Account. [ 714]",
  },
  {
    question:
      "Your company, DataBreeze Solutions, is launching a cloud-native analytics platform. As part of your infrastructure, you're setting up a Google Kubernetes Engine (GKE) cluster with the cluster autoscaler feature enabled. You need to ensure that a monitoring pod is deployed on each node of the cluster to collect and send container metrics to a third-party monitoring tool. What should you do?",
    answer: "B. Deploy the monitoring pod in a DaemonSet object. [ 722]",
  },
  {
    question:
      "You are managing an online gaming platform hosted in a subnet with a subnet mask of 255.255.255.220. The current subnet is out of available IP addresses, but you need to add 15 more IP addresses to support new game servers. All existing and new game servers should be able to communicate seamlessly without introducing additional network routes. What is your next step?",
    answer:
      "A. Use gcloud to expand the IP range of the current subnet. [ 727]",
  },
  {
    question:
      "Your company, TechComm Solutions, uses WorkSuite for internal communication and collaboration. Every employee has a WorkSuite account. Now, you want to grant access to some WorkSuite users so they can work on your InnovateCloud project. What steps should you take?",
    answer:
      "B. Assign the necessary IAM roles to the users by using their WorkSuite email addresses. [ 733]",
  },
  {
    question:
      "A tech company called ByteStream Solutions has two separate projects running on Google Cloud. One project is operating in its default region and zone, while the other is running in a non-default region and zone. They want to launch a new Compute Engine instance for each of these projects using the command line interface. How should they proceed?",
    answer:
      "A.\n- Create two configurations using “gcloud config configurations create [NAME]”. [ 738] \n- Run “gcloud config configurations activate [NAME]” to switch between accounts when running the commands to start the Compute Engine instances. [ 738]",
  },
  {
    question:
      'You are managing cloud resources for a fictional company, "TechEase Solutions," which runs both production and development environments on the Google Cloud Platform. You are tasked with setting up an automated process to retrieve a list of all compute instances across both environments daily. What should you do?',
    answer:
      "A.\n- Create two configurations using gcloud config. [ 746] \n- Write a script that sets configurations as active, individually. [ 746] \n- For each configuration, use “gcloud compute instances list” to get a list of compute resources. [ 746]",
  },
  {
    question:
      "Your company, DataPro Insights, has a massive 7-TB AVRO file stored in a Cloud Storage bucket. The data scientists on your team, who are only familiar with SQL, need to access and analyze the data from this file. You are tasked with finding a cost-efficient solution that will allow them to use SQL to query the data as quickly as possible. What should you do?",
    answer:
      "C.\n- Create external tables in BigQuery that reference the Cloud Storage bucket. [ 754] \n- Run SQL queries directly on these external tables. [ 754]",
  },
  {
    question:
      "Your team manages a website called ShopSmart, which is currently running on App Engine in a development environment. After successful testing, you now need to set up a new project to serve as the production environment for the website. What should you do?",
    answer:
      "A. Use gcloud to create the new project, and then deploy your application to the new project. [ 759]",
  },
  {
    question:
      "Your company, QuickShop, has deployed an inventory tracking server on Compute Engine. The server communicates securely with clients via TLS over port 636 using UDP. You want to ensure that clients can access the server over this port. What steps should you take?",
    answer:
      "C.\n- Add a network tag of your choice to the instance. [ 765] \n- Create a firewall rule to allow ingress on UDP port 636 for that network tag. [ 765]",
  },
  {
    question:
      "You are managing three separate projects on SparkData Analytics, a cloud-based platform for data processing. These projects utilize a range of services, including the Compute Engineer service. All of the projects are tied to a single billing account. You need to set a budget alert specifically for one of these projects. What steps should you take?",
    answer:
      "A.\n- Verify that you are the project billing administrator. [ 771] \n- Select the associated billing account and create a budget and alert for the appropriate project. [ 771]",
  },
  {
    question:
      "Your company, TechSavvy Games, runs gaming workloads on Compute Engine and on-premises servers. The Virtual Private Cloud (VPC) of TechSavvy Games is connected to the company’s Wide Area Network (WAN) using a Virtual Private Network (VPN). You need to launch a new Compute Engine instance that will ensure no public Internet traffic is routed to it. What should you do?",
    answer: "A. Create the instance without a public IP address. [ 778]",
  },
  {
    question:
      "Your team manages the infrastructure for a mobile app called QuickPark, which helps users find parking spots in real-time. The app's infrastructure requires some changes to improve performance. You need to share the proposed changes with your team in a way that aligns with Google's recommended best practices. What should you do?",
    answer:
      "B. Use Deployment Manager templates to describe the proposed changes and store them in Cloud Source Repositories.",
  },
  {
    question:
      "Your company, SkyCast, operates a Google Kubernetes Engine (GKE) cluster where various teams deploy non-production workloads. The Data Analytics team requires Nvidia Tesla P100 GPUs to train their complex machine-learning models. You want to ensure that this request is fulfilled efficiently, minimizing both effort and costs. What is the best approach?",
    answer:
      "D.\n- Add a new node pool with GPU support to the existing GKE cluster. [ 790] \n- Then, request the Data Analytics team to use the cloud.google.com/gke-accelerator: nvidia-tesla-p100 nodeSelector in their pod specification. [ 791]",
  },
  {
    question:
      'You are the project owner of a new online photo-sharing platform called "Snapify," which allows users to upload, share, and store their photos. You want to delegate control to your colleagues so they can manage the storage buckets and files where the photos are stored. Following Google-recommended practices, which IAM roles should you grant your colleagues?',
    answer: "B. Storage Admin [ 795]",
  },
  {
    question:
      "Your company, FleetEasy, runs a fleet management application on Google Kubernetes Engine (GKE). The app currently utilizes several pods spread across four GKE n1-standard-2 nodes. You need to expand the system by deploying new pods that will require n2-highmem-16 nodes. The goal is to complete this deployment without any service downtime. What should you do?",
    answer:
      "B.\n- Create a new Node Pool and specify machine type n2-highmem-16. [ 801] \n- Deploy the new pods. [ 802]",
  },
  {
    question:
      "Your company, DigiFitness, runs a fitness tracking application that uses Cloud Spanner as the primary database to maintain real-time user state data such as workout progress, steps, and health metrics. All user-triggered events, such as starting or stopping workouts or completing goals, are logged into Cloud Bigtable. Daily backups of Cloud Spanner data are stored in Cloud Storage. A data analyst from your team has requested to join data from both Cloud Spanner and Cloud Bigtable for specific users to generate insights. You need to handle this ad hoc request efficiently. What should you do?",
    answer:
      "D.\n- Create two separate BigQuery external tables on Cloud Storage and Cloud Bigtable. [ 809] \n- Use the BigQuery console to join these tables through user fields, and apply appropriate filters. [ 809]",
  },
  {
    question:
      "Imagine that a popular online data analysis tool, DataDive Inc., is migrating its on-premises data processing application to Google Cloud Platform. The app processes large datasets and requires 96 vCPUs to ensure optimal performance. DataDive Inc. needs to recreate a similar environment on GCP to maintain smooth data processing. What should they do?",
    answer: "A. When creating the VM, use machine type n1-standard-96. [ 814]",
  },
  {
    question:
      'You are managing an online ticketing platform called "TicketPro" hosted on Compute Engine virtual machines (VMs) in us-central1-a. The platform is growing rapidly, and you want to enhance its reliability by adjusting the architecture to handle the failure of a single Compute Engine zone. Your goal is to ensure zero downtime and minimize costs. What should you do?',
    answer:
      "A.\n- Create Compute Engine resources in us-central1-b. [ 820] \n- Balance the load across both us-central1-a and us-central1-b. [ 821]",
  },
  {
    question:
      "The team at BrightWeb, a social media analytics platform, needs a solution for archiving historical user data in a Cloud Storage bucket. The solution must be cost-efficient. The data often has multiple versions and older versions should be archived after 30 days. Previous versions are accessed once a month for generating reports, and some of this archived data may be updated at the end of each month. What should the team do?",
    answer:
      "B. Add a bucket lifecycle rule that archives data with newer versions after 30 days to Nearline Storage. [ 828]",
  },
  {
    question:
      "The company you work for, Skybright Solutions, has developed a cloud-based application that manages real-time weather data for businesses. A colleague has handed over the responsibility of maintaining the Skybright project to you. As part of a security audit, you need to review which individuals or accounts have been assigned the Project Owner role in the system. What should you do?",
    answer:
      "D. Use the command “gcloud projects get-iam-policy” to see the current role assignments. [ 834]",
  },
  {
    question:
      "You manage a web service called StudyPal, a popular app that helps students manage their coursework, hosted on a Compute Engine instance. The application operates between 9 AM and 6 PM on weekdays. You need to set up a daily backup for this instance for disaster recovery, and you want to retain these backups for 30 days. The goal is to use the Google-recommended solution with the least management overhead and the fewest services. What should you do?",
    answer:
      "B.\n1. In the Cloud Console, go to the Compute Engine Disks page and select your instance's disk. [ 840]\n2. In the Snapshot Schedule section, select Create Schedule and configure the following parameters: [ 840] \n- Schedule frequency: Daily [ 841] \n- Start time: 1:00 AM – 2:00 AM [ 841] \n- Autodelete snapshots after: 30 days [ 841]",
  },
  {
    question:
      'You are managing an online platform called "EcoCrafts" that operates several microservices deployed across multiple Google Cloud projects. Each of these projects is associated with different billing accounts. To better estimate and track future charges, you want a single, unified visual representation of all the costs across these projects. You also want to ensure that the latest cost data is incorporated quickly. What should you do?',
    answer:
      "A. Configure Billing Data Export to BigQuery and visualize the data in Data Studio. [ 848]",
  },
  {
    question:
      "Your company, DataFlow Dynamics, operates an analytics platform that processes large datasets every night. This process requires numerous virtual machines (VMs) to handle the workload, but the cost has become a concern. Since the workload is fault-tolerant and can handle some of the VMs being terminated unexpectedly, you're looking for a more cost-efficient solution. What should you do?",
    answer:
      "A.\n- Run a test using simulated maintenance events. [ 853] \n- If the test is successful, use preemptible N1 Standard VMs when running future jobs. [ 854]",
  },
  {
    question:
      "Your team manages an online photo-editing service called SnapPixel that runs on Compute Engine VM instances within a custom Virtual Private Cloud (VPC). Due to company security policies, only internal IP addresses are allowed for your VM instances, and they are not permitted to connect to the internet. However, SnapPixel needs to access an image file stored in a Cloud Storage bucket within your project. How should you configure the environment to meet both the security requirements and allow access to the file?",
    answer:
      "C. Enable Private Google Access on the subnet within the custom VPC. [ 861]",
  },
  {
    question:
      "Your company, TechFusion Inc., has recently acquired a mobile app development startup, AppNex. Now, you are tasked with merging the IT infrastructure of both companies. AppNex has a production project hosted on Google Cloud, and you need to move that project under TechFusion Inc.'s Google Cloud organization while ensuring that it is billed to your organization. You want to complete this task with minimal effort. What should you do?",
    answer:
      "A.\n- Use the projects.move method to move the project to your organization. [ 866] \n- Update the billing account of the project to TechFusion Inc.'s billing account. [ 867]",
  },
  {
    question:
      "You are managing the DNS configuration for a new online platform, TechFolio, which helps users build and host their professional portfolios. You want to create DNS records that will direct traffic from home.techfolio.com, techfolio.com, and www.techfolio.com to the IP address of your Google Cloud load balancer. What should you do?",
    answer:
      "C.\n- Create one A record to point techfolio.com to the load balancer [ 876] \n- Create two CNAME records to point WWW and HOME to techfolio.com respectively. [ 876]",
  },
  {
    question:
      "Your startup, which manages a range of digital products through several Google Cloud projects, needs to track expenses across these projects. To ensure accurate and real-time reporting, you want to set up a system where the cost metrics are tailored to your company's evolving financial requirements. The solution should also be automated to reduce manual work. What should you do?",
    answer:
      "D.\n- Configure Cloud Billing data export to BigQuery for the billing account. [ 883] \n- Create a Looker Studio dashboard on top of the BigQuery export. [ 883]",
  },
  {
    question:
      "Your team at TechTronic Solutions is tasked with deploying a specific project management platform (PMP) to Google Cloud. You need a fast and straightforward way to deploy and install this platform. What should you do?",
    answer:
      "B.\n- Search for the PMP solution in Google Cloud Marketplace. [ 889] \n- Deploy the solution directly from Cloud Marketplace. [ 890]",
  },
  {
    question:
      'You are working for a fictional app company called "CodeCraft," which was officially launched 6 months ago. As your user base expands, your reliance on Google Cloud services increases. You want to ensure that all engineers at CodeCraft can create new projects without needing to provide their personal credit card details. What action should you take?',
    answer:
      "A.\n- Create a Billing account and associate a payment method with it [ 896] \n- Provide all project creators with permission to associate that billing account with their projects. [ 896]",
  },
  {
    question:
      "Your company specializes in providing fitness-tracking devices that monitor user activity in real-time. These devices collect various health metrics such as heart rate, steps taken, calories burned, and more. The collected data is sent to your platform every few seconds. Users are charged based on the duration and intensity of their activities as tracked by these devices. You expect to handle a high volume of incoming data – up to thousands of data points per device every hour – and need to ensure consistent retrieval based on the event timestamps. Each data entry should be processed atomically. What should you do?",
    answer:
      "D.\n- Ingest the data into Bigtable. [ 905] \n- Create a row key based on the event timestamp. [ 905]",
  },
  {
    question:
      "You have just installed the Google Cloud CLI on your corporate laptop for managing your company's online retail platform hosted on Google Cloud. To list all the existing instances related to your platform using the “gcloud compute instances list” command, what must you do first? (Choose two.)",
    answer:
      "A.\n- Run “gcloud auth login”, enter your login credentials in the dialog window, and paste the received login token to the gcloud CLI. [ 910]\nE. Run “gcloud config set project $my_project” to set the default project for the gcloud CLI. [ 913]",
  },
  {
    question:
      "Your company's automated pizza delivery app, SpeedySlice, is facing an issue where the continuous integration and delivery (CI/CD) system can't perform certain actions on a specific Google Cloud project due to permission problems. You need to check whether the service account used by SpeedySlice's CI/CD system has the correct roles assigned within this project. What should you do?",
    answer:
      "A. Open the Google Cloud console, and check the Identity and Access Management (IAM) roles assigned to the service account at the project or inherited from the folder or organization levels. [ 918]",
  },
  {
    question:
      "Your company, ByteFleet, recently created a new SaaS platform that provides real-time analytics for transportation companies. To manage and automate resource access within the platform, you received a JSON file that contains a private key tied to a Service Account. You've already downloaded and installed the Cloud SDK and now need to use this private key to authenticate and authorize yourself for running gcloud commands to interact with the various services in your Google Cloud project. What is the correct next step?",
    answer:
      "B. Use the command “gcloud auth activate-service-account” and point it to the private key. [ 1562]",
  },
  {
    question:
      "A new food delivery app, FoodJoy, has experienced rapid growth, leading to a high volume of orders being placed every minute. The processing demand has surpassed the capabilities of a single virtual machine (VM). You need to distribute these incoming orders across multiple servers in real time while ensuring the solution remains cost-effective. What should you do?",
    answer:
      "C.\n- Send orders to Pub/Sub. [ 1570] \n- Process them in VMs in a managed instance group. [ 1570]",
  },
  {
    question:
      "Your company, BrightTech Solutions, is expanding its cloud infrastructure for a new mobile application. You need to establish a direct connection between your on-premises data center and several virtual machines hosted inside a virtual private cloud (VPC) on Google Cloud. The goal is to provide fast, secure access for your team to these VMs, while also keeping the solution low-maintenance and cost-effective. What should you do?",
    answer:
      "B. Use Cloud VPN to create a bridge between the VPC and your network. [ 1575]",
  },
  {
    question:
      "You are designing a new weather-tracking app that collects and stores data from thousands of sensors spread across the country. The app will store up to 15 petabytes (PB) of weather data and needs to support fast reads and writes of small data packets from each sensor. The data schema for these sensor readings is simple. You want to choose the most cost-effective solution for storing this data. What should you do?",
    answer:
      "C.\n- Store the data in Cloud Bigtable [ 1582] \n- Implement the business logic in the programming language of your choice. [ 1583]",
  },
  {
    question:
      "You are responsible for managing the media processing service for a growing streaming platform called StreamHaven. The platform allows users to upload and encode videos, which need to be processed at any time without interruption or performance degradation. The user base is rapidly expanding, and ensuring that the video encoding service is highly available is critical to avoid downtime. You also want to automate operational tasks in line with best practices recommended by Google. What should you do?",
    answer:
      "D.\n- Deploy the encoding service to an instance group [ 1592] \n- Set the autoscaling based on CPU utilization. [ 1592]",
  },
  {
    question:
      'You are managing a delivery tracking platform called "ParcelFlow" deployed on Google Kubernetes Engine (GKE). The system has two main components: the backend service that processes parcel data and the frontend service used by customers to track their packages. To ensure seamless communication between your frontend pods and backend service pods, even during pod movement or restarts, what steps should you take?',
    answer:
      "A. Create a service that groups your backend service pods, and configure the frontend pods to communicate through this service.",
  },
  {
    question:
      'You are in charge of managing a digital address book service for "GeoMap," a global map and location services company. The service will allow users to add, update, delete, and list addresses. Each of these functions is handled by a different Docker container microservice. The demand on the service can range from low to extremely high. You need to deploy this service on Google Cloud to ensure it is scalable and requires minimal maintenance. What should you do?',
    answer: "A. Deploy your Docker containers into Cloud Run. [ 1601]",
  },
  {
    question:
      "Your company, NebulaTech, is launching its first cloud-based app, StarTrack. The app will be used to monitor and track user engagement in real-time and includes sensitive user data. You need to ensure that only specific members of the development team, such as data engineers and security analysts, have access to this sensitive information. To keep administrative overhead low, you want to assign the most appropriate Identity and Access Management (IAM) roles with minimal maintenance. What should you do?",
    answer:
      "D.\n- Create groups. [ 1610] \n- Assign an IAM Predefined role to each group as required, including those who should have access to sensitive data. [ 1610] \n- Assign users to groups. [ 1611]",
  },
  {
    question:
      "You are managing data for a popular food delivery app called QuickBite. The app has specific data retention guidelines as given below. You want to implement these guidelines automatically and in the simplest way possible. What should you do?\n- Archive order records older than one year. [ 1615] \n- Delete order records older than five years. [ 1615] \n- Store all other data in standard storage. [ 1615]",
    answer: "A. Set up Object Lifecycle management policies. [ 1616]",
  },
  {
    question:
      "Your startup, ByteSpace, has collected a massive amount of unstructured data in various file formats from your app's users. You need to perform ETL transformations on this data and ensure it is accessible for a Dataflow job on Google Cloud. What is the best approach?",
    answer:
      "B. Upload the data to Cloud Storage using the gcloud storage command. [ 1623]",
  },
  {
    question:
      "You manage an online platform that you want to make accessible to all members of your affiliate network. The application is hosted on a server with a specific IP address. To ensure smooth operation, you don't want to update the IP address in your DNS settings if the server fails or needs to be swapped out. Additionally, you want to minimize downtime while keeping setup and costs as low as possible. What is the best approach?",
    answer:
      "C. Reserve a static external IP address and assign it through Cloud DNS.",
  },
  {
    question:
      "Your company, SwiftCart, runs an online marketplace platform that uses Cloud Storage for storing user-uploaded product images and Firestore to store product listings and customer data. You are responsible for monitoring all changes in both the product images and listings. For each change, you need to invoke a verification action that ensures compliance of the new data in near real-time. You want to implement this with minimal configuration. What should you do?",
    answer:
      "B. Use Cloud Function events, and call the compliance script from the Cloud Function triggers. [ 1635]",
  },
  {
    question:
      "Your company, DataFlow Ventures, manages an online education platform that uses BigQuery for analyzing student engagement data. The team of data analysts working on this project frequently changes, and it’s often quite small. You need to allow these analysts to perform queries on BigQuery while following Google-recommended practices for managing access efficiently. What should you do?",
    answer:
      "C.\n1. Create a dedicated Google group in Cloud Identity. [ 1642]\n2. Add each data analyst's user account to the group. [ 1642]\n3. Assign the BigQuery Job User role to the group. [ 1642]",
  },
  {
    question:
      "The tech company AppVise has developed a platform for connecting businesses with freelance auditors. Your company's management has requested an external auditor to review the resources in a specific project. The security team has implemented the Organization Policy called Domain Restricted Sharing on the organization node, restricting sharing to only users within your company's Cloud Identity domain. You need to ensure that the auditor can only view, but not modify, the resources in that project. What should you do?",
    answer:
      "C. Create a temporary account for the auditor in Cloud Identity, and give that account the Viewer role on the project. [ 1648]",
  },
  {
    question:
      "Your tech startup, AppifyNow, has been building a new app, and last month you noticed the project’s cloud expenses were higher than expected. After investigating, you discovered that one of your development GKE containers generated a large number of logs, leading to the unexpected cost increase. You want to quickly stop these logs with the fewest steps possible. What should you do?\n(Note: Stackdriver is now called 'Google Cloud's Operation Suite')",
    answer:
      "A.\n1. Go to the Logs ingestion window in Stackdriver Logging, and disable the log source for the GKE container resource. [ 1654]",
  },
  {
    question:
      "A food delivery startup, MealDash, has its main website hosted on an App Engine standard environment. The team wants to test a new version of their site with 2% of their users while keeping the system as simple as possible. What should they do?",
    answer:
      "B. Deploy the new version in the same application and use the --splits option to give a weight of 98 to the current version and a weight of 2 to the new version. [ 1661]",
  },
  {
    question:
      "You are managing a photo-sharing platform called SnapGallery, which is deployed using a managed instance group. A new version of your platform is ready to be rolled out gradually, but SnapGallery is currently receiving live traffic from users. You need to make sure that the deployment of the new version doesn’t affect the current capacity of the platform, ensuring no decrease in availability. What should you do?",
    answer:
      "B. Perform a rolling-action start-update with maxSurge set to 1 and maxUnavailable set to 0. [ 1668]",
  },
  {
    question:
      'You are developing a new social media platform called "GlobeConnect" that allows users from all over the world to share and interact with posts in real time. The platform will be used globally, and you are unsure how quickly the user base will grow. Your CTO is concerned about the platform\'s scalability and wants to ensure the database can handle unpredictable growth while requiring minimal configuration changes. Which database solution would best fit these requirements?',
    answer: "B. Cloud Spanner [ 1675]",
  },
  {
    question:
      "The fictional company CloudCab, a ridesharing platform, recently terminated an employee, but their access to CloudCab’s Google Cloud environment wasn’t removed for two weeks. Now, CloudCab's security team needs to determine if this former employee accessed any sensitive customer data during that time. What should they do?",
    answer:
      "C.\n- View Data Access audit logs in Cloud Logging. [ 1683] \n- Search for the user's email as the principal. [ 1683]",
  },
  {
    question:
      "You work for a tech startup known as “TechNova” and you are the organization and billing administrator in their cloud team. The app development team has the Project Creator role for the entire TechNova organization. However, you want to ensure that only the finance department can link projects to the billing account, while the app development team should not have this permission. At the same time, the finance team should only be allowed to manage the billing link without any other control over project settings. How would you set up permissions to achieve this?",
    answer:
      "C. Assign the finance team the Billing Account User role on the billing account and the Project Billing Manager role on the organization. [ 1688]",
  },
  {
    question:
      "You manage an e-commerce platform called CloudCart that runs on Google Kubernetes Engine (GKE) with cluster autoscaling enabled. The platform handles incoming traffic via a TCP endpoint and is designed with several replicated instances. In the same region, you also have a Compute Engine instance in a separate Virtual Private Cloud (VPC) called compute-vpc, which has non-overlapping IP ranges from the VPC where CloudCart is hosted. This Compute Engine instance needs to establish a connection to the CloudCart application running in GKE. You aim to implement a solution with minimal effort. What should you do?",
    answer:
      "C.\n1. In GKE, create a Service of type LoadBalancer that uses the CloudCart application’s Pods as backend. [ 1696]\n2. Add an annotation to this service: cloud.google.com/load-balancer-type: Internal [ 1697]\n3. Peer the two VPCs together. [ 1697]\n4. Configure the Compute Engine instance to use the load balancer's address that has been created. [ 1697]",
  },
  {
    question:
      "You are managing a key application for FotoSnap, a popular photo-sharing platform, hosted on Compute Engine. This app is crucial to the business, and you want to ensure that the data on the boot disk of this app is backed up frequently. In the event of a disaster, you need to restore the backup as quickly as possible. Additionally, to save costs, you want older backups to be cleaned up automatically. You aim to follow the best practices recommended by Google. What should you do?",
    answer:
      "B. Create a snapshot schedule for the disk using the desired interval. [ 1703]",
  },
  {
    question:
      "You are responsible for managing the analytics and monitoring for several projects on GCP for a fictional company called \"ZenApps\", which runs multiple mobile apps. ZenApps wants to explore and analyze all logs from their projects for the past 60 days. Following Google's recommended best practices, how should you aggregate and manage logs across all projects?\n(Note: Stackdriver is now called 'Google Cloud's Operation Suite')",
    answer:
      "B.\n- Create a Stackdriver Logging Export with a Sink destination to a BigQuery dataset. [ 1709] \n- Configure the table expiration to 60 days. [ 1710]",
  },
  {
    question:
      "The engineering department at Orbital Innovations, a company specializing in space-based data analytics, needs to reduce its GCP service costs. You have been tasked with shutting down all active services within one of their existing GCP projects, with the goal of completing this in the fewest number of steps. What should you do?",
    answer:
      "A.\n1. Verify that you are assigned the Project Owner IAM role for this project. [ 1716]\n2. Locate the project in the GCP console, click Shut Down, and then enter the project ID. [ 1716]",
  },
  {
    question:
      'You are managing the infrastructure for a popular fictional travel app, "WanderScape." The app is hosted on a Compute Engine instance within a Virtual Private Cloud (VPC) in the us-central1 region. This instance handles requests related to travel bookings and user profiles. Due to growing demand in Europe, you need to deploy a new Compute Engine instance in the europe-west1 region. This new instance must access the application hosted by the instance in the us-central1 region. You aim to follow Google-recommended best practices to achieve this. What should you do?',
    answer:
      "A.\n1. Create a subnetwork in the same VPC, in europe-west1. [ 1723]\n2. Create the new instance in the new subnetwork and use the first instance's private address as the endpoint. [ 1724]",
  },
  {
    question:
      "You're managing an external review for a fictional company, ByteLens, which develops a photo-sharing application. You need to assign a Cloud Identity and Access Management (Cloud IAM) role to an external auditor. The auditor’s task is to review ByteLens' Google Cloud Platform (GCP) Audit Logs and also examine the Data Access logs to ensure regulatory compliance. What should you do?",
    answer:
      "B.\n- Assign the auditor the IAM role roles/logging.privateLogViewer. [ 1733] \n- Direct the auditor to also review the logs for changes to Cloud IAM policy. [ 1733]",
  },
  {
    question:
      "Your logistics tracking system, TrackFleet, is deployed as a three-tier application on Compute Engine, with the infrastructure depicted below. In the TrackFleet setup, each tier of the application uses a distinct service account for the virtual machines. Communication between these tiers happens over port 8080. You need to adjust the network configuration so that Tier #1 can communicate with Tier #2, and Tier #2 can communicate with Tier #3. What steps should you take?",
    answer:
      "B. Create the following two firewall rules:\n#1: Ingress:\nTarget: All instances with tier#2 service account, [ 1743] \nSource: All instances with tier#1 service account, [ 1744] \nProtocols: TCP 8080 [ 1744] \n#2: Ingress:\nTarget: All instances with tier#3 service account, [ 1745] \nSource: All instances with tier#2 service account, [ 1745] \nProtocols: TCP 8080 [ 1745]",
  },
  {
    question:
      "Your startup, “Flixly,” has accumulated a massive amount of unstructured data, including video files, text documents, and images in various formats. You are planning to run ETL transformations on this data and need to make it accessible on Google Cloud so that it can be processed by a Dataflow job. What should you do?",
    answer:
      "B. Upload the data to Cloud Storage using the gsutil command line tool.",
  },
  {
    question:
      "You are managing several applications for a company called TechFuse, which runs multiple web applications across different Google Cloud projects. To manage these projects effectively using the fewest steps, you need to configure the Google Cloud SDK command line interface (CLI) for easy switching between projects. What should you do?",
    answer:
      "A.\n1. Create a configuration for each project you need to manage. [ 1761]\n2. Activate the appropriate configuration when you work with each of your assigned Google Cloud projects. [ 1762]",
  },
  {
    question:
      "You are working with a Cloud SQL MySQL database for a social networking app called SnapSync. The app’s compliance team requires you to retain a month-end copy of the database for three years for audit purposes. What should you do?",
    answer:
      "B.\n- Save the automatic first-of-the-month backup for three years. [ 1770] \n- Store the backup file in an Archive class Cloud Storage bucket. [ 1770]",
  },
  {
    question:
      "You are managing the backend services for a new mobile app, QuickBuy, which allows users to make instant purchases from various online retailers. Recently, some users have reported an issue where their purchases are failing. After investigating, you discover that the problem stems from a Service Account that lacks the necessary permissions to complete the purchase process. You resolve the issue by updating the Service Account’s permissions. However, you want to ensure that you are alerted if this issue happens again in the future. What should you do?",
    answer:
      "C. Create a custom log-based metric for the specific error to be used in an Alerting Policy.",
  },
  {
    question:
      "You are building a worldwide e-commerce platform that allows users to buy and sell digital products. The data for transactions, users, and inventory is stored and queried using a relational database. Customers from all regions need to see the exact same data state regardless of their location. To improve user experience, the application will be deployed across multiple geographic regions to minimize latency. You must choose a storage solution for your application's data that maintains consistency while also reducing latency.",
    answer: "C. Use Cloud Spanner for data storage. [ 1783]",
  },
  {
    question:
      "Your team manages a project for StreamTrack, a company that specializes in delivering real-time analytics for live events. A data pipeline continuously streams event metrics into BigQuery. The analytics team at StreamTrack needs to run custom SQL queries to analyze the most recent data in BigQuery. How should you enable this?",
    answer:
      "D. Assign the IAM role of BigQuery User to a Google Group that includes all the members of the analytics team. [ 1790]",
  },
  {
    question:
      "A company named RapidInventory is preparing to deploy a new inventory management application on Google Cloud. The application stores its entire dataset in-memory to ensure quick access to data, and the team needs to configure the most suitable Google Cloud resources to support this application. What is the best approach?",
    answer: "D. Provision Compute Engine instances with M1 machine type.",
  },
  {
    question:
      "AcmeData is developing a new app that requires a custom IAM role for one of its Google Cloud services. All permissions in this role must be production-ready, and the company wants to easily communicate the role’s status to the rest of the team. This will be the first version of the custom role. What should AcmeData do?",
    answer:
      "A.\n- Use permissions in the role that has the 'supported' support level for role permissions. [ 1800] \n- Set the role stage to ALPHA while testing the role permissions. [ 1801]",
  },
  {
    question:
      "Your company, QuickFleet, has developed a fleet management web application that runs over HTTPS. You are tasked with setting up an autoscaling managed instance group to support the application's scaling needs. One key requirement is to ensure that unhealthy VMs are automatically identified and replaced to maintain the application's availability. What should you do?",
    answer:
      "A. Create a health check on port 443 and use that when creating the Managed Instance Group.",
  },
  {
    question:
      "You are managing several applications for a logistics tracking platform that runs on different Compute Engine instances within the same project. You need to ensure that each instance uses a specific service account when making calls to Google Cloud APIs. How can you achieve this at a more detailed level?",
    answer:
      "A. When creating the instances, specify a Service Account for each instance.",
  },
  {
    question:
      "You are managing various services in a Kubernetes Engine cluster for a social media platform, PicSnap, which allows users to upload and share images. One of the services in this cluster is responsible for rendering high-resolution images. This image-rendering service requires a significant amount of CPU but relatively low memory, whereas the other services, like user profile management and feed updates, are optimized for general-purpose n2-standard machine types. You want to ensure that the cluster's resources are allocated as efficiently as possible for all services. What should you do?",
    answer:
      "B.\n- Create a node pool with compute-optimized machine type nodes for the image rendering service. [ 1819] \n- Use the node pool with general-purpose machine type nodes for the other services. [ 1819]",
  },
  {
    question:
      "A growing e-commerce platform, ShopMingle, is building a new inventory management system that will run on Google Kubernetes Engine. The team has determined that MongoDB is the ideal database solution for this system and needs to deploy a managed MongoDB environment that comes with a support Service Level Agreement (SLA). What should the team do?",
    answer: "B. Deploy MongoDB Atlas through the Google Cloud Marketplace.",
  },
  {
    question:
      "You are managing a custom-built data processing tool for a local art marketplace platform. This tool processes transaction records in-memory every midnight, and the processing takes about 50 minutes. The size of the transaction records varies between 1 GB and 20 GB. You are now planning to migrate this tool to Google Cloud while aiming for minimal effort and cost. What approach should you take?",
    answer:
      "D.\n- Lift and shift to a VM on Compute Engine. [ 1833] \n- Use an instance schedule to start and stop the instance. [ 1834]",
  },
  {
    question:
      "Your team has just launched a new online marketplace app for a fictional company, ShopNexus, which connects small retailers with customers in local areas. The app is critical to the business, as it handles all transactions and user data. You need to deploy the app on Kubernetes and ensure it operates with maximum reliability. You also want to follow the best practices recommended by Google Cloud for this deployment. What should you do?",
    answer:
      "B.\n- Create a GKE Autopilot cluster. [ 1840] \n- Enroll the cluster in the stable release channel. [ 1840]",
  },
  {
    question:
      "Your startup, CloudCraft Games, is moving its entire game server infrastructure to Compute Engine. Some of the servers need to be accessible over the Internet for player connections, while other servers should only be accessible by internal services for managing game logic. All servers need to communicate with each other over specific ports and protocols. Currently, your on-premises setup uses a demilitarized zone (DMZ) for public-facing servers and a Local Area Network (LAN) for internal-only servers. You need to design the networking setup on Google Cloud to match these requirements. What should you do?",
    answer:
      "A.\n1. Create a single VPC with a subnet for the DMZ and a subnet for the LAN. [ 1847]\n2. Set up firewall rules to allow relevant traffic between the DMZ and LAN subnets, and another firewall rule to allow public ingress traffic for the DMZ. [ 1847]",
  },
  {
    question:
      "Your company, ByteStream Inc., is developing a globally distributed application that requires scalable, high-performance data storage. You have decided to use Cloud Spanner as your database solution. Before you can create a Cloud Spanner instance, you need to complete the initial step in preparation. What should you do first?",
    answer: "A. Enable the Cloud Spanner API.",
  },
  {
    question:
      "You're working for a new startup, SkyLoom, a company that provides AI-powered weather predictions through a mobile app. You've been assigned a Google Cloud project with an attached billing account where you'll be managing virtual machines for computations, setting up firewalls for security, and storing weather data in Cloud Storage. You want to follow Google-recommended practices as you set up the environment. What should you do?",
    answer:
      "B.\n- Use the “gcloud services enable compute.googleapis.com” command to enable Compute Engine. [ 1860] \n- Use the “gcloud services enable storage.googleapis.com” command to enable the Cloud Storage APIs. [ 1860]",
  },
  {
    question:
      "The development team at a startup called SkyTrack has built Docker images for their flight tracking application, which they plan to deploy on Google Cloud. The team prefers to avoid managing the underlying infrastructure and needs to ensure that the application can automatically scale as more users begin to use it. What should the team do?",
    answer:
      "D.\n- Upload Docker images to Artifact Registry [ 1868] \n- Deploy the application on Cloud Run. [ 1869]",
  },
  {
    question:
      'You are migrating a critical order management system for a fictional e-commerce platform called "ShopSwift" from its on-premise servers to Google Cloud. As part of your high-availability strategy, you need to ensure that the data used by the application will be accessible immediately in case of a zonal failure, preventing any downtime for your customers. What should you do?',
    answer:
      "D.\n- Store the application data on a regional persistent disk. [ 1877] \n- If an outage occurs, create an instance in another zone with this disk attached. [ 1877]",
  },
  {
    question:
      "Your creative app, BrightRecipes, which helps users find personalized cooking recipes, has been growing rapidly in popularity. Currently, BrightRecipes is hosted on a single-zone Google Kubernetes Engine (GKE) cluster in the europe-west1 region. You’re preparing to make it available for general use, and you need to ensure that the deployment is highly available and resilient. You also want to align with Google’s recommended practices for production environments. What should you do?",
    answer:
      "B. Use the gcloud container clusters create-auto command to create an autopilot cluster and deploy the application to it.",
  },
  {
    question:
      "You are the CTO of a startup, CloudPix, which specializes in high-resolution image editing. The company is planning to move its on-premises storage solution to Google Cloud. The first task is to migrate 100 TB of image data. Your team estimates that future daily uploads will be within your network's bandwidth limit of 100 Mbps. To optimize costs and follow best practices, you need to decide on the most efficient way to handle this initial data migration. What should you do?",
    answer:
      "B. Obtain a Transfer Appliance, copy the data to it, and ship it to Google.",
  },
  {
    question:
      "You are setting up a platform for a team of data analysts working on a fictional research project. The analysts need to run ad hoc SQL queries on large datasets, though they will only be actively using the platform for around one hour per day. However, they need to have the ability to run queries at any time, so the environment should always be ready. The solution needs to be cost-effective. What approach should you take?",
    answer:
      "B.\n- Store the data in BigQuery. [ 1894] \n- Run SQL queries in BigQuery. [ 1894]",
  },
  {
    question:
      "A company called SnapTask, a platform for managing team projects, has developed an application consisting of several microservices. Each microservice is packaged in its own Docker container image. The company wants to deploy this entire application on Google Kubernetes Engine (GKE), ensuring that each microservice can be scaled independently. What should they do?",
    answer: "D. Create and deploy a Deployment per microservice.",
  },
  {
    question:
      "You are migrating your gaming platform from an in-house data center to Google Kubernetes Engine (GKE). Your main goal is to keep expenses under control while ensuring you stay within your budget. What steps should you take?",
    answer:
      "A. Configure Autopilot in GKE to monitor node utilization and remove idle nodes.",
  },
  {
    question:
      "Your company, ByteWorks Inc., is preparing to launch a new e-commerce platform. The team needs to estimate the cloud infrastructure costs for the upcoming quarter based on known project requirements. Time is of the essence, and you need to generate the estimate as quickly as possible. How should you proceed?",
    answer:
      "C. Use the Google Cloud Pricing Calculator to input your anticipated resource consumption for each category.",
  },
  {
    question:
      "The engineering team at your company, Techie Tools Inc., is responsible for managing all Compute Engine instances in your sandbox environment. However, they should not be allowed to create or modify any other resources in the sandbox project. You want to adhere to Google's best practices for assigning permissions to the engineering team. What should you do?",
    answer:
      "A. Grant the basic role roles/viewer and the predefined role roles/compute.admin to the engineering team.",
  },
  {
    question:
      "Your team is running an on-premises fitness tracking application. The application consists of a set of complex microservices written in Python, with each microservice running in Docker containers. Configurations are injected using environment variables. You need to deploy your current application to a serverless Google Cloud solution. What should you do?",
    answer:
      "A.\n- Use your existing CI/CD pipeline. [ 1924] \n- Use the generated Docker images and deploy them to Cloud Run. [ 1925] \n- Update the configurations and the required endpoints. [ 1925]",
  },
  {
    question:
      "You are configuring service accounts for a new application called QuickRetail that spans multiple projects. Virtual machines (VMs) running in the project quickretail-web need access to BigQuery datasets in the project quickretail-crm-db. You want to follow Google-recommended practices to provide access to the service account in the quickretail-web project. What should you do?",
    answer:
      "D. Assign the “bigquery.dataViewer” role to quickretail-crm-db and appropriate roles to quickretail-web.",
  },
  {
    question:
      "You are managing an online food delivery platform hosted on Compute Engine. You want your support team to be automatically notified if customers experience delays in loading order information for at least 3 minutes. You need a Google-recommended solution that doesn't require additional development costs. What should you do?",
    answer:
      "B. Create an alert policy to send a notification when the HTTP response latency exceeds the specified threshold.",
  },
  {
    question:
      'Your company, SkyCraft Solutions, has launched a new application called "WeatherTrak" that provides real-time weather updates. WeatherTrak is running on a single Compute Engine instance and saves its logs to a local disk. Recently, some users have reported errors when using the app. You need to identify the cause of the problem. What is the best course of action?',
    answer:
      "D. Install and configure the Ops agent and view the logs from Cloud Logging.",
  },
  {
    question:
      "Your team is building the development, test, and production environments for a new mobile app called SnapTrends, which is designed to analyze social media trends in real time on Google Cloud. You need to efficiently deploy and manage these environments while ensuring consistency across them. You also want to follow the best practices recommended by Google Cloud. What should you do?",
    answer:
      "D.\n- Use the Cloud Foundation Toolkit to create one deployment template that will work for all environments [ 1951] \n- Deploy with Terraform. [ 1951]",
  },
  {
    question:
      "Your company, BrightLens Analytics, specializes in advanced video analytics for security systems. You need to deploy a third-party video processing application onto a single Compute Engine VM instance to process real-time security footage. The application has stringent requirements for high-speed disk access to manage its internal database of processed video frames. Additionally, you need to ensure the system can recover seamlessly in case of a failure. What should you do?",
    answer:
      "C.\n- Create an instance template. [ 1958] \n- Set the disk type to be Hyperdisk Extreme. [ 1959] \n- Launch the instance template as part of a stateful managed instance group. [ 1959]",
  },
  {
    question:
      'Imagine a startup called "TechNova Solutions" that is building a task automation app called "AutoTasker." They have a Compute Engine VM instance running in a Virtual Private Cloud (VPC) network with single-stack subnets. AutoTasker’s backend relies on this VM instance, and other internal services hosted in the same VPC need to communicate with it consistently. To ensure seamless communication, they need the VM to have a fixed IP address, following Google’s recommended practices while keeping costs low. What should the TechNova team do?',
    answer:
      "B. Promote the existing IP address of the VM to become a static internal IP address.",
  },
  {
    question:
      "Your company, QuickShift, runs an online marketplace for fast, local deliveries. You've been using Cloud Run for Anthos to manage your microservices architecture successfully. Now, you want to test an updated version of your app by directing a specific percentage of your production users to this new version while continuing to serve the rest with the current one (canary deployment). What steps should you take?",
    answer:
      "B.\n- Create a new revision with the updated version of the app. [ 1480] \n- Split traffic between this version and the current one. [ 1480]",
  },
  {
    question:
      'Your company, "PhotoSnapper," is an online photo-sharing platform that stores large volumes of user-uploaded images in Cloud Storage buckets. An external auditor is now reviewing your organization\'s data usage, focusing specifically on who accessed the stored images in the Cloud Storage buckets. You need to assist the auditor in getting the required access logs. What should you do?',
    answer:
      "A.\n- Turn on Data Access Logs for the buckets they want to audit. [ 1492] \n- Build a query in the log viewer that filters on Cloud Storage. [ 1492]",
  },
  {
    question:
      "You are managing the server fleet for an online video streaming platform, StreamFlix, which runs on Google Cloud. Your application servers are part of a managed instance group (MIG). Recently, you noticed in Cloud Logging that one of the virtual machines (VMs) in the group has a process that is no longer responding. You need to quickly replace this unresponsive VM to ensure seamless service. What should you do?",
    answer:
      "B. Use the “gcloud compute instance-groups managed recreate-instances” command to recreate the VM. [ 1498]",
  },
  {
    question:
      "Your startup, AeroLogix, is using Google Workspace to manage user accounts. Over the next two years, your team is expected to expand 10x as you scale your aviation logistics platform. Many of these new team members will need access to your Google Cloud resources. Your goal is to ensure that the systems and processes in place can handle the tenfold growth smoothly, without impacting performance, adding unnecessary complexity, or introducing security risks. What is the best course of action?",
    answer:
      "C.\n- Enable identity federation between Cloud Identity and Google Workspace [ 1506] \n- Enforce multi-factor authentication for domain-wide delegation. [ 1506]",
  },
  {
    question:
      "Your team at YonderTech has developed a new application that is packaged into a Docker image. You are now ready to deploy this Docker image as a workload on Google Kubernetes Engine for scaling and management. What steps should you take to deploy the application?",
    answer:
      "D. Upload the image to the Artifact Registry and create a Kubernetes Deployment referencing the image. [ 1512]",
  },
  {
    question:
      'You are working for a new app called "BookBox," a platform that helps users track and organize their personal libraries. The platform\'s data warehouse is built on BigQuery. During the day, BookBox appends new data to its warehouse, and each night the daily summary is recalculated by overwriting a specific table. Recently, you noticed that the visualizations in Looker Studio, used for generating insights and reports for BookBox, are broken. You need to investigate the issue and understand the root cause of the problem. What should you do?',
    answer:
      "D. Use the BigQuery interface to review the nightly job and look for any errors. [ 1517]",
  },
  {
    question:
      'Your company, "Techie Tools Inc.," is responsible for managing all Compute Engine instances in your sandbox environment. However, they should not be allowed to create or modify any other resources in the sandbox project. You want to adhere to Google\'s best practices for assigning permissions to the engineering team. What should you do?',
    answer:
      "A. Grant the basic role roles/viewer and the predefined role roles/compute.admin to the engineering team.",
  },
  {
    question:
      "Your team is running an on-premises fitness tracking application. The application consists of a set of complex microservices written in Python, with each microservice running in Docker containers. Configurations are injected using environment variables. You need to deploy your current application to a serverless Google Cloud solution. What should you do?",
    answer:
      "A.\n- Use your existing CI/CD pipeline. [ 1924] \n- Use the generated Docker images and deploy them to Cloud Run. [ 1925] \n- Update the configurations and the required endpoints. [ 1925]",
  },
  {
    question:
      "You are working for a social media startup called ShareNest, which uses Google Cloud services to handle its messaging infrastructure. One of the Pub/Sub topics that manages real-time notifications is being handled by Config Connector, and now you need to permanently delete this topic from your Google Cloud project. What should you do?",
    answer: "B. Use kubectl to delete the topic resource. [ 1522]",
  },
  {
    question:
      "Your company's new e-commerce platform, GearShop, has experienced an issue where the managed instance group has triggered an alert indicating that new instance creation has failed. You need to resolve this instance creation failure to ensure smooth scaling and availability for the website. What action should you take?",
    answer:
      "A.\n- Create an instance template with valid syntax that will be used by the managed instance group. [ 1527] \n- Delete any persistent disks that share the same name as instance names. [ 1527]",
  },
  {
    question:
      "Your company, DigitalFlare, runs several cloud services across different Google Cloud projects, each associated with unique billing accounts. To optimize your budget planning, you aim to consolidate all cost information into a single visual dashboard. You also want the data to update quickly with the most recent billing information. What approach should you take?",
    answer:
      "D. Set up Billing Data Export to BigQuery and use Looker Studio to visualize the data. [ 1537]",
  },
  {
    question:
      "A popular video streaming platform, ShowFlix, processes a large batch workload every night to analyze user data and improve recommendations. The task requires a significant number of virtual machines (VMs) to handle the computations. Since the process is fault-tolerant, ShowFlix can afford to have a few VMs shut down without affecting the outcome. However, the current cost of running these VMs is too high, and the company wants to reduce it. What should they do?",
    answer:
      "A.\n- Run a test using simulated maintenance events. [ 1542] \n- If the test is successful, use Spot N2 Standard VMs when running future jobs. [ 1542]",
  },
  {
    question:
      "You are working for a new telemedicine startup that provides a platform for doctors to upload patient scans from their local servers. Currently, the scans are stored in an on-premises server. The company wants to move towards using Cloud Storage for long-term storage of these scans. They also need an automated solution to ensure that any new scans are uploaded to Cloud Storage without manual intervention. You are tasked with designing and implementing this solution. What should you do?",
    answer:
      "C.\n- Write a script that uses the gsutil command line tool to synchronize the on-premises storage with Cloud Storage. [ 1551] \n- Schedule this script to run as a cron job. [ 1552]",
  },
  {
    question:
      "Your company is migrating its e-commerce order tracking system to Google Cloud. The compliance team needs to access the data and generate reports in BigQuery, but they must not be allowed to modify or process any orders within the system. As the project lead for the migration, you need to choose the simplest solution with minimal maintenance. What should you do?",
    answer:
      "C. Create a group for the compliance team, and assign roles/bigquery.dataViewer to them. [ 1557]",
  },
  {
    question:
      'Your company, "TechNova Solutions," is building a new application called "AutoTasker." They have a Compute Engine VM instance running in a Virtual Private Cloud (VPC) network with single-stack subnets. AutoTasker’s backend relies on this VM instance, and other internal services hosted in the same VPC need to communicate with it consistently. To ensure seamless communication, they need the VM to have a fixed IP address, following Google’s recommended practices while keeping costs low. What should the TechNova team do?',
    answer:
      "B. Promote the existing IP address of the VM to become a static internal IP address.",
  },
  {
    question:
      "You are developing an application called FreshFiles, which allows vendors to upload inventory and pricing files for a marketplace. The primary goals for FreshFiles are to ensure data security by allowing each vendor to access only their own files, to limit file upload access to a 30-minute window, and to automatically delete files that are over 50 days old. Given a tight development timeline, the solution should be low-maintenance and efficient. Which two strategies would best achieve this? (Choose two.)",
    answer:
      "A. Build a lifecycle policy to delete Cloud Storage objects after 50 days. [ 1247]\nB. Use signed URLs to allow vendors limited-time access for uploading their files. [ 1248]",
  },
  {
    question:
      "You are managing an online marketplace platform that uses Cloud Storage for storing user-uploaded product images and Firestore to store product listings and customer data. You are responsible for monitoring all changes in both the product images and listings. For each change, you need to invoke a verification action that ensures compliance of the new data in near real-time. You want to implement this with minimal configuration. What should you do?",
    answer:
      "B. Use Cloud Function events, and call the compliance script from the Cloud Function triggers.",
  },
  {
    question:
      "Your company, DataFlow Ventures, manages an online education platform that uses BigQuery for analyzing student engagement data. The team of data analysts working on this project frequently changes, and it’s often quite small. You need to allow these analysts to perform queries on BigQuery while following Google-recommended practices for managing access efficiently. What should you do?",
    answer:
      "C.\n1. Create a dedicated Google group in Cloud Identity. [ 1642]\n2. Add each data analyst's user account to the group. [ 1642]\n3. Assign the BigQuery Job User role to the group. [ 1642]",
  },
  {
    question:
      "The tech company AppVise has developed a platform for connecting businesses with freelance auditors. Your company's management has requested an external auditor to review the resources in a specific project. The security team has implemented the Organization Policy called Domain Restricted Sharing on the organization node, restricting sharing to only users within your company's Cloud Identity domain. You need to ensure that the auditor can only view, but not modify, the resources in that project. What should you do?",
    answer:
      "C. Create a temporary account for the auditor in Cloud Identity, and give that account the Viewer role on the project. [ 1648]",
  },
  {
    question:
      "Your tech startup, AppifyNow, has been building a new app, and last month you noticed the project’s cloud expenses were higher than expected. After investigating, you discovered that one of your development GKE containers generated a large number of logs, leading to the unexpected cost increase. You want to quickly stop these logs with the fewest steps possible. What should you do?",
    answer:
      "A.\n1. Go to the Logs ingestion window in Stackdriver Logging, and disable the log source for the GKE container resource. [ 1654]",
  },
  {
    question:
      "A food delivery startup, MealDash, has its main website hosted on an App Engine standard environment. The team wants to test a new version of their site with 2% of their users while keeping the system as simple as possible. What should you do?",
    answer:
      "B. Deploy the new version in the same application and use the --splits option to give a weight of 98 to the current version and a weight of 2 to the new version. [ 1661]",
  },
  {
    question:
      "You are managing a photo-sharing platform called SnapGallery, which is deployed using a managed instance group. A new version of your platform is ready to be rolled out gradually, but SnapGallery is currently receiving live traffic from users. You need to make sure that the deployment of the new version doesn’t affect the current capacity of the platform, ensuring no decrease in availability. What should you do?",
    answer:
      "B. Perform a rolling-action start-update with maxSurge set to 1 and maxUnavailable set to 0. [ 1668]",
  },
  {
    question:
      'You are developing a new social media platform called "GlobeConnect" that allows users from all over the world to share and interact with posts in real time. The platform will be used globally, and you are unsure how quickly the user base will grow. Your CTO is concerned about the platform\'s scalability and wants to ensure the database can handle unpredictable growth while requiring minimal configuration changes. Which database solution would best fit these requirements?',
    answer: "B. Cloud Spanner [ 1675]",
  },
  {
    question:
      "The fictional company CloudCab, a ridesharing platform, recently terminated an employee, but their access to CloudCab’s Google Cloud environment wasn’t removed for two weeks. Now, CloudCab's security team needs to determine if this former employee accessed any sensitive customer data during that time. What should they do?",
    answer:
      "C.\n- View Data Access audit logs in Cloud Logging. [ 1683] \n- Search for the user's email as the principal. [ 1683]",
  },
  {
    question:
      "You work for a tech startup known as “TechNova” and you are the organization and billing administrator in their cloud team. The app development team has the Project Creator role for the entire TechNova organization. However, you want to ensure that only the finance department can link projects to the billing account, while the app development team should not have this permission. At the same time, the finance team should only be allowed to manage the billing link without any other control over project settings. How would you set up permissions to achieve this?",
    answer:
      "C. Assign the finance team the Billing Account User role on the billing account and the Project Billing Manager role on the organization. [ 1688]",
  },
  {
    question:
      "You manage an e-commerce platform called CloudCart that runs on Google Kubernetes Engine (GKE) with cluster autoscaling enabled. The platform handles incoming traffic via a TCP endpoint and is designed with several replicated instances. In the same region, you also have a Compute Engine instance in a separate Virtual Private Cloud (VPC) called compute-vpc, which has non-overlapping IP ranges from the VPC where CloudCart is hosted. This Compute Engine instance needs to establish a connection to the CloudCart application running in GKE. You aim to implement a solution with minimal effort. What should you do?",
    answer:
      "C.\n1. In GKE, create a Service of type LoadBalancer that uses the CloudCart application’s Pods as backend. [ 1696]\n2. Add an annotation to this service: cloud.google.com/load-balancer-type: Internal [ 1697]\n3. Peer the two VPCs together. [ 1697]\n4. Configure the Compute Engine instance to use the load balancer's address that has been created. [ 1697]",
  },
  {
    question:
      "You are managing a key application for FotoSnap, a popular photo-sharing platform, hosted on Compute Engine. This app is crucial to the business, and you want to ensure that the data on the boot disk of this app is backed up frequently. In the event of a disaster, you need to restore the backup as quickly as possible. Additionally, to save costs, you want older backups to be cleaned up automatically. You aim to follow the best practices recommended by Google. What should you do?",
    answer:
      "B. Create a snapshot schedule for the disk using the desired interval. [ 1703]",
  },
];

const flashcard = document.getElementById("flashcard");
const questionEl = document.getElementById("question");
const answerEl = document.getElementById("answer");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const cardCounter = document.getElementById("cardCounter");

let currentCard = 0;

function showCard() {
  if (flashcards.length > 0) {
    questionEl.textContent = flashcards[currentCard].question;
    answerEl.textContent = flashcards[currentCard].answer;
    cardCounter.textContent = `${currentCard + 1} / ${flashcards.length}`;
    flashcard.classList.remove("flipped");
  }
  updateNavButtons();
}

function updateNavButtons() {
  if (flashcards.length > 0) {
    prevBtn.disabled = currentCard === 0;
    nextBtn.disabled = currentCard === flashcards.length - 1;
  } else {
    prevBtn.disabled = true;
    nextBtn.disabled = true;
  }
}

flashcard.addEventListener("click", () => {
  flashcard.classList.toggle("flipped");
});

prevBtn.addEventListener("click", () => {
  if (currentCard > 0) {
    currentCard--;
    showCard();
  }
});

nextBtn.addEventListener("click", () => {
  if (currentCard < flashcards.length - 1) {
    currentCard++;
    showCard();
  }
});

// Initial load
showCard();
