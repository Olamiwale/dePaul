
# CI/CD Deployment of a Node.js App on Azure Kubernetes Service (AKS)

This project shows a full journey of deploying an Node.js application (backend and frontend) on azure kubernetes service (AKS) with CI/CD automation using GitHub Actions. 

## Steps

## 🧱 1. Setting up Azure Infrastructure

We begin by setting up the resource group, Azure Container Registry (ACR), and AKS cluster:

Create a Resource Group

```bash
az group create --name my-resource-group --location eastus

```

Create Azure Container Registry

```bash
az acr create --resource-group my-resource-group --name my-acr --sku Basic
```

Login to ACR

```bash
az acr login --name my-acr
```

Create AKS Cluster

```bash
az aks create --resource-group my-resource-group --name my-cluster --node-count 2 --node-vm-size Standard_A2_v2 --enable-addons monitoring --generate-ssh-keys --attach-acr my-acr
```

Connect kubectl to AKS

```bash
az aks get-credentials --resource-group my-resource-group --name briitzcluster
```

Confirm node status
```bash
kubectl get nodes

```

## 🔁 2. Automating with GitHub Actions (CI/CD)

Check the Github repository for the full build-up of the CI/CD automation for both backend and frontend

Confirming node, pods, deployment and service status
![Backend Architecture](./image/image1.png)

Accessing external port from the azure portal
![Backend Architecture](./image/image2.png)
