@REM call npm install
call npm run build
docker build -t tspui:latest   -f Dockerfile . 
docker tag tspui:latest registry.allingroup.ir:5044/tspui:3.04.19
docker push registry.allingroup.ir:5044/tspui:3.04.19