## Microservice with different workflows

This is a microservice service app with multiple github action workflow. In this application each section of the app has it own workflow file


# Steps

## Setting up cloud
az group create --name briitz --location eastus
az acr create --resource-group briitz --name briitzacr --sku Basic


## Deploy to AKS
az aks create --resource-group briitz --name briitzCluster --node-count 2 --node-vm-size Standard_A2_v2 --enable-addons monitoring --generate-ssh-keys --attach-acr briitzacr


## Connect to AKS
  
## connect to aks

az aks get-credentials --resource-group briitz --name briitzCluster


# Verify Access
kubectl get pods
kubectl get services
kubectl logs <pod-name> 


kubectl get nodes

## to get azure subscription
az account show --query id --output tsv

## Azure credentials

az ad sp create-for-rbac --name "my-azure-pipeline-sp" --role contributor --scopes /subscriptions/########-####-####-####-############ --sdk-auth


## commands


az aks list --query "[].{Name:name, ResourceGroup:RgN}" --output table

kubectl config delete-context depaulCluster

az group delete --name depaul --yes --no-wait

az acr repository delete --name depaulacr --repository backend --yes
az acr repository update --name depaulacr --repository backend --set retentionPolicy.days=30






