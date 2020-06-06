---
title: Test Environment Manager
year: '2019'
date: 2019-12-10T17:56:23.645Z
description: >-
  A web application for the management of Linode and AWS EC2 instances, using a
  serverless architecture based on React and AWS Lambda.
projectUrl: 'http://env.optiim.com:8090/'
repositoryUrl: 'https://gitlab.com/'
type: infra
featuredImage: /img/test-env-man-3.png
---
The concept behind Test Environment Manager was to reduce cost of hosting demo and test environments within Continuous Software Ltd. Sales and consultant teams required instances for hosting client instances of aangine and also for demo purposes, but these came at a cost.

The idea was to use a lightweight application to enable the spin up and shutting down of Linode and EC2 instances. Therefore, it was decided to use a serverless approach, using AWS Lambda in conjunction with AWS API Gateway.

![AWS serverless](/img/test-env-man-1.jpeg "AWS Serverless")

AWS Lambda create functions, self-contained applications written in one of the supported languages and runtimes, and upload them to AWS Lambda, which executes those functions in an efficient and flexible manner.

The Lambda functions can perform any kind of computing task, from serving web pages and processing streams of data to calling APIs and integrating with other AWS services. In this case, there were two Lambda functions based on Node:

1. A function to gather all Linode and EC2 instance details, such as id, DNS, status, platform, etc., in order to populate a table on the front end, and

2. A function which would process a request to either spin up or shutdown an instance

And that's it! The application also used Google authentication to manage user access and ag-grid for tabulating data.