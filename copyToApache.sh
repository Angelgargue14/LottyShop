#!/bin/bash
LOG='log/copyToApache.log'
rm ${LOG}
function copiar(){
echo ""
echo "Copiando en $(date)"
cp -prv /home/angelgg94/LottyShop/* /var/www/html
}

copiar | tee -a ${LOG}
