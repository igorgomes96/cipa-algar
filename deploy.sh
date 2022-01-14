#!/bin/bash

echo "Diretorio de backup: "
read backup
mkdir -p $backup
cp -R /var/www/cipa/* $backup

systemctl stop cipa
cd "1 - WebApi/Cipa.WebApi"
sudo /usr/bin/dotnet publish --configuration Release -o /var/www/cipa
echo $backup > /var/www/cipa/last-publish.txt

systemctl start cipa
systemctl restart nginx