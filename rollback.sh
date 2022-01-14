directory=`cat /var/www/cipa/last-publish.txt`
if  [ ! -z "$directory" ]
then
    systemctl stop cipa
    rm -rf /var/www/cipa/*
    cp -R $directory/* /var/www/cipa/
    systemctl start cipa
    systemctl restart nginx
fi