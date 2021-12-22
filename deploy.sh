#!/bin/bash
# Instalar o MySql - Server: seguir os passos do tutorial: https://www.hostinger.com/tutorials/how-to-install-mysql-on-centos-7
sudo yum update
sudo yum install nginx
sudo rpm -Uvh https://packages.microsoft.com/config/centos/7/packages-microsoft-prod.rpm  # add the Microsoft package signing key to your list of trusted keys
sudo yum install dotnet-sdk-3.1  # install .net sdk
# descompactar o código-fonte
cd cipa-algar-master

# Atualizar as seguinte informações entre colchetes no arquivo "1 - WebApi/Cipa.WebApi/appsettings.json":
<<COMMENT
  "ConnectionStrings": {
    "MySqlConnection": "[string de conexão: Server=localhost;DataBase=cipa;Uid=root;Pwd=root;SslMode=None;]"
  },
  "LDAP": {
    "Path": "[servidor LDAP: LDAP://dc=domain,dc=com,dc=br]",
    "Domain": "[Domínio: domain.com.br]"
  },
  ...
  "Email": {
    "Host": "[servidor smtp: smtp-web.kinghost.net]",
    "Port": 25,
    "EnabledSSL": false,
    "UseDefaultCredentials": false,
    "UserName": "[usuário de email: cipa@domain.com]",
    "Password": "[senha do usuário de email: senha]"
  },
COMMENT

# Se houver backup
current_time=$(date "+%Y.%m.%d-%H.%M")
backup=/var/tmp/cipa-$current_time
mkdir $backup
cp -R /var/www/cipa/* $backup


cd "1 - WebApi/Cipa.WebApi"
sudo /usr/bin/dotnet publish --configuration Release -o /var/www/cipa # publica a aplicação

# Se for a primeira publicação, excute os comandos abaixo
sudo mkidr -p /var/www/cipa/Assets/documentos
sudo mkidr -p /var/www/cipa/Assets/documentos/documentocronograma
sudo mkidr -p /var/www/cipa/Assets/documentos/importacao
sudo mkidr -p /var/www/cipa/Assets/fotos
sudo mkidr -p /var/www/cipa/Assets/relatorios

# Se não for a primeira publicação e houver backup
sudo cp -R $backup/Assets/* /var/www/cipa/Assets

sudo chmod -R 777 /var/www/cipa/Assets # atualiza permissões de acesso ao diretório de arquivos estáticos
sudo touch /etc/systemd/system/cipa.service # cria o arquivo de definição de serviço

# Atualizar o arquivo /etc/systemd/system/cipa.service com o conteúdo abaixo, substituindo [user] pelo usuário do serviço
# (que deve ter acesso permissão de acesso ao diretório /var/www/cipa - para conceder a permissão: sudo chown -R user /var/www/cipa):
<<COMMENT
[Unit]
Description=Servico da CIPA
 
[Service]
WorkingDirectory=/var/www/cipa
ExecStart=/usr/bin/dotnet /var/www/cipa/Cipa.WebApi.dll
Restart=always
# Restart service after 10 seconds if the dotnet service crashes:
RestartSec=10
KillSignal=SIGINT
SyslogIdentifier=cipa
User=[user]
Environment=ASPNETCORE_ENVIRONMENT=Production
Environment=DOTNET_PRINT_TELEMETRY_MESSAGE=false
 
# How many seconds to wait for the app to shut down after it receives the initial interrupt signal. 
# If the app doesn't shut down in this period, SIGKILL is issued to terminate the app. 
# The default timeout for most distributions is 90 seconds.
TimeoutStopSec=90
 
[Install]
WantedBy=multi-user.target
COMMENT

sudo systemctl enable cipa.service # habilita inicialização automática
sudo systemctl start cipa

# Atualizar a seção "server" do arquivo /etc/nginx/nginx.conf de acordo com as informações abaixo,
# substituindo [cipa.domain.com.br] pelo endereço DNS da aplicação:
<<COMMENT
    server {
        listen       80;
        listen       [::]:80;
        server_name  [cipa.domain.com.br];

        location / {
            root         /var/www/cipa/wwwroot/;
            index        index.html;
            try_files $uri $uri/ /index.html;
        }

        location /api/ {
            proxy_pass         http://localhost:5000;
            proxy_http_version 1.1;
            proxy_set_header   Upgrade $http_upgrade;
            proxy_set_header   Connection keep-alive;
            proxy_set_header   Host $host;
            proxy_cache_bypass $http_upgrade;
            proxy_set_header   X-Forwarded-For $proxy_add_x_forwarded_for;
            proxy_set_header   X-Forwarded-Proto $scheme;
        }
    } 
COMMENT

sudo systemctl restart nginx
