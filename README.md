In GitHub Actions, when you enclose values in square brackets [], it means you're listing multiple items (an array). When you don’t use brackets, it’s a shorthand for a single value.

✅ Examples:
Without brackets (shorthand for one item)
branches: - main = branches: [main]


With brackets (array of multiple branches)

branches: [main, dev, staging]
This means the workflow will trigger on any of those three branches.

### In your Deployment YAML, you define ports inside the container specification

- containerPort: 3000
This specifies the port inside the pod’s container where the application is listening for incoming traffic. In this case, the application runs on port 3000.

In your Service YAML, the ports configuration looks like this:

- protocol: TCP
    port: 80
    targetPort: 3000

protocol: Defines the network protocol used

port: This is the port exposed by the Service. It is the port that external clients.

targetPort: This is the port on the container where the traffic should be forwarded. Here, traffic arriving at port 80 on the service is redirected to port 3000 inside the container


................................

backend dockerfile

.....the selector name for both service and deployment must be the same

## image building
docker build -t frontend-local:v1 .
docker run -p 3000:3000 frontend-local:v1 --- to run locally


## setting up cloud
az group create --name depaul --location eastus
az acr create --resource-group depaul --name depaulacr --sku Basic

## build and push 
az acr login --name depaulacr
docker build -t depaulacr.azurecr.io/backend:v1 .
docker push depaulacr.azurecr.io/backend:v1

## deploy to aks
az aks create --resource-group depaul --name depaulCluster --node-count 2 --node-vm-size Standard_A2_v2 --enable-addons monitoring --generate-ssh-keys --attach-acr depaulacr


## connect to aks
az aks get-credentials --resource-group depaul --name depaulCluster
kubectl get nodes


## Apply kubernetes manifest
kubectl apply -f deployment.yaml
kubectl apply -f service.yaml

# verify access
kubectl get pods
kubectl get services
kubectl logs <pod-name> 
