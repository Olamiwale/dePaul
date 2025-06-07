## Microservice with different workflows

This is a microservice service app with multiple github action workflow. In this application each section of the app has it own workflow file


# Steps

## Setting up cloud
az group create --name depaul --location eastus
az acr create --resource-group depaul --name depaulacr --sku Basic


## Deploy to AKS
az aks create --resource-group depaul --name depaulCluster --node-count 2 --node-vm-size Standard_A2_v2 --enable-addons monitoring --generate-ssh-keys --attach-acr depaulacr


## Connect to AKS
  
## connect to aks
az aks get-credentials --resource-group depaul --name depaulCluster


# Verify Access
kubectl get pods
kubectl get services
kubectl logs <pod-name> 


kubectl get nodes

## to get azure subscription
az account show --query id --output tsv

## Azure credentials

az ad sp create-for-rbac --name "my-azure-pipeline-sp" --role contributor --scopes /subscriptions/########-####-####-####-############ --sdk-auth
