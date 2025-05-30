
# Steps involve in building this app

1. This step packages the application into a Docker image to ensure consistency across different environments
   docker build -t frontend:latest .

2. We started the container locally to test if the application runs correctly inside Docker before pushing it.
   docker run -d -p 3000:3000 frontend:latest

3. Push Image: This step allows us to store the image in a Docker registry machines or cloud services.
   docker tag frontend:latest docker-username/image:latest  
   docker push docker-username/image:latest

4. We created a Kubernetes deployment to manage multiple instances of our application, ensuring scalability and resilience.
   kubectl apply -f deployment.yaml
   - To verify if pods are running correctly and see if any failures occurred.

     kubectl get pods
     kubectl describe svc frontend-service
     kubectl get svc frontend-service
     kubectl get pods --show-labels