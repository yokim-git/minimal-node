#!/bin/bash

echo 'start ./start.sh'

sudo rm -rf /root/CICD-TEST/*
sudo cp -rf /home/DeployTemp/* /root/CICD-TEST/

sudo service nginx restart
sudo service node_server restart
