# Questions and answers
## 1. Number of Openshift deployments
1. What environments are you planning to run Openshift in?
   - Development
   - Testing
   - Staging
   - Production
2. Are your environments physically segregated today? Are your environments running in different VM management systems?
   - Yes
   - No
## 2. Determine the number of applications/pods
3. How many application instances do you anticipate deploying in each environment?
   - Free number per environment
   - E.g. 250 in production, 1250 in development
4. What type of applications are they (Language, Framework, DB, etc.)
Allow multiple choice with any number. A load factor on each should be applied
   - Languages
     - Java
     - Ruby
     - Python
     - PHP
     - JavaScript
     - Scala
     - C/C++
     - C#
     - .NET
     - Golang
     - R
   - Databases
     - MongoDB
     - MySQL
     - MariaDB
     - Cassandra
     - ...
   - Frameworks or Applications
     - Elasticsearch
     - Wordpress
     - JBoss Decision server
     - ...
## 3. Determine the total memory footprint
5. What is the maximum memory footprint on all of the previous choices. E.g. Java: 2GB
## 4. Account for overhead
6. Is there any additional software you will need to run on each of the nodes?
   6.1. What is the estimated overhead for this software?
## 5. VM or Hardware size
Consider mixed deployments

7. Are you going to use VM?

   7.1. Which virtualization solution would you use?
   - Cloudforms
   - AWS
   - GCP
   - VMWare

   7.2. For how many nodes?
   
   7.3. What is the memory of the VM you will use for nodes?
   
   7.4. What is the number of vCPUs you will use for nodes?
   
   
8. Are you going to use Physical machines?

   8.1. For how many nodes?

   8.2. What is the memory of the physical hardware you will use for nodes?

   8.3. How many sockets do your physical servers have?
