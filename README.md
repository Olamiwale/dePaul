## Microservice with different workflows

This is a microservice service app with multiple github action workflow. In this application each section of the app has it own workflow file


# Steps

## Setting up cloud
az group create --name depaul --location eastus
az acr create --resource-group depaul --name depaulacr --sku Basic

## Build and Push 
az acr login --name depaulacr
docker build -t depaulacr.azurecr.io/backend:v1 .
docker push depaulacr.azurecr.io/backend:v1

## Deploy to AKS
az aks create --resource-group depaul --name depaulCluster --node-count 2 --node-vm-size Standard_A2_v2 --enable-addons monitoring --generate-ssh-keys --attach-acr depaulacr


## Connect to AKS
az aks get-credentials --resource-group depaul --name depaulCluster
kubectl get nodes


## Apply kubernetes manifest
kubectl apply -f deployment.yaml
kubectl apply -f service.yaml

# Verify Access
kubectl get pods
kubectl get services
kubectl logs <pod-name> 
