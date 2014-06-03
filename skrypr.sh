#!/bin/bash
while [ 1 ]; do
        wget http://marketools.plus500.com/Feeds/UpdateTable?instsIds=56,55,2,100,27,5,177,305 -O waluty.json
        sleep 10
done
