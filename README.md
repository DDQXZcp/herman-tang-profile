# Herman Tang Personal Website

<p align="center">
    <img src ="./src/assets/website-capture-screen.png" />
    <a href="https://www.herman-tang.com" target= "_blank">[Website Link]</a>
</p>

## Cloud Deployment
This static website is hosted on AWS. Centrally managing and versioning resources with [Cloudformation Template](./react-cors-spa-stack-v2.yaml) IaC.
<p align="center">
<img src ="./src/assets/AWS-Architecture.png" style="width: 100%;"/>
</p>

### Hosting Static Website
- Cloudfront (Global Caching)
- S3 (Host Static Website)
- Route 53 (Public Domain Registration)
- ACM (TLS/SSL Certificate Management)
### IoT Visualization
- API Gateway (Handle WebSocket Connection)
- Lambda (Handle WebSocket Request)
- DynamoDB (Store User Session Info)
- IoT Core (MQTT Broker)

## Sections Included
- Personal Profile
- Realtime IoT Visualization Demo

## Front End
- React
- Typescript
- Styled Components
 
## Manually Run
- yarn install
- yarn run start

## Manually Build
- yarn build start

## CI/CD Workflow
The code will trigger the workflow to build and deploy this static website to my AWS S3 bucket. My AWS credentials are hidden in Github repository secrets.
- [.github/workflows/deploy.yml](.github/workflows/deploy.yml)