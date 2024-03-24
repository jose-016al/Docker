#!/bin/bash
sudo systemctl start docker
docker start server
docker exec -u user -it server /bin/bash